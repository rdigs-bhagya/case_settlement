"use client"

export default function WhatWeDoSection() {
  return (
    <section className="py-10 bg-background">
      <div className="max-w-7xl mx-auto px-4">

        {/* ===== Heading ===== */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk">
            What <span className="text-primary">We Do</span>
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            At <span className="font-medium text-gray-700">ClaimYourClaims.com</span>, we help individuals connect with experienced attorneys who fight for justice in complex injury and product-related harm cases.
          </p>
        </div>

        {/* ===== MAIN ===== */}
        <div className="relative max-w-6xl mx-auto min-h-[520px]">

          {/* CENTER IMAGE */}
          <div className="flex justify-center">
            <img
              src="/Home_logos/What We Do.webp"
              alt="What We Do"
              className="w-[320px] md:w-[400px] lg:w-[460px] object-contain"
            />
          </div>

          {/* LEFT SIDE */}
          <div className="hidden md:block absolute left-0 top-0 w-[320px] space-y-24">

            <div className="p-4 rounded-xl transition hover:bg-blue-50">
              <h3 className="text-2xl font-bold text-primary mb-2">
                Personal Injury
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We connect you with trusted personal injury attorneys who advocate for victims of accidents and negligence. If you’ve been hurt due to someone else’s actions, we’ll help you take the first step toward financial recovery and justice.
              </p>
            </div>

            <div className="p-4 rounded-xl transition hover:bg-blue-50">
              <h3 className="text-2xl font-bold text-primary mb-2">
                Dangerous Drugs
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                If a prescription or over-the-counter medication caused unexpected harm, we connect victims to attorneys experienced in pharmaceutical litigation and mass tort claims.
              </p>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="hidden md:block absolute right-0 top-0 w-[320px] space-y-24">

            <div className="p-4 rounded-xl transition hover:bg-blue-50">
              <h3 className="text-2xl font-bold text-primary mb-2">
                Product Liability
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                When dangerous or defective products cause harm, we help victims hold manufacturers and corporations accountable for unsafe products and consumer risks.
              </p>
            </div>

            <div className="p-4 rounded-xl transition hover:bg-blue-50">
              <h3 className="text-2xl font-bold text-primary mb-2">
                Medical Devices
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Defective or poorly designed medical devices can lead to life-changing health issues. We connect you with legal teams who focus on medical device injury cases to protect your rights and recovery.
              </p>
            </div>

          </div>

          {/* MOBILE VERSION */}
          <div className="md:hidden mt-10 space-y-8">

            {[
              {
                title: "Personal Injury",
                text: "We connect you with trusted personal injury attorneys who advocate for victims of accidents and negligence."
              },
              {
                title: "Product Liability",
                text: "We help victims hold manufacturers accountable for unsafe products."
              },
              {
                title: "Dangerous Drugs",
                text: "We connect victims to attorneys experienced in pharmaceutical litigation."
              },
              {
                title: "Medical Devices",
                text: "We connect you with legal teams focused on medical device injury cases."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 rounded-xl hover:bg-blue-50 transition"
              >
                <h3 className="text-xl font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.text}</p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  )
}