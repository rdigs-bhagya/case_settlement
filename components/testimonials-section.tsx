"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    case: "Personal Injury",
    rating: 5,
    text: "Excellent service and great results. They handled my case professionally and got me the compensation I deserved.",
    amount: "$125,000",
  },
  {
    name: "Michael Chen",
    case: "Motor Vehicle Accident",
    rating: 5,
    text: "Outstanding legal team. They fought hard for my case and delivered beyond my expectations.",
    amount: "$89,500",
  },
  {
    name: "Lisa Rodriguez",
    case: "Workers Compensation",
    rating: 5,
    text: "Professional and results-driven. Highly recommend their services for any legal matter.",
    amount: "$67,800",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Client Success Stories</h2>
          <p className="text-gray-600">Real results from satisfied clients</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-blue-900 text-white hover:bg-blue-800 transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <div className="flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-blue-900 text-white hover:bg-blue-800 transition-colors"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <blockquote className="text-lg text-gray-700 text-center mb-4 italic">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div className="flex justify-between items-center pt-4 border-t">
                <div>
                  <div className="font-bold text-gray-900">{testimonials[currentIndex].name}</div>
                  <div className="text-sm text-gray-600">{testimonials[currentIndex].case}</div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-blue-900">{testimonials[currentIndex].amount}</div>
                  <div className="text-sm text-gray-600">Settlement</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-blue-900" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
