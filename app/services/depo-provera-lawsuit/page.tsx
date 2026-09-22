import ClaimReviewForm from "@/components/ClaimReviewForm.tsx/page";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Depo-Provera Lawsuit | Brain Tumor Claim Support",
  description:
    "Used Depo-Provera and later diagnosed with a meningioma or related brain tumor? Learn about your legal options and seek compensation.",
};

const aboutCards = [
  {
    title: "Brain Tumor Risk",
    text: "Studies show a significantly increased risk of meningiomas in patients with long-term Depo-Provera use.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 4c2.2 0 4 1.8 4 4 0 2.2-1.4 3.7-3 4.4V15c0 1.1-.9 2-2 2s-2-.9-2-2v-2.6C9.4 11.7 8 10.2 8 8c0-2.2 1.8-4 4-4Z" />
        <path d="M8 16h8" />
      </svg>
    ),
  },
  {
    title: "Failed Warning",
    text: "Pfizer allegedly failed to warn patients and healthcare providers about these serious risks.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 4 4 18h16L12 4Z" />
        <path d="M12 9v4" />
        <circle cx="12" cy="15.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Long-term Use",
    text: "Risk appears to increase with prolonged use and repeated dosing over time.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="7" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "Legal Action",
    text: "Thousands of women are now seeking compensation after experiencing serious complications.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 7h14" />
        <path d="M7 7v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7" />
        <path d="M10 11v4" />
        <path d="M14 11v4" />
      </svg>
    ),
  },
];

const qualificationPoints = [
  "You used Depo-Provera for birth control",
  "You were diagnosed with a meningioma (brain tumor)",
  "You used Depo-Provera for 12 months or longer",
  "Your diagnosis occurred after using Depo-Provera",
];

const symptoms = [
  "Persistent headaches",
  "Vision problems or changes",
  "Seizures or convulsions",
  "Hearing loss or ringing in ears",
  "Memory problems or confusion",
  "Balance or coordination issues",
];

const compensationPoints = [
  {
    title: "Medical Expenses",
    description: "Past and future medical costs, surgery, treatments, and rehabilitation.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 7h16" />
        <path d="M7 7v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7" />
        <path d="M10 11h4" />
        <path d="M10 15h4" />
      </svg>
    ),
  },
  {
    title: "Lost Wages",
    description: "Income lost due to illness, treatment, and reduced earning capacity.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 20V9" />
        <path d="M12 20V4" />
        <path d="M19 20v-7" />
      </svg>
    ),
  },
  {
    title: "Pain & Suffering",
    description: "Physical pain, emotional distress, and reduced quality of life.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 20s-6-4-6-10a4 4 0 1 1 8 0 4 4 0 1 1 8 0c0 6-6 10-6 10Z" />
      </svg>
    ),
  },
  {
    title: "Other Damages",
    description: "Disability, disfigurement, and loss of life enjoyment.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3 4 7v5c0 4.4 2.8 8.3 8 9 5.2-.7 8-4.6 8-9V7l-8-4Z" />
      </svg>
    ),
  },
];

const legalTeamPoints = [
  "24/7 Availability",
  "Confidential Consultation",
  "Direct Attorney Access",
  "No Win, No Fee",
];

const stats = [
  {
    title: "25+ Years Experience",
    text: "Decades of experience in pharmaceutical litigation and mass tort cases.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3v18" />
        <path d="M3 7h18" />
        <path d="M6 12h12" />
      </svg>
    ),
  },
  {
    title: "10,000+ Clients Served",
    text: "Successfully represented thousands of clients in similar cases.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="9.5" cy="7" r="3" />
        <path d="M17 8v6" />
        <path d="M20 11h-6" />
      </svg>
    ),
  },
  {
    title: "$500M+ Recovered",
    text: "A proven track record of securing substantial settlements.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3v18" />
        <path d="M3 7c2.2 0 4-1.8 4-4" />
        <path d="M21 17c-2.2 0-4 1.8-4 4" />
        <path d="M6 7c0 4.4 2.6 7.4 6 8.9 3.4-1.5 6-4.5 6-8.9" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote:
      "The legal team was incredibly supportive throughout the entire process. They kept me informed and fought hard for my compensation.",
    name: "Sarah M.",
  },
  {
    quote:
      "I was hesitant to pursue legal action, but I’m so glad I did. The settlement helped cover my medical expenses and more.",
    name: "Jennifer L.",
  },
  {
    quote:
      "They made a difficult situation feel manageable and explained every step clearly. I felt supported from day one.",
    name: "Amanda R.",
  },
];

const DepoProveraSection = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f8fbff_0%,#eef4ff_45%,#fdfefe_100%)]">
        <div className="mx-auto mt-[80px] max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <span className="inline-block rounded-full border border-blue-900 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-900">
                Free Case Evaluation
              </span>
              <h1 className="text-left text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Depo-Provera <span className="text-primary">Brain Tumor Lawsuit</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-700">
                If you developed a brain tumor after using Depo-Provera, you may be entitled to significant compensation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-900 px-8 py-6 text-white hover:bg-blue-800">
                  Free Case Review
                </Button>
                <Button size="lg" variant="outline" className="border-blue-900 px-8 py-6 text-blue-900 hover:bg-blue-50">
                  No Fees Unless We Win
                </Button>
              </div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                Trusted by thousands of clients nationwide
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur">
              <ClaimReviewForm service="depo-provera" compact />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <h2 className="text-left text-3xl font-bold text-slate-900 lg:text-4xl">
                About the <span className="text-primary">Depo-Provera Lawsuit</span>
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Scientific research has revealed a disturbing connection between Pfizer's Depo-Provera and an increased risk of developing brain tumors called meningiomas.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {aboutCards.map((item, index) => (
                  <div key={index} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900 text-white">
                      {item.icon}
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-slate-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">What is Depo-Provera?</h3>
              <p className="mt-4 text-slate-700">
                Depo-Provera is a long-acting birth control injection containing medroxyprogesterone acetate, administered every three months. It has been widely used by millions of women since its FDA approval.
              </p>
              <p className="mt-4 text-slate-700">
                Recent studies have revealed that long-term use significantly increases the risk of developing meningiomas, a type of brain tumor that can cause serious neurological complications.
              </p>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-semibold text-slate-900">The Legal Claims</h4>
                <ul className="mt-4 space-y-3 text-slate-700">
                  <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-900" />Pfizer failed to adequately warn patients and healthcare providers about brain tumor risks.</li>
                  <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-900" />The company knew or should have known about the increased meningioma risk.</li>
                  <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-900" />Defective design and inadequate testing of the product.</li>
                  <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-900" />Negligent marketing and promotion of Depo-Provera.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-center text-3xl font-bold text-slate-900 lg:text-4xl">
              Do You Qualify for <span className="text-primary">Compensation?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-700">
              If you meet these criteria, you may be entitled to significant compensation for your injuries and suffering.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Qualification Requirements</h3>
              <ul className="mt-6 space-y-4 text-slate-700">
                {qualificationPoints.map((point, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-900 text-sm font-bold text-white">
                      ✓
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[2rem] border border-blue-200 bg-blue-50 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Common symptoms include</h3>
              <ul className="mt-6 space-y-3 text-slate-700">
                {symptoms.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-900" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-xl border border-blue-200 bg-white/70 p-4 text-sm text-slate-700">
                Time is limited — statutes of limitation may apply. Don’t wait to seek legal help.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900 lg:text-4xl">
            What Compensation May Be <span className="text-primary">Available</span>
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {compensationPoints.map((item, index) => (
              <div key={index} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900 text-white">
                    {item.icon}
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-slate-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Understanding Your Rights</h3>
              <ul className="mt-5 space-y-3 text-slate-700">
                <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-900" />Pfizer failed to adequately warn about brain tumor risks.</li>
                <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-900" />You trusted Depo-Provera as a safe contraceptive option.</li>
                <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-900" />Your life has been significantly impacted by the diagnosis.</li>
                <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-900" />You deserve compensation for your suffering and expenses.</li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-blue-50 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">No Risk Legal Representation</h3>
              <p className="mt-4 text-slate-700">No attorney fees unless we win your case.</p>
              <p className="mt-3 text-slate-700">Free initial consultation and case review.</p>
              <p className="mt-3 text-slate-700">Experienced mass tort litigation team.</p>
              <p className="mt-3 text-slate-700">Proven track record of successful settlements.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-blue-50/60 to-slate-50 p-8 shadow-[0_18px_55px_rgba(15,23,42,0.08)] lg:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(30,64,175,0.12),_transparent_35%)]" />
            <div className="relative">
              <div className="text-center">
                <span className="inline-flex rounded-full border border-blue-900 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-900">
                  Why Choose Us
                </span>
                <h2 className="mt-5 text-3xl font-bold text-slate-900 lg:text-4xl">
                  Why Choose Our <span className="text-primary">Legal Team</span>
                </h2>
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-700">
                  Our experienced attorneys have successfully represented thousands of clients in mass tort litigation cases.
                </p>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {stats.map((item, index) => (
                  <div key={index} className="group rounded-[1.5rem] border border-slate-200 bg-white/85 p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-900 text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      {item.icon}
                    </div>
                    <h3 className="mt-4 text-center text-xl font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-center text-slate-700">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-[1.8rem] border border-slate-200 bg-white/90 p-8 shadow-sm">
                <div className="text-center">
                  <span className="inline-flex rounded-full border border-blue-900 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-900">
                    Client Testimonials
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">What clients are saying</h3>
                </div>
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                  {testimonials.map((item, index) => (
                    <div key={index} className="group rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900 text-white transition-transform duration-500 group-hover:scale-110">
                        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <path d="M7 7h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H7" />
                          <path d="M14 7h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3" />
                        </svg>
                      </div>
                      <p className="mt-4 text-slate-700 leading-8">“{item.quote}”</p>
                      <div className="mt-5 border-t border-slate-200 pt-4">
                        <p className="font-semibold text-slate-900">{item.name}</p>
                        <p className="text-sm text-slate-500">Verified Client</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="rounded-[1.5rem] bg-blue-50 p-8 shadow-sm">
                  <p className="text-center text-lg leading-8 text-slate-700">
                    Our commitment is to provide responsive guidance, protect your privacy, and help you understand every option available.
                  </p>
                </div>
                <ul className="space-y-4 text-slate-700">
                  {legalTeamPoints.map((point, index) => (
                    <li key={index} className="flex gap-3 rounded-2xl border border-slate-200 bg-white/70 p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-900 text-sm font-bold text-white">
                        •
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center text-sm text-slate-600">
                This website is for informational purposes only. Contacting us does not create an attorney-client relationship. Please do not include confidential information in initial communications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DepoProveraSection;
