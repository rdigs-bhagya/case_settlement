import ClaimReviewForm from "@/components/ClaimReviewForm.tsx/page";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Depo-Provera Lawsuit | Brain Tumor Claim Support",
  description:
    "Used Depo-Provera and later diagnosed with a meningioma or related brain tumor? Learn about your legal options and seek compensation.",
};

const qualificationPoints = [
  "You used Depo-Provera for birth control or other prescribed reasons.",
  "You were diagnosed with a meningioma, brain tumor, or related neurological condition.",
  "Your diagnosis occurred after prolonged or repeated use of the medication.",
  "You have medical records that may support a claim for compensation.",
];

const compensationPoints = [
  {
    title: "Medical Expenses",
    description: "Coverage for surgeries, treatment, scans, and ongoing care related to your diagnosis.",
  },
  {
    title: "Lost Income",
    description: "Compensation for time missed from work, reduced earning capacity, or long-term disability.",
  },
  {
    title: "Pain and Suffering",
    description: "Financial recovery for emotional distress, physical suffering, and reduced quality of life.",
  },
];

const legalTeamPoints = [
  "Free, confidential case review",
  "No upfront fees unless we win",
  "Experienced legal support for mass tort claims",
  "Focused on helping clients understand their options",
];

const DepoProveraSection = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f8fbff_0%,#eef4ff_45%,#fdfefe_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-24 mt-[80px]">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <span className="inline-block rounded-full border border-blue-900 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-900">
                Free Case Evaluation
              </span>
              <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Depo-Provera <span className="text-primary">Brain Tumor Lawsuit</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-700">
                If you used Depo-Provera and later developed a meningioma or other serious brain tumor,
                you may be entitled to pursue compensation. Our team helps individuals understand their
                legal options and potential next steps.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-900 px-8 py-6 text-white hover:bg-blue-800">
                  Get a Free Case Review
                </Button>
                <Button size="lg" variant="outline" className="border-blue-900 px-8 py-6 text-blue-900 hover:bg-blue-50">
                  No Fees Unless We Win
                </Button>
              </div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                Accepting clients nationwide
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl font-bold text-slate-900">What is Depo-Provera?</h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Depo-Provera is a long-acting birth control injection that has been prescribed to
                millions of women. Recent studies have raised serious concerns about its connection to
                meningiomas and related neurological conditions.
              </p>
              <div className="mt-6 rounded-2xl bg-blue-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-900">
                  Why this matters
                </p>
                <p className="mt-2 text-slate-700">
                  If you used the medication for years and later developed a brain tumor, your case may
                  be eligible for legal review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 lg:text-4xl">
                About the <span className="text-primary">Depo-Provera Lawsuit</span>
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Plaintiffs allege that manufacturers failed to adequately warn patients and medical
                providers about the potential brain tumor risks associated with long-term use.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                These claims center on alleged failures in warning labels, testing, and product safety
                communications.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Key allegations</h3>
              <ul className="mt-5 space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-900" />
                  Failure to warn about the increased risk of meningiomas.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-900" />
                  Alleged negligence in testing and product safety review.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-900" />
                  Continued marketing of a product without sufficient warning labels.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 lg:text-4xl">
              Do You Qualify for <span className="text-primary">Compensation?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-700">
              If you used Depo-Provera and were later diagnosed with a meningioma or other serious
              brain tumor, you may qualify for a case review.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <ul className="space-y-4 text-slate-700">
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
              <h3 className="text-xl font-semibold text-slate-900">Common warning signs</h3>
              <p className="mt-4 text-slate-700">
                Symptoms can include severe headaches, vision changes, hearing issues, seizures, or
                other neurological changes that should be evaluated by a physician.
              </p>
              <p className="mt-4 text-slate-700">
                Medical documentation can play an important role in evaluating your potential claim.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 lg:text-4xl">
            What Compensation May Be <span className="text-primary">Available</span>
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {compensationPoints.map((item, index) => (
              <div key={index} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-slate-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <h2 className="text-3xl font-bold text-slate-900 lg:text-4xl">
              Why Choose Our <span className="text-primary">Legal Team</span>
            </h2>
            <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[1.5rem] bg-blue-50 p-8">
                <p className="text-lg leading-8 text-slate-700">
                  We help clients better understand their options after a serious diagnosis and support
                  them through the legal review process with clear guidance and compassion.
                </p>
              </div>
              <ul className="space-y-4 text-slate-700">
                {legalTeamPoints.map((point, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-900 text-sm font-bold text-white">
                      •
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white py-12">
        <ClaimReviewForm service="depo-provera" />
      </div>
    </>
  );
};

export default DepoProveraSection;
