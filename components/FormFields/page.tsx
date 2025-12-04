"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function FormFields() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    caseType: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [consentGiven, setConsentGiven] = useState(false);
  const [showConsent, setShowConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const CONSENT_TEXT = `By checking this box and submitting my request, I confirm that I have read and agree to the privacy policy of this site and that I consent to receive marketing emails, phone calls and/or text messages from Claim Your Claims and our marketing partners & network of firms at any telephone number or email address provided by me, including my wireless number, if provided. I understand that my wireless carrier may charge me for such communications. These communications may be generated using an automatic telephone dialing system and may contain pre-recorded messages related to the product/service I am inquiring about. Consent is not required to utilize services.`;

  // 🔥 Validation
  const validate = (payload: typeof formValues) => {
    const newErrors: Record<string, string> = {}; // ✅ FIXED HERE

    if (!payload.firstName || payload.firstName.length < 2)
      newErrors.firstName = "First name must be at least 2 characters.";

    if (!payload.lastName || payload.lastName.length < 2)
      newErrors.lastName = "Last name must be at least 2 characters.";

    if (!payload.email || !payload.email.includes("@"))
      newErrors.email = "Enter a valid email.";

    if (!payload.phone || payload.phone.length < 8)
      newErrors.phone = "Phone number must be at least 8 digits.";

    if (!payload.caseType) newErrors.caseType = "Please select a case type.";

    if (!payload.message || payload.message.length < 10)
      newErrors.message = "Message must be at least 10 characters.";

    if (!consentGiven) newErrors.consent = "You must agree to proceed.";

    return newErrors;
  };

  // On input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    const validationErrors = validate(formValues);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setLoading(false);
      return;
    }

    const userPayload = {
      ...formValues,
      consent: consentGiven,
      consentText: CONSENT_TEXT, 
      userDetails: {
        ipAddress: "",
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
      },
    };

    try {
      const response = await fetch("https://case-9w55.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userPayload),
      });

      const data = await response.json();
      console.log("API response:", data);

      if (!response.ok) throw new Error("Failed to submit");

      setStatus("✅ Submitted successfully!");
      setFormValues({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        caseType: "",
        message: "",
      });
      setConsentGiven(false);
    } catch (error) {
      console.error("❌ Submission error:", error);
      setStatus("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyles =
    "w-full border border-gray-300 rounded-md px-6 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <Input
              name="firstName"
              placeholder="First Name"
              value={formValues.firstName}
              onChange={handleChange}
              className={inputStyles}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>

          <div>
            <Input
              name="lastName"
              placeholder="Last Name"
              value={formValues.lastName}
              onChange={handleChange}
              className={inputStyles}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        <Input
          name="email"
          type="email"
          placeholder="Email Address"
          value={formValues.email}
          onChange={handleChange}
          className={inputStyles}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}

        <Input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          value={formValues.phone}
          onChange={handleChange}
          className={inputStyles}
        />
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
        )}

        <select
          name="caseType"
          value={formValues.caseType}
          onChange={handleChange}
          className={inputStyles}
        >
          <option value="">Select Your Case Type</option>
          {[
            "AFFF Lawsuit Support",
            "NEC Lawsuit Assistance",
            "Motor Vehicle Accidents",
            "Product Liability",
            "Mass Tort Litigation",
            "Roundup Lawsuit",
            "Hair Relaxer Claims",
            "Zantac Lawsuits",
            "PFAS Lawsuite",
            "Silicosis",
          ].map((caseType) => (
            <option key={caseType} value={caseType}>
              {caseType}
            </option>
          ))}
        </select>
        {errors.caseType && (
          <p className="text-red-500 text-xs mt-1">{errors.caseType}</p>
        )}

        <Textarea
          name="message"
          placeholder="Your message..."
          rows={3}
          value={formValues.message}
          onChange={handleChange}
          className={inputStyles}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
        )}

        <div className="flex items-start gap-3 p-5 bg-slate-50 rounded-xl border border-slate-200">
          <Checkbox
            id="consent"
            checked={consentGiven}
            onCheckedChange={() => {
              if (!consentGiven) setShowConsent(true);
              else setConsentGiven(false);
            }}
          />
          <input type="hidden" id="xxTrustedFormCertUrl" />

          <Label htmlFor="consent" className="text-[9px] text-slate-600">
            I agree to the Privacy Policy and receive calls, text messages,
            emails including automated & prerecorded messages.
          </Label>
        </div>
        {errors.consent && (
          <p className="text-red-500 text-xs mt-1">{errors.consent}</p>
        )}

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Submitting..." : "🚀 Submit"}
        </Button>

        {status && <p className="text-center text-sm mt-2">{status}</p>}
      </form>

      <Dialog open={showConsent} onOpenChange={setShowConsent}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Consent & Privacy Policy</DialogTitle>
          </DialogHeader>
          <div className="max-h-64 overflow-y-auto text-sm text-slate-600 space-y-3">
            <p> By checking this box and submitting my request, I confirm that I have read and agree to the privacy policy of this site and that I consent to receive marketing emails, phone calls and/or text messages from Claim Your Claims and our marketing partners & network of firms at any telephone number or email address provided by me, including my wireless number, if provided. </p> <p> I understand that my wireless carrier may charge me for such communications. These communications may be generated using an automatic telephone dialing system and may contain pre-recorded messages related to the product/service I am inquiring about. </p> <p>Consent is not required to utilize services.</p> </div>
          <DialogFooter className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setShowConsent(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                setConsentGiven(true);
                setShowConsent(false);
              }}
            >
              I Agree
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
