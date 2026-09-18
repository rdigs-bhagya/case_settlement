import type { Metadata } from "next"
import ClaimReviewForm from "@/components/ClaimReviewForm.tsx/page";
import ServiceProcess from "@/components/ServiceProcess.tsx/page";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Rideshare Lawsuit | Legal Help for Accident Victims",
    description: "Injured in a rideshare victim of rideshare sexual assault? You may be entitled to compensation. Learn more about filing a rideshare lawsuit and your legal rights. Contact us today for a free consultation.",
}

const rideshareData = {
    mainTitle: "GET STARTED",
    subTitle: "Taking the first step to secure justice after a rideshare incident is simple. We’re here to guide you through every step of the process, from understanding your legal options to filing your claim. Here’s how you can get started:",
    steps: [
        {
            title: "Contact Us",
            description: "Reach out to us via our form or call us. Share the details of your case, and our team will get to work immediately."
        },
        {
            title: "Free Case Evaluation",
            description: "Our experienced attorneys will review your case, assess your eligibility for a claim, and explain your legal options."
        },
        {
            title: "File Your Claim",
            description: "We’ll handle all legal aspects, including documentation and negotiations. You only pay if we win your case."
        }
    ]
};

const RideshareHeroSection = () => {
    return (
        <>
            <section className="text-black relative overflow-hidden">
                <div className="container mx-auto px-8 py-4 relative z-10 mt-18">
                    <div className="grid lg:grid-cols-2 gap-6 items-center min-h-[500px]">
                        <div className="order-2 lg:order-1 space-y-4">
                            <figure className="mb-4">
                                <img src="https://ridesharelawsuitnow.com/img/subheading.png" alt="Rideshare Subheading" width="100" height="100" />
                            </figure>
                            <h1 className="text-4xl lg:text-5xl xl:text-4xl font-extrabold leading-tight">
                                Rideshare Lawsuit | <span className="text-primary">Legal Help for Accident Victims</span>
                            </h1>
                            <div className="space-y-6 text-lg sm:text-lg text-black/90">
                                <p>
                                    Injured in a rideshare victim of rideshare sexual assault? You may be entitled to compensation. Learn more about filing a rideshare lawsuit and your legal rights. Contact us today for a free consultation.
                                </p>
                            </div>

                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <div className="transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
                                    alt="Rideshare vehicle on the road"
                                    className="w-full h-auto rounded-lg shadow-xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/20 to-transparent rounded-lg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ServiceProcess
                mainTitle={rideshareData.mainTitle}
                subTitle={rideshareData.subTitle}
                steps={rideshareData.steps}
            />

            {/* WHO IS ELIGIBLE SECTION */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-wide">Who Is Eligible?</h2>
                        <div className="w-24 h-1 bg-blue-800 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-blue-900 mb-3">Inappropriate Conduct</h3>
                            <p className="text-gray-600">Unacceptable behavior during a rideshare trip that violates safety and personal boundaries.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-blue-900 mb-3">Non-Consensual Touching or Kissing</h3>
                            <p className="text-gray-600">Any physical contact or kissing that occurs without mutual consent.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-blue-900 mb-3">Non-Consensual Penetration or Rape</h3>
                            <p className="text-gray-600">Forced sexual acts committed without the consent of the victim.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-blue-900 mb-3">Sexual Activities</h3>
                            <p className="text-gray-600">Engagement in inappropriate sexual behavior during a rideshare trip.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-blue-900 mb-3">Sexual Harassment</h3>
                            <p className="text-gray-600">Unwanted sexual advances, comments, or gestures during a rideshare journey.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-blue-900 mb-3">Indecent Exposure</h3>
                            <p className="text-gray-600">Exposing oneself inappropriately during a rideshare trip, causing discomfort or harm.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="py-12">
                <ClaimReviewForm service={"rideshare"} />
            </div>
        </>
    );
};

export default RideshareHeroSection;
