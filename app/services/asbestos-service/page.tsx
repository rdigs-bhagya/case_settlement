import type { Metadata } from "next"
import ClaimReviewForm from "@/components/ClaimReviewForm.tsx/page"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Asbestos Exposure Lawsuit | Mesothelioma Claim Support",
  description: "Exposed to asbestos? Our attorneys handle mesothelioma and asbestos-related illness claims. Get compensation for occupational and environmental exposure.",
}


const qualifications = [
  "Documented exposure in construction, shipbuilding, automotive repair, insulation, or manufacturing.",
  "Official diagnosis of mesothelioma, lung cancer, or another asbestos-related disease.",
  "Medical and employment records linking exposure to illness.",
  "Guidance from attorneys specializing in asbestos litigation."
];

const points = [
  {
    title: "Health Diagnosis:",
    description: "Confirmed diagnosis of mesothelioma, lung cancer, or asbestosis."
  },
  {
    title: "Wrongful Death:",
    description: "Families may file claims for medical bills, funeral costs, and income loss."
  },
  {
    title: "Legal Rights:",
    description: "Exercising your right to hold negligent parties responsible."
  }
];

const AsbestosSection = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-8 py-16">

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="inline-block border border-blue-900 text-blue-900 px-5 py-1 rounded-full text-sm font-semibold">
                This is an Active Lawsuit
              </span>

              <h1 className="text-4xl lg:text-5xl font-extrabold">
                Asbestos <span className="text-primary">Exposure Lawsuit</span>
              </h1>

              <p className="text-lg">
                Individuals who have been exposed to asbestos and later diagnosed with serious
                illnesses—such as mesothelioma or asbestos-related lung cancer—may have grounds
                to take legal action.
              </p>

              <p className="text-lg">
                Asbestos lawsuits aim to hold negligent manufacturers and employers accountable
                for exposing people to dangerous asbestos fibers, often without adequate warning
                or protection.
              </p>

              <p className="text-lg">
                If you or someone close to you is suffering from a disease linked to asbestos
                exposure, you may qualify to pursue compensation through a mesothelioma claim.
              </p>

              <Button size="lg" className="bg-blue-900 text-white">
                Get a Free Case Review
              </Button>
            </div>

            <img
              src="/asbestos/Asbestos-Exposure-Lawsuit.webp"
              alt="Asbestos Exposure"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ================= WHAT IS ================= */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <img
            src="/asbestos/Asbestos-Exposure-Lawsuit-Image-2.webp"
            alt="Asbestos Workplace"
            className="rounded-2xl shadow-xl"
          />

          <div>
            <h2 className="text-4xl font-bold mb-6">
              What Is the <span className="text-primary">Asbestos Lawsuit?</span>
            </h2>

            <p className="text-lg mb-4">
              An asbestos lawsuit is a legal claim brought by individuals who developed
              life-threatening illnesses—such as mesothelioma or lung cancer—after being exposed
              to asbestos.
            </p>

            <p className="text-lg">
              These lawsuits target manufacturers, employers, and distributors who failed to warn
              about or protect against the dangers of asbestos in workplaces and products.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PURPOSE ================= */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Purpose of Asbestos Lawsuits
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Compensating Victims",
                text:
                  "Recover financial compensation for medical expenses, loss of income, and emotional suffering."
              },
              {
                title: "Corporate Accountability",
                text:
                  "Hold companies accountable for knowingly exposing people to asbestos without proper safety measures."
              },
              {
                title: "Covering Treatment Costs",
                text:
                  "Compensation can help cover the high cost of treatment and long-term care."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-900">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY FILE ================= */}
      <section className="bg-white py-10 px-6 md:px-14 lg:px-23">
        <div className="max-w-7xl mx-auto">

          {/* EXACT HEADLINE STYLING */}
          <h2 className="text-[32px] md:text-[48px] font-bold text-[#101828] mb-12 leading-tight">
            Why File an <span className="text-[#2b4ba3]">Asbestos Lawsuit?</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-5 items-start">

            {/* LEFT COLUMN: LIST WITH EXACT TIMELINE LOGIC */}
            <div className="flex flex-col">
              {points.map((point, index) => (
                <div key={index} className="relative pl-10 pb-12 last:pb-0">

                  {/* THE VERTICAL LINE: 
                    Only shows for all items except the last one.
                    Starts at the dot and stretches to the next one. 
                */}
                  {index !== points.length - 1 && (
                    <div className="absolute left-[4px] top-[10px] w-[1.5px] h-full bg-[#2b4ba3]"></div>
                  )}

                  {/* THE DOT: Solid small circle as seen in image */}
                  <div className="absolute left-0 top-[8px] w-[10px] h-[10px] rounded-full bg-[#2b4ba3] z-10"></div>

                  {/* TEXT CONTENT */}
                  <div className="flex flex-col -mt-1.5">
                    <h3 className="text-[22px] md:text-[26px] font-bold text-[#2b4ba3] mb-2 leading-tight">
                      {point.title}
                    </h3>
                    <p className="text-[#101828] text-[18px] md:text-[22px] leading-relaxed max-w-xl">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT COLUMN: ILLUSTRATION */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[550px] lg:max-w-[570px]">
                <img
                  src="/asbestos/Asbestos Lawsuit.webp"
                  alt="Legal Representation Illustration"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* BOTTOM TEXT: FULL WIDTH PARAGRAPH */}
          <div className="mt-5 md:mt-10">
            <p className="text-[18px] md:text-[24px] text-[#101828] leading-snug font-normal opacity-90 max-w-6xl">
              Consumers Injury Help can connect you with experienced asbestos attorneys who understand how to prove exposure and pursue compensation.
            </p>
          </div>

        </div>
      </section>

      {/* ================= ELIGIBILITY ================= */}
      <section className="bg-[#f8f9fa] py-5 md:py-10 lg:py-10 px-4 sm:px-6 font-sans overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* Centered Headline - Scales from 2xl to 5xl */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] text-center mb-10 md:mb-16 lg:mb-16 px-2">
            Who Qualifies for an <span className="text-[#2b4ba3]">Asbestos Lawsuit?</span>
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 xl:gap-20">

            {/* Left Side: Image container */}
            {/* Added order-2 on mobile so text can appear first, or keep order-1 to match image layout */}
            <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-1">
              <div className="relative w-full max-w-[320px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[600px]">
                <img
                  src="/asbestos/Who Qualifies.webp"
                  alt="Asbestos exposure illustration"
                  className="w-full h-auto object-contain drop-shadow-xl"
                />
              </div>
            </div>

            {/* Right Side: Qualification List */}
            <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 lg:space-y-10 order-2 lg:order-2">
              {qualifications.map((text, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4 md:gap-6 group">

                  {/* Responsive Icon: Smaller on mobile, larger on desktop */}
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-[#2b4ba3] rounded-full p-1.5 sm:p-2 w-7 h-7 sm:w-9 sm:h-9 lg:w-11 lg:h-11 flex items-center justify-center shadow-md transition-transform group-hover:scale-110">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </div>
                  </div>

                  {/* Qualification Text: Scales from base to 2xl */}
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-snug sm:leading-tight">
                    {text}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ================= TIMELINES ================= */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          <h2 className="text-4xl font-bold">
            How Long Do Asbestos Lawsuits Take?
          </h2>
          <p className="text-lg">
            Class action asbestos lawsuits can take several months to a few years depending on
            the number of plaintiffs, available records, and legal strategy. Most cases settle
            before trial.
          </p>

          <h2 className="text-4xl font-bold">
            When Will the Asbestos Lawsuit Be Settled?
          </h2>
          <p className="text-lg">
            Straightforward cases may settle in under a year, while complex cases involving
            multiple companies may take longer.
          </p>
        </div>
      </section>

      {/* ================= TWO CARDS ================= */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* ================= Health Effects Card ================= */}
          <div className="group bg-white p-10 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="mb-6">
              <span className="inline-block text-sm font-semibold text-blue-900 bg-blue-50 px-4 py-1 rounded-full mb-4">
                Medical Impact
              </span>

              <h3 className="text-2xl font-bold text-gray-900">
                Health Effects Linked to Asbestos Exposure
              </h3>
            </div>

            <ul className="space-y-4 text-lg text-gray-700">
              {[
                "Mesothelioma",
                "Asbestosis",
                "Lung Cancer",
                "Other Cancers",
                "Pleural Effusions"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-900"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= How to File Card ================= */}
          <div className="group bg-white p-10 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="mb-6">
              <span className="inline-block text-sm font-semibold text-blue-900 bg-blue-50 px-4 py-1 rounded-full mb-4">
                Legal Process
              </span>

              <h3 className="text-2xl font-bold text-gray-900">
                How to File an Asbestos Lawsuit
              </h3>
            </div>

            <ol className="space-y-5 text-lg text-gray-700">
              {[
                "Receive an official medical diagnosis.",
                "Document asbestos exposure history.",
                "File a lawsuit against responsible companies.",
                "Legal team manages settlement or trial."
              ].map((step, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-semibold">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </section>

      {/* ================= LAW FIRM ================= */}
      {/* <section className="py-10 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Choosing the Right Asbestos Law Firm
          </h2>

          <ul className="space-y-3 text-lg text-center">
            <li>Proven experience in asbestos and mesothelioma litigation</li>
            <li>Successful settlements in prior cases</li>
            <li>Knowledge of trust funds and mass tort procedures</li>
            <li>Compassionate legal support for your family</li>
          </ul>

          <p className="mt-6 text-lg">
            Consumers Injury Help can match you with the right legal team to fight for your compensation.
          </p>
        </div>
      </section> */}



      {/* ================= FORM ================= */}
      <ClaimReviewForm service="asbestos" />
    </>
  )
}

export default AsbestosSection
