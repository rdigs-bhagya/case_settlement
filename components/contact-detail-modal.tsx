"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import jsPDF from "jspdf"

interface Contact {
  _id?: string
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
  caseType: string
  hasLawyer?: string
  consent?: boolean
  consentText?: string
  createdAt?: string
  xxTrustedFormCertUrl?: string

  clientDetails?: {
    os: string
    ipAddress?: string
    userAgent?: string
    platform?: string
    browser?: string
    device?: string
    language?: string
    deviceId?: string

    location?: {
      range?: number[]
      country?: string
      region?: string
      eu?: string
      timezone?: string
      city?: string
      ll?: number[]
      metro?: number
      area?: number
    }
  }
}

interface ContactDetailModalProps {
  contact: Contact
  onClose: () => void
}

export function ContactDetailModal({ contact, onClose }: ContactDetailModalProps) {
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Contact Details", 10, 10);

    let y = 20;
    const addLine = (label: string, value: string | number | undefined) => {
      doc.setFontSize(12);
      doc.text(`${label}: ${value || "N/A"}`, 10, y);
      y += 8;
    };

    addLine("First Name", contact.firstName);
    addLine("Last Name", contact.lastName);
    addLine("Email", contact.email);
    addLine("Phone", contact.phone);
    addLine("TrustedForm Certificate URL", contact.xxTrustedFormCertUrl);
    addLine("Case Type", contact.caseType);
    addLine("Has Lawyer", contact.hasLawyer || "N/A"); // ✅ NEW
    addLine("Consent", contact.consent ? "Yes" : "No");
    addLine("Consent", contact.consentText),
      addLine("Message", contact.message);

    if (contact.clientDetails) {
      y += 6;
      doc.setFontSize(14);
      doc.text("Client Details", 10, y);
      y += 8;

      addLine("IP Address", contact.clientDetails.ipAddress);
      addLine("Browser", contact.clientDetails.browser);
      addLine("OS", contact.clientDetails.os);
      addLine("Device", contact.clientDetails.device);

      if (contact.clientDetails.location) {
        y += 6;
        doc.setFontSize(13);
        doc.text("Location", 10, y);
        y += 8;

        const loc = contact.clientDetails.location;

        addLine("Country", loc.country);
        addLine("Region", loc.region);
        addLine("City", loc.city);
        addLine("Timezone", loc.timezone);
        addLine("EU", loc.eu);
        addLine("Metro", String(loc.metro));
        addLine("Area", String(loc.area));
        addLine("Range", loc.range?.join(", "));
        addLine("Coordinates", loc.ll ? loc.ll.join(", ") : "N/A");
      }
    }

    if (contact.createdAt) {
      addLine("Submitted On", new Date(contact.createdAt).toLocaleString());
    }

    doc.save(`Contact-${contact.firstName}-${contact.lastName}.pdf`);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border bg-background">
          <h2 className="text-2xl font-bold text-foreground">Contact Details</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">First Name</label>
              <p className="text-lg text-foreground mt-1">{contact.firstName}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Last Name</label>
              <p className="text-lg text-foreground mt-1">{contact.lastName}</p>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-muted-foreground">Email</label>
            <p className="text-lg text-foreground mt-1">{contact.email}</p>
          </div>

          <div>
            <label className="text-sm font-medium text-muted-foreground">Phone</label>
            <p className="text-lg text-foreground mt-1">{contact.phone}</p>
          </div>

          <div>
            <label className="text-sm font-medium text-muted-foreground">TrustedForm Certificate URL</label>
            <p className="text-sm text-foreground mt-1">{contact.xxTrustedFormCertUrl}</p>
          </div>

          <div>
            <label className="text-sm font-medium text-muted-foreground">Case Type</label>
            <p className="text-lg text-foreground mt-1">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {contact.caseType}
              </span>
            </p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">
              Lawyer Representation
            </label>
            <p className="text-lg mt-1">
              {contact.hasLawyer === "Yes" ? (
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                  YES — Has a Lawyer
                </span>
              ) : contact.hasLawyer === "No" ? (
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">
                  NO — No Lawyer
                </span>
              ) : (
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-semibold">
                  N/A
                </span>
              )}
            </p>
          </div>

          <div>
            <label className="text-sm font-medium text-muted-foreground">Consent</label>
            <p className="text-lg mt-1">
              {contact.consent ? (
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                  YES — User Consented
                </span>
              ) : (
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                  NO — Not Provided
                </span>
              )}
            </p>
          </div>

          {/* Consent Text */}
          {contact.consentText && (
            <div>
              <label className="text-sm font-medium text-muted-foreground">Consent Text</label>
              <p className="text-sm text-foreground mt-2 p-4 bg-muted rounded-md whitespace-pre-wrap leading-relaxed">
                {contact.consentText}
              </p>
            </div>
          )}

          <div>
            <label className="text-sm font-medium text-muted-foreground">Message</label>
            <p className="text-lg text-foreground mt-1 p-3 bg-muted rounded-md">{contact.message}</p>
          </div>

          {contact.clientDetails && (
            <section className="p-4 border rounded-md bg-slate-50">
              <h3 className="font-semibold mb-3">Client Details</h3>

              <p><strong>IP Address:</strong> {contact.clientDetails.ipAddress || "N/A"}</p>
              <p><strong>Browser:</strong> {contact.clientDetails.browser || "N/A"}</p>
              <p><strong>OS:</strong> {contact.clientDetails.os || "N/A"}</p>
              <p><strong>Device:</strong> {contact.clientDetails.device || "N/A"}</p>

              {/* ─────────── LOCATION BLOCK ─────────── */}
              {contact.clientDetails.location && (
                <div className="mt-4 p-3 bg-white border rounded-md">
                  <h4 className="font-semibold mb-2">Location</h4>

                  <p><strong>Country:</strong> {contact.clientDetails.location.country}</p>
                  <p><strong>Region:</strong> {contact.clientDetails.location.region}</p>
                  <p><strong>City:</strong> {contact.clientDetails.location.city}</p>
                  <p><strong>Timezone:</strong> {contact.clientDetails.location.timezone}</p>
                  <p><strong>EU:</strong> {contact.clientDetails.location.eu}</p>
                  <p><strong>Metro:</strong> {contact.clientDetails.location.metro}</p>
                  <p><strong>Area:</strong> {contact.clientDetails.location.area}</p>

                  <p>
                    <strong>Range:</strong>{" "}
                    {contact.clientDetails.location.range?.join(" , ")}
                  </p>

                  <p>
                    <strong>Coordinates (ll):</strong>{" "}
                    {contact.clientDetails.location.ll
                      ? `${contact.clientDetails.location.ll[0]}, ${contact.clientDetails.location.ll[1]}`
                      : "N/A"}
                  </p>
                </div>
              )}
            </section>
          )}

          {contact.createdAt && (
            <div>
              <label className="text-sm font-medium text-muted-foreground">Submitted Date</label>
              <p className="text-lg text-foreground mt-1">{new Date(contact.createdAt).toLocaleString()}</p>
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
