import type { Metadata } from "next"
import ClaimReviewForm from "@/components/ClaimReviewForm.tsx/page";
import ServiceProcess from "@/components/ServiceProcess.tsx/page";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "PFAS Contamination Lawsuit | Water Contamination Claims",
  description: "PFAS contamination in your water supply? Our attorneys handle PFOA/PFOS drinking water lawsuits against responsible manufacturers.",
}


const pfasData = {
  mainTitle: "Do You Qualify for a PFAS Lawsuit?",
  subTitle: "If you or a loved one developed serious health issues after exposure to PFAS 'forever chemicals' in drinking water or the workplace, you may be entitled to compensation.",
  steps: [
    {
      title: "Exposure History",
      description: "You lived or worked in an area with documented PFAS water contamination, or had direct exposure through firefighting foam (AFFF) or industrial work."
    },
    {
      title: "Medical Diagnosis",
      description: "You have been diagnosed with a qualifying condition such as kidney cancer, testicular cancer, thyroid cancer, liver cancer, or ulcerative colitis."
    },
    {
      title: "Timeline Connection",
      description: "Your diagnosis occurred after a period of prolonged exposure, and medical or environmental records support the link to PFAS contamination."
    }
  ]
};

const PFASSection = () => {
    return (
        <>
            <section className=" text-black relative overflow-hidden">
                <div className="container mx-auto px-8 py-4 relative z-10 mt-18">
                    {/* First Row (Text Left - Image Right) */}
                    <div className="grid lg:grid-cols-2 gap-6 items-center min-h-[500px]">
                        <div className="order-2 lg:order-1 space-y-4">
                            <h1 className="text-4xl lg:text-5xl xl:text-4xl font-extrabold leading-tight">
                                <span className="text-primary"> Who is Responsible for Health Issues Caused by PFAS Exposure?</span>
                            </h1>
                            <div className="space-y-6 text-lg sm:text-lg text-black/90">
                                <p>
                                    Major chemical manufacturers such as 3M and DuPont have been the focus of thousands of lawsuits related to PFAS (per- and polyfluoroalkyl substances) contamination.

                                    Allegations include Failing to warn the public about health risks. Dumping PFAS chemicals into local water supplies. Concealing research that linked PFAS exposure to cancer, thyroid disease, and other serious health problems.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="../PFAS/PFAS-3.png"
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
                                  src="../PFAS/PFAS-2.png"
                                    alt="AFFF lawsuit victims illustration"
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/20 to-transparent"></div>
                            </div>
                        </div>
                        <div className="order-2 lg:order-2 space-y-4">
                            <h1 className="text-4xl lg:text-5xl xl:text-4xl font-extrabold leading-tight">
                                <span className="text-primary"> Who Can Qualify for Compensation?</span>
                            </h1>
                            <div className="space-y-6 text-lg sm:text-lg text-black/90">
                                <p>
                                    People who may qualify for compensation from a PFAS (per- and polyfluoroalkyl substances) lawsuit typically fall into these categories:
                                    <li><b>1. Diagnosed with a PFAS-Linked Illness</b>
                                        You must have a medical diagnosis of a condition potentially linked to PFAS exposure, such as kidney cancer, testicular cancer, thyroid disease, ulcerative colitis, or high cholesterol.</li>

                                    <li><b>2. Exposed to PFAS-Contaminated Water or Products</b>
                                        You were exposed to PFAS through contaminated drinking water, firefighting foam (AFFF), or industrial sites. This includes:</li>

                                    <li><b>Living near military bases, airports, or chemical plants</b>
                                        Working in industries involving PFAS manufacturing or firefighting</li>
                                    <li><b>Long-term exposure to PFAS-containing consumer </b></li>
                                    Even exposure from years ago may qualify, especially if it can be traced to known contamination zones or product use.
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

            <ServiceProcess mainTitle={pfasData.mainTitle} subTitle={pfasData.subTitle} steps={pfasData.steps} />
           
            <div>
                <ClaimReviewForm service={"pfas-lawsuite-service"} />

            </div>

        </>
    );
};

export default PFASSection;
