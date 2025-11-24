"use client";

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
  consent?: boolean;
  xxTrustedFormCertUrl: string;
  clientDetails?: ClientDetails;
};

type ClaimReviewFormProps = {
  service: string;
};

export default function ClaimReviewForm({ service }: ClaimReviewFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({ defaultValues: { serviceAnswers: [] } });

  const serviceAnswers = watch("serviceAnswers") || [];

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
  data.service = service;

  // TrustedForm
  const tfValue = (document.getElementById("xxTrustedFormCertUrl") as HTMLInputElement)?.value;
  data.xxTrustedFormCertUrl = tfValue || "";

  // Get client details
  const clientDetails = await getClientDetails();
  (data as any).clientDetails = clientDetails;

  try {
    const res = await fetch("https://case-9w55.onrender.com/claims", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (res.ok) {
      alert("✅ Form submitted successfully!");
      reset();
    } else {
      alert("❌ " + result.error);
    }
  } catch (err) {
    console.error(err);
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
                  By checking this box and submitting my request, I confirm that I have read and agree to the privacy policy of this site and that I consent to receive marketing emails, phone calls and/or text messages...
                </Label>
              </div>
              {errors.consent && (
                <p className="text-xs text-red-600">Consent is required.</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-bold py-3 rounded-lg text-lg shadow-md hover:shadow-lg hover:from-amber-500 hover:to-amber-600 transition"
            >
              Get Your Free Claim Review
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
