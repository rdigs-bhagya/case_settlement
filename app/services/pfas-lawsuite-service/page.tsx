'use client'
import ClaimReviewForm from "@/components/ClaimReviewForm.tsx/page";
import { Button } from "@/components/ui/button";

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
                                    src="../PFAS/PFAS-2.png"
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
                                  src="../PFAS/PFAS-3.png"
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
                                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 text-lg font-bold"
                            >
                                Get Free Consultation
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="py-1 bg-gradient-to-b from-background to-muted/30 mb-6">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-4">
                        <div className="inline-block bg-navy-blue text-white px-6 rounded-full text-sm font-semibold mb-6">
                            Qualification Check
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-navy-blue mb-6">
                            Do You Qualify for a Hair Relaxer Lawsuit?
                        </h2>
                        <p className="text-muted-foreground text-xl max-w-4xl mx-auto leading-relaxed">
                            If you or a loved one developed serious health issues after prolonged use of chemical hair relaxers, you may qualify to seek compensation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="group relative">
                            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center h-full border-t-4 border-navy-blue">
                                <div className="w-15 h-15 bg-gradient-to-br from-navy-blue to-navy-blue-dark text-blue rounded-2xl flex items-center justify-center mx-auto mb-2 text-3xl font-bold group-hover:scale-110 transition-transform">
                                    1
                                </div>
                                <h3 className="text-2xl font-bold text-navy-blue mb-2">
                                    Product Use
                                </h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    You regularly used chemical hair relaxer or straightening products as intended over a period of time.
                                </p>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center h-full border-t-4 border-navy-blue">
                                <div className="w-15 h-15 bg-gradient-to-br from-navy-blue to-navy-blue-dark text-blue rounded-2xl flex items-center justify-center mx-auto mb-2 text-3xl font-bold group-hover:scale-110 transition-transform">
                                    2
                                </div>
                                <h3 className="text-2xl font-bold text-navy-blue mb-4">
                                    Diagnosis
                                </h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    You have been diagnosed with a qualifying condition such as uterine cancer, ovarian cancer, endometrial cancer, fibroids, or other reproductive health issues.
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
                                    Your diagnosis occurred after consistent use of hair relaxers, and medical records or history link your condition to product exposure.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <div>
                <ClaimReviewForm service={"pfas-lawsuite-service"} />

            </div>

        </>
    );
};

export default PFASSection;