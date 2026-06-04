"use client";

import ServiceProcess from "@/components/ServiceProcess.tsx/page";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const mvaQualificationData = {
        mainTitle: "Do You Qualify for Motor Vehicle Accident Compensation?",
        subTitle: "If you or a loved one has been injured in a motor vehicle accident, you may be entitled to financial compensation for medical bills, lost wages, and pain and suffering.",
        steps: [
            {
                title: "Accident Involvement",
                description: "You were involved in a car, truck, motorcycle, bicycle, pedestrian, or other motor vehicle accident."
            },
            {
                title: "Injury Diagnosis",
                description: "You sustained physical injuries such as fractures, head trauma, spinal injuries, or other serious medical conditions."
            },
            {
                title: "Timeline Connection",
                description: "Your injuries and related expenses occurred directly after the accident caused by another driver’s negligence."
            }
        ]
    };

/* ===============================
   🕒 TIME BUCKET CALCULATOR
================================ */
function getTimeBuckets(incidentDate: string) {
    const incident = new Date(incidentDate);
    const today = new Date();

    const diffDays = Math.floor(
        (today.getTime() - incident.getTime()) / (1000 * 60 * 60 * 24)
    );

    return {
        occurred_within_30_days: diffDays >= 0 && diffDays <= 30,
        occurred_31_to_60_days: diffDays > 30 && diffDays <= 60,
        occurred_61_to_90_days: diffDays > 60 && diffDays <= 90,
        occurred_3_to_6_months: diffDays > 90 && diffDays <= 180,
        occurred_6_to_9_months: diffDays > 180 && diffDays <= 270,
        occurred_9_to_12_months: diffDays > 270 && diffDays <= 365,
    };
}

export default function MVAPage() {
    const [loading, setLoading] = useState(false);

    const submitLead = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form));

        /* 🔒 TrustedForm (REQUIRED) */
        const trustedFormUrl =
            (document.getElementById("xxTrustedFormCertUrl") as HTMLInputElement)
                ?.value || "";

        /* 🕒 Auto time bucket calculation */
        const timeBuckets = getTimeBuckets(data.incident_date as string);

        // ❌ Invalid date (>12 months)
        if (Object.values(timeBuckets).every(v => !v)) {
            alert("❌ Incident date must be within the last 12 months");
            setLoading(false);
            return;
        }

        /* ===============================
           📦 BASE PAYLOAD (ALL REQUIRED)
        ================================ */
        const payload = {
            // Lead info
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            phone: data.phone,
            address_1: data.address_1 || "",
            address_2: data.address_2 || "",
            city: data.city || "",
            postal_code: data.postal_code || "",
            state: data.state,
            accident_state: data.accident_state,
            incident_date: data.incident_date,
            injuries: data.injuries,
            summary: data.summary || "",

            // System required
            publisher_id: 16,
            test_lead: true,
            type_of_delivery: "warm_transfer",
            trustedform_cert_url: trustedFormUrl,
            source: "mva_landing_page",

            // Qualification flags
            has_no_current_attorney: true,
            has_not_been_dropped: true,
            has_not_settled: true,
            was_not_at_fault: true,
            has_police_investigated: true,
            has_insurance_or_uninsured_motorist_coverage: true,
            has_physical_injuries: true,
            had_medical_treatment_within_30_days_of_accident: true,
            has_ongoing_medical_treatment_once_a_month_at_least: true,
            verified_email_matches_pc: true,
            verified_phone_matches_pc: true,
            police_report_confirms_accident_and_date: true,

            // 🕒 ONE-HOT time bucket
            ...timeBuckets,
        };

        /* ✅ Qualification logic */
        const isQualified =
            payload.has_physical_injuries &&
            payload.has_no_current_attorney &&
            payload.was_not_at_fault &&
            (payload.occurred_within_30_days || payload.occurred_31_to_60_days);

        try {
            if (isQualified) {
                /* ===============================
                   ✅ QUALIFIED LEAD
                ================================ */
                const qualifiedRes = await fetch(
                    "https://api.ravlco.com/leads/receive_qualified",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "498f803724194d6752ab6686ace5ea7be119d3e77863f615",
                        },
                        body: JSON.stringify(payload),
                    }
                );

                if (qualifiedRes.ok) {
                    alert("✅ Qualified lead submitted successfully");
                    form.reset();
                    return;
                }
            }

            /* ===============================
               ⚠️ DISQUALIFIED LEAD
            ================================ */
            const disqualifiedPayload = {
                ...payload,
                has_physical_injuries: false,
                has_ongoing_medical_treatment_once_a_month_at_least: false,
            };

            await fetch("https://api.ravlco.com/leads/receive_disqualified", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "498f803724194d6752ab6686ace5ea7be119d3e77863f615",
                },
                body: JSON.stringify(disqualifiedPayload),
            });

            alert("⚠️ Lead submitted as Disqualified");
            form.reset();
        } catch (error) {
            console.error(error);
            alert("❌ Submission failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section className=" text-black relative overflow-hidden">
                <div className="container mx-auto px-8 py-10 relative z-10 mt-18">
                    {/* First Row (Text Left - Image Right) */}
                    <div className="grid lg:grid-cols-2 gap-6 items-center min-h-[500px]">
                        <div className="order-2 lg:order-1 space-y-4">
                            <h1 className="text-4xl lg:text-5xl xl:text-4xl font-extrabold leading-tight">
                                <span className="text-primary">Why Do I Need a Lawyer for a Car Accident?</span>
                            </h1>
                            <div className="space-y-6 text-lg sm:text-lg text-black/90">
                                <p>
                                    Following a motor vehicle accident, victims may face medical treatment, financial strain, and uncertainty regarding their rights. Retaining a qualified personal injury attorney ensures that state-specific laws are properly applied to your case, insurance companies are held accountable, and damages such as medical costs, lost wages, and pain and suffering are fully assessed. Legal representation provides protection and guidance at every stage of the process.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative  transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="../Motorvehicleaccedentimages/Motor Vehicle Accident.webp"
                                    alt="Firefighters using AFFF foam at emergency scene"
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/20 to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    {/* Second Row (Image Left - Text Right) */}
                    <div className="grid lg:grid-cols-2 gap-6 items-center min-h-[450px] ">
                        <div className="order-1 lg:order-1 relative">
                            <div className="relative transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="../Motorvehicleaccedentimages/Motor Vehicle Accident 2.webp"
                                    alt="AFFF lawsuit victims illustration"
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/20 to-transparent"></div>
                            </div>
                        </div>
                        <div className="order-2 lg:order-2 space-y-4">
                            <h1 className="text-4xl lg:text-5xl xl:text-4xl font-extrabold leading-tight">
                                <span className="text-primary">Types of Motor Vehicle Accidents We Handle</span>
                            </h1>
                            <div className="space-y-6 text-lg sm:text-lg text-black/90">
                                <p>
                                    From fender benders to catastrophic crashes, our legal team is ready to represent you. We handle car, truck, motorcycle, and bicycle accidents, as well as pedestrian injuries, boating accidents, ATV crashes, train accidents, and public transportation incidents.
                                    No matter the type of accident, we’re here 24/7 to support you and pursue justice on your behalf.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons (shared for both sections) */}
                    <div className="flex gap-4 pt-2 justify-center items-center">
                        <div className="text-center">
                            <Button
                                size="lg"
                                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 text-lg font-bold"
                            >
                                Get Free Consultation
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <ServiceProcess
                mainTitle={mvaQualificationData.mainTitle}
                subTitle={mvaQualificationData.subTitle}
                steps={mvaQualificationData.steps}
            />
            {/* <section className="py-1 bg-gradient-to-b from-background to-muted/30 mb-6">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-4">
                        <div className="inline-block bg-navy-blue text-white px-6 rounded-full text-sm font-semibold mb-6">
                            Qualification Check
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-navy-blue mb-6">
                            Do You Qualify for Motor Vehicle Accident Compensation?
                        </h2>
                        <p className="text-muted-foreground text-xl max-w-4xl mx-auto leading-relaxed">
                            If you or a loved one has been injured in a motor vehicle accident, you may be entitled to financial compensation for medical bills, lost wages, and pain and suffering.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="group relative">
                            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center h-full border-t-4 border-navy-blue">
                                <div className="w-15 h-15 bg-gradient-to-br from-navy-blue to-navy-blue-dark text-blue rounded-2xl flex items-center justify-center mx-auto mb-2 text-3xl font-bold group-hover:scale-110 transition-transform">
                                    1
                                </div>
                                <h3 className="text-2xl font-bold text-navy-blue mb-2">
                                    Accident Involvement
                                </h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    You were involved in a car, truck, motorcycle, bicycle, pedestrian, or other motor vehicle accident.
                                </p>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center h-full border-t-4 border-navy-blue">
                                <div className="w-15 h-15 bg-gradient-to-br from-navy-blue to-navy-blue-dark text-blue rounded-2xl flex items-center justify-center mx-auto mb-2 text-3xl font-bold group-hover:scale-110 transition-transform">
                                    2
                                </div>
                                <h3 className="text-2xl font-bold text-navy-blue mb-4">
                                    Injury Diagnosis
                                </h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    You sustained physical injuries such as fractures, head trauma, spinal injuries, or other serious medical conditions.
                                </p>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center h-full border-t-4 border-navy-blue">
                                <div className="w-18 h-18 bg-gradient-to-br from-navy-blue to-navy-blue-dark text-blue rounded-2xl flex items-center justify-center mx-auto mb-2 text-3xl font-bold group-hover:scale-110 transition-transform">
                                    3
                                </div>
                                <h3 className="text-2xl font-bold text-navy-blue mb-4">
                                    Timeline Connection
                                </h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    Your injuries and related expenses occurred directly after the accident caused by another driver’s negligence or unsafe conditions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* ================= FORM SECTION ================= */}
            <section className="py-10 bg-gradient-to-b from-background to-muted/30 mb-6">
                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border p-8">
                    <h2 className="text-3xl font-bold text-center mb-2">
                        Free Claim Review
                    </h2>
                    <p className="text-center text-gray-600 mb-8">
                        No obligation. Get a quick review of your accident claim.
                    </p>

                    <section className="py-10 bg-gradient-to-b from-background to-muted/30 mb-6">
                        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border p-8">

                            <form onSubmit={submitLead} className="space-y-6">

                                {/* Name */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            First Name
                                        </label>
                                        <input
                                            name="first_name"
                                            required
                                            placeholder="John"
                                            className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Last Name
                                        </label>
                                        <input
                                            name="last_name"
                                            required
                                            placeholder="Doe"
                                            className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Contact */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="john@example.com"
                                            className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Phone
                                        </label> 
                                        <input
                                            name="phone"
                                            required
                                            placeholder="4155550199"
                                            className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Address */}
                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Address Line 1
                                    </label>
                                    <input
                                        name="address_1"
                                        placeholder="123 Market St"
                                        className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Address Line 2
                                    </label>
                                    <input
                                        name="address_2"
                                        placeholder="123 Market St"
                                        className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
                                    />
                                </div>


                                <div className="grid md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            City
                                        </label>
                                        <input
                                            name="city"
                                            placeholder="San Francisco"
                                            className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            ZIP Code
                                        </label>
                                        <input
                                            name="postal_code"
                                            placeholder="94105"
                                            className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            State
                                        </label>
                                        <input
                                            name="state"
                                            required
                                            placeholder="CA"
                                            className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Accident Info */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Accident State
                                        </label>
                                        <input
                                            name="accident_state"
                                            required
                                            placeholder="CA"
                                            className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Incident Date
                                        </label>
                                        <input
                                            type="date"
                                            name="incident_date"
                                            required
                                            className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Injuries */}
                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Injuries
                                    </label>
                                    <textarea
                                        name="injuries"
                                        required
                                        rows={3}
                                        placeholder="Describe your injuries"
                                        className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-primary outline-none resize-none"
                                    />
                                </div>

                                {/* Summary */}
                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Summary
                                    </label>
                                    <textarea
                                        name="summary"
                                        rows={3}
                                        placeholder="Brief accident summary"
                                        className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-primary outline-none resize-none"
                                    />
                                </div>

                                {/* TrustedForm */}
                                <input
                                    type="hidden"
                                    id="xxTrustedFormCertUrl"
                                    name="xxTrustedFormCertUrl"
                                />

                                {/* Submit */}
                                <button
                                    disabled={loading}
                                    className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-50"
                                >
                                    {loading ? "Submitting..." : "Submit Claim"}
                                </button>

                                <p className="text-xs text-gray-500 text-center">
                                    By submitting, you agree to be contacted regarding your claim.
                                </p>

                            </form>
                        </div>
                    </section>

                </div>
            </section>
        </>
    );
}
