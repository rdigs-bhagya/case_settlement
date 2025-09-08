"use client";

import FormFields from "@/components/FormFields/page";
import { Phone, Mail } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="relative py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Decorative blurred shapes */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-blue-200/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 lg:px-16 mt-[95px]">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left Side - Text + Info */}
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
              Reach Our{" "}
              <span className="text-primary">
                Expert Team
              </span>
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Have questions or need legal help? Our dedicated team is ready to
              assist you with expert guidance. Reach out through the contact
              details below or send us a direct message.
            </p>

            <div className="space-y-5">
              {/* Phone Card */}
              <div className="flex items-center gap-4 bg-white/95 backdrop-blur-lg shadow-md p-4 rounded-lg border border-gray-100 hover:shadow-lg transition">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-md">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900">
                    Quickly Call Us
                  </h4>
                  <p className="text-primary font-medium text-sm">
                    +1 323 843 5995
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-center gap-4 bg-white/95 backdrop-blur-lg shadow-md p-4 rounded-lg border border-gray-100 hover:shadow-lg transition">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-md">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900">
                    Drop a Message
                  </h4>
                  <p className="text-primary font-medium text-sm">
                    contact@legalclaimassistance.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="relative bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-purple-200 transition">
            {/* Decorative top accent */}
            {/* <div className="absolute top-0 left-0 w-full h-1.5 rounded-t-2xl bg-gradient-to-r from-blue-600 to-purple-600"></div> */}

            <h3 className="text-xl font-bold text-center text-gray-800 mb-6">
              📋 Send Us a Message
            </h3>

            {/* ✅ reusable form fields */}
            <FormFields />

            <p className="text-xs text-center text-gray-500 mt-5">
              🔒 Your information is safe & confidential
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
