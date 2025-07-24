import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-[linear-gradient(180deg,rgba(144,222,120,0.15)_0%,rgba(187,249,168,0.15)_100%)] rounded-2xl py-20 px-4 sm:px-6 lg:px-20 text-center overflow-hidden ml-20 mr-20 mb-16">
      {/* Top Label */}
      <div className="bg-white text-xs text-gray-700 font-semibold px-4 py-2 w-[500px] ml-[400px] rounded-full shadow  flex  mb-6">
        <img src="icon.png" className="mr-2.5" alt="" />
        AI-POWERED ENTERPRISE SEARCH FOR SEAMLESS INFORMATION DISCOVERY
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-black">
        Unlock Your Organization’s <br />
        Knowledge with <span className="text-green-600">LeafAI</span> Search
      </h1>

      {/* Subtext */}
      <p className="text-gray-700 text-base sm:text-lg mb-8 max-w-2xl mx-auto  ">
        Discover the power of intelligent search across your entire digital
        workspace. LeafAI Search connects Confluence, SharePoint, and all your
        documents into one intuitive platform.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
        <button className="bg-[#317B22] text-white px-8 py-3 rounded-md text-sm hover:bg-green-700 w-full sm:w-auto">
          Get Started
        </button>
        <button className="border border-green-800 px-8 py-3 rounded-md text-green-800 text-sm hover:bg-green-50 w-full sm:w-auto">
          See Demo
        </button>
      </div>

      {/* Placeholders for Images - Only visible on medium and up screens */}
      <div className="hidden md:block absolute top-10 left-10 w-18 h-18 bg-white rounded-full flex items-center justify-center text-xs text-gray-500 ml-48 mt-4">
        {/* TODO: Replace with actual XML icon/image */}

        <img
          src="xml.png"
          alt="PDF"
          className="w-full  h-10 mt-4 mb-2 object-contain"
        />
      </div>
      <div className="hidden md:block absolute top-10 right-10 w-18 h-18  bg-white rounded-full flex items-center justify-center text-xs text-gray-500 mr-52 mt-4">
        {/* TODO: Replace with actual PDF icon/image */}

        <img
          src="pdf.png"
          alt="PDF"
          className="w-full  h-10 mt-4 mb-2 object-contain"
        />
      </div>
      <div className="hidden md:block absolute bottom-16 left-14  w-18 h-18 ml-48 bg-white rounded-full flex items-center justify-center text-xs text-gray-500">
        {/* TODO: Replace with actual PPT icon/image */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKcvrTaYI0zaU7pS2rYvZEPSfS6AfTkVUFQ&s"
          alt=""
          className="w-full h-10 mt-4 mb-2  object-contain"
        />
      </div>
      <div className="hidden md:block absolute bottom-14 right-12 w-18 h-18 bg-white rounded-full flex items-center justify-center text-xs text-gray-500 mr-48">
        {/* TODO: Replace with actual XLS icon/image */}

        <img
          src="https://www.svgrepo.com/show/375311/excel-document.svg"
          alt="PDF"
          className="w-full h-10 mt-4 mb-2  object-contain"
        />
      </div>
      <div className="hidden md:block absolute top-1/2 left-2 transform -translate-y-1/2 w-18 h-18 bg-white rounded-full flex items-center justify-center text-xs text-gray-500 ml-32">
        {/* TODO: Replace with actual TXT icon/image */}

        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-txt-file-icon-download-in-svg-png-gif-formats--format-document-extension-pack-files-folders-icons-504249.png"
          alt="PDF"
          className="w-full h-10 mt-4 mb-2 object-contain"
        />
      </div>
      <div className="hidden md:block absolute top-1/2 right-2 transform -translate-y-1/2 w-18 h-18 bg-white rounded-full flex items-center justify-center text-xs text-gray-500 mr-32">
        {/* TODO: Replace with actual DOC icon/image */}

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCOE79vJ_2_2jGaSoz7q2AU4sSg1DUuVvnNw&s"
          alt="PDF"
          className="w-full h-10 mt-4 mb-2  object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
