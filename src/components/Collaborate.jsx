import React from "react";

const Collaborate = () => {
  return (
    <section className="py-20 px-4  bg-[linear-gradient(180deg,rgba(144,222,120,0.15)_0%,rgba(187,249,168,0.15)_100%)] text-center rounded-2xl mx-12 md:mx-36">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-96 text-center lg:text-left">
        {/* Heading */}
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-4 ">
            Let's Collaborate With Us
          </h2>
          <p className="text-base sm:text-lg text-gray-700 font-medium max-w-md mx-auto lg:mx-0">
            Ready to revolutionize your organization's search experience?
          </p>
        </div>

        {/* Buttons */}
        <div className="flex-1 mt-8 lg:mt-0 flex justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="bg-[#317B22] text-white px-8 py-3 rounded-md font-medium transition duration-300 hover:bg-[#27651a] w-full sm:w-auto">
              Book a Demo
            </button>
            <button className="bg-transparent border-2 border-green-600 px-8 py-3 rounded-md font-medium text-green-600 transition duration-300 hover:bg-green-600 hover:text-white w-full sm:w-auto">
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
