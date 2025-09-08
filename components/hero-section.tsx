import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Star } from "lucide-react"
import CaseEvaluationForm from "./FormFields/page"
import FormFields from "./FormFields/page"

export function HeroSection() {
  return (
    <section className="relative bg-white py-12 lg:py-14 mt-18">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50"></div>

      <div className="relative px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left content */}
          <div className="space-y-5 max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-semibold border border-blue-200 shadow-sm">
              <CheckCircle className="h-4 w-4" />
              Expert Legal Assistance • Free Consultation
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Maximum <span className="text-primary">Legal Recovery</span> for Your Case
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Work with seasoned legal professionals who fight to get you the compensation you deserve.
              No upfront fees. No obligations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white px-6 py-3 text-base font-semibold rounded-lg shadow-lg transition-transform hover:scale-[1.02]"
              >
                🚀 Get Free Case Review
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="px-6 py-3 text-base font-semibold border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white rounded-lg transition-colors"
              >
                📞 Call (555) 123-4567
              </Button> */}
            </div>
          </div>


          {/* Contact form */}
          <Card className="p-6 rounded-xl bg-white/60 backdrop-blur-md shadow-md border border-gray-200 max-w-lg mx-auto">
            <div className="space-y-4">
              {/* Header with stars */}
              <div className="text-center space-y-2">
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400 drop-shadow-sm"
                    />
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-900">Free Case Evaluation</h3>
                <p className="text-gray-600 text-sm">
                  Expert legal help, no strings attached.
                </p>
              </div>

              {/* Form fields with proper Case Evaluation CSS */}
              <FormFields />

              <div className="text-center text-xs text-gray-500 mt-2">
                🔒 100% Confidential & Secured
              </div>
            </div>
          </Card>


          {/* <Card className="p-6 rounded-xl bg-white/60 backdrop-blur-md shadow-md border border-gray-200 max-w-lg mx-auto">
            <div className="space-y-4">
              
              <div className="text-center space-y-2">
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-900">Free Case Evaluation</h3>
                <p className="text-gray-600 text-sm">Expert legal help, no strings attached.</p>
              </div>

              {/* Form */}
          {/* <form className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Input
                    placeholder="First Name"
                    className="h-10 text-sm px-3 rounded-lg bg-white shadow-inner border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:shadow-md transition"
                  />
                  <Input
                    placeholder="Last Name"
                    className="h-10 text-sm px-3 rounded-lg bg-white shadow-inner border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:shadow-md transition"
                  />
                </div>

                <Input
                  placeholder="Email Address"
                  type="email"
                  className="h-10 text-sm px-3 rounded-lg bg-white shadow-inner border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:shadow-md transition"
                />

                <Input
                  placeholder="Phone Number"
                  type="tel"
                  className="h-10 text-sm px-3 rounded-lg bg-white shadow-inner border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:shadow-md transition"
                />

                <Textarea
                  placeholder="Describe your legal matter..."
                  rows={3}
                  className="text-sm px-3 py-2 rounded-lg bg-white shadow-inner border border-gray-300 resize-none focus:ring-2 focus:ring-blue-500 focus:shadow-md transition"
                />

                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2.5 text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-200">
                  🚀 Get My Free Consultation
                </Button>
              </form> */}

          {/* <div className="text-center text-xs text-gray-500 mt-2">
                🔒 100% Confidential & Secured
              </div>
            </div>
          </Card> */}


        </div>
      </div>
    </section>
  )
}
