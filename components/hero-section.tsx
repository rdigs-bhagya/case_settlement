import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-white py-12 lg:py-14 mt-18">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50"></div>

      <div className="relative px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-semibold border border-blue-200">
                <CheckCircle className="h-4 w-4" />
                Expert Legal Assistance • Free Consultation
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-snug text-gray-900">
                Maximum <span className="text-blue-800">Legal Recovery</span> for Your Case
              </h1>
              <p className="text-base lg:text-lg text-gray-600 leading-normal">
                Professional legal representation with proven results. We fight for maximum compensation with no upfront
                costs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 text-base font-semibold">
                Get Free Case Review
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-6 py-3 text-base font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
              >
                Call (555) 123-4567
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-800">15+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-800">$50M+</div>
                <div className="text-sm text-gray-600 font-medium">Recovered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-800">98%</div>
                <div className="text-sm text-gray-600 font-medium">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <Card className="p-5 shadow-md border border-gray-200 bg-white">
            <div className="space-y-4">
              <div className="text-center space-y-2">
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h3 className="text-lg font-bold text-gray-900">Free Case Evaluation</h3>
                <p className="text-gray-600 text-sm">Get expert legal advice within 24 hours</p>
              </div>

              <form className="space-y-2.5">
                <div className="grid grid-cols-2 gap-3">
                  <Input placeholder="First Name" className="h-10 text-sm bg-gray-50 border-gray-300 focus:border-blue-600" />
                  <Input placeholder="Last Name" className="h-10 text-sm bg-gray-50 border-gray-300 focus:border-blue-600" />
                </div>
                <Input
                  placeholder="Email Address"
                  type="email"
                  className="h-10 text-sm bg-gray-50 border-gray-300 focus:border-blue-600"
                />
                <Input
                  placeholder="Phone Number"
                  type="tel"
                  className="h-10 text-sm bg-gray-50 border-gray-300 focus:border-blue-600"
                />
                <Textarea
                  placeholder="Describe your legal matter..."
                  rows={3}
                  className="text-sm resize-none bg-gray-50 border-gray-300 focus:border-blue-600"
                />

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 text-sm font-semibold">
                  Get My Free Consultation
                </Button>
              </form>

              <div className="text-center text-xs text-gray-500">🔒 Completely confidential and secure</div>
            </div>
          </Card>

        </div>
      </div>
    </section>
  )
}
