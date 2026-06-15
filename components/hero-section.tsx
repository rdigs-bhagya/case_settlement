import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Star } from "lucide-react"
import FormFields from "./FormFields/page"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-white py-12 lg:py-14 mt-15">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50"></div>

      <div className="relative px-10">
        <div className="grid lg:grid-cols-2 gap-3 items-center">

          {/* --- Left Section (Updated + Smaller Text) --- */}
          <div className="space-y-6 max-w-3xl">
            {/* Badge */}
            {/* <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold border border-blue-200 shadow-sm">
              <CheckCircle className="h-4 w-4" />
              Protecting Victims. Demanding Justice.
            </div> */}

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold sm:font-extrabold tracking-tight leading-snug text-gray-900">
              Protecting <span className="text-primary font-extrabold">Victims.</span><br className="hidden sm:block" />
              Demanding <span className="text-primary font-extrabold">Justice.</span>
            </h1>

            {/* Paragraphs */}
            <div className="space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>
                Every year, countless Americans suffer serious injuries caused by defective drugs,
                unsafe medical devices, dangerous consumer products, and corporate negligence —
                including cases of abuse and misconduct.
              </p>
              <p>
                You don’t have to face the consequences alone. It’s time to hold negligent corporations
                and institutions accountable for the harm they cause — so that justice is served and
                your voice is heard.
              </p>
              <p>
                If you or a loved one has been affected, you have the right to seek the compensation
                and accountability you deserve from those responsible.
              </p>
            </div>

            {/* Logos Section */}
            <div className="flex flex-wrap items-center gap-5 pt-2 ml-[20px]">
              <Image src="\Home_logos\reuters.webp" alt="Logo 1" width={70} height={20} className="object-contain opacity-80 hover:opacity-100 transition" />
              {/* <Image src="\Home_logos\image.png" alt="Logo 2" width={70} height={20} className="object-contain opacity-80 hover:opacity-100 transition" /> */}
              {/* <Image src="\Home_logos\fox-business.png" alt="Logo 3" width={70} height={20} className="object-contain opacity-80 hover:opacity-100 transition" /> */}
              <Image src="\Home_logos\CNN.webp" alt="Logo 4" width={70} height={20} className="object-contain opacity-80 hover:opacity-100 transition" />
              {/* <Image src="\Home_logos\abcnews.png" alt="Logo 5" width={70} height={20} className="object-contain opacity-80 hover:opacity-100 transition" /> */}
              <Image src="\Home_logos\NBC.webp" alt="Logo 5" width={70} height={20} className="object-contain opacity-80 hover:opacity-100 transition" />
              <Image src="\Home_logos\FOXI-business.webp" alt="Logo 6" width={70} height={20} className="object-contain opacity-80 hover:opacity-100 transition" />
              <Image src="\Home_logos\abc-news.webp" alt="Logo 3" width={70} height={20} className="object-contain opacity-80 hover:opacity-100 transition" />
            </div>

            {/* CTA Button */}
            <div className="pt-1">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white px-5 py-2.5 text-sm sm:text-base font-semibold rounded-lg shadow-lg transition-transform hover:scale-[1.02]"
              >
                🚀 Get Free Case Review
              </Button>
            </div>
          </div>

          {/* --- Right Section (Form Card) --- */}
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
                <h3 className="text-lg font-bold text-gray-900">Free Case Evaluation</h3>
              </div>

              {/* Form fields */}
              <FormFields />

              <div className="text-center text-xs text-gray-500 mt-2">
                🔒 100% Confidential & Secured
              </div>
            </div>
          </Card>

        </div>
      </div>
    </section>
  )
}
