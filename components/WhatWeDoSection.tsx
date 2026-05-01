"use client"

import { BarChart, LineChart, Pill, Stethoscope } from "lucide-react"

export default function WhatWeDoSection() {
  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-4 text-center">

        {/* ===== Heading ===== */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-space-grotesk leading-tight">
            What <span className="text-primary">We Do</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            At <span className="text-gray-600 font-medium">ClaimYourClaims.com</span>, we help individuals connect with
            experienced attorneys who fight for justice in complex injury and product-related harm cases.
          </p>
        </div>

        {/* ===== MAIN WRAPPER ===== */}
        <div className="relative max-w-6xl mx-auto">

          {/* ===== CARDS GRID ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 text-left relative z-10">

            {/* Box 1 */}
            <div className="md:mr-12 flex items-start gap-6 bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <BarChart className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Personal Injury</h3>
                <p className="text-muted-foreground text-base">
                  We connect you with trusted personal injury attorneys who advocate for victims of accidents and negligence. If you’ve been hurt due to someone else’s actions, we’ll help you take the first step toward financial recovery and justice.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="md:ml-12 flex items-start gap-6 bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <LineChart className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Product Liability</h3>
                <p className="text-muted-foreground text-base">
                  When dangerous or defective products cause harm, we help victims hold manufacturers and corporations accountable for unsafe products and consumer risks.
                </p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="md:mr-12 flex items-start gap-6 bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Pill className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Dangerous Drugs</h3>
                <p className="text-muted-foreground text-base">
                  If a prescription or over-the-counter medication caused unexpected harm, we connect victims to attorneys experienced in pharmaceutical litigation and mass tort claims.
                </p>
              </div>
            </div>

            {/* Box 4 */}
            <div className="md:ml-12 flex items-start gap-6 bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Stethoscope className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Medical Devices</h3>
                <p className="text-muted-foreground text-base">
                  Defective or poorly designed medical devices can lead to life-changing health issues. We connect you with legal teams who focus on medical device injury cases to protect your rights and recovery.
                </p>
              </div>
            </div>

          </div>

          {/* ===== CENTER IMAGE (ONLY YOUR IMAGE) ===== */}
          <div className="hidden md:flex absolute inset-0 items-center justify-center z-20 pointer-events-none">
            <img
              src="/Home_logos/What We Do.png"
              alt="What We Do"
              className="w-[240px] lg:w-[280px] object-contain drop-shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  )
}