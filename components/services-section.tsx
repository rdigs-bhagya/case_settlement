import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    image: "/placeholder.svg?height=200&width=300",
    title: "Personal Injury Claims",
    description:
      "Comprehensive support for accidents, medical malpractice, and workplace injuries with maximum compensation.",
    features: ["No upfront fees", "Proven track record", "24/7 support"],
  },
  {
    image: "/placeholder.svg?height=200&width=300",
    title: "Motor Vehicle Accidents",
    description: "Expert handling of car, truck, and motorcycle accident claims with full insurance negotiations.",
    features: ["Insurance negotiations", "Property damage", "Medical expenses"],
  },
  {
    image: "/placeholder.svg?height=200&width=300",
    title: "Product Liability",
    description: "Defective product cases including pharmaceuticals, medical devices, and consumer products.",
    features: ["Pharmaceutical cases", "Medical devices", "Consumer products"],
  },
  {
    image: "/placeholder.svg?height=200&width=300",
    title: "Mass Tort Litigation",
    description: "Join class action lawsuits for widespread harm from corporations and defective products.",
    features: ["Class action suits", "Corporate negligence", "Environmental claims"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-5 bg-gray-50">
      <div className="px-6">
        <div className="text-center space-y-4 mb-5">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Legal <span className="text-blue-800">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive legal services with proven results across multiple practice areas
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 bg-white overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardHeader className="text-center pb-1">
                <CardTitle className="text-xl font-bold leading-tight text-gray-900">{service.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 pt-0">
                <p className="text-gray-600 leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 border-blue-800 text-blue-800 bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 text-lg font-bold">
            See All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
