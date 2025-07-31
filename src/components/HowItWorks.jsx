import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

const steps = [
  {
    title: "Connect",
    desc: "Easily integrate LeafAI Search with your existing systems—Confluence, SharePoint, and document repositories.",
  },
  {
    title: "Index",
    desc: "Index your content securely to power enterprise-wide search.",
  },
  {
    title: "Enhance",
    desc: "Enrich results with AI-based intent and context understanding.",
  },
  {
    title: "Search",
    desc: "Search across all content types in one interface.",
  },
  {
    title: "Learn",
    desc: "Gain insights from what your users are searching.",
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-12 px-4 md:px-20 bg-[#F9FAF9] rounded-xl mb-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">How it Works</h2>
        <p className="text-[#6D6D6D] font-sans mt-2">
          Discover the power of intelligent search across{" "}
          <br className="hidden md:block" />
          your entire digital workspace.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 max-w-[1254px] mx-auto mb-2 px-0.5">
        {/* Left - Step List */}
        <div className="flex-1 space-y-4 max-w-7xl">
          {steps.map((step, idx) => (
            <div
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`flex justify-between rounded-lg px-6 py-6 cursor-pointer transition-all border border-[rgba(0,0,0,0.1)] ${
                activeStep === idx
                  ? "bg-[#317B22] text-white"
                  : "bg-white text-[#000000] hover:bg-gray-100"
              }`}
            >
              <div className="flex-1">
                <h4 className="text-base font-roboto">{step.title}</h4>
                {activeStep === idx && (
                  <p className="text-sm mt-1 opacity-90">{step.desc}</p>
                )}
              </div>

              <div
                className={`w-[46px] h-[46px] flex items-center justify-center rounded-full transition-colors shrink-0 self-start mt-1 ${
                  activeStep === idx
                    ? "bg-white text-[#317B22]"
                    : "bg-[#A0C89C] text-white"
                }`}
              >
                {activeStep === idx ? (
                  <ChevronDown className="w-5 h-5" />
                ) : (
                  <ChevronRight className="w-5 h-5" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right - Step Detail */}
        <div
          className="flex-1 bg-white rounded-xl shadow p-6 flex flex-col justify-between min-h-[400px] lg:h-[591px] 
        max-w-[668px]"
        >
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-2">Connect</h3>
            <p className="text-[#6D6D6D] mb-6 text-[24px] font-sans tracking-[0.5px] md:text-base max-w-[589px] leading-8">
              Easily integrate LeafAI Search with your existing
              systems—Confluence, SharePoint, and document repositories. Easily
              integrate LeafAI Search with your existing systems—Confluence,
              SharePoint, and document repositories
            </p>
            <button className="bg-[#317B22] text-white text-sm px-7 py-3 rounded-md mb-4 md:mb-6">
              Get Started
            </button>
          </div>

          <img src="graph.png" className="max-h-[291px] mb-2" alt="" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
