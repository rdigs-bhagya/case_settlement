import { Card, CardContent } from "@/components/ui/card"
import { Award, Clock, DollarSign, Users, Shield, Phone } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Over $50 million recovered for our clients with a 95% success rate in settlements and verdicts.",
  },
  {
    icon: Clock,
    title: "No Win, No Fee",
    description: "We work on contingency - you only pay if we win your case. No upfront costs or hidden fees.",
  },
  {
    icon: DollarSign,
    title: "Maximum Compensation",
    description: "Our experienced team fights to get you the highest possible settlement for your case.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Personal attention from experienced attorneys who understand your unique situation.",
  },
  {
    icon: Shield,
    title: "Confidential & Secure",
    description: "Your information is protected with the highest level of security and confidentiality.",
  },
  {
    icon: Phone,
    title: "24/7 Availability",
    description: "Round-the-clock support when you need it most. We're here for you every step of the way.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section id="about" className="py-8 bg-background">
      <div className="container mx-auto px-8">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold font-space-grotesk">
            Why Choose <span className="text-primary">Our Firm</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine legal expertise with personalized service to deliver exceptional results for our clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold font-space-grotesk">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-8 bg-primary rounded-2xl p-10 text-center">
          <div className="grid md:grid-cols-4 gap-8 text-primary-foreground">
            <div>
              <div className="text-4xl font-bold font-space-grotesk mb-2">15+</div>
              <div className="text-primary-foreground/80">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-space-grotesk mb-2">5000+</div>
              <div className="text-primary-foreground/80">Cases Handled</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-space-grotesk mb-2">$50M+</div>
              <div className="text-primary-foreground/80">Total Recovered</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-space-grotesk mb-2">95%</div>
              <div className="text-primary-foreground/80">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
