import React from 'react';

interface Step {
  title: string;
  description: string;
}

interface ServiceProcessProps {
  mainTitle: string;
  subTitle: string;
  steps: Step[];
}

const ServiceProcess: React.FC<ServiceProcessProps> = ({ mainTitle, subTitle, steps }) => {
  return (
    <section className="w-full bg-[#8cb3ff] py-10 px-8 font-sans select-none">
      <div className="max-w-7xl mx-auto text-center text-[#1d3a8a]">
        
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            {mainTitle}
          </h2>
          <p className="text-base text-white md:text-lg lg:text-xl max-w-3xl mx-auto font-medium opacity-90 leading-snug">
            {subTitle}
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          
          {/* Main Horizontal Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[48px] left-[5%] right-[5%] h-[3px] bg-[#1d3a8a]">
            {/* Small node at the very start of the line */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-3 h-3 rounded-full border-2 border-[#1d3a8a] bg-[#8cb3ff]" />
            {/* Small node at the very end of the line */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-3 h-3 rounded-full border-2 border-[#1d3a8a] bg-[#8cb3ff]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                
                {/* Circle & Node Logic */}
                <div className="relative mb-8">
                  
                  {/* Small Hollow Node between steps (Desktop Only) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-[calc(50%+1.5rem)] lg:-right-[calc(50%+2rem)] w-3 h-3 rounded-full border-2 border-[#1d3a8a] bg-[#8cb3ff] -translate-y-1/2 z-20" />
                  )}

                  {/* Main Number Circle */}
                  <div className="w-24 h-24 rounded-full bg-white border-[6px] border-[#3b82f6] shadow-[0_10px_25px_rgba(0,0,0,0.15)] flex items-center justify-center text-4xl font-bold text-[#1d3a8a] relative z-30">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  {step.title}
                </h3>
                <p className="text-[15px] lg:text-[17px] leading-relaxed font-medium text-white opacity-90 max-w-[300px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;