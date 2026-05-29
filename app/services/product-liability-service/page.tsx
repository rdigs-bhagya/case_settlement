import type { Metadata } from "next"
import ClaimReviewForm from "@/components/ClaimReviewForm.tsx/page";
import ServiceProcess from "@/components/ServiceProcess.tsx/page";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Product Liability Claims & Lawsuit Support | Expert Attorneys",
  description: "Get justice for defective products. Our legal team handles pharmaceutical, medical device, and consumer product liability cases. Free consultation available.",
}


const productLiabilityData = {
  mainTitle: "Do You Qualify for Product Liability Compensation?",
  subTitle: "If you or a loved one has been harmed by a defective product — such as pharmaceuticals, medical devices, or consumer products — you may be entitled to significant compensation.",
  steps: [
    {
      title: "Product Use",
      description: "You used a pharmaceutical drug, medical device, or consumer product as intended or directed."
    },
    {
      title: "Injury or Illness",
      description: "You suffered side effects, injuries, or medical complications linked to the defective product."
    },
    {
      title: "Timeline Connection",
      description: "Your injury or illness occurred after using the product, and medical or legal records connect it to the defect or failure."
    }
  ]
};

const ProductLiabilitySection = () => {
    return (
        <>
            <section className=" text-black relative overflow-hidden">
                <div className="container mx-auto px-8 py-4 relative z-10 mt-18">
                    {/* First Row (Text Left - Image Right) */}
                    <div className="grid lg:grid-cols-2 gap-6 items-center min-h-[500px]">
                        <div className="order-2 lg:order-1 space-y-4">
                            <h1 className="text-4xl lg:text-5xl xl:text-4xl font-extrabold leading-tight">
                                <span className="text-primary">Why Do I Need a Lawyer for a Product Liability Case?</span>
                            </h1>
                            <div className="space-y-6 text-lg sm:text-lg text-black/90">
                                <p>
                                    When a defective product causes injury or illness, victims often face medical expenses, lost income, and long-term health consequences. Retaining a qualified product liability attorney ensures that manufacturers, distributors, or retailers are held accountable for placing unsafe products on the market. An attorney will investigate the defect, establish liability, and pursue damages for medical costs, financial losses, and pain and suffering. Legal representation provides both protection and advocacy throughout the process.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="../product_liability/Product Liability.png"
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
                                    src="../product_liability/Product Liability 2.png"
                                    alt="AFFF lawsuit victims illustration"
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/20 to-transparent"></div>
                            </div>
                        </div>
                        <div className="order-2 lg:order-2 space-y-4">
                            <h1 className="text-4xl lg:text-5xl xl:text-4xl font-extrabold leading-tight">
                                <span className="text-primary"> Types of Product Liability Cases We Handle</span>
                            </h1>
                            <div className="space-y-6 text-lg sm:text-lg text-black/90">
                                <p>
                                    Product liability claims may involve a wide range of defective or dangerous products, each requiring careful evaluation and legal expertise. Our practice encompasses:
                                    <li>
                                        <b> Pharmaceutical cases – </b> injuries caused by unsafe or improperly tested medications.
                                    </li>
                                    <li>
                                        <b>  Medical devices – </b> complications arising from faulty implants, prosthetics, or surgical tools.
                                    </li>
                                    <li>
                                        <b> Consumer products – </b> harm resulting from defective electronics, appliances, toys, or household goods.
                                    </li>

                                    Each case is assessed individually to ensure comprehensive representation tailored to the client’s circumstances.

                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons (shared for both sections) */}
                    <div className="flex gap-4 pt-2 justify-center items-center">
                        <div className="text-center">
                            <Button
                                size="lg"
                                className="bg-blue-900 hover:bg-blue-800 text-white mb-5 px-8 py-3 text-lg font-bold"
                            >
                                Get Free Consultation
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <ServiceProcess mainTitle={productLiabilityData.mainTitle} subTitle={productLiabilityData.subTitle} steps={productLiabilityData.steps} />
            {/* <section className="py-1 bg-gradient-to-b from-background to-muted/30 mb-6">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-4">
                        <div className="inline-block bg-navy-blue text-white px-6 rounded-full text-sm font-semibold mb-6">
                            Qualification Check
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-navy-blue mb-6">
                            Do You Qualify for Product Liability Compensation?
                        </h2>
                        <p className="text-muted-foreground text-xl max-w-4xl mx-auto leading-relaxed">
                            If you or a loved one has been harmed by a defective product — such as pharmaceuticals, medical devices, or consumer products — you may be entitled to significant compensation.
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
                                    You used a pharmaceutical drug, medical device, or consumer product as intended or directed.
                                </p>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center h-full border-t-4 border-navy-blue">
                                <div className="w-15 h-15 bg-gradient-to-br from-navy-blue to-navy-blue-dark text-blue rounded-2xl flex items-center justify-center mx-auto mb-2 text-3xl font-bold group-hover:scale-110 transition-transform">
                                    2
                                </div>
                                <h3 className="text-2xl font-bold text-navy-blue mb-4">
                                    Injury or Illness
                                </h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    You suffered side effects, injuries, or medical complications linked to the defective product.
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
                                    Your injury or illness occurred after using the product, and medical or legal records connect it to the defect or failure.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <div>
                <ClaimReviewForm service={"product-liability"} />

            </div>

        </>
    );
};

export default ProductLiabilitySection;
