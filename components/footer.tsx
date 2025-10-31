 import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">L</span>
              </div>
              <div>
                <h3 className="font-bold text-xl font-space-grotesk">Claim Your Claims</h3>
                <p className="text-xs text-background/70">Claims & Settlements</p>
              </div>
            </div>
            <p className="text-background/80">
              Expert Claim assistance for case settlements, claims, and litigation with over 15 years of proven results.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold font-space-grotesk mb-4">Our Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="/services/afff-service" className="hover:text-primary transition-colors">
                  AFFF Lawsuite
                </a>
              </li>
              <li>
                <a href="/services/mva" className="hover:text-primary transition-colors">
                  Motor Vehicle Accidents
                </a>
              </li>
              <li>
                <a href="/services/mass-tort-litigation" className="hover:text-primary transition-colors">
                  Mass Tort Litigation
                </a>
              </li>
              <li>
                <a href="/services/product-liability-service" className="hover:text-primary transition-colors">
                  Product Liability
                </a>
              </li>
              <li>
                <a href="/services/nec-service" className="hover:text-primary transition-colors">
                  NEC Lawsuite Assistance
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold font-space-grotesk mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="/about-us" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/blogs" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact-us" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold font-space-grotesk mb-4">Contact Info</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center gap-2">
                <a href="tel:8338441999" className="flex items-center gap-2 hover:underline text-white">
                  <Phone className="h-4 w-4" />
                  <span>(833) 844-1999</span>
                </a>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="mailto:contact@claimyourclaims.com"
                  className="flex items-center gap-2 hover:underline text-white"
                >
                  <Mail className="h-4 w-4" />
                  <span>contact@claimyourclaims.com</span>
                </a>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>
                  Available Nationwide
                  <br />
                  Licensed in All 50 States
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer + Copyright */}
        <div className="border-t border-background/20 mt-12 pt-8 text-center max-w-6xl mx-auto">
          <p className="text-[10px] text-background/50 leading-relaxed mb-6 tracking-wide uppercase">
            BY SUBMITTING THIS FORM, YOU GIVE YOUR CONSENT TO CLAIMYOURCLAIMS.COM AND OUR MARKETING PARTNERS TO CONTACT YOU VIA AUTOMATED CALLS, PRE-RECORDED MESSAGES, AND TEXT MESSAGES AT THE TELEPHONE NUMBER(S) PROVIDED. THESE COMMUNICATIONS MAY BE RELATED TO POTENTIAL LEGAL SERVICES OR ASSISTANCE. STANDARD MESSAGE AND DATA RATES MAY APPLY. TO OPT OUT OF RECEIVING THESE COMMUNICATIONS, DO NOT SUBMIT THE FORM OR REFRAIN FROM PROVIDING YOUR CONTACT INFORMATION. I CONFIRM THAT I WAS NOT COACHED AND I WAS NOT OFFERED ANY COMPENSATION FOR THIS CLAIM. I UNDERSTAND I WILL BE ASKED FOR MEDICAL RECORDS, AND IF FALSIFIED, I WILL BE HELD LIABLE FOR KNOWINGLY PROVIDING FALSE INFORMATION, AND THE LAW FIRM RESERVES THE RIGHT TO SEEK ALL AVAILABLE REMEDIES UNDER THE LAW.
          </p>

          <p className="text-[11px] text-background/60 tracking-wide uppercase">
            Copyright 2025 @ Claim Your Claims. All Rights Reserved. | Attorney Advertising | Prior Results Do Not Guarantee A
            Similar Outcome.
          </p>
        </div>
      </div>
    </footer>
  )
}
