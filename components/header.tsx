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
    { name: "AFFF Lawsuit Support", href: "#afff" },
    { name: "NEC Lawsuit Assistance", href: "#nec" },
    { name: "Motor Vehicle Accidents", href: "#mva" },
    { name: "Roundup Lawsuit", href: "#roundup" },
    { name: "Hair Relaxer Claims", href: "#hair-relaxer" },
    { name: "Zantac Lawsuits", href: "#zantac" },
    { name: "Mass Tort Claims", href: "#mass-tort" },
    { name: "Personal Injury", href: "#personal-injury" },
  ]

  return (
    <header
      className={`bg-white border-b border-gray-200 fixed top-0 w-full z-50 transition-transform duration-300 shadow-sm ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="bg-blue-800 text-white py-2">
        <div className="flex justify-between items-center text-xs sm:text-sm px-8">
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1 sm:gap-2">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">(833) 844-1999</span>
              <span className="sm:hidden">Call Now</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>contact@legalassistance.com</span>
            </div>
          </div>
          <div className="text-xs sm:text-sm">
            <span className="font-medium">Free Consultation 24/7</span>
          </div>
        </div>
      </div>

      <div className="px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <div className="text-white font-bold text-2xl">⚖</div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors text-lg font-bold">
                Services <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[600px] p-4" align="start" sideOffset={8} alignOffset={-200}>
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
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors text-lg font-bold">
              About
            </a>
            <a href="#process" className="text-gray-700 hover:text-primary transition-colors text-lg font-bold">
              Process
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors text-lg font-bold">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button className="bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm px-3 sm:px-4 py-2">
              <span className="hidden sm:inline">Get Started Today</span>
              <span className="sm:hidden">Get Started</span>
            </Button>

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
                  {services.slice(0, 4).map((service, index) => (
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
                href="#about"
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#process"
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Process
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
