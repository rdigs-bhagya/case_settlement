"use client";

import Image from "next/image";
 
export default function AboutUs() {
  return (
    <section className="relative bg-gray-50 py-16">
      {/* Top Accent Strip */}
      <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>

      <div className="container mx-auto px-8 lg:px-20 mt-[100px] ml-[20px]">
        <div className="grid lg:grid-cols-2 gap-5 items-center">
          {/* Left Section - Image */}
          <div className="relative mt-5">
            <Image
              src="/PFAS/pfas1.png" 
              alt="About Our Firm"
              width={450}
              height={400}
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute bottom-6 left-6 bg-white px-5 py-3 rounded-lg shadow-md">
              <h3 className="text-blue-600 font-bold text-xl">10+ Years</h3>
              <p className="text-gray-600 text-sm">Of Experience</p>
            </div>
          </div>

          {/* Right Section - Text */}
          <div>

            <h2 className="text-3xl lg:text-4xl font-bold text-blue-700 leading-snug mb-6">
              Trust We Build
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Legal Claim Assistance understands the complexity and emotional
              challenges of legal matters. From initial design and theme to
              taking your law firm's name on TV, we cover all aspects of
              marketing and lead generation, specifically for law firms. With
              our unwavering commitment to ensuring that every client searching
              for "attorneys near me" lands directly in your inbox, you can rest
              assured that your firm's visibility and client acquisition are in
              capable hands.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Choose <span className="font-semibold">Legal Claim Assistance</span> for all your attorney marketing, mass tort
              marketing, legal claim services, and lawsuit claim services needs.
              Contact us today to learn more about how we can support you or
              your firm's success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
