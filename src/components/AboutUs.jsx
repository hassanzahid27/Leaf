import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-[#F9FAF9] px-4 md:px-10 py-16">
      {/* Title and Text */}
      <div className="mb-12 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start  px-4 mr-72 ">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 min-w-[200px] flex items-end  ">
          About Us
        </h2>
        <p className="font-sans text-[#6D6D6D] max-w-[2500px] ml-32">
          LeafAI Search sprouted from a simple idea: make enterprise knowledge
          as easy to find as a Google search. We're a team of AI enthusiasts,
          search experts, and UX designers on a mission to revolutionize how
          organizations discover and utilize their collective knowledge. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* Content Row */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-stretch gap-10 px-4">
        {/* Left Box */}
        <div className="relative w-full md:w-[438px] rounded-4xl overflow-hidden lg:ml-8 shadow-lg">
          <img
            src="black.png"
            alt="background"
            className="h-full w-full absolute inset-0 z-10 "
          />

          {/* Overlay Content */}
          <div className="p-6 flex flex-col justify-between z-20 relative gap-[182px] ml-4">
            {/* Top Section */}
            <div>
              <h2 className="  sm:text-[84px] font-extrabold text-white w-[209px]  h-[63px]">
                920<span className="text-[#317B22]">+</span>
              </h2>
              <p className="font-sans text-[#878C91] mt-12 ml-2">
                Softwares Support
              </p>
            </div>

            {/* Bottom Icons */}
            <div className="flex items-center  flex-wrap">
              {["pdf.png", "txt.png", "pdf.png", "xls.png"].map(
                (icon, index) => (
                  <div
                    key={index}
                    className="  sm:w-[70px] sm:h-[70px] rounded-full bg-white flex items-center justify-center ml-2.5 h-96"
                  >
                    <img
                      src={icon}
                      alt={`icon-${index}`}
                      className=" sm:w[35px] sm:h-[35px] object-contain p-0"
                    />
                  </div>
                )
              )}
              <span className="text-white  sm:text-7xl w-[49px] h-[55px] font-bold leading-none mb-8">
                +
              </span>
            </div>
          </div>
        </div>

        {/* Right Box */}
        <div className="relative bg-[linear-gradient(180deg,rgba(144,222,120,0.15)_0%,rgba(187,249,168,0.15)_100%)] rounded-xl sm:p-6 w-full max-w-4xl flex items-center justify-between  flex-wrap sm:flex-nowrap">
          {/* Images */}
          <img
            src="pics.png"
            className="w-[279px] sm:h-[275px] md:h-[275px] lg:h[275px] object-contain"
            alt="pic"
          />
          <img
            src="d.png"
            className=" sm:h-28 md:h-[133px] flex-1 object-fill"
            alt="dotted"
          />
          <img
            src="p.png"
            className=" sm:h-[64.74px] md:h-[64.74px] w-[64.74px]  mr-8 object-contain
            "
            alt="p"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
