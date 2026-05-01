import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { FileText, Users, Headphones, DollarSign, CheckCircle, ShieldCheck } from "lucide-react"


export function ProcessSection() {
  return (
    <section id="process" className="py-4 px-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto lg:px-4 py-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1f3c88] leading-tight">
                How Do I Get <br /> Compensated?
              </h2>

              <p className="mt-4 text-gray-500 text-lg max-w-md mx-auto lg:mx-0">
                Our streamlined process ensures you get the legal help you need quickly and efficiently
              </p>

              <div className="mt-10 flex justify-center lg:justify-start">
                <img
                  src="/Home_logos/How Do I Get Compensated.png"
                  alt="Process"
                  className="w-full max-w-sm"
                />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-5">

              {[
                {
                  step: "01",
                  title: "Fill out the Quiz Form",
                  desc: "Answer a few questions about your case to determine if you qualify for compensation.",
                  icon: FileText,
                },
                {
                  step: "02",
                  title: "Speak With Our Team",
                  desc: "Our experienced legal team will review your case & match you with an experienced attorney.",
                  icon: Headphones,
                },
                {
                  step: "03",
                  title: "Potential Compensation",
                  desc: "Receive the compensation you deserve. Get the help you need without upfront costs.",
                  icon: DollarSign,
                },
                {
                  step: "04",
                  title: "Case Resolution",
                  desc: "We handle all paperwork & legal proceedings to ensure you get the maximum settlement possible.",
                  icon: ShieldCheck,
                },
              ].map((item, i) => (
                <div key={i} className="relative flex items-center">

                  {/* STEP */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center z-10">

                    {/* Circle (reduced) */}
                    <div className="w-[58px] h-[58px] rounded-full border-[8px] border-[#1f3c88] bg-white flex items-center justify-center text-[#1f3c88] font-semibold text-[15px]">
                      {item.step}
                    </div>

                    {/* Arrow (reduced) */}
                    <div className="-ml-[3px] w-0 h-0 
          border-t-[10px] border-b-[10px] border-l-[14px]
          border-t-transparent border-b-transparent border-l-[#1f3c88]">
                    </div>
                  </div>

                  {/* CARD */}
                  <div className="ml-[75px] w-full bg-[#f3f4f6] rounded-[16px] shadow-[0_4px_14px_rgba(0,0,0,0.06)] flex items-center justify-between px-6 py-4">

                    {/* TEXT */}
                    <div>
                      <h3 className="text-[16px] font-semibold text-[#1f3c88]">
                        {item.title}
                      </h3>
                      <p className="text-[13px] text-gray-500 mt-1 leading-relaxed max-w-[480px]">
                        {item.desc}
                      </p>
                    </div>

                    {/* ICON */}
                    <div className="hidden sm:flex items-center justify-center w-[38px] h-[38px] rounded-lg bg-[#e5e7eb] ml-4">
                      <item.icon className="w-4 h-4 text-gray-400" />
                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>
        </div>

        <div className="text-center px-6">
          <div className="relative mx-auto max-w-6xl min-h-[350px] sm:min-h-[400px]">
            <img
              src="/contact-us-today-bg.png"
              alt="Legal Consultation"
              className="absolute inset-0 h-full w-full object-contain object-center scale-110"
            />


            <div className="relative z-10 flex min-h-[350px] sm:min-h-[450px] items-start justify-start px-8 sm:pl-20 lg:pl-40 pt-10 sm:pt-20 lg:pt-36">

              <div className="max-w-2xl text-left text-white">

                <h3 className="font-space-grotesk text-3xl font-bold sm:text-4xl lg:text-[44px] leading-tight mt-[22px]">
                  Ready to Get Started?
                </h3>

                <p className="mt-2 text-lg leading-relaxed text-white/90 sm:text-xl max-w-lg">
                  Don't wait – there may be time limits on your claim. <br className="hidden sm:block" />
                  Contact us today for your free consultation.
                </p>

                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link href="/contact-us">
                    <Button
                      size="lg"
                      className="w-full bg-[#3b82f6] text-white hover:bg-blue-600 border-none sm:w-auto px-8 h-12 text-lg rounded-xl shadow-lg"
                    >
                      Get Started Today
                    </Button>
                  </Link>

                  <a href="tel:8338441999">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-none bg-white text-[#1a365d] hover:bg-gray-100 sm:w-auto px-8 h-12 text-lg rounded-xl shadow-lg"
                    >
                      Call (833) 844-1999
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
