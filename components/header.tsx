
"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, ChevronDown, Menu, X } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState, useEffect } from "react"
import Link from "next/link"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  }, [lastScrollY])

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.documentElement.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`)

    // Ensure body always shows scrollbar to prevent layout shifts
    document.body.style.overflowY = "scroll"

    return () => {
      document.body.style.overflowY = ""
    }
  }, [])

  const services = [
    { name: "AFFF Lawsuit Support", href: "/services/afff-service" },
    { name: "NEC Lawsuit Assistance", href: "/services/nec-service" },
    { name: "Motor Vehicle Accidents", href: "/services/mva-claim" },
    { name: "Product Liability", href: "/services/product-liability-service" },
    { name: "Mass Tort Litigation", href: "/services/mass-tort-litigation" },
    { name: "Roundup Lawsuit", href: "/services/round-up-service" },
    { name: "Hair Relaxer Claims", href: "/services/hair-relaxer" },
    { name: "Zantac Lawsuits", href: "/services/zantac-lawsuite-service" },
    { name: "PFAS Lawsuite", href: "/services/pfas-lawsuite-service" },
    { name: "Silicosis", href: "/services/silicosis" },
    { name: "Roblox Lawsuit", href: "/services/roblox-service" },
    { name: "Asbestos Lawsuit", href: "/services/asbestos-service" },
    { name: "Depo Prova", href: "/services/depo-provera" },
  ]

  return (
    <header
      className={`bg-white border-b border-gray-200 fixed top-0 w-full z-50 transition-transform duration-300 shadow-sm ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="bg-blue-800 text-white py-2">
        <div className="flex justify-between items-center text-xs sm:text-sm px-8">
          <div className="flex items-center gap-2 sm:gap-4">
            <a href="tel:2292617123" className="flex items-center gap-1 sm:gap-2 hover:underline text-white">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">(229) 261-7123</span>
              <span className="sm:hidden">Call Now</span>
            </a>

            <a href="mailto:help@claimyourclaims.com" className="hidden sm:flex items-center gap-2 hover:underline text-white">
              <Mail className="h-4 w-4" />
              <span>help@claimyourclaims.com</span>
            </a>

          </div>
          <div className="text-xs sm:text-sm text-white flex flex-wrap items-center gap-3">
            <span className="font-medium">Availability</span>
            <span>📅 Monday to Friday</span>
            <span>⏰ 8 AM EST – 5 PM PST</span>
          </div>
        </div>
      </div>

      <div className="px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="w-30 h-12 flex items-center justify-center">
              <img src="/logo.webp" alt="Claim Your Claims Logo" />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors text-lg font-bold">
                Services <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[700px] p-4" align="start" sideOffset={8} alignOffset={-200}>
                <div className="grid grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={service.href}
                      className="block p-2.5 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700 hover:text-blue-800"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="/about-us" className="text-gray-700 hover:text-primary transition-colors text-lg font-bold">
              About
            </a>
            <a href="/blogs" className="text-gray-700 hover:text-primary transition-colors text-lg font-bold">
              Blogs
            </a>
            <a href="/contact-us" className="text-gray-700 hover:text-primary transition-colors text-lg font-bold">
              Contact Us
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/contact-us">
              <Button className="bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm px-3 sm:px-4 py-2">
                <span className="hidden sm:inline">Get Started Today</span>
                <span className="sm:hidden">Get Started</span>
              </Button>
            </Link>

            <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4 pt-4">
              <div className="space-y-2">
                <div className="font-semibold text-gray-900">Services</div>
                <div className="grid grid-cols-1 gap-2 pl-4">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={service.href}
                      className="block py-2 text-sm text-gray-600 hover:text-blue-800 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>
              <a
                href="/about-us"
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/blogs"
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blogs
              </a>
              <a
                href="/contact-us"
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
