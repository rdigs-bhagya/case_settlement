import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motor Vehicle Accident Compensation | MVA Injury Lawyers",
  description:
    "Injured in a car accident? Our experienced MVA attorneys fight for maximum compensation. We handle car, truck, and motorcycle accidents. 24/7 support available.",
};

export default function MVAClaimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
