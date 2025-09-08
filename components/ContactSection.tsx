"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Clock } from "lucide-react"
import FormFields from "./FormFields/page"

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-br from-blue-100 via-white to-purple-100 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.1),transparent_50%)]"></div>

      <div className="relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 px-6">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Get Your{" "}
            <span className="bg-gradient-to-r from-blue-900 to-purple-700 bg-clip-text text-transparent">
              Free Consultation
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Speak with our experienced legal team today. We’re here to guide you every step of the way.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="px-6 grid lg:grid-cols-3 gap-10">
          {/* Contact Form - 2 columns */}
          <div className="lg:col-span-2">
            <Card className="shadow-2xl border border-gray-100/40 rounded-3xl bg-white/70 backdrop-blur-md hover:shadow-blue-200 transition">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center relative inline-block">
                  📋 Free Case Evaluation
                  <span className="absolute left-1/2 -bottom-2 w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform -translate-x-1/2"></span>
                </h3>
                <FormFields /> {/* ✅ Reusable form */}
              </CardContent>
            </Card>
          </div>

          {/* Contact Info - 1 column */}
          <div className="space-y-6">
            {[
              {
                icon: Phone,
                title: "Call Now",
                value: "(833) 844-1999",
                color: "from-blue-600 to-purple-600",
              },
              {
                icon: Mail,
                title: "Email",
                value: "contact@legal.com",
                color: "from-purple-600 to-pink-500",
              },
              {
                icon: Clock,
                title: "Available",
                value: "24/7 Emergency",
                color: "from-green-500 to-teal-500",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className={`shadow-lg border-0 rounded-2xl bg-white/80 backdrop-blur-sm hover:shadow-xl hover:scale-105 transform transition duration-300`}
              >
                <CardContent className="p-6 flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-md`}
                  >
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{item.title}</div>
                    <div className="text-blue-900 font-bold">{item.value}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
