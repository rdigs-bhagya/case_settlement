import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, DollarSign, Award, Shield, Scale } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Specialised Nationwide Legal Network",
    description:
      "You’re connected with experienced attorneys who focus exclusively on injury and product liability claims — the type of cases that matter most when you’re facing medical, financial, and emotional stress.",
  },
  {
    icon: Heart,
    title: "Compassion-Driven Real Support, When You Need It Most",
    description:
      "We know how overwhelming a health-related legal battle can feel. Our team is here to guide you with empathy, clarity, and dedicated case support at every step.",
  },
  {
    icon: DollarSign,
    title: "No Fees Until You Win",
    description:
      "You deserve justice without financial pressure. All partner law firms operate on a contingency basis — meaning you don’t pay unless your claim is successful.",
  },
  {
    icon: Award,
    title: "Proven Results & Fair Compensation",
    description:
      "Our mission is simple: to help you secure the compensation you rightfully deserve for medical bills, lost income, pain, suffering, and long-term impacts.",
  },
  {
    icon: Shield,
    title: "Confidential & Secure",
    description:
      "Your case information stays private and protected with industry-standard encryption and legal-compliance security protocols. We never share your data without permission — period.",
  },
  {
    icon: Scale,
    title: "Maximum Compensation Focused",
    description:
      "We work exclusively with qualified law firms dedicated to fighting for the highest possible payout for injury victims. Our goal is to ensure you receive every dollar you may be legally entitled to — no shortcuts, no compromises.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-8 bg-background">
      <div className="container mx-auto px-8">
        {/* ---- Header ---- */}
        <div className="text-center space-y-4 mb-2">
          <h2 className="text-4xl lg:text-5xl font-bold font-space-grotesk">
            Why Choose <span className="text-primary">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            <span className="text-foreground font-semibold">Relentless Advocacy for Victims.</span>{" "}
            Justice When It Matters Most.
          </p>
          <p className="text-xl text-gray-600 mx-auto">
            In addition to being awesome, here are some more reasons why claimants choose{" "}
            <span className="font-semibold text-foreground">Claim Your Claims</span>.
          </p>
        </div>

        {/* ---- Feature Cards ---- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center group hover:shadow-lg transition-all duration-300"
            >
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

        {/* ---- Stats section ---- */}
        <div className="mt-8 bg-primary rounded-2xl p-10 text-center">
          <div className="grid md:grid-cols-4 gap-8 text-primary-foreground">
            <div>
              <div className="text-4xl font-bold font-space-grotesk mb-2">15+</div>
              <div className="text-primary-foreground/80">Years of Legal Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-space-grotesk mb-2">10K+</div>
              <div className="text-primary-foreground/80">Claimants Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-space-grotesk mb-2">$50M+</div>
              <div className="text-primary-foreground/80">Compensation Secured</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-space-grotesk mb-2">98%</div>
              <div className="text-primary-foreground/80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
