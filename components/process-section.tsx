import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
    <section id="process" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space-grotesk">
            How Do I Get <span className="text-primary">Compensated?</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process ensures you get the legal help you need quickly and efficiently
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
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

        <div className="text-center">
          <div className="bg-secondary/10 rounded-2xl p-6 lg:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-bold font-space-grotesk mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Don't wait - there may be time limits on your claim. Contact us today for your free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline">
                Call (833) 844-1999
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
