'use client'
import ClaimReviewForm from "@/components/ClaimReviewForm.tsx/page";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const SilicosisSection = () => {
    return (
        <>
            <section className="text-black relative overflow-hidden">
                <div className="container mx-auto px-8 py-12 relative z-10">

                    {/* First Row (Text Left - Image Right) */}
                    <div className="grid lg:grid-cols-2 gap-6 items-center min-h-[500px]">
                        {/* Left Content */}
                        <div className="order-2 lg:order-1 space-y-6">
                            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                                <span className="text-primary">What is Silicosis?</span>
                            </h1>
                            <div className="space-y-6 text-lg text-black/90">
                                <p>
                                    Silicosis is a type of pneumoconiosis—a progressive, irreversible lung disease caused by inhaling respirable crystalline silica (RCS).
                                    This microscopic mineral is found in materials like quartz, granite, sandstone, and engineered stone, and becomes airborne during
                                    processes like cutting, grinding, or polishing.
                                </p>
                                <p>
                                    When inhaled, silica particles lodge deep into the lungs, triggering inflammation and scarring. This reduces lung capacity over time
                                    and can lead to oxygen deprivation, reduced quality of life, and in many cases, death.
                                </p>
                                <p>
                                    <strong>There are multiple forms of silicosis:</strong>
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>
                                        <strong>Chronic Silicosis:</strong> Occurs after long-term exposure (10+ years). Symptoms develop slowly, including persistent cough and shortness of breath.
                                    </li>
                                    <li>
                                        <strong>Accelerated Silicosis:</strong> Appears within 5–10 years of high exposure. Symptoms progress more rapidly than chronic silicosis.
                                    </li>
                                    <li>
                                        <strong>Acute Silicosis:</strong> Develops after a few months to 2 years of very high exposure. Symptoms include severe inflammation and life-threatening respiratory failure.
                                    </li>
                                    <li>
                                        <strong>Complicated Silicosis (PMF):</strong> Advanced stage with severe lung damage, infections, and drastically reduced lung function.
                                    </li>
                                </ul>
                                <p>
                                    Many patients require oxygen, steroidal treatments, or even double-lung transplants. Unfortunately, silicosis remains incurable.
                                </p>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <Image
                                    src="/silicosis/silicosis.png"
                                    alt="Silicosis lung disease illustration"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/20 to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    {/* Second Row (Image Left - Text Right) */}
                    <div className="grid lg:grid-cols-2 gap-6 items-center min-h-[500px] mt-20">
                        {/* Left Image */}
                        <div className="order-1 lg:order-1 relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                                <Image
                                    src="/silicosis/silicosis1.png"
                                    alt="Health conditions lawsuit illustration"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/20 to-transparent"></div>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="order-2 lg:order-2 space-y-6">
                            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                                <span className="text-primary">Health Conditions and Legal Precedents</span>
                            </h1>

                            {/* Roundup Conditions */}
                            <div className="space-y-4 text-lg text-black/90">
                                <p>Claims related to Roundup most often involve:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><b>Non-Hodgkin B-cell or T-cell lymphoma</b></li>
                                    <li><b>Chronic lymphocytic leukemia</b></li>
                                    <li><b>Hairy cell lymphoma</b></li>
                                    <li><b>Mantle cell lymphoma</b></li>
                                </ul>
                                <p>
                                    Notable lawsuits have resulted in multimillion-dollar verdicts, with evidence connecting Roundup exposure to cancer diagnoses.
                                </p>
                            </div>

                            {/* Silicosis Symptoms */}
                            <div className="space-y-4 text-lg text-black/90">
                                <h2 className="text-2xl font-bold text-[#193CB8]">Symptoms and Diagnosis of Silicosis</h2>
                                <p>
                                    Symptoms often begin subtly and worsen over time. Early diagnosis is critical but difficult.
                                </p>
                                <p><strong>Common symptoms include:</strong></p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Shortness of breath during activity</li>
                                    <li>Persistent dry cough</li>
                                    <li>Chest tightness or pain</li>
                                    <li>Fatigue, weakness</li>
                                    <li>Loss of appetite, weight loss</li>
                                    <li>Cyanosis (bluish lips/fingers)</li>
                                    <li>Frequent respiratory infections</li>
                                </ul>
                                <p><strong>Diagnosis methods:</strong></p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Chest X-rays or CT scans</li>
                                    <li>Pulmonary function tests (PFTs)</li>
                                    <li>Blood tests to rule out other conditions</li>
                                    <li>Occupational history review</li>
                                    <li>Bronchoscopy or lung biopsy if needed</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Third Row (Text Left - Image Right) */}
                    <div className="grid lg:grid-cols-2 gap-6 items-center min-h-[500px] mt-20">
                        {/* Left Content */}
                        <div className="order-2 lg:order-1 space-y-6">
                            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                                <span className="text-[#193CB8]">Marketing / Supportive Version</span>
                            </h1>
                            <div className="space-y-6 text-lg text-black/90">
                                <p>
                                    <b>Roundup Lawsuit Support for Victims and Families</b>
                                </p>
                                <p>
                                    Thousands of individuals have claimed Roundup exposure contributed to cancer. Successful lawsuits have already secured millions in compensation.
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><b>No upfront fees –</b> we only get paid if you win.</li>
                                    <li><b>Nationwide support –</b> serving clients across the U.S.</li>
                                    <li><b>Proven litigation experience –</b> standing up against large corporations.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <Image
                                    src="/RoundUp/Rooundup2.png"
                                    alt="Roundup lawsuit illustration"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/20 to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-center items-center mt-12">
                        <Button
                            size="lg"
                            className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 text-lg font-bold"
                        >
                            Get Free Consultation
                        </Button>
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
                <ClaimReviewForm service={"silicosis"} />

            </div>
        </>
    );
};

export default SilicosisSection;