"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import jsPDF from "jspdf"

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
  clientDetails?: ClientDetails
  xxTrustedFormCertUrl?: string
}

interface ClientLocation {
  range: number[]
  country: string
  region: string
  eu: string
  timezone: string
  city: string
  ll: number[]
  metro: number
  area: number
}

interface ClientDetails {
  ipAddress: string
  browser: string
  os: string
  device: string
  location: ClientLocation
}

interface ClaimDetailModalProps {
  claim: Claim
  onClose: () => void
}

export function ClaimDetailModal({ claim, onClose }: ClaimDetailModalProps) {
  const downloadPDF = () => {
    const doc = new jsPDF()

    doc.setFontSize(16)
    doc.text("Claim Details", 10, 10)

    let y = 20
    const addLine = (label: string, value: string | number | undefined) => {
      doc.setFontSize(12)
      doc.text(`${label}: ${value || "N/A"}`, 10, y)
      y += 8
    }

    addLine("First Name", claim.firstName)
    addLine("Last Name", claim.lastName)
    addLine("Email", claim.email)
    addLine("Phone", claim.phone)
    addLine("Service", claim.service)
    addLine("Consent", claim.consent ? "Yes" : "No")
    addLine("Consent Text", claim.consentText)
    if (claim.lawyerInfo) addLine("Lawyer Info", claim.lawyerInfo)

    if (claim.serviceAnswers && claim.serviceAnswers.length > 0) {
      y += 6
      doc.setFontSize(14)
      doc.text("Service Answers", 10, y)
      y += 8
      claim.serviceAnswers.forEach((qa) => {
        addLine("Question", qa.question)
        addLine("Answer", Array.isArray(qa.answer) ? qa.answer.join(", ") : qa.answer)
      })
    }

    if (claim.clientDetails) {
      y += 6
      doc.setFontSize(14)
      doc.text("Client Details", 10, y)
      y += 8

      addLine("IP Address", claim.clientDetails.ipAddress)
      addLine("Browser", claim.clientDetails.browser)
      addLine("OS", claim.clientDetails.os)
      addLine("Device", claim.clientDetails.device)

      if (claim.clientDetails.location) {
        y += 6
        doc.setFontSize(13)
        doc.text("Location", 10, y)
        y += 8

        const loc = claim.clientDetails.location
        addLine("Country", loc.country)
        addLine("Region", loc.region)
        addLine("City", loc.city)
        addLine("Timezone", loc.timezone)
        addLine("EU", loc.eu)
        addLine("Metro", String(loc.metro))
        addLine("Area", String(loc.area))
        addLine("Range", loc.range?.join(", "))
        addLine("Coordinates", loc.ll ? loc.ll.join(", ") : "N/A")
      }
    }

    if (claim.createdAt) {
      addLine("Submitted On", new Date(claim.createdAt).toLocaleString())
    }

    doc.save(`Claim-${claim.firstName}-${claim.lastName}.pdf`)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border bg-background">
          <h2 className="text-2xl font-bold text-foreground">Claim Details</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* ───────────── DETAILS ───────────── */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">First Name</label>
              <p className="text-lg text-foreground mt-1">{claim.firstName}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Last Name</label>
              <p className="text-lg text-foreground mt-1">{claim.lastName}</p>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-muted-foreground">Email</label>
            <p className="text-lg text-foreground mt-1">{claim.email}</p>
          </div>

          <div>
            <label className="text-sm font-medium text-muted-foreground">Phone</label>
            <p className="text-lg text-foreground mt-1">{claim.phone}</p>
          </div>

          <div>
            <label className="text-sm font-medium text-muted-foreground">TrustedForm Certificate URL</label>
            <p className="text-sm text-foreground mt-1">{claim.xxTrustedFormCertUrl}</p>
          </div>

          <div>
            <label className="text-sm font-medium text-muted-foreground">Service Type</label>
            <p className="text-lg text-foreground mt-1">
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                {claim.service}
              </span>
            </p>
          </div>

          {claim.serviceAnswers && claim.serviceAnswers.length > 0 && (
            <div>
              <label className="text-sm font-medium text-muted-foreground block mb-3">Service Answers</label>
              <div className="space-y-3">
                {claim.serviceAnswers.map((qa, index) => (
                  <div key={index} className="p-3 bg-muted rounded-md">
                    <p className="font-medium text-foreground">{qa.question}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {Array.isArray(qa.answer) ? qa.answer.join(", ") : qa.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {claim.lawyerInfo && (
            <div>
              <label className="text-sm font-medium text-muted-foreground">Lawyer Info</label>
              <p className="text-lg text-foreground mt-1 p-3 bg-muted rounded-md">{claim.lawyerInfo}</p>
            </div>
          )}

          {claim.consent !== undefined && (
            <div>
              <label className="text-sm font-medium text-muted-foreground">Consent</label>
              <p className="text-lg text-foreground mt-1">
                {claim.consent ? (
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Yes</span>
                ) : (
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">No</span>
                )}
              </p>
            </div>
          )}

          {claim.consentText && (
            <div>
              <label className="text-sm font-medium text-muted-foreground"></label>
              <p className="text-sm text-foreground mt-2 p-4 bg-muted rounded-md whitespace-pre-wrap leading-relaxed">
                {claim.consentText}
              </p>
            </div>
          )}

          {claim.clientDetails && (
            <section className="p-4 border rounded-md bg-slate-50">
              <h3 className="font-semibold mb-3">Client Details</h3>

              <p><strong>IP Address:</strong> {claim.clientDetails.ipAddress || "N/A"}</p>
              <p><strong>Browser:</strong> {claim.clientDetails.browser || "N/A"}</p>
              <p><strong>OS:</strong> {claim.clientDetails.os || "N/A"}</p>
              <p><strong>Device:</strong> {claim.clientDetails.device || "N/A"}</p>

              {/* ─────────── LOCATION BLOCK ─────────── */}
              {claim.clientDetails.location && (
                <div className="mt-4 p-3 bg-white border rounded-md">
                  <h4 className="font-semibold mb-2">Location</h4>

                  <p><strong>Country:</strong> {claim.clientDetails.location.country}</p>
                  <p><strong>Region:</strong> {claim.clientDetails.location.region}</p>
                  <p><strong>City:</strong> {claim.clientDetails.location.city}</p>
                  <p><strong>Timezone:</strong> {claim.clientDetails.location.timezone}</p>
                  <p><strong>EU:</strong> {claim.clientDetails.location.eu}</p>
                  <p><strong>Metro:</strong> {claim.clientDetails.location.metro}</p>
                  <p><strong>Area:</strong> {claim.clientDetails.location.area}</p>

                  <p>
                    <strong>Range:</strong>{" "}
                    {claim.clientDetails.location.range?.join(" , ") || "N/A"}
                  </p>

                  <p>
                    <strong>Coordinates (ll):</strong>{" "}
                    {claim.clientDetails.location.ll
                      ? `${claim.clientDetails.location.ll[0]}, ${claim.clientDetails.location.ll[1]}`
                      : "N/A"}
                  </p>
                </div>
              )}
            </section>
          )}

          {claim.createdAt && (
            <div>
              <label className="text-sm font-medium text-muted-foreground">Submitted Date</label>
              <p className="text-lg text-foreground mt-1">{new Date(claim.createdAt).toLocaleString()}</p>
            </div>
          )}

          <div className="flex gap-2 pt-4">
            <Button onClick={downloadPDF} className="flex-1 bg-green-600 hover:bg-green-700">
              Download PDF
            </Button>

            <Button onClick={onClose} className="flex-1">
              Close
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
