'use client'
import ClaimReviewForm from "@/components/ClaimReviewForm.tsx/page";
import ServiceProcess from "@/components/ServiceProcess.tsx/page";
import { Button } from "@/components/ui/button";

const robloxData = {
  mainTitle: "Who Is Eligible for the Roblox Lawsuit?",
  subTitle: "You may qualify for legal assistance and representation if your child suffered abuse, exploitation, or grooming after meeting an abuser through Roblox.",
  steps: [
    {
      title: "Connection to Abuser",
      description: "Your child met the abuser through Roblox. Communication may have later occurred on another platform."
    },
    {
      title: "Age Requirement",
      description: "The victim was under 18 years old at the time the abuse or grooming began."
    },
    {
      title: "Type of Abuse & Impact",
      description: "Includes grooming, sextortion, sexual assault, trafficking, explicit material, mental health diagnoses, therapy, school issues, or suicide attempts resulting from the abuse."
    }
  ]
};

const RobloxSection = () => {
    return (
        <>
            {/* HERO SECTION */}
            <section className="text-black relative overflow-hidden">
                <div className="container mx-auto px-8 py-4 relative z-10 mt-18">

                    {/* Row 1 */}
                    <div className="grid lg:grid-cols-2 gap-6 items-center min-h-[500px]">
                        <div className="order-2 lg:order-1 space-y-4">
                            <h1 className="text-4xl lg:text-5xl xl:text-4xl font-extrabold leading-tight">
                                Roblox <span className="text-primary">Abuse Lawsuit Support</span>
                            </h1>

                            <div className="space-y-6 text-lg text-black/90">
                                <p>
                                    If your child was groomed, exploited, or abused after meeting someone
                                    through Roblox, you are not alone. Families across the country are
                                    taking action to hold predators—and the platform—accountable.
                                </p>

                                <p>
                                    Our team connects families with experienced attorneys who understand
                                    these cases and fight for the justice and compensation your family
                                    deserves.
                                </p>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="../roblox/roblo.png"
                                    alt="Roblox child safety concern"
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/20 to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid lg:grid-cols-2 gap-6 items-center min-h-[450px]">
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="../roblox/roblox-2.png"
                                    alt="Online grooming awareness"
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/20 to-transparent"></div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-4xl lg:text-5xl xl:text-4xl font-extrabold leading-tight">
                                What Is the <span className="text-primary">Roblox Lawsuit About?</span>
                            </h2>

                            <div className="space-y-6 text-lg text-black/90">
                                <p>
                                    The Roblox lawsuit involves claims that children were exposed to
                                    grooming, sextortion, or sexual abuse through the Roblox platform.
                                    Families allege Roblox failed to provide adequate safeguards,
                                    allowing predators to exploit minors.
                                </p>

                                <p>
                                    These lawsuits seek accountability and compensation for victims
                                    who have suffered trauma, abuse, or long-term psychological harm
                                    as a result of exploitation.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="flex gap-4 pt-2 justify-center items-center">
                        <Button
                            size="lg"
                            className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 text-lg font-bold mb-5"
                        >
                            Get Free Consultation
                        </Button>
                    </div>
                </div>
            </section>

            <ServiceProcess mainTitle={robloxData.mainTitle} subTitle={robloxData.subTitle} steps={robloxData.steps} />

            {/* ELIGIBILITY SECTION */}
            {/* <section className="py-1 bg-gradient-to-b from-background to-muted/30 mb-6">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-4">
                        <div className="inline-block bg-navy-blue text-white px-6 rounded-full text-sm font-semibold mb-6">
                            Eligibility Check
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-navy-blue mb-6">
                            Who Is Eligible for the Roblox Lawsuit?
                        </h2>

                        <p className="text-muted-foreground text-xl max-w-4xl mx-auto leading-relaxed">
                            You may qualify for legal assistance and representation if your child
                            suffered abuse, exploitation, or grooming after meeting an abuser
                            through Roblox.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                        
                        <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-navy-blue text-center">
                            <h3 className="text-2xl font-bold text-navy-blue mb-3">
                                Connection to Abuser
                            </h3>
                            <p className="text-muted-foreground text-lg">
                                Your child met the abuser through Roblox. Communication may have
                                later occurred on another platform.
                            </p>
                        </div>

                        
                        <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-navy-blue text-center">
                            <h3 className="text-2xl font-bold text-navy-blue mb-3">
                                Age Requirement
                            </h3>
                            <p className="text-muted-foreground text-lg">
                                The victim was under 18 years old at the time the abuse or grooming began.
                            </p>
                        </div>

                        
                        <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-navy-blue text-center">
                            <h3 className="text-2xl font-bold text-navy-blue mb-3">
                                Type of Abuse & Impact
                            </h3>
                            <p className="text-muted-foreground text-lg">
                                Includes grooming, sextortion, sexual assault, trafficking,
                                explicit material, mental health diagnoses, therapy, school issues,
                                or suicide attempts resulting from the abuse.
                            </p>
                        </div>

                    </div>
                </div>
            </section> */}

            {/* FORM (UNCHANGED) */}
            <ClaimReviewForm service="roblox" />
        </>
    );
};

export default RobloxSection;
