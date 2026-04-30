'use client'
import ClaimReviewForm from "@/components/ClaimReviewForm.tsx/page";
import { Button } from "@/components/ui/button";

const MassTortSection = () => {
    return (
        <>
            <section className=" text-black relative overflow-hidden">
                <div className="container mx-auto px-8 py-4 relative z-10 mt-18">
                    {/* First Row (Text Left - Image Right) */}
                    <div className="grid lg:grid-cols-2 gap-6 items-center min-h-[500px]">
                        <div className="order-2 lg:order-1 space-y-4">
                            <h1 className="text-4xl lg:text-5xl xl:text-4xl font-extrabold leading-tight">
                                <span className="text-primary">Why Do I Need a Lawyer for Mass Tort Litigation?</span>
                            </h1>
                            <div className="space-y-6 text-lg sm:text-lg text-black/90">
                                <p>
                                    Mass tort litigation allows individuals harmed by the same corporation, defective product, or environmental hazard to pursue justice collectively. These cases often involve large-scale corporate negligence where victims may suffer serious medical, financial, or environmental harm. Retaining an experienced attorney ensures your rights are protected, your claim is properly filed within the broader litigation, and you receive fair compensation without being overshadowed by corporate defense teams.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="../Mass_Tort_Litigation/Mass Tort Litigation.png"
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
                                    src="../Mass_Tort_Litigation/Mass Tort Litigation 2.png"
                                    alt="AFFF lawsuit victims illustration"
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/20 to-transparent"></div>
                            </div>
                        </div>
                        <div className="order-2 lg:order-2 space-y-4">
                            <h1 className="text-4xl lg:text-5xl xl:text-4xl font-extrabold leading-tight">
                                <span className="text-primary"> Types of Mass Tort Cases We Handle</span>
                            </h1>
                            <div className="space-y-6 text-lg sm:text-lg text-black/90">
                                <p>
                                    Mass tort claims cover a wide range of large-scale harm, often requiring coordination across numerous plaintiffs. Our practice encompasses:
                                    <li>
                                        <b> Class action suits – </b> collective actions where individuals join together against a common defendant.
                                    </li>
                                    <li>
                                        <b>  Corporate negligence – </b> cases involving harmful business practices or unsafe products.
                                    </li>
                                    <li>
                                        <b>  Environmental claims –</b> lawsuits addressing exposure to toxic chemicals, pollutants, or environmental hazards.
                                    </li>

                                    Each case is evaluated carefully to ensure every client’s voice is heard and their damages are fully represented within the larger litigation.

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
            <section className="py-1 bg-gradient-to-b from-background to-muted/30 mb-6">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-4">
                        <div className="inline-block bg-navy-blue text-white px-6 rounded-full text-sm font-semibold mb-6">
                            Qualification Check
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-navy-blue mb-6">
                            Do You Qualify for Mass Tort Compensation?
                        </h2>
                        <p className="text-muted-foreground text-xl max-w-4xl mx-auto leading-relaxed">
                           If you or a loved one has been affected by widespread harm from a corporation, defective product, or environmental hazard, you may be eligible to join a mass tort case and seek compensation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="group relative">
                            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center h-full border-t-4 border-navy-blue">
                                <div className="w-15 h-15 bg-gradient-to-br from-navy-blue to-navy-blue-dark text-blue rounded-2xl flex items-center justify-center mx-auto mb-2 text-3xl font-bold group-hover:scale-110 transition-transform">
                                    1
                                </div>
                                <h3 className="text-2xl font-bold text-navy-blue mb-2">
                                    Exposure or Involvement
                                </h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                   You were exposed to a defective product, harmful corporate practice, or environmental hazard.
                                </p>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center h-full border-t-4 border-navy-blue">
                                <div className="w-15 h-15 bg-gradient-to-br from-navy-blue to-navy-blue-dark text-blue rounded-2xl flex items-center justify-center mx-auto mb-2 text-3xl font-bold group-hover:scale-110 transition-transform">
                                    2
                                </div>
                                <h3 className="text-2xl font-bold text-navy-blue mb-4">
                                     Harm or Injury
                                </h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                   You experienced medical issues, financial loss, or other damages linked to the exposure or negligence.
                                </p>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center h-full border-t-4 border-navy-blue">
                                <div className="w-18 h-18 bg-gradient-to-br from-navy-blue to-navy-blue-dark text-blue rounded-2xl flex items-center justify-center mx-auto mb-2 text-3xl font-bold group-hover:scale-110 transition-transform">
                                    3
                                </div>
                                <h3 className="text-2xl font-bold text-navy-blue mb-4">
                                    Connection to Mass Tort Case
                                </h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    Your injury or loss is consistent with claims made in an existing mass tort or class action lawsuit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <ClaimReviewForm service={"mass-tort-litigation"} />

            </div>

        </>
    );
};

export default MassTortSection;