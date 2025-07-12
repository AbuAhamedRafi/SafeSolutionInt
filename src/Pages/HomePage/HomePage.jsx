import About from "./About";
import Contact from "./Contact";
import ExpertiseSection from "./ExpertiseSection";
import Hero from "./Hero";
import ServicesSection from "./ServicesSection";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <ExpertiseSection />
      <About />
      <Contact />
    </div>
  );
};

export default HomePage;
