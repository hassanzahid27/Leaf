import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-[linear-gradient(180deg,rgba(144,222,120,0.15)_0%,rgba(187,249,168,0.15)_100%)] rounded-2xl py-16 px-4 sm:px-6 xl:px-20 text-center overflow-hidden mx-4 sm:mx-10 xl:mx-20 mb-16">
      {/* Top Label */}
      <div className="bg-white text-xs text-gray-700 font-normal text-[14px]   max-w-[547px] mx-auto rounded-full shadow flex justify-center items-center mb-6 text-center h-[32px] ">
        <img src="icon.png" className="w-4 h-4 mr-4 font-sans" alt="icon" />
        AI-POWERED ENTERPRISE SEARCH FOR SEAMLESS INFORMATION DISCOVERY
      </div>

      {/* Main Heading */}
      <div className="flex items-center justify-center-safe">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-black max-w-[807px]">
          Unlock Your Organization’s <br />
          Knowledge with <span className="text-green-600">LeafAI</span> Search
        </h1>
      </div>

      {/* Subtext */}
      <p className="text-[#6D6D6D] text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto px-2 mt-3 font-sans">
        Discover the power of intelligent search across your entire digital
        workspace. LeafAI Search connects Confluence, SharePoint, and all your
        documents into one intuitive platform.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 font-sans">
        <button className="bg-[#317B22] text-white px-8 py-3.5 rounded-md text-sm hover:bg-green-700 max-[165px] sm:w-auto">
          Get Started
        </button>
        <button className="border border-green-800 px-8 py-3 rounded-md text-green-800 font-sans hover:bg-green-50 max-[165px]  sm:w-auto">
          See Demo
        </button>
      </div>

      {/* Floating Icons */}
      {/* Top Left */}
      <div className="hidden md:block absolute top-10 left-10 xl:ml-48">
        <img
          src="xml.png"
          alt="XML"
          className="max-w-20 h-20 bg-white rounded-full p-4 shadow"
        />
      </div>

      {/* Top Right */}
      <div className="hidden md:block absolute top-10 right-10 xl:mr-52">
        <img
          src="pdf.png"
          alt="PDF"
          className=" w-20 h-20 bg-white rounded-full p-4 shadow"
        />
      </div>

      {/* Bottom Left */}
      <div className="hidden md:block absolute bottom-16 left-14 xl:ml-48">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKcvrTaYI0zaU7pS2rYvZEPSfS6AfTkVUFQ&s"
          alt="PPT"
          className="w-20 h-20 bg-white rounded-full p-4 shadow"
        />
      </div>

      {/* Bottom Right */}
      <div className="hidden md:block absolute bottom-14 right-12 xl:mr-48">
        <img
          src="https://www.svgrepo.com/show/375311/excel-document.svg"
          alt="XLS"
          className="w-20 h-20 bg-white rounded-full p-4 shadow"
        />
      </div>

      {/* Center Left */}
      <div className="hidden md:block absolute top-1/2 left-2 transform -translate-y-1/2 xl:ml-32">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-txt-file-icon-download-in-svg-png-gif-formats--format-document-extension-pack-files-folders-icons-504249.png"
          alt="TXT"
          className="w-20 h-20 bg-white rounded-full p-4 shadow"
        />
      </div>

      {/* Center Right */}
      <div className="hidden md:block absolute top-1/2 right-2 transform -translate-y-1/2 xl:mr-32">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCOE79vJ_2_2jGaSoz7q2AU4sSg1DUuVvnNw&s"
          alt="DOC"
          className="w-20 h-20 bg-white rounded-full p-4 shadow"
        />
      </div>
    </section>
  );
};

export default Hero;
