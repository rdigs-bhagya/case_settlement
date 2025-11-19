"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showConsent, setShowConsent] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    caseType: "",
    xxTrustedFormCertUrl: "",
  });

  const validate = (payload: typeof formValues) => {
    const newErrors: Record<string, string> = {};
    if (!payload.firstName || payload.firstName.length < 2)
      newErrors.firstName = "First name must be at least 2 characters.";
    if (!payload.lastName || payload.lastName.length < 2)
      newErrors.lastName = "Last name must be at least 2 characters.";
    if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email))
      newErrors.email = "Enter a valid email address.";
    if (!payload.phone || !/^\d{10,}$/.test(payload.phone))
      newErrors.phone = "Enter a valid phone number (at least 10 digits).";
    if (!payload.message || payload.message.length < 10)
      newErrors.message = "Message must be at least 10 characters.";
    if (!payload.caseType) newErrors.caseType = "Please select a case type.";
    if (!consentGiven)
      newErrors.consent = "You must agree to the consent before submitting.";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

     // Get TrustedForm value from DOM (React won't track it automatically)
  const tfValue = (document.getElementById("xxTrustedFormCertUrl") as HTMLInputElement)?.value;
  formValues.xxTrustedFormCertUrl = tfValue || "";

    const newErrors = validate(formValues);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }
    setErrors({});

    try {
      const res = await fetch("https://case-9w55.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      const data = await res.json();
      console.log("API response:", data);

      if (!res.ok) throw new Error(data.message || "Failed to submit");

      setStatus("✅ Message sent successfully!");
      setFormValues({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        caseType: "",
        xxTrustedFormCertUrl: "",
      });
      setConsentGiven(false);
    } catch (err: any) {
      console.error("❌ Submission error:", err);
      setStatus(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const inputStyles =
    "w-full border border-gray-300 rounded-md px-6 py-2 text-sm " +
    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";

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

        {/* --- Case Type Dropdown --- */}
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

        {/* --- Consent Checkbox --- */}
        <div className="flex items-start gap-3 p-5 bg-slate-50 rounded-xl border border-slate-200">
          <Checkbox
            id="consent"
            className="border-2 border-blue-200 bg-blue-50 hover:border-blue-300 data-[state=checked]:bg-blue-100 data-[state=checked]:border-blue-300 data-[state=checked]:text-blue-700 transition-colors"
            checked={consentGiven}
            onCheckedChange={() => {
              if (!consentGiven) {
                setShowConsent(true);
              } else {
                setConsentGiven(false);
              }
            }}
          />
          <input type="hidden" name="xxTrustedFormCertUrl" id="xxTrustedFormCertUrl" />

          <Label htmlFor="consent" className="text-[9px] text-slate-600">
            I agree to the Privacy Policy and Consent to receive calls, text messages, and emails, including automated and prerecorded messages, from Claim Your Claims and affiliate partners. Consent not required to proceed.
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

      {/* --- Consent Popup --- */}
      <Dialog open={showConsent} onOpenChange={setShowConsent}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Consent & Privacy Policy</DialogTitle>
          </DialogHeader>
          <div className="max-h-64 overflow-y-auto text-sm text-slate-600 space-y-3">
            <p>
              By checking this box and submitting my request, I confirm that I
              have read and agree to the privacy policy of this site and that I
              consent to receive marketing emails, phone calls and/or text
              messages from Claim Your Claims and our marketing partners &
              network of firms at any telephone number or email address provided
              by me, including my wireless number, if provided.
            </p>
            <p>
              I understand that my wireless carrier may charge me for such
              communications. These communications may be generated using an
              automatic telephone dialing system and may contain pre-recorded
              messages related to the product/service I am inquiring about.
            </p>
            <p>Consent is not required to utilize services.</p>
          </div>
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
