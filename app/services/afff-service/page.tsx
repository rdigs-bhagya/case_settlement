import type { Metadata } from "next"
import ClaimReviewForm from "@/components/ClaimReviewForm.tsx/page";
import ServiceProcess from "@/components/ServiceProcess.tsx/page";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "AFFF Firefighting Foam Lawsuit | AFFF Contamination Claims",
  description: "AFFF contamination exposure claim? Our attorneys handle firefighter and military PFOA/PFOS lawsuits. Get compensation for water contamination and health effects.",
}


const afffData = {
  mainTitle: "Do You Qualify for AFFF Cancer Compensation?",
  subTitle: "If you or a loved one has been diagnosed with cancer after exposure to AFFF firefighting foam, you may be entitled to significant compensation.",
  steps: [
    {
      title: "Exposure History",
      description: "You were exposed to AFFF foam as a firefighter, military personnel, or worked at airports/chemical plants."
    },
    {
      title: "Cancer Diagnosis",
      description: "You have been diagnosed with kidney cancer, testicular cancer, prostate cancer, or thyroid disease."
    },
    {
      title: "Timeline Connection",
      description: "Your cancer diagnosis occurred after your exposure to AFFF foam during your service or employment."
    }
  ]
};

const AFFFHeroSection = () => {
    return (
        <>
            <section className=" text-black relative overflow-hidden">
                <div className="container mx-auto px-8 py-4 relative z-10 mt-18">
                    {/* First Row (Text Left - Image Right) */}
                    <div className="grid lg:grid-cols-2 gap-6 items-center min-h-[500px]">
                        <div className="order-2 lg:order-1 space-y-4">
                            <h1 className="text-4xl lg:text-5xl xl:text-4xl font-extrabold leading-tight">
                                Who is <span className="text-primary">Responsible for Cancer Caused by AFFF Exposure?</span>
                            </h1>
                            <div className="space-y-6 text-lg sm:text-lg text-black/90">
                                <p>
                                    Major Manufacturers like 3M, DuPont, and Chemours have known that these
                                    harmful substances contained dangerous PFAS (Per-fluoroalkyl PFAS) commonly
                                    called "forever chemicals", but failed to warn users.
                                </p>
                                <p>
                                    Anyone previously facing frequent exposure to chemicals used in AFFF
                                    foam may qualify. AFFF was used around the country at
                                    military bases and major commercial airports and is responsible for toxic
                                    health risks including cancer, prostate cancer,
                                    testicular cancer, and kidney cancer.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <div className=" transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="/afff/AFFF Exposure.webp"
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
                            <div className="relative  transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="/afff/AFFF Exposure 2.webp"
                                    alt="AFFF lawsuit victims illustration"
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/20 to-transparent"></div>
                            </div>
                        </div>
                        <div className="order-2 lg:order-2 space-y-4">
                            <h1 className="text-4xl lg:text-5xl xl:text-4xl font-extrabold leading-tight">
                                <span className="text-primary">Victims of AFFF Exposure</span> May Qualify for Legal Compensation
                            </h1>
                            <div className="space-y-6 text-lg sm:text-lg text-black/90">
                                <p>
                                    Thousands of military personnel, firefighters, and airport workers were
                                    unknowingly exposed to toxic PFAS chemicals contained in AFFF foam for
                                    decades.
                                </p>
                                <p>
                                    Legal actions are being taken nationwide to hold manufacturers accountable
                                    for failing to warn about these risks. You may be entitled to significant
                                    compensation if diagnosed with related cancers.
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
            <ServiceProcess 
            mainTitle={afffData.mainTitle} 
            subTitle={afffData.subTitle} 
            steps={afffData.steps} />

            {/* <section className="py-1 bg-gradient-to-b from-background to-muted/30 mb-6">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-4">
                        <div className="inline-block bg-navy-blue text-white px-6 rounded-full text-sm font-semibold mb-6">
                            Qualification Check
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-navy-blue mb-6">
                            Do You Qualify for AFFF Cancer Compensation?
                        </h2>
                        <p className="text-muted-foreground text-xl max-w-4xl mx-auto leading-relaxed">
                            If you or a loved one has been diagnosed with cancer after exposure to AFFF firefighting foam,
                            you may be entitled to significant compensation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="group relative">
                            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center h-full border-t-4 border-navy-blue">
                                <div className="w-15 h-15 bg-gradient-to-br from-navy-blue to-navy-blue-dark text-blue rounded-2xl flex items-center justify-center mx-auto mb-2 text-3xl font-bold group-hover:scale-110 transition-transform">
                                    1
                                </div>
                                <h3 className="text-2xl font-bold text-navy-blue mb-2">
                                    Exposure History
                                </h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    You were exposed to AFFF foam as a firefighter, military personnel,
                                    or worked at airports/chemical plants.
                                </p>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center h-full border-t-4 border-navy-blue">
                                <div className="w-15 h-15 bg-gradient-to-br from-navy-blue to-navy-blue-dark text-blue rounded-2xl flex items-center justify-center mx-auto mb-2 text-3xl font-bold group-hover:scale-110 transition-transform">
                                    2
                                </div>
                                <h3 className="text-2xl font-bold text-navy-blue mb-4">
                                    Cancer Diagnosis
                                </h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    You have been diagnosed with kidney cancer, testicular cancer,
                                    prostate cancer, or thyroid disease.
                                </p>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center h-full border-t-4 border-navy-blue">
                                <div className="w-18 h-18 bg-gradient-to-br from-navy-blue to-navy-blue-dark text-blue rounded-2xl flex items-center justify-center mx-auto mb-2 text-3xl font-bold group-hover:scale-110 transition-transform">
                                    3
                                </div>
                                <h3 className="text-2xl font-bold text-navy-blue mb-4">
                                    Timeline Connection
                                </h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    Your cancer diagnosis occurred after your exposure to AFFF foam
                                    during your service or employment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <div>
                        <ClaimReviewForm service={"afff"}/>

            </div>

        </>
    );
};

export default AFFFHeroSection;
