import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-8 bg-white">
      <div>
        <div className="text-center mb-8 px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            Get Your <span className="text-blue-900">Free Consultation</span>
          </h2>
          <p className="text-gray-600">Contact us today for expert legal assistance</p>
        </div>

        <div className="px-4 grid lg:grid-cols-3 gap-6">
          {/* Contact Form - takes 2 columns */}
          <div className="lg:col-span-2">
            <Card className="shadow-md border-0">
              <CardContent className="p-4">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input placeholder="Email Address" type="email" />
                  <Input placeholder="Phone Number" type="tel" />
                  <Textarea placeholder="Describe your case..." rows={3} />

                  <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold">
                    Get My Free Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info - takes 1 column */}
          <div className="space-y-4">
            <Card className="shadow-md border-0">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-900" />
                  <div>
                    <div className="font-bold text-gray-900">Call Now</div>
                    <div className="text-blue-900 font-bold">(833) 844-1999</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md border-0">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-900" />
                  <div>
                    <div className="font-bold text-gray-900">Email</div>
                    <div className="text-blue-900">contact@legal.com</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md border-0">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-blue-900" />
                  <div>
                    <div className="font-bold text-gray-900">Available</div>
                    <div className="text-sm text-gray-600">24/7 Emergency</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
