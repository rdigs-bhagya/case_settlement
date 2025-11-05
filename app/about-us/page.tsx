"use client";

import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="relative bg-white">
      {/* --- Hero Section --- */}
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
      <div className="max-w-7xl mx-auto px-6 md:px-6 lg:px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-20">
              Who <span className="text-primary font-extrabold">We Are</span>
            </h2>
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
          <div className="relative mt-15">
            <Image
              src="/PFAS/pfas1.png"
              alt="Our Legal Expertise"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover w-full"
            />
            <div className="absolute bottom-5 left-5 bg-white/90 px-5 py-3 rounded-xl shadow-md">
              <h3 className="text-blue-700 font-bold text-lg">10+ Years</h3>
              <p className="text-gray-600 text-sm">of Experience</p>
            </div>
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
      <div className="bg-blue-50 py-6">
        <div className="max-w-5xl mx-auto px-6 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            A Trusted <span className="text-primary font-extrabold">Partner in Justice</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You don’t have to face the legal system alone. <strong>ClaimYourClaims.com</strong> stands
            behind individuals and families seeking honest answers, accountability, and
            fair compensation. With a seamless online process and a nationwide network
            of qualified attorneys, we ensure your claim is handled quickly and
            responsibly.
          </p>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            If you’ve been harmed — your recovery is our priority. Submit your
            information to see if you qualify and take your first step toward justice
            today.
          </p>
        </div>
      </div>

      {/* --- Our Values Section --- */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-6 py-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          ✅ Our <span className="text-primary font-extrabold">Values</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Integrity",
              desc: "We operate with transparency, honesty, and compliance.",
            },
            {
              title: "Compassion",
              desc: "Every claimant is treated with respect and dignity.",
            },
            {
              title: "Security",
              desc: "Your data and privacy are protected at the highest standard.",
            },
            {
              title: "Accountability",
              desc: "We work only with trusted legal partners who uphold ethical standards.",
            },
            {
              title: "Results",
              desc: "Our focus is to connect you with the help you need to pursue rightful compensation.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- Message From Team --- */}
      <div className="bg-gradient-to-r from-blue-100 to-blue-50 py-8">
        <div className="max-w-5xl mx-auto px-6 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            A Message <span className="text-primary font-extrabold">From Our Team</span>
          </h2>

          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <p className="text-gray-700 leading-relaxed mb-4">
              At <strong>ClaimYourClaims.com</strong>, we understand that injuries change lives —
              physically, financially, and emotionally. Our mission is to make your first
              step toward justice the easiest one.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              You’re not just a lead — you’re a person who deserves answers and support. We
              are here to help you take back control.
            </p>

            <div className="border-t border-gray-300 pt-6 text-center">
              <h3 className="text-primary font-extrabold mb-3">
                🛡 Your Justice Journey Starts Here
              </h3>
              <p className="text-gray-700 leading-relaxed">If you’ve been harmed, don’t wait.</p>
              <p className="text-gray-700 leading-relaxed">Your rights matter.</p>
              <p className="text-gray-700 leading-relaxed">Your story matters.</p>
              <p className="text-gray-700 leading-relaxed">
                Your claim matters. Start your free case evaluation today and take the first
                step toward justice and recovery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
