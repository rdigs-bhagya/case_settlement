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
                <h3 className="font-bold text-xl font-space-grotesk">Legal Assistance</h3>
                <p className="text-xs text-background/70">Claims & Settlements</p>
              </div>
            </div>
            <p className="text-background/80">
              Expert legal assistance for case settlements, claims, and litigation with over 15 years of proven results.
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
              {/* <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Case Results
                </a>
              </li> */}
              {/* <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li> */}
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
  <a href="mailto:contact@legalassistance.com" className="flex items-center gap-2 hover:underline text-white">
    <Mail className="h-4 w-4" />
    <span>contact@legalassistance.com</span>
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

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
          <p>
            &copy; 2025 Legal Assistance. All rights reserved. | Attorney Advertising | Prior results do not guarantee a
            similar outcome.
          </p>
        </div>
      </div>
    </footer>
  )
}
