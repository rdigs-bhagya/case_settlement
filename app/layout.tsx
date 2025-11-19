import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Legal Claim & Settlement Assistance | Expert Legal Help",
  description:
    "Get expert legal assistance for case settlements and claim support. Professional litigation services with proven results. Contact us for a free consultation.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
      <body className="font-sans">

        <Header />

        {/* TrustedForm Script */}
        <Script id="trustedform-script" strategy="afterInteractive">
          {`
            (function() {
              var tf = document.createElement('script');
              tf.type = 'text/javascript';
              tf.async = true;
              tf.src = ("https:" == document.location.protocol ? 'https' : 'http') +
                '://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&use_tagged_consent=true&l=' +
                new Date().getTime() + Math.random();
              var s = document.getElementsByTagName('script')[0]; 
              s.parentNode.insertBefore(tf, s);
            })();
          `}
        </Script>

        <noscript>
          <img src="https://api.trustedform.com/ns.gif" alt="" />
        </noscript>
        {/* End TrustedForm */}

        {children}

        <Footer />
      </body>
    </html>
  )
}
