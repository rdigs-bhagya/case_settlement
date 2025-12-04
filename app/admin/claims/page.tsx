"use client"

import { useEffect, useState } from "react"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button as MUIButton,
} from "@mui/material"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Eye, Trash2, Download } from "lucide-react"
import { ClaimDetailModal } from "@/components/claim-detail-modal"

interface QuestionAnswer {
  question: string
  answer: string | string[]
}

interface Claim {
  _id?: string
  service: string
  firstName: string
  lastName: string
  email: string
  phone: string
  serviceAnswers?: QuestionAnswer[]
  lawyerInfo?: string
  consent?: boolean
  consentText?: string
  createdAt?: string
}

export default function ClaimsPage() {
  const [claims, setClaims] = useState<Claim[]>([])
  const [filteredClaims, setFilteredClaims] = useState<Claim[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedClaim, setSelectedClaim] = useState<Claim | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage, setRecordsPerPage] = useState(10)
  const [deleting, setDeleting] = useState<string | null>(null)

  const [openDialog, setOpenDialog] = useState(false)
  const [claimToDelete, setClaimToDelete] = useState<Claim | null>(null)

  // PDF bulk options
  const [latestCount, setLatestCount] = useState<number>(10)
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  useEffect(() => {
    const fetchClaims = async () => {
      try {
        const response = await fetch("https://case-9w55.onrender.com/claims")
        const data = await response.json()

        let claimsList: Claim[] = []
        if (Array.isArray(data)) claimsList = data
        else if (data?.data && Array.isArray(data.data)) claimsList = data.data
        else if (data?.claims && Array.isArray(data.claims)) claimsList = data.claims

        setClaims(claimsList.reverse())
        setFilteredClaims(claimsList.reverse())
      } catch (err) {
        console.error("Error fetching claims:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchClaims()
  }, [])

  // Search filter
  useEffect(() => {
    const filtered = claims.filter(
      (claim) =>
        claim.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        claim.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        claim.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        claim.service.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredClaims(filtered)
    setCurrentPage(1)
  }, [searchTerm, claims])

  // Pagination
  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
  const currentRecords = filteredClaims.slice(indexOfFirstRecord, indexOfLastRecord)
  const totalPages = Math.ceil(filteredClaims.length / recordsPerPage)

  // Delete flow
  const handleOpenDeleteDialog = (claim: Claim) => {
    setClaimToDelete(claim)
    setOpenDialog(true)
  }
  const handleCloseDialog = () => {
    setOpenDialog(false)
    setClaimToDelete(null)
  }
  const handleConfirmDelete = async () => {
    if (!claimToDelete?._id) return
    const id = claimToDelete._id
    setDeleting(id)

    try {
      const response = await fetch(`https://case-9w55.onrender.com/claims/${id}`, { method: "DELETE" })
      if (response.ok) {
        setClaims((prev) => prev.filter((c) => c._id !== id))
        setFilteredClaims((prev) => prev.filter((c) => c._id !== id))
      }
    } catch (err) {
      console.error("Error deleting claim:", err)
    } finally {
      setDeleting(null)
      handleCloseDialog()
    }
  }

  // ------------------------
  // PDF Helpers
  // ------------------------
  // -------------------------
  // Single Claim PDF
  // -------------------------
  async function downloadSinglePDF(claim: Claim & { clientDetails?: any }) {
    try {
      const jsPDF = (await import("jspdf")).default
      const doc = new jsPDF()
      let y = 20

      // Header
      doc.setFont("helvetica", "bold")
      doc.setFontSize(18)
      doc.text("Claim Details", 10, y)
      y += 12

      doc.setDrawColor(200)
      doc.setLineWidth(0.5)
      doc.line(10, y, 200, y)
      y += 10

      const addLine = (label: string, value: any) => {
        doc.setFont("helvetica", "normal")
        doc.setFontSize(11)
        const text = `${label}: ${value ?? "N/A"}`
        const wrapped = doc.splitTextToSize(text, 180)
        doc.text(wrapped, 10, y)
        y += wrapped.length * 6 + 2
      }

      // Personal Info
      addLine("First Name", claim.firstName)
      addLine("Last Name", claim.lastName)
      addLine("Email", claim.email)
      addLine("Phone", claim.phone)
      addLine("Service", claim.service)
      addLine("Consent", claim.consent ? "Yes" : "No")
       addLine("Consent Text", claim.consentText)
      addLine("Lawyer Info", claim.lawyerInfo || "N/A")

      // Service Answers
      if (claim.serviceAnswers?.length) {
        y += 4
        doc.setFont("helvetica", "bold")
        doc.setFontSize(13)
        doc.text("Service Answers", 10, y)
        y += 6
        claim.serviceAnswers.forEach((qa, i) => {
          addLine(`Q${i + 1}: ${qa.question}`, qa.answer)
        })
      }

      // Client Details
      if (claim.clientDetails) {
        const cd = claim.clientDetails
        y += 6
        doc.setFont("helvetica", "bold")
        doc.setFontSize(13)
        doc.text("Client Details", 10, y)
        y += 6

        addLine("IP Address", cd.ipAddress)
        addLine("Browser", cd.browser)
        addLine("OS", cd.os)
        addLine("Device", cd.device)

        if (cd.location) {
          y += 2
          doc.setFont("helvetica", "bold")
          doc.setFontSize(12)
          doc.text("Location", 12, y)
          y += 5
          addLine("Country", cd.location.country)
          addLine("Region", cd.location.region)
          addLine("City", cd.location.city)
          addLine("Timezone", cd.location.timezone)
          addLine("Coordinates", cd.location.ll ? cd.location.ll.join(", ") : "N/A")
        }
      }

      // Submission date
      if (claim.createdAt) {
        y += 4
        addLine("Submitted At", new Date(claim.createdAt).toLocaleString())
      }

      doc.save(`Claim-${claim.firstName || "NA"}-${claim.lastName || "NA"}.pdf`)
    } catch (err) {
      console.error("Error generating PDF", err)
      alert("Failed to create PDF")
    }
  }

  // -------------------------
  // Bulk Claims PDF
  // -------------------------
  async function downloadBulkPDF(list: (Claim & { clientDetails?: any })[], filename = "Claims-Report.pdf") {
    try {
      const jsPDF = (await import("jspdf")).default
      const doc = new jsPDF()
      let y = 20
      let pageNumber = 1

      const newPage = () => {
        doc.addPage()
        y = 20
        pageNumber++
      }

      const addLine = (label: string, value: any) => {
        doc.setFont("helvetica", "normal")
        doc.setFontSize(11)
        const text = `${label}: ${value ?? "N/A"}`
        const wrapped = doc.splitTextToSize(text, 180)
        if (y + wrapped.length * 6 > 280) newPage()
        doc.text(wrapped, 10, y)
        y += wrapped.length * 6 + 2
      }

      doc.setFont("helvetica", "bold")
      doc.setFontSize(16)
      doc.text("Claims Report", 10, y)
      y += 12
      doc.setDrawColor(200)
      doc.setLineWidth(0.5)
      doc.line(10, y, 200, y)
      y += 10

      list.forEach((claim, index) => {
        if (y > 260) newPage()

        doc.setFont("helvetica", "bold")
        doc.setFontSize(13)
        doc.text(`Claim ${index + 1}`, 10, y)
        y += 8

        addLine("First Name", claim.firstName)
        addLine("Last Name", claim.lastName)
        addLine("Email", claim.email)
        addLine("Phone", claim.phone)
        addLine("Service", claim.service)
        addLine("Consent", claim.consent ? "Yes" : "No")
        addLine("Consent Text", claim.consentText)
        addLine("Lawyer Info", claim.lawyerInfo || "N/A")

        // Service Answers
        if (claim.serviceAnswers?.length) {
          y += 2
          doc.setFont("helvetica", "bold")
          doc.setFontSize(12)
          doc.text("Service Answers", 10, y)
          y += 6
          claim.serviceAnswers.forEach((qa, i) => addLine(`Q${i + 1}: ${qa.question}`, qa.answer))
        }

        // Client Details
        if (claim.clientDetails) {
          const cd = claim.clientDetails
          y += 4
          doc.setFont("helvetica", "bold")
          doc.setFontSize(12)
          doc.text("Client Details", 10, y)
          y += 4

          addLine("IP Address", cd.ipAddress)
          addLine("Browser", cd.browser)
          addLine("OS", cd.os)
          addLine("Device", cd.device)

          if (cd.location) {
            y += 2
            doc.setFont("helvetica", "bold")
            doc.setFontSize(11)
            doc.text("Location", 12, y)
            y += 4
            addLine("Country", cd.location.country)
            addLine("Region", cd.location.region)
            addLine("City", cd.location.city)
            addLine("Timezone", cd.location.timezone)
            addLine("Coordinates", cd.location.ll ? cd.location.ll.join(", ") : "N/A")
          }
        }

        // Submission date
        if (claim.createdAt) addLine("Submitted At", new Date(claim.createdAt).toLocaleString())

        y += 6
        doc.setDrawColor(180)
        doc.setLineWidth(0.5)
        doc.line(10, y, 200, y)
        y += 8

        // Page number
        doc.setFontSize(10)
        doc.setFont("helvetica", "italic")
        doc.setTextColor("#6b7280")
        doc.text(`Page ${pageNumber}`, 500, 820)
      })

      doc.save(filename)
    } catch (err) {
      console.error("Bulk PDF error", err)
      alert("Failed to generate bulk PDF")
    }
  }

  const handleDownloadAll = () => downloadBulkPDF(filteredClaims, "Claims-All.pdf")
  const handleDownloadLatestN = () => {
    const list = filteredClaims.slice(0, latestCount)
    downloadBulkPDF(list, `Claims-Latest-${latestCount}.pdf`)
  }
  const handleDownloadByDateRange = () => {
    if (!startDate || !endDate) return alert("Select start and end dates")
    const start = new Date(startDate)
    const end = new Date(endDate)
    end.setHours(23, 59, 59, 999)
    const list = filteredClaims.filter(c => c.createdAt && new Date(c.createdAt) >= start && new Date(c.createdAt) <= end)
    if (!list.length) return alert("No claims in date range")
    downloadBulkPDF(list, `Claims-${startDate}-to-${endDate}.pdf`)
  }

  return (
    <div className="p-8">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Claims Forms</h1>
          <p className="text-muted-foreground mt-2">Manage all submitted claim requests</p>
        </div>

        <div className="flex gap-3 items-center w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search by name, email, or service..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-64 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {loading ? (
        <Card className="p-8 text-center">
          <p className="text-muted-foreground">Loading claims...</p>
        </Card>
      ) : (
        <>
          {/* Bulk download actions */}
          <Card className="mb-6 p-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex flex-wrap gap-2 items-center">
                <Button onClick={handleDownloadAll}>Download All Claims</Button>
                <div className="flex items-center gap-2">
                  <input type="number" min={1} value={latestCount} onChange={(e) => setLatestCount(Number(e.target.value))} className="w-20 px-2 py-1 border rounded-md" />
                  <Button onClick={handleDownloadLatestN}>Download Latest</Button>
                </div>
                <div className="flex items-center gap-2">
                  <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="px-2 py-1 border rounded-md" />
                  <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="px-2 py-1 border rounded-md" />
                  <Button onClick={handleDownloadByDateRange}>Download by Date</Button>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">{filteredClaims.length} claims</div>
            </div>
          </Card>

          {/* Table */}
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">S.No</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Service Type</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentRecords.length > 0 ? (
                  currentRecords.map((claim, index) => (
                    <TableRow key={claim._id || index}>
                      <TableCell>{indexOfFirstRecord + index + 1}</TableCell>
                      <TableCell>{claim.firstName} {claim.lastName}</TableCell>
                      <TableCell>{claim.email}</TableCell>
                      <TableCell>{claim.phone}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                          {claim.service}
                        </span>
                      </TableCell>
                      <TableCell>{claim.createdAt ? new Date(claim.createdAt).toLocaleDateString() : "N/A"}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex gap-2 justify-end">
                          <Button variant="ghost" size="sm" onClick={() => setSelectedClaim(claim)}><Eye className="w-4 h-4" /></Button>
                          <Button variant="ghost" size="sm" onClick={() => downloadSinglePDF(claim)} title="Download single PDF"><Download className="w-4 h-4" /></Button>
                          <Button variant="ghost" size="sm" onClick={() => handleOpenDeleteDialog(claim)} disabled={deleting === claim._id} className="text-red-600 hover:text-red-700 hover:bg-red-50"><Trash2 className="w-4 h-4" /></Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-4">No claims found</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Card>

          {/* Pagination */}
          <div className="mt-6 flex items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Showing {filteredClaims.length === 0 ? 0 : indexOfFirstRecord + 1} to {Math.min(indexOfLastRecord, filteredClaims.length)} of {filteredClaims.length} claims
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Previous</Button>
              <span className="px-3 text-sm">Page {currentPage} of {totalPages}</span>
              <Button variant="outline" disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Next</Button>
              <span className="text-sm text-muted-foreground ml-4">Records per page:</span>
              <select value={recordsPerPage} onChange={e => { setRecordsPerPage(Number(e.target.value)); setCurrentPage(1); }} className="px-3 py-1 border border-border rounded-md text-sm bg-background">
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </select>
            </div>
          </div>
        </>
      )}

      {selectedClaim && <ClaimDetailModal claim={selectedClaim} onClose={() => setSelectedClaim(null)} />}

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Delete Claim</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete <strong>{claimToDelete?.firstName} {claimToDelete?.lastName}</strong>? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <MUIButton onClick={handleCloseDialog} color="primary">Cancel</MUIButton>
          <MUIButton onClick={handleConfirmDelete} color="error" disabled={deleting === claimToDelete?._id}>
            {deleting === claimToDelete?._id ? "Deleting..." : "Delete"}
          </MUIButton>
        </DialogActions>
      </Dialog>
    </div>
  )
}
