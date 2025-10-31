
'use client'
import ClaimReviewForm from "@/components/ClaimReviewForm.tsx/page";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const SilicosisSection = () => {
    return (
        <>
            <section className="text-black bg-white relative overflow-hidden">
                <div className="container mx-auto px-8 py-16 relative z-10 space-y-24">

                    {/* --- Silicosis Section --- */}
                    <div className="flex flex-wrap items-start gap-10">
                        <div className="w-full md:w-1/3 mt-16">
                            <Image
                                src="/silicosis/silicosis.png"
                                alt="Silicosis lung disease illustration"
                                width={500}
                                height={300}
                                className="rounded-xl shadow-lg w-full h-auto"
                            />
                        </div>
                        <div className="flex-1 space-y-6">
                            <h1 className="text-3xl lg:text-4xl mt-16 font-extrabold text-[#193CB8]">
                                What is Silicosis?
                            </h1>
                            <div className="space-y-5 text-lg text-black/90 leading-relaxed">
                                <p>
                                    Silicosis is a type of pneumoconiosis—a progressive, irreversible lung disease caused by inhaling respirable crystalline silica (RCS).
                                    This microscopic mineral is found in materials like quartz, granite, sandstone, and engineered stone, and becomes airborne during
                                    processes like cutting, grinding, or polishing.
                                </p>
                                <p>
                                    When inhaled, silica particles lodge deep into the lungs, triggering inflammation and scarring. This reduces lung capacity over time
                                    and can lead to oxygen deprivation, reduced quality of life, and in many cases, death.
                                </p>
                                <p><strong>There are multiple forms of silicosis:</strong></p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Chronic Silicosis:</strong> after 10+ years of exposure.</li>
                                    <li><strong>Accelerated Silicosis:</strong> within 5–10 years of high exposure.</li>
                                    <li><strong>Acute Silicosis:</strong> after months to 2 years.</li>
                                    <li><strong>Complicated Silicosis (PMF):</strong> advanced stage with severe lung damage.</li>
                                </ul>
                                <p>
                                    Many patients require oxygen, steroidal treatments, or even double-lung transplants. Unfortunately, silicosis remains incurable.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* --- Health Conditions Section --- */}
                    <div className="flex flex-wrap items-start gap-10">
                        <div className="w-full md:w-1/3">
                            <Image
                                src="/silicosis/silicosis1.png"
                                alt="Health conditions lawsuit illustration"
                                width={500}
                                height={300}
                                className="rounded-xl shadow-lg w-full h-auto"
                            />
                        </div>
                        <div className="flex-1 space-y-6">
                            <h1 className="text-3xl lg:text-4xl font-extrabold text-[#193CB8]">
                                Health Conditions and Legal Precedents
                            </h1>
                            <div className="space-y-5 text-lg text-black/90 leading-relaxed">
                                <p>Claims related to Roundup most often involve:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Non-Hodgkin B-cell or T-cell lymphoma</li>
                                    <li>Chronic lymphocytic leukemia</li>
                                    <li>Hairy cell lymphoma</li>
                                    <li>Mantle cell lymphoma</li>
                                </ul>
                                <p>
                                    Notable lawsuits have resulted in multimillion-dollar verdicts and have established important legal precedents for workplace exposure cases.
                                </p>

                                <h2 className="text-2xl font-bold text-[#193CB8] mt-6">Symptoms and Diagnosis</h2>
                                <p>Symptoms often begin subtly and worsen over time:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Shortness of breath, dry cough, chest pain</li>
                                    <li>Fatigue, weakness, or weight loss</li>
                                    <li>Cyanosis (bluish lips/fingers)</li>
                                    <li>Frequent respiratory infections</li>
                                </ul>
                                <p><strong>Diagnosis methods include:</strong></p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Chest X-rays or CT scans</li>
                                    <li>Pulmonary function tests (PFTs)</li>
                                    <li>Blood tests and occupational history review</li>
                                    <li>Bronchoscopy or lung biopsy if needed</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* --- Marketing Section --- */}
                    <div className="flex flex-wrap items-start gap-10">
                        <div className="w-full md:w-1/3">
                            <Image
                                src="/RoundUp/Rooundup2.png"
                                alt="Roundup lawsuit illustration"
                                width={500}
                                height={300}
                                className="rounded-xl shadow-lg w-full h-auto"
                            />
                        </div>
                        <div className="flex-1 space-y-6">
                            <h1 className="text-3xl lg:text-4xl font-extrabold text-[#193CB8]">
                                Marketing / Supportive Version
                            </h1>
                            <div className="space-y-5 text-lg text-black/90 leading-relaxed">
                                <p><strong>Roundup Lawsuit Support for Victims and Families</strong></p>
                                <p>
                                    Thousands of individuals have claimed Roundup exposure contributed to cancer. Our experienced legal team provides trusted support:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>No upfront fees:</strong> We only get paid if you win.</li>
                                    <li><strong>Nationwide support:</strong> Serving clients across the U.S.</li>
                                    <li><strong>Proven litigation experience:</strong> Standing up against major corporations.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="flex justify-center items-center pt-12">
                        <Button
                            size="lg"
                            className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 text-lg font-bold rounded-md shadow-md"
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