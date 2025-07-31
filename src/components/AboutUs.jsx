import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#F9FAF9] max-w-full  ">
      <div className="pl-[89px] pr-[88px] pt-[134px] max-w-[1963px]   ">
        <div className="max-w-[1244px] flex flex-col lg:flex-row gap- lg:gap-[205px] ">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl min-w-[200px] flex">
            About Us
          </h1>

          <p className="font-sans text-[#6D6D6D] text-sm sm:text-base md:text-lg font-medium leadind-relaxed max-w-full z-10 relative]">
            LeafAI Search sprouted from a simple idea: make enterprise knowledge
            as easy to find as a Google search. We're a team of A I enthusiasts,
            search experts, and UX designers on a mission to revolutionize how
            organizations discover and utilize their collective knowledge.
          </p>
        </div>
        <div className="  flex flex-col lg:flex-row gap-6 lg:gap-[24px] pb-12 ">
          <img
            src="items.png"
            className="max-w-[438px] lg:h-[452px] w-full  pt-8 lg:pt-[27px] object-contain"
            alt=""
          />
          {/* <div className="  bg-[linear-gradient(180deg,rgba(144,222,120,0.15)_0%,rgba(187,249,168,0.15)_100%)]  rounded-xl sm:p-6 p-4    flex flex-col sm:flex-row items-center justify-between   min-w-0 sm:max-w-[1100px]  mt-[56px] mb-12">
            <div className="flex flex-col sm:flex-row sm:items-start ">
              <img src="pics.png" className="  " alt="" />

              <div className=" pt-10 sm:pt-28 flex  sm:flex-row sm:items-end">
                <img
                  src="d.png"
                  className=" max-w-[300px] sm:min-w-[50px]     "
                  alt=""
                />
                <img
                  src="p.png"
                  className="max-w-[64.74px]  pb-8 min-w-10 sm:max-w-none"
                  alt=""
                />
              </div>
            </div>
          </div> */}

          <div>
            <img src="green.png" className="lg:pt-12  " alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
