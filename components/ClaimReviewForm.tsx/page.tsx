"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { QuestionAnswerConfig, SERVICE_QUESTIONS } from "../serviceQuestion/page";

type QuestionAnswer = {
  question: string;
  answer: string | string[];
};

type ClientDetails = {
  ipAddress?: string;
  browser?: string;
  os?: string;
  device?: string;
  location?: any;
};

type FormData = {
  service: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceAnswers?: QuestionAnswer[];
  lawyerInfo?: string;
  address?: string;
  bestTimeToContact?: string;
  consent?: boolean;
  consentText: string,
  xxTrustedFormCertUrl: string;
  clientDetails?: ClientDetails;
};

type ClaimReviewFormProps = {
  service: string;
  compact?: boolean;
};

export default function ClaimReviewForm({ service, compact = false }: ClaimReviewFormProps) {
  const submissionLock = useRef(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({ defaultValues: { serviceAnswers: [] } });

  const serviceAnswers = watch("serviceAnswers") || [];

  const DEFAULT_CONSENT_TEXT = `I agree that by providing my phone number and/or email, checking this box, and
submitting this form, that I am consenting by electronic signature to authorize Landmark
Demand d/b/a Claim Your Claims, Agility Labs Inc., and their partners or affiliates to
contact me with automated, autodialed, artificial or prerecorded marketing calls, text
messages, and emails. I understand that consent is not required to proceed.`;

  const RIDESHARE_CONSENT_TEXT = `By clicking the checkbox and submitting this form, I acknowledge my electronic signature and agree to the terms of use and privacy policy. I consent to receive communications, including emails, phone calls, text messages, offers, and services via the provided phone number or email address above from Landmark Demand, Novera Media Solutions, Eilers Law Firm and Our Marketing Partners. I understand there may be a charge by my wireless carrier for these communications, which may be generated using an autodialer and may contain pre-recorded messages. Consent is not mandatory, but this authorization supersedes any prior federal, state, or corporate Do Not Call registrations.`;

  const consentText = service === "rideshare" ? RIDESHARE_CONSENT_TEXT : DEFAULT_CONSENT_TEXT;
  const databaseEndpoint = "https://wcyf5iypbi.execute-api.us-east-1.amazonaws.com/dev/claims";
  const zapierEndpoint = "https://hooks.zapier.com/hooks/catch/23024319/4dspi7f/";

  // ⭐ FUNCTION TO GET FULL CLIENT DETAILS
  const getClientDetails = async () => {
    try {
      const ipRes = await fetch("https://ipapi.co/json/");
      const ipData = await ipRes.json();

      const ua = navigator.userAgent;

      return {
        ipAddress: ipData.ip || "",
        browser: ua.includes("Chrome")
          ? "Chrome"
          : ua.includes("Firefox")
            ? "Firefox"
            : ua.includes("Safari") && !ua.includes("Chrome")
              ? "Safari"
              : ua.includes("Edg")
                ? "Edge"
                : "Unknown",
        os: ua.includes("Win")
          ? "Windows"
          : ua.includes("Mac")
            ? "MacOS"
            : ua.includes("Linux")
              ? "Linux"
              : ua.includes("Android")
                ? "Android"
                : ua.includes("iPhone") || ua.includes("iPad")
                  ? "iOS"
                  : "Unknown",
        device: /mobile/i.test(ua) ? "Mobile" : "Desktop",
        location: {
          range: [],
          country: ipData.country,
          region: ipData.region,
          city: ipData.city,
          timezone: ipData.timezone,
          ll: [ipData.latitude, ipData.longitude],
          metro: 0,
          area: 0
        }
      };
    } catch (error) {
      console.error("Client Details Error:", error);
      return {};
    }
  };



  const onSubmit = async (data: FormData) => {
    if (submissionLock.current || hasSubmitted) return;
    submissionLock.current = true;
    setIsSubmitting(true);
    let databaseAccepted = false;

    try {
      data.service = service;
      data.consentText = consentText;

      // TrustedForm
      const tfValue = (document.getElementById("xxTrustedFormCertUrl") as HTMLInputElement)?.value;
      data.xxTrustedFormCertUrl = tfValue || "";

      // Get client details
      const clientDetails = await getClientDetails();
      (data as any).clientDetails = clientDetails;

      const ridesharePayload = {
        first_name: data.firstName,
        last_name: data.lastName,
        phone: data.phone,
        email: data.email,
        address: data.address || "",
        campaign: "rideshare",
        trustedform_cert_url: data.xxTrustedFormCertUrl,
        have_attorney: data.lawyerInfo || "",
        best_time_to_contact: data.bestTimeToContact || "",
        was_assaulted_by_rideshare_driver: data.serviceAnswers?.[0]?.answer || "",
      };
      const getServiceAnswer = (question: string) =>
        data.serviceAnswers?.find((answer) => answer.question === question)?.answer || "";
      const robloxPayload = {
        first_name: data.firstName,
        last_name: data.lastName,
        phone: data.phone,
        email: data.email,
        campaign: "roblox",
        trustedform_cert_url: data.xxTrustedFormCertUrl,
        have_attorney: data.lawyerInfo || "",
        last_four_ssn: getServiceAnswer("Last four digits of SSN"),
        met_abuser_through_roblox: getServiceAnswer("Did your child meet an abuser through Roblox?"),
        under_18_when_abuse_began: getServiceAnswer("Was your child under 18 when the abuse began?"),
        abuse_involved: getServiceAnswer(
          "Did the abuse involve physical assault, grooming, or exchange of explicit content?"
        ),
        service_answers: data.serviceAnswers || [],
      };

      const databaseRequestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      const zapierRequestOptions = {
        method: "POST",
        mode: "no-cors" as const,
        body: JSON.stringify(ridesharePayload),
      };
      const databaseResponse = await fetch(databaseEndpoint, databaseRequestOptions);

      if (databaseResponse.status !== 201) {
        alert("âŒ Unable to submit the form. Please try again.");
        return;
      }

      // The database has accepted the lead; prevent a repeat submit even if
      // the follow-up webhook fails.
      setHasSubmitted(true);

      databaseAccepted = true;
      if (service === "rideshare" || service === "roblox") {
        const zapierPayload = service === "rideshare" ? ridesharePayload : robloxPayload;
        await fetch(zapierEndpoint, {
          ...zapierRequestOptions,
          body: JSON.stringify(zapierPayload),
        });
      }

        alert("✅ Form submitted successfully!");
        reset();
    } catch (err) {
      console.error(err);
      if (databaseAccepted) {
        alert("Your claim was saved, but the follow-up could not be confirmed. Please do not submit it again.");
      } else {
        alert("Unable to submit the form. Please try again.");
      }
    } finally {
      submissionLock.current = false;
      setIsSubmitting(false);
    }
  };


  const inputClass =
    "mt-2 h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-600 transition";

  const textareaClass =
    "mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-600 transition";

  const selectTriggerClass =
    "mt-2 h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-600 transition";

  const labelClass = "text-slate-800 font-semibold text-sm";

  // Render dynamic questions
  const renderQuestion = (q: QuestionAnswerConfig) => {
    const existing = serviceAnswers.find((item) => item.question === q.question);

    switch (q.type) {
      case "select":
        return (
          <Select
            onValueChange={(val: string) =>
              setValue("serviceAnswers", [
                ...serviceAnswers.filter((item) => item.question !== q.question),
                { question: q.question, answer: val },
              ])
            }
          >
            <SelectTrigger className={selectTriggerClass}>
              <SelectValue placeholder="-- Select --" />
            </SelectTrigger>
            <SelectContent>
              {q.options.map((opt) => (
                <SelectItem key={opt} value={opt}>
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case "radio":
        return (
          <div className="flex gap-6 mt-2">
            {q.options.map((opt) => (
              <label key={opt} className="inline-flex items-center gap-2 text-slate-700">
                <input
                  type="radio"
                  checked={existing?.answer === opt}
                  onChange={() =>
                    setValue("serviceAnswers", [
                      ...serviceAnswers.filter((item) => item.question !== q.question),
                      { question: q.question, answer: opt },
                    ])
                  }
                  className="h-4 w-4"
                />
                {opt}
              </label>
            ))}
          </div>
        );

      case "checkbox":
        const selected: string[] = Array.isArray(existing?.answer) ? existing.answer : [];
        return (
          <div className="flex flex-col gap-2 mt-2">
            {q.options.map((opt) => (
              <label key={opt} className="inline-flex items-center gap-2 text-slate-700">
                <input
                  type="checkbox"
                  checked={selected.includes(opt)}
                  onChange={(e) => {
                    const newAnswer = e.target.checked
                      ? [...selected, opt]
                      : selected.filter((a) => a !== opt);
                    setValue("serviceAnswers", [
                      ...serviceAnswers.filter((item) => item.question !== q.question),
                      { question: q.question, answer: newAnswer },
                    ]);
                  }}
                  className="h-4 w-4"
                />
                {opt}
              </label>
            ))}
          </div>
        );

      case "number":
      case "input":
      case "text":
        return (
          <input
            type={q.type === "number" ? "number" : "text"}
            className={inputClass}
            placeholder={q.placeholder || ""}
            value={existing?.answer || ""}
            onChange={(e) =>
              setValue("serviceAnswers", [
                ...serviceAnswers.filter((item) => item.question !== q.question),
                { question: q.question, answer: e.target.value },
              ])
            }
          />
        );

      default:
        return null;
    }
  };

  const questionsToRender = SERVICE_QUESTIONS[service] || [];

  if (compact) {
    return (
      <div className="w-full">
        <h2 className="text-2xl font-bold text-slate-900">Free Case Evaluation</h2>
        <p className="mt-3 text-sm text-slate-500">Accepting Clients Nationwide</p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label className={labelClass}>First Name*</Label>
              <Input
                {...register("firstName", { required: "First name required" })}
                className={inputClass}
              />
            </div>
            <div>
              <Label className={labelClass}>Last Name*</Label>
              <Input
                {...register("lastName", { required: "Last name required" })}
                className={inputClass}
              />
            </div>
            <div>
              <Label className={labelClass}>Phone*</Label>
              <Input
                {...register("phone", { required: "Phone required" })}
                className={inputClass}
              />
            </div>
            <div>
              <Label className={labelClass}>Your Email*</Label>
              <Input
                {...register("email", { required: "Email required" })}
                className={inputClass}
              />
            </div>
          </div>

          <input type="hidden" name="xxTrustedFormCertUrl" id="xxTrustedFormCertUrl" />

          <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <Checkbox
              id="consent"
              className="mt-1 border-2 border-blue-400 data-[state=checked]:bg-blue-400 data-[state=checked]:text-white"
              checked={!!watch("consent")}
              onCheckedChange={(checked) => setValue("consent", checked as boolean)}
            />
            <Label htmlFor="consent" className="text-sm text-slate-600">
              {consentText}
            </Label>
          </div>
          {errors.consent && <p className="text-xs text-red-600">Consent is required.</p>}

          <Button
            type="submit"
            disabled={isSubmitting || hasSubmitted}
            className="w-full bg-blue-900 text-white hover:bg-blue-800"
          >
            {isSubmitting ? "Submitting..." : hasSubmitted ? "Submitted" : "Submit"}
          </Button>
        </form>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 border border-slate-200">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8 text-center">
            Free Claim Review
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Info */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <Label className={labelClass}>First Name*</Label>
                <Input
                  {...register("firstName", { required: "First name required" })}
                  className={inputClass}
                />
              </div>
              <div>
                <Label className={labelClass}>Last Name*</Label>
                <Input
                  {...register("lastName", { required: "Last name required" })}
                  className={inputClass}
                />
              </div>
              <div>
                <Label className={labelClass}>Email*</Label>
                <Input
                  {...register("email", { required: "Email required" })}
                  className={inputClass}
                />
              </div>
              <div>
                <Label className={labelClass}>Phone*</Label>
                <Input
                  {...register("phone", { required: "Phone required" })}
                  className={inputClass}
                />
              </div>
            </div>

            {service === "rideshare" && (
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="lg:col-span-2">
                  <Label className={labelClass}>Address</Label>
                  <Input
                    {...register("address")}
                    placeholder="Street address, city, state, ZIP"
                    className={inputClass}
                  />
                </div>
                <div className="lg:col-span-2">
                  <Label className={labelClass}>Best Time to Contact You</Label>
                  <Input
                    {...register("bestTimeToContact")}
                    placeholder="Morning, afternoon, evening, etc."
                    className={inputClass}
                  />
                </div>
              </div>
            )}

            {/* Dynamic Service Questions */}
            {questionsToRender.map((q) => (
              <div key={q.question}>
                <Label className={labelClass}>{q.question}*</Label>
                {renderQuestion(q)}
              </div>
            ))}

            {/* Static Questions */}
            <div className="space-y-6 mt-6">
              <div>
                <Label className={labelClass}>Do you currently have a lawyer?*</Label>
                <Textarea
                  {...register("lawyerInfo", { required: "Please specify" })}
                  placeholder="Enter details..."
                  className={textareaClass}
                />
                {errors.lawyerInfo && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.lawyerInfo.message}
                  </p>
                )}
              </div>

              <input type="hidden" name="xxTrustedFormCertUrl" id="xxTrustedFormCertUrl" />

              <div className="flex items-start gap-3 p-5 bg-slate-50 rounded-xl border border-slate-200">
                <Checkbox
                  id="consent"
                  className="border-2 border-blue-400 mt-2 data-[state=checked]:bg-blue-400 data-[state=checked]:text-white"
                  checked={!!watch("consent")}
                  onCheckedChange={(checked) => setValue("consent", checked as boolean)}
                />
                <Label htmlFor="consent" className="text-sm text-slate-600">
                  {consentText}
                </Label>
              </div>
              {errors.consent && (
                <p className="text-xs text-red-600">Consent is required.</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || hasSubmitted}
              className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-bold py-3 rounded-lg text-lg shadow-md hover:shadow-lg hover:from-amber-500 hover:to-amber-600 transition"
            >
              {isSubmitting
                ? "Submitting..."
                : hasSubmitted
                  ? "Submitted"
                  : "Get Your Free Claim Review"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
