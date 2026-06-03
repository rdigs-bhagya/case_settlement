import { MetadataRoute } from "next"

const baseUrl = "https://www.claimyourclaims.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about-us",
    "/blogs",
    "/contact-us",
    "/privacy-policy",
    "/terms-of-use",
    "/services/afff-service",
    "/services/asbestos-service",
    "/services/hair-relaxer",
    "/services/mass-tort-litigation",
    "/services/mva",
    "/services/mva-claim",
    "/services/nec-service",
    "/services/pfas-lawsuite-service",
    "/services/product-liability-service",
    "/services/roblox-service",
    "/services/round-up-service",
    "/services/silicosis",
    "/services/zantac-lawsuite-service",
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))
}
