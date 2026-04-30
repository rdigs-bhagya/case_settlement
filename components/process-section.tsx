import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { FileText, Users, DollarSign, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Fill out the Quiz Form",
    description: "Answer a few questions about your case to determine if you qualify for compensation.",
  },
  {
    icon: Users,
    step: "02",
    title: "Speak With Our Team",
    description: "Our experienced legal team will review your case and match you with an experienced attorney.",
  },
  {
    icon: DollarSign,
    step: "03",
    title: "Potential Compensation",
    description: "Receive the compensation you deserve. Get the help you need without upfront costs.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Case Resolution",
    description: "We handle all paperwork and legal proceedings to ensure you get the maximum settlement possible.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-6 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space-grotesk">
            How Do I Get <span className="text-primary">Compensated?</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process ensures you get the legal help you need quickly and efficiently
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10">
          {steps.map((step, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 lg:p-8 space-y-4">
                <div className="relative">
                  <div className="mx-auto w-14 h-14 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="h-7 w-7 lg:h-8 lg:w-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 lg:w-8 lg:h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground text-xs lg:text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg lg:text-xl font-bold font-space-grotesk">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center px-4">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] min-h-[350px] sm:min-h-[450px]">
            <img
              src="/contact-us-today-bg.png"
              alt="Legal Consultation"
              className="absolute inset-0 h-full w-full object-cover object-[center_right]"
            />

            {/* 
      - items-start: Starts the text from the top.
      - pt-20 sm:pt-32 lg:pt-40: Pushes the text down significantly.
      - pl-8 sm:pl-20 lg:pl-40: Moves the text closer to the girl.
    */}
            <div className="relative z-10 flex min-h-[350px] sm:min-h-[450px] items-start justify-start px-8 sm:pl-20 lg:pl-40 pt-20 sm:pt-32 lg:pt-36">

              <div className="max-w-2xl text-left text-white">

                <h3 className="font-space-grotesk text-3xl font-bold sm:text-4xl lg:text-[46px] leading-tight mt-[30px]">
                  Ready to Get Started?
                </h3>

                <p className="mt-4 text-lg leading-relaxed text-white/90 sm:text-xl max-w-lg">
                  Don't wait – there may be time limits on your claim. <br className="hidden sm:block" />
                  Contact us today for your free consultation.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
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
