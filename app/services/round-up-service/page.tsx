'use client'
import ClaimReviewForm from "@/components/ClaimReviewForm.tsx/page";
import { Button } from "@/components/ui/button";

const RoundUpSection = () => {
    return (
        <>
            <section className=" text-black relative overflow-hidden">
                <div className="container mx-auto px-8 py-4 relative z-10 mt-18">
                    {/* First Row (Text Left - Image Right) */}
                    <div className="grid lg:grid-cols-2 gap-6 items-center min-h-[500px]">
                        <div className="order-2 lg:order-1 space-y-4">
                            <h1 className="text-4xl lg:text-5xl xl:text-4xl font-extrabold leading-tight">
                                <span className="text-primary">Why Do I Need a Lawyer for a Roundup Lawsuit?</span>
                            </h1>
                            <div className="space-y-6 text-lg sm:text-lg text-black/90">
                                <p>
                                    Roundup, a herbicide containing glyphosate, has been widely used in both commercial and residential settings. However, long-term exposure has been linked in lawsuits to cancers such as non-Hodgkin lymphoma, leukemia, and mantle cell lymphoma. While regulatory agencies differ in their conclusions, courts have recognized potential health risks and awarded substantial damages to victims.
                                    An experienced product liability attorney can evaluate your history of exposure, review your medical records, and determine if you are eligible to pursue compensation against Bayer, the manufacturer of Roundup. Legal representation ensures that deadlines are met, evidence is preserved, and your rights are fully protected.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="../RoundUp/Roundup.png"
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
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="../RoundUp/Roundup1.png"
                                    alt="AFFF lawsuit victims illustration"
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/20 to-transparent"></div>
                            </div>
                        </div>
                        <div className="order-2 lg:order-2 space-y-4">
                            <h1 className="text-4xl lg:text-5xl xl:text-4xl font-extrabold leading-tight">
                                <span className="text-[#193CB8]">THealth Conditions and Legal Precedents</span>
                            </h1>
                            <div className="space-y-6 text-lg sm:text-lg text-black/90">
                                <p>
                                    Claims related to Roundup most often involve:

                                    <li><b>Non-Hodgkin B-cell or T-cell lymphoma</b></li>

                                    <li><b>Chronic lymphocytic leukemia</b></li>

                                    <li><b>Hairy cell lymphoma</b></li>

                                    <li><b>Mantle cell lymphoma</b></li>
                                    Notable lawsuits have resulted in multimillion-dollar verdicts, including cases where long-term users demonstrated a direct connection between Roundup exposure and their cancer diagnosis. While Bayer has also defended and won some cases, the litigation landscape continues to evolve with ongoing claims nationwide.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* First Row (Text Left - Image Right) */}
                    <div className="grid lg:grid-cols-2 gap-6 items-center min-h-[500px]">
                        <div className="order-2 lg:order-1 space-y-4">
                            <h1 className="text-4xl lg:text-5xl xl:text-4xl font-extrabold leading-tight">
                                <span className="text-primary">Marketing/Supportive Version (Add-On)</span>
                            </h1>
                            <div className="space-y-6 text-lg sm:text-lg text-black/90">
                                <p>
                                    Roundup Lawsuit Support for Victims and Families

                                    Thousands of individuals have come forward claiming Roundup contributed to their cancer diagnoses. Successful lawsuits have already secured millions in compensation for victims. If you believe your health has been impacted, don’t wait.
                                    Our legal team provides:

                                    <li><b>No upfront fees –</b> we only get paid if you win.</li>

                                    <li><b>Nationwide support – </b> serving clients across the U.S.</li>

                                    <li><b>Proven litigation experience – </b> standing up against large corporations.</li>
                                </p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="../RoundUp/Rooundup2.png"
                                    alt="Firefighters using AFFF foam at emergency scene"
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/20 to-transparent"></div>
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
            <section className="py-1 bg-gradient-to-b from-background to-muted/30 mb-6">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-4">
                        <div className="inline-block bg-navy-blue text-white px-6 rounded-full text-sm font-semibold mb-6">
                            Qualification Check
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-navy-blue mb-6">
                            Do You Qualify for a Roundup Lawsuit?
                        </h2>
                        <p className="text-muted-foreground text-xl max-w-4xl mx-auto leading-relaxed">
                            If you or a loved one has been diagnosed with cancer after prolonged use of Roundup, you may qualify to pursue compensation.</p>
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
                                    You regularly used Roundup herbicide in agricultural, landscaping, gardening, or related work.
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
                                    You have been diagnosed with a qualifying condition such as non-Hodgkin lymphoma, leukemia, mantle cell lymphoma, or other related cancers.
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
                                    Your cancer diagnosis occurred after extended exposure to Roundup, and medical records or history support the link.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <ClaimReviewForm service={"round-up-service"} />

            </div>
        </>
    );
};

export default RoundUpSection;