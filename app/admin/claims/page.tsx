"use client"

import { useEffect, useState } from "react"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button as MUIButton,
} from "@mui/material" // ✅ Material UI dialog

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Eye, Trash2 } from "lucide-react"
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

  // ✅ Dialog state
  const [openDialog, setOpenDialog] = useState(false)
  const [claimToDelete, setClaimToDelete] = useState<Claim | null>(null)

  useEffect(() => {
    const fetchClaims = async () => {
      try {
        const response = await fetch("https://case-9w55.onrender.com/claims")
        const data = await response.json()
        let claimsList = []

        if (Array.isArray(data)) {
          claimsList = data
        } else if (data?.data && Array.isArray(data.data)) {
          claimsList = data.data
        } else if (data?.claims && Array.isArray(data.claims)) {
          claimsList = data.claims
        }

        const sortedList = claimsList.reverse()
        setClaims(sortedList)
        setFilteredClaims(sortedList)
      } catch (error) {
        console.error("[v0] Error fetching claims:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchClaims()
  }, [])

  // ✅ Search Filter
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

  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
  const currentRecords = filteredClaims.slice(indexOfFirstRecord, indexOfLastRecord)
  const totalPages = Math.ceil(filteredClaims.length / recordsPerPage)

  // ✅ Open Delete Dialog
  const handleOpenDeleteDialog = (claim: Claim) => {
    setClaimToDelete(claim)
    setOpenDialog(true)
  }

  // ✅ Close Delete Dialog
  const handleCloseDialog = () => {
    setOpenDialog(false)
    setClaimToDelete(null)
  }

  // ✅ Confirm Delete
  const handleConfirmDelete = async () => {
    if (!claimToDelete?._id) return
    const id = claimToDelete._id
    setDeleting(id)

    try {
      const response = await fetch(`https://case-9w55.onrender.com/claims/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setClaims((prev) => prev.filter((c) => c._id !== id))
        setFilteredClaims((prev) => prev.filter((c) => c._id !== id))
      } else {
        console.error("Failed to delete claim")
      }
    } catch (error) {
      console.error("[v0] Error deleting claim:", error)
    } finally {
      setDeleting(null)
      handleCloseDialog()
    }
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Claims Forms</h1>
        <p className="text-muted-foreground mt-2">Manage all submitted claim requests</p>
      </div>

      {loading ? (
        <Card className="p-8 text-center">
          <p className="text-muted-foreground">Loading claims...</p>
        </Card>
      ) : (
        <>
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
                      <TableCell>
                        {claim.createdAt ? new Date(claim.createdAt).toLocaleDateString() : "N/A"}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex gap-2 justify-end">
                          <Button variant="ghost" size="sm" onClick={() => setSelectedClaim(claim)}>
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleOpenDeleteDialog(claim)}
                            disabled={deleting === claim._id}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-4">
                      No claims found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Card>

          {/* ✅ Delete Confirmation Dialog */}
          <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>Delete Claim</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete{" "}
                <strong>
                  {claimToDelete?.firstName} {claimToDelete?.lastName}
                </strong>
                ? This action cannot be undone.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <MUIButton onClick={handleCloseDialog} color="primary">
                Cancel
              </MUIButton>
              <MUIButton
                onClick={handleConfirmDelete}
                color="error"
                disabled={deleting === claimToDelete?._id}
              >
                {deleting === claimToDelete?._id ? "Deleting..." : "Delete"}
              </MUIButton>
            </DialogActions>
          </Dialog>

          {/* ✅ Pagination */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {indexOfFirstRecord + 1} to {Math.min(indexOfLastRecord, filteredClaims.length)} of{" "}
                {filteredClaims.length} claims
              </p>
              <div className="flex gap-2">
                <Button variant="outline" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
                  Previous
                </Button>
                <span className="flex items-center px-3 text-sm">
                  Page {currentPage} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </Button>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <span className="text-sm text-muted-foreground flex items-center">Records per page:</span>
              <select
                value={recordsPerPage}
                onChange={(e) => {
                  setRecordsPerPage(Number(e.target.value))
                  setCurrentPage(1)
                }}
                className="px-3 py-1 border border-border rounded-md text-sm bg-background"
              >
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
    </div>
  )
}
