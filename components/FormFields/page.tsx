"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const validate = (payload: typeof formValues) => {
    const newErrors: Record<string, string> = {};
    if (!payload.firstName || payload.firstName.length < 2) newErrors.firstName = "First name must be at least 2 characters.";
    if (!payload.lastName || payload.lastName.length < 2) newErrors.lastName = "Last name must be at least 2 characters.";
    if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) newErrors.email = "Enter a valid email address.";
    if (!payload.phone || !/^\d{10,}$/.test(payload.phone)) newErrors.phone = "Enter a valid phone number (at least 10 digits).";
    if (!payload.message || payload.message.length < 10) newErrors.message = "Message must be at least 10 characters.";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const newErrors = validate(formValues);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }
    setErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      const data = await res.json();
      console.log("API response:", data);

      if (!res.ok) throw new Error(data.message || "Failed to submit");

      setStatus("✅ Message sent successfully!");
      setFormValues({ firstName: "", lastName: "", email: "", phone: "", message: "" });
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
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <Input name="firstName" placeholder="First Name" value={formValues.firstName} onChange={handleChange} className={inputStyles} />
          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <Input name="lastName" placeholder="Last Name" value={formValues.lastName} onChange={handleChange} className={inputStyles} />
          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
        </div>
      </div>
      <Input name="email" type="email" placeholder="Email Address" value={formValues.email} onChange={handleChange} className={inputStyles} />
      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      <Input name="phone" type="tel" placeholder="Phone Number" value={formValues.phone} onChange={handleChange} className={inputStyles} />
      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      <Textarea name="message" placeholder="Your message..." rows={3} value={formValues.message} onChange={handleChange} className={inputStyles} />
      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      <Button type="submit" disabled={loading} className="w-full">{loading ? "Submitting..." : "🚀 Submit"}</Button>
      {status && <p className="text-center text-sm mt-2">{status}</p>}
    </form>
  );
}
