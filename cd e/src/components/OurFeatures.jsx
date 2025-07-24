import React from "react";
import {
  Search,
  Brain,
  FileText,
  MessageCircle,
  UserCheck,
  BarChart2,
} from "lucide-react";

const features = [
  {
    icon: <Search className="text-green-500 w-6 h-6" />,
    title: "Unified Search",
    desc: "Search across Confluence, SharePoint, and all your documents from a single interface. Consistent experience regardless of where your information.",
  },
  {
    icon: <Brain className="text-green-500 w-6 h-6" />,
    title: "AI-Powered Relevance",
    desc: "Machine learning algorithms that understand content and intent. Results that improve over time based on your organization’s usage patterns",
  },
  {
    icon: <FileText className="text-green-500 w-6 h-6" />,
    title: "Smart Reviews",
    desc: "AI-generated summaries of lengthy documents. Quick view of key information without opening files",
  },
  {
    icon: <MessageCircle className="text-green-500 w-6 h-6" />,
    title: "Natural Language Processing",
    desc: "Ask questions in plain English and get accurate answers. Understand complex queries and industry-specific jargon",
  },
  {
    icon: <UserCheck className="text-green-500 w-6 h-6" />,
    title: "Personalized Results",
    desc: "Tailored search results based on your role, projects, and past interactions. Recommended content that anticipates your needs",
  },
  {
    icon: <BarChart2 className="text-green-500 w-6 h-6" />,
    title: "Advanced Analytics",
    desc: "Gain insights into your organization’s knowledge base. Identify knowledge gaps and popular resources",
  },
];

const OurFeatures = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="text-center mb-12 ">
        <h2 className="text-3xl font-bold">Our Features</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Discover the power of intelligent search across your entire digital
          workspace.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mr-2 ml-8 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-6 h-64 w-96 hover:shadow-md transition-all duration-300 mr-96 "
          >
            <div className="bg-green-50 w-10 h-10 flex items-center justify-center rounded-md mb-4">
              {feature.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{feature.desc}</p>
            <a
              href="#"
              className="text-sm font-medium text-gray-900 hover:text-green-600 flex items-center gap-4 mt-8"
            >
              Learn more <span className="text-lg ">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurFeatures;
