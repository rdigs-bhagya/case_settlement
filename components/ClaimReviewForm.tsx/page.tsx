"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  firefighterQuestion: string;
  diagnosisTypes: string;
  employed: string;
  diagnosed: string;
  conditions: string;
  additionalInfo: string;
  consent: boolean;
};

export default function ClaimReviewForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <section className="bg-gradient-to-b from-muted/30 to-background py-2">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-navy-blue text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Free Claim Review
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-blue mb-6">
              Get Your Free Claim Review
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Complete the form below to receive a comprehensive evaluation of your case at no cost.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-border/50">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Two Column Layout */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {/* First Name */}
                  <div>
                    <Label className="text-navy-blue font-semibold text-lg">First Name*</Label>
                    <Input
                      placeholder="Enter Your First Name"
                      {...register("firstName", { required: "First name is required" })}
                      className="mt-2 h-12 border-2 border-border focus:border-navy-blue rounded-xl"
                    />
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                  </div>

                  {/* Last Name */}
                  <div>
                    <Label className="text-navy-blue font-semibold text-lg">Last Name*</Label>
                    <Input
                      placeholder="Enter Your Last Name"
                      {...register("lastName", { required: "Last name is required" })}
                      className="mt-2 h-12 border-2 border-border focus:border-navy-blue rounded-xl"
                    />
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <Label className="text-navy-blue font-semibold text-lg">Email*</Label>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      {...register("email", { required: "Email is required" })}
                      className="mt-2 h-12 border-2 border-border focus:border-navy-blue rounded-xl"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <Label className="text-navy-blue font-semibold text-lg">Phone*</Label>
                    <Input
                      type="tel"
                      placeholder="(xxx) xxx-xxxx"
                      {...register("phone", { required: "Phone is required" })}
                      className="mt-2 h-12 border-2 border-border focus:border-navy-blue rounded-xl"
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Firefighter Question */}
                  <div>
                    <Label className="text-navy-blue font-semibold text-lg">
                      Were you exposed to AFFF as firefighter/military?*
                    </Label>
                    <Select onValueChange={(val) => setValue("firefighterQuestion", val)}>
                      <SelectTrigger className="mt-2 h-12 border-2 border-border focus:border-navy-blue rounded-xl">
                        <SelectValue placeholder="-- Select --" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Diagnosis */}
                  <div>
                    <Label className="text-navy-blue font-semibold text-lg">Diagnosis*</Label>
                    <Select onValueChange={(val) => setValue("diagnosisTypes", val)}>
                      <SelectTrigger className="mt-2 h-12 border-2 border-border focus:border-navy-blue rounded-xl">
                        <SelectValue placeholder="-- Select --" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kidney-cancer">Kidney Cancer</SelectItem>
                        <SelectItem value="testicular-cancer">Testicular Cancer</SelectItem>
                        <SelectItem value="prostate-cancer">Prostate Cancer</SelectItem>
                        <SelectItem value="thyroid-disease">Thyroid Disease</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Employment */}
                  <div>
                    <Label className="text-navy-blue font-semibold text-lg">Your Role*</Label>
                    <Select onValueChange={(val) => setValue("employed", val)}>
                      <SelectTrigger className="mt-2 h-12 border-2 border-border focus:border-navy-blue rounded-xl">
                        <SelectValue placeholder="-- Select --" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="firefighter">Firefighter</SelectItem>
                        <SelectItem value="military">Military Personnel</SelectItem>
                        <SelectItem value="airport-worker">Airport Worker</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Diagnosed Radio */}
                  <div>
                    <Label className="text-navy-blue font-semibold text-lg">Applicant diagnosed?*</Label>
                    <div className="flex gap-6 mt-3">
                      <label className="flex items-center">
                        <input type="radio" value="yes" {...register("diagnosed")} className="mr-2" /> Yes
                      </label>
                      <label className="flex items-center">
                        <input type="radio" value="no" {...register("diagnosed")} className="mr-2" /> No
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* More Questions */}
              <div className="space-y-6">
                <div>
                  <Label className="text-navy-blue font-semibold text-lg">
                    Have you experienced any related conditions?*
                  </Label>
                  <Textarea
                    {...register("conditions")}
                    placeholder="Please describe..."
                    className="mt-2 min-h-24 border-2 border-border focus:border-navy-blue rounded-xl"
                  />
                </div>

                <div>
                  <Label className="text-navy-blue font-semibold text-lg">
                    Do you currently have a lawyer representing your case?*
                  </Label>
                  <Textarea
                    {...register("additionalInfo")}
                    placeholder="Enter details..."
                    className="mt-2 min-h-24 border-2 border-border focus:border-navy-blue rounded-xl"
                  />
                </div>

                {/* Consent */}
                <div className="flex items-start space-x-3 p-6 bg-muted/30 rounded-xl">
                  <Checkbox
                    id="consent"
                    checked={watch("consent")}
                    onCheckedChange={(checked) => setValue("consent", checked as boolean)}
                  />
                  <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                    By submitting this form, I agree to the terms of service...
                  </Label>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-warning-yellow to-warning-yellow/90 text-navy-blue font-bold py-6 rounded-xl text-xl shadow-lg"
                >
                  GET YOUR FREE CLAIM REVIEW
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
