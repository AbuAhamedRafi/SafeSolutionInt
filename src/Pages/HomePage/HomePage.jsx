// import React from 'react';
import About from "./About";
import Contact from "./Contact";
import ExpertiseSection from "./ExpertiseSection";
import Hero from "./Hero";
import ServicesSection from "./ServicesSection";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <ServicesSection />
      <ExpertiseSection />
      <Contact />
    </div>
  );
};

export default HomePage;
