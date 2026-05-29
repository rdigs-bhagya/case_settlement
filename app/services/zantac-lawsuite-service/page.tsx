import type { Metadata } from "next"
import ClaimReviewForm from "@/components/ClaimReviewForm.tsx/page";
import ServiceProcess from "@/components/ServiceProcess.tsx/page";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Zantac Heartburn Medication Lawsuit | Ranitidine Cancer Claims",
  description: "Zantac or generic ranitidine caused cancer? Our legal team handles NDMA contamination lawsuits and provides expert representation.",
}


const zantacData = {
  mainTitle: "Do You Qualify for a Zantac Lawsuit?",
  subTitle: "If you or a loved one developed cancer or other serious health issues after using Zantac, you may be eligible to pursue compensation.",
  steps: [
    {
      title: "Usage History",
      description: "You regularly used Zantac (ranitidine) for heartburn, acid reflux, or related conditions."
    },
    {
      title: "Health Diagnosis",
      description: "You have been diagnosed with a qualifying condition such as stomach cancer, bladder cancer, esophageal cancer, or other NDMA-linked illnesses."
    },
    {
      title: "Causal Link",
      description: "Your diagnosis occurred after extended Zantac use, and medical or exposure history supports the connection."
    }
  ]
};

const ZantacSection = () => {
    return (
        <>
            <section className=" text-black relative overflow-hidden">
                <div className="container mx-auto px-8 py-4 relative z-10 mt-18">
                    {/* First Row (Text Left - Image Right) */}
                    <div className="grid lg:grid-cols-2 gap-6 items-center min-h-[500px]">
                        <div className="order-2 lg:order-1 space-y-4">
                            <h1 className="text-4xl lg:text-5xl xl:text-4xl font-extrabold leading-tight">
                                <span className="text-primary">The Risks of Zantac: Why Legal Action Matters</span>
                            </h1>
                            <div className="space-y-6 text-lg sm:text-lg text-black/90">
                                <p>
                                    Zantac, a popular heartburn medication, has been found to contain a substance linked to cancer risks. If you or a loved one have developed health issues after using Zantac, filing a lawsuit can help you pursue compensation for medical expenses and damages while holding the manufacturer accountable for their oversight.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="../zantac/Zantac.png"
                                    alt="Firefighters using AFFF foam at emergency scene"
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/20 to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    {/* Second Row (Image Left - Text Right) */}
                    <div className="grid lg:grid-cols-2 gap-6 items-center min-h-[450px] ">
                        <div className="order-1 lg:order-1 relative">
                            <div className="relative transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="../zantac/Zantac 2.png"
                                    alt="AFFF lawsuit victims illustration"
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/20 to-transparent"></div>
                            </div>
                        </div>
                        <div className="order-2 lg:order-2 space-y-4">
                            <h1 className="text-4xl lg:text-5xl xl:text-4xl font-extrabold leading-tight">
                                <span className="text-primary">Your Rights and Zantac: What to Do If You've Been Affected</span>
                            </h1>
                            <div className="space-y-6 text-lg sm:text-lg text-black/90">
                                <p>
                                    If you’ve experienced health problems due to Zantac, it’s crucial to understand your legal options. Filing a lawsuit can help you recover damages and advocate for accountability from the manufacturer. Don’t delay—explore your legal rights to ensure you receive the compensation and justice you deserve.
                                </p>

                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons (shared for both sections) */}
                    <div className="flex gap-4 pt-2 justify-center items-center">
                        <div className="text-center">
                            <Button
                                size="lg"
                                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 text-lg font-bold mb-5"
                            >
                                Get Free Consultation
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <ServiceProcess mainTitle={zantacData.mainTitle} subTitle={zantacData.subTitle} steps={zantacData.steps} />
            {/* <section className="py-1 bg-gradient-to-b from-background to-muted/30 mb-6">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-4">
                        <div className="inline-block bg-navy-blue text-white px-6 rounded-full text-sm font-semibold mb-6">
                            Qualification Check
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-navy-blue mb-6">
                            Do You Qualify for a Zantac Lawsuit?
                        </h2>
                        <p className="text-muted-foreground text-xl max-w-4xl mx-auto leading-relaxed">
                            If you or a loved one developed cancer or other serious health issues after using Zantac, you may be eligible to pursue compensation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="group relative">
                            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center h-full border-t-4 border-navy-blue">
                                <div className="w-15 h-15 bg-gradient-to-br from-navy-blue to-navy-blue-dark text-blue rounded-2xl flex items-center justify-center mx-auto mb-2 text-3xl font-bold group-hover:scale-110 transition-transform">
                                    1
                                </div>
                                <h3 className="text-2xl font-bold text-navy-blue mb-2">
                                    Usage History
                                </h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    You regularly used Zantac (ranitidine) for heartburn, acid reflux, or related conditions.
                                </p>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center h-full border-t-4 border-navy-blue">
                                <div className="w-15 h-15 bg-gradient-to-br from-navy-blue to-navy-blue-dark text-blue rounded-2xl flex items-center justify-center mx-auto mb-2 text-3xl font-bold group-hover:scale-110 transition-transform">
                                    2
                                </div>
                                <h3 className="text-2xl font-bold text-navy-blue mb-4">
                                    Health Diagnosis
                                </h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    You have been diagnosed with a qualifying condition such as stomach cancer, bladder cancer, esophageal cancer, or other NDMA-linked illnesses
                                </p>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center h-full border-t-4 border-navy-blue">
                                <div className="w-18 h-18 bg-gradient-to-br from-navy-blue to-navy-blue-dark text-blue rounded-2xl flex items-center justify-center mx-auto mb-2 text-3xl font-bold group-hover:scale-110 transition-transform">
                                    3
                                </div>
                                <h3 className="text-2xl font-bold text-navy-blue mb-4">
                                    Causal Link
                                </h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    Your diagnosis occurred after extended Zantac use, and medical or exposure history supports the connection.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <div>
                <ClaimReviewForm service={"zantac-lawsuite-service"} />

            </div>

        </>
    );
};

export default ZantacSection;
