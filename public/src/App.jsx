// App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import KeyFeatures from "./components/KeyFeatures";
import AboutUs from "./components/AboutUs";
import OurFeatures from "./components/OurFeatures";
import HowItWorks from "./components/HowItWorks";
import PricingPlans from "./components/PricingPlans";
import Collaborate from "./components/Collaborate";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <Hero />
      <KeyFeatures />
      <AboutUs />
      <OurFeatures />
      <HowItWorks />
      <PricingPlans />
      <Collaborate />
      <Footer />
    </div>
  );
}

export default App;
