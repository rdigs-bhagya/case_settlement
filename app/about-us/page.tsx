import type { Metadata } from "next"
import Image from "next/image";
import { Handshake, Heart, ShieldCheck, BadgeCheck, Target, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "About ClaimYourClaims | Legal Claim Assistance",
  description: "Learn about ClaimYourClaims, your trusted partner in legal claim support. We connect injury victims with qualified attorneys nationwide for fair compensation.",
}


export default function AboutUs() {
  return (
    <section className="relative bg-white">
      {/* --- Hero Section (Kept as provided) --- */}
      {/* <div className="relative w-full h-[500px] md:h-[600px]">
        <Image
          src="/PFAS/pfas1.png"
          alt="About ClaimYourClaims"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
            About <span className="text-blue-400">ClaimYourClaims.com</span>
          </h1>
        </div>
      </div> */}

      {/* --- Introduction --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-6 lg:px-8 py-12 md:py-16 mt-15">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Who <span className="text-primary font-extrabold">We Are</span>
            </h1>
            <p className="text-gray-700 leading-relaxed mb-4">
              At <strong>ClaimYourClaims.com</strong>, we help injury victims get the justice and
              financial compensation they deserve. Our mission is simple — connect
              individuals harmed by negligence, defective products, medical devices,
              unsafe drugs, and serious accidents with qualified legal professionals
              who are ready to fight for their rights.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We operate as a trusted bridge between consumers and law firms nationwide,
              ensuring every inquiry is handled with professionalism, transparency, and care.
              Through our secure intake platform, we capture verified opt-ins, track
              digital consent, and ensure every lead is delivered with full compliance
              documentation — protecting both consumers and legal partners.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/Who We Are.webp"
              alt="Our Legal Expertise"
              width={600}
              height={400}
              className="rounded-2xl object-cover w-full"
            />
          </div>
        </div>

        <div className="mt-12">
          <p className="text-gray-700 leading-relaxed mb-4">
            Our team brings years of experience in legal case intake, technology, and
            consumer advocacy. We understand how overwhelming it can be to face
            medical bills, pain, and uncertainty after an injury — which is why we make
            the claims process simple, fast, and stress-free.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether you’re a victim of a car accident, dangerous drug, defective
            product, or medical complication, we help connect you with attorneys who
            specialize in your case type and operate on a contingency basis — meaning
            you pay nothing unless your case wins.
          </p>
        </div>
      </div>

      {/* --- Trusted Partner Section --- */}
      <div className="bg-[#7c98d6] py-4 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex items-center w-fit">
              <div className="text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1f3c88] leading-tight mb-6 whitespace-nowrap">
                  A Trusted Partner in Justice
                </h2>
                <p className="text-gray-900 leading-relaxed mb-5 text-base md:text-lg max-w-xl">
                  You don’t have to face the legal system alone. <strong>ClaimYourClaims.com</strong> stands
                  behind individuals and families seeking honest answers, accountability, and
                  fair compensation. With a seamless online process and a nationwide network
                  of qualified attorneys, we ensure your claim is handled quickly and
                  responsibly.
                </p>
                <p className="text-gray-900 leading-relaxed text-base md:text-lg max-w-xl">
                  If you’ve been harmed — your recovery is our priority. Submit your
                  information to see if you qualify and take your first step toward justice
                  today.
                </p>
              </div>
              <div className="-ml-8 md:-ml-16 lg:-ml-24">
                <img
                  src="/A Trusted Partner in Justice.webp"
                  alt="Legal Expert"
                  className="w-[360px] md:w-[440px] lg:w-[500px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- REFINED: Our Values Section (Removed extra space) --- */}
      <section className="bg-[#f3f4f6] py-16 px-6 font-sans">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1d3a8a] text-center mb-10">
            Our Values
          </h2>

          {/* Centered 3-over-2 Layout */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {[
              {
                image: "/about-us-images/inetegrity.webp",
                title: "Integrity",
                desc: "We operate with transparency, honesty, and compliance.",
              },
              {
                image: "/about-us-images/comapasion.webp",
                title: "Compassion",
                desc: "Every claimant is treated with respect and dignity.",
              },
              {
                image: "/about-us-images/security.webp",
                title: "Security",
                desc: "Your data and privacy are protected at the highest standard.",
              },
              {
                image: "/about-us-images/accountability.webp",
                title: "Accountability",
                desc: "We work only with trusted legal partners who uphold ethical standards.",
              },
              {
                image: "/about-us-images/result.webp",
                title: "Results",
                desc: "Our focus is to connect you with the help you need to pursue rightful compensation.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[24px] p-8 shadow-sm flex flex-col items-center text-center w-full md:w-[calc(33.33%-1.5rem)] min-w-[280px] max-w-[340px] hover:shadow-md transition-shadow"
              >
                <div className="mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>

                <h3 className="text-xl font-bold text-[#1d3a8a] mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 font-medium text-[15px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* --- REFINED: Message From Team (Compact & Pill Shape) --- */}
          {/* --- Message From Team (With Fixed Quote Spacing) --- */}
          <div className="bg-[#8cb3ff] rounded-[40px] md:rounded-[50px] p-8 md:p-14 text-center text-white relative shadow-lg max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1d3a8a] mb-6">
              A Message From Our Team
            </h2>

            <div className="max-w-3xl mx-auto space-y-4 text-base md:text-lg font-medium leading-relaxed">
              <p>
                At ClaimYourClaims.com, we understand that injuries change lives — physically, financially, and emotionally.
                Our mission is to make your first step toward justice the easiest one.
              </p>
              <p>
                You’re not just a lead — you’re a person who deserves answers and support. We are here to help you take back control.
              </p>

              {/* Tighter Quote Block: Icons now hug the text */}
              <div className="flex justify-center items-center gap-3 md:gap-6 py-4 px-2">
                <Quote className="w-8 h-8 md:w-12 md:h-12 text-[#1d3a8a] opacity-30 -scale-x-100 flex-shrink-0 self-start mt-1" />

                <div className="text-[#1d3a8a] text-xl md:text-3xl font-black  tracking-tight leading-tight">
                  <p>Your Justice Journey Starts Here</p>
                  <p>If you’ve been harmed, don’t wait.</p>
                  <p>Your rights matter.</p>
                  <p>Your story matters.</p>
                </div>

                <Quote className="w-8 h-8 md:w-12 md:h-12 text-[#1d3a8a] opacity-30 rotate-180 flex-shrink-0 self-end mb-1" />
              </div>

              <p className="pt-2 text-white/95 text-sm md:text-base">
                Your claim matters. Start your free case evaluation today and take the first step toward justice and recovery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
