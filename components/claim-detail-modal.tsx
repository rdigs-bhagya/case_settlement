"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

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
  clientDetails?: ClientDetails
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

          {claim.clientDetails && (
            <div>
              <label className="text-sm font-medium text-muted-foreground block mb-3">
                Client Details
              </label>

              <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto whitespace-pre-wrap">
                {JSON.stringify(claim.clientDetails, null, 2)}
              </pre>
            </div>
          )}

          {claim.createdAt && (
            <div>
              <label className="text-sm font-medium text-muted-foreground">Submitted Date</label>
              <p className="text-lg text-foreground mt-1">{new Date(claim.createdAt).toLocaleString()}</p>
            </div>
          )}

          <div className="flex gap-2 pt-4">
            <Button onClick={onClose} className="flex-1">
              Close
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
