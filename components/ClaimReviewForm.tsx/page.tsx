"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  lawyerInfo: string;
  consent: boolean;
  // dynamic
  firefighterQuestion?: string;
  exposureCount?: string;
  occupation?: string;
  deceased?: string;
  afffConditions?: string;
  necCondition?: string;
  roundupUse?: string;
  hairRelaxerUse?: string;
  silicosisExposure?: string;
  necDiagnosed?: string;
  necFormula?: string;
  necComplications?: string;
  mvaState?: string;
  mvaInjury?: string;
  mvaCause?: string;
  mvaRecentAccident?: string;
  mvaAccidentDate?: string;
  mvaTreatment?: string;
  mvaFederalEmployee?: string;
  mvaPoliceReport?: string;
};

type ClaimReviewFormProps = {
  service: string; // "afff", "nec", "mva", etc.
};

export default function ClaimReviewForm({ service }: ClaimReviewFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        alert("✅ Form submitted successfully!");
        reset();
      } else {
        alert("❌ Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Error submitting form!");
    }
  };

  // Shared styles
  const inputClass =
    "mt-2 h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm " +
    "placeholder:text-slate-400 shadow-sm focus:outline-none " +
    "focus:ring-2 focus:ring-blue-200 focus:border-blue-600 transition";

  const selectTriggerClass =
    "mt-2 h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm " +
    "shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-600 transition";

  const textareaClass =
    "mt-2 min-h-[100px] w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm " +
    "placeholder:text-slate-400 shadow-sm focus:outline-none " +
    "focus:ring-2 focus:ring-blue-200 focus:border-blue-600 transition";

  const labelClass = "text-slate-800 font-semibold text-sm";

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-block bg-blue-900 text-white px-5 py-1.5 rounded-full text-xs font-semibold mb-4">
              Free Claim Review
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
              Get Your Free Claim Review
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              Complete the form below to receive a comprehensive evaluation of your case.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 border border-slate-200">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
              {/* 🔹 Static Fields */}
              <div className="grid lg:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <Label className={labelClass}>First Name*</Label>
                  <Input
                    {...register("firstName", { required: "First name is required" })}
                    placeholder="Enter first name"
                    className={inputClass}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-xs text-red-600">{errors.firstName.message}</p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <Label className={labelClass}>Last Name*</Label>
                  <Input
                    {...register("lastName", { required: "Last name is required" })}
                    placeholder="Enter last name"
                    className={inputClass}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-xs text-red-600">{errors.lastName.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Label className={labelClass}>Email*</Label>
                  <Input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    placeholder="name@example.com"
                    className={inputClass}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <Label className={labelClass}>Phone*</Label>
                  <Input
                    type="tel"
                    {...register("phone", {
                      required: "Phone is required",
                      pattern: {
                        value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
                        message: "Enter a valid phone number",
                      },
                      minLength: {
                        value: 10,
                        message: "Phone number must be at least 10 digits",
                      },
                      maxLength: {
                        value: 10,
                        message: "Phone number must be at most 10 digits",
                      },
                    })}
                    placeholder="(xxx) xxx-xxxx"
                    className={inputClass}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
                  )}
                </div>

              </div>

              {/* 🔹 Dynamic Fields Below */}
              <div className="space-y-6">
                {service === "afff" && (
                  <>
                    <div>
                      <Label className={labelClass}>
                        Were you or a loved one a firefighter or U.S. Military Service member exposed to AFFF?*
                      </Label>
                      <Select onValueChange={(val) => setValue("firefighterQuestion", val)}>
                        <SelectTrigger className={selectTriggerClass}>
                          <SelectValue placeholder="-- Select --" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className={labelClass}>Indicate the number of times you were exposed*</Label>
                      <Select onValueChange={(val) => setValue("exposureCount", val)}>
                        <SelectTrigger className={selectTriggerClass}>
                          <SelectValue placeholder="-- Select --" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10</SelectItem>
                          <SelectItem value="10-20">10-20</SelectItem>
                          <SelectItem value="20-30">20-30</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className={labelClass}>In what occupation were you directly exposed?*</Label>
                      <Select onValueChange={(val) => setValue("occupation", val)}>
                        <SelectTrigger className={selectTriggerClass}>
                          <SelectValue placeholder="-- Select --" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="firefighter">Firefighter</SelectItem>
                          <SelectItem value="first-responder">First Responder</SelectItem>
                          <SelectItem value="military">Other Military Personnel</SelectItem>
                          <SelectItem value="airport">Airport Personnel</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className={labelClass}>Is the injured party deceased?*</Label>
                      <div className="flex gap-6 mt-3">
                        <label className="inline-flex items-center gap-2 text-slate-700">
                          <input type="radio" value="yes" {...register("deceased")} className="h-4 w-4" /> Yes
                        </label>
                        <label className="inline-flex items-center gap-2 text-slate-700">
                          <input type="radio" value="no" {...register("deceased")} className="h-4 w-4" /> No
                        </label>
                      </div>
                    </div>

                    <div>
                      <Label className={labelClass}>
                        Have you or a loved one developed any of the following conditions after being exposed to AFFF?*
                      </Label>
                      <Select onValueChange={(val) => setValue("afffConditions", val)}>
                        <SelectTrigger className={selectTriggerClass}>
                          <SelectValue placeholder="-- Select condition --" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="other-cancer">Other Cancer</SelectItem>
                          <SelectItem value="multi-myeloma">Multi Myeloma</SelectItem>
                          <SelectItem value="infertility">Infertility</SelectItem>
                          <SelectItem value="ovarian-cancer">Ovarian Cancer</SelectItem>
                          <SelectItem value="thyroid-cancer">Thyroid Cancer</SelectItem>
                          <SelectItem value="leukemia">Leukemia</SelectItem>
                          <SelectItem value="pancreatic-cancer">Pancreatic Cancer</SelectItem>
                          <SelectItem value="breast-cancer">Breast Cancer</SelectItem>
                          <SelectItem value="lymphoma">Lymphoma</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}

                {service === "nec" && (
                  <div className="space-y-4">
                    {/* Q1 */}
                    <div>
                      <Label className={labelClass}>
                        Has your child been diagnosed with Necrotizing Enterocolitis (NEC)?*
                      </Label>
                      <Select onValueChange={(val) => setValue("necDiagnosed", val)}>
                        <SelectTrigger className={selectTriggerClass}>
                          <SelectValue placeholder="-- Select --" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Q2 */}
                    <div>
                      <Label className={labelClass}>
                        Was your child given formula or fortifier before being diagnosed with NEC?*
                      </Label>
                      <Select onValueChange={(val) => setValue("necFormula", val)}>
                        <SelectTrigger className={selectTriggerClass}>
                          <SelectValue placeholder="-- Select --" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Q3 */}
                    <div>
                      <Label className={labelClass}>
                        Were there any complications with your child's NEC?*
                      </Label>
                      <Select onValueChange={(val) => setValue("necComplications", val)}>
                        <SelectTrigger className={selectTriggerClass}>
                          <SelectValue placeholder="-- Select --" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {service === "mva" && (
                  <div className="space-y-4">
                    {/* Q1 - State */}
                    <div>
                      <Label className={labelClass}>State (e.g., NY for New York)*</Label>
                      <Input
                        placeholder="Enter your state abbreviation"
                        className={selectTriggerClass}
                        onChange={(e) => setValue("mvaState", e.target.value)}
                      />
                    </div>

                    {/* Q2 - Injured in accident */}
                    <div>
                      <Label className={labelClass}>
                        Were you or a loved one injured in an accident that wasn’t your fault?*
                      </Label>
                      <Select onValueChange={(val) => setValue("mvaInjury", val)}>
                        <SelectTrigger className={selectTriggerClass}>
                          <SelectValue placeholder="-- Select --" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Q3 - Cause of injury */}
                    <div>
                      <Label className={labelClass}>What caused your injury?*</Label>
                      <Input
                        placeholder="e.g., Car crash, Truck accident, Slip & Fall"
                        className={selectTriggerClass}
                        onChange={(e) => setValue("mvaCause", e.target.value)}
                      />
                    </div>

                    {/* Q4 - Accident within 12 months */}
                    <div>
                      <Label className={labelClass}>
                        Did this accident happen in the last 12 months?*
                      </Label>
                      <Select onValueChange={(val) => setValue("mvaRecentAccident", val)}>
                        <SelectTrigger className={selectTriggerClass}>
                          <SelectValue placeholder="-- Select --" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Q5 - Date of Accident */}
                    <div>
                      <Label className={labelClass}>Date of Accident (MM/DD/YYYY)*</Label>
                      <Input
                        type="date"
                        className={selectTriggerClass}
                        onChange={(e) => setValue("mvaAccidentDate", e.target.value)}
                      />
                    </div>

                    {/* Q6 - Medical treatment / hospitalization */}
                    <div>
                      <Label className={labelClass}>
                        Did the injury require hospitalization, medical treatment, surgery or cause you to miss work?*
                      </Label>
                      <Select onValueChange={(val) => setValue("mvaTreatment", val)}>
                        <SelectTrigger className={selectTriggerClass}>
                          <SelectValue placeholder="-- Select --" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Q7 - Federal government employee */}
                    <div>
                      <Label className={labelClass}>
                        Do you work for a federal government agency?*
                      </Label>
                      <Select onValueChange={(val) => setValue("mvaFederalEmployee", val)}>
                        <SelectTrigger className={selectTriggerClass}>
                          <SelectValue placeholder="-- Select --" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Q8 - Accident reported to police */}
                    <div>
                      <Label className={labelClass}>
                        Was this accident reported to police?*
                      </Label>
                      <Select onValueChange={(val) => setValue("mvaPoliceReport", val)}>
                        <SelectTrigger className={selectTriggerClass}>
                          <SelectValue placeholder="-- Select --" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}


                {service === "roundup" && (
                  <div>
                    <Label className={labelClass}>Did you use Roundup weed killer?*</Label>
                    <Select onValueChange={(val) => setValue("roundupUse", val)}>
                      <SelectTrigger className={selectTriggerClass}>
                        <SelectValue placeholder="-- Select --" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {service === "hair-relaxer" && (
                  <div>
                    <Label className={labelClass}>Did you use chemical hair relaxers regularly?*</Label>
                    <Select onValueChange={(val) => setValue("hairRelaxerUse", val)}>
                      <SelectTrigger className={selectTriggerClass}>
                        <SelectValue placeholder="-- Select --" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {service === "silicosis" && (
                  <div>
                    <Label className={labelClass}>Were you exposed to silica dust at work?*</Label>
                    <Select onValueChange={(val) => setValue("silicosisExposure", val)}>
                      <SelectTrigger className={selectTriggerClass}>
                        <SelectValue placeholder="-- Select --" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}


                {/* Add other services here like nec, mva, hair-relaxer, silicosis... */}
              </div>

              {/* 🔹 Bottom Section */}
              <div className="space-y-6">
                <div>
                  <Label className={labelClass}>Do you currently have a lawyer?*</Label>
                  <Textarea
                    {...register("lawyerInfo", { required: "Please specify" })}
                    placeholder="Enter details..."
                    className={textareaClass}
                  />
                  {errors.lawyerInfo && (
                    <p className="mt-1 text-xs text-red-600">{errors.lawyerInfo.message}</p>
                  )}
                </div>

                <div className="flex items-start gap-3 p-5 bg-slate-50 rounded-xl border border-slate-200">
                  <Checkbox
                    id="consent"
                    checked={!!watch("consent")}
                    onCheckedChange={(checked) => setValue("consent", checked as boolean)}
                  />
                  <Label htmlFor="consent" className="text-sm text-slate-600">
                    I confirm that the information provided is accurate.
                  </Label>
                </div>
                {errors.consent && (
                  <p className="text-xs text-red-600">Consent is required.</p>
                )}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-bold py-4 rounded-xl text-lg shadow-md hover:shadow-lg hover:from-amber-500 hover:to-amber-600 transition"
                >
                  GET YOUR FREE CLAIM REVIEW
                </Button>
              </div>
            </form>
          </div>

          {/* Footer Note */}
          <p className="text-center text-xs text-slate-500 mt-6">
            🔒 Your information is secure and confidential.
          </p>
        </div>
      </div>
    </section>
  );
}
