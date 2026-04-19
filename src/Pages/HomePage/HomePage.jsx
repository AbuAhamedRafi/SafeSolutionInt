import About from "./About";
import Contact from "./Contact";
import ExpertiseSection from "./ExpertiseSection";
import Hero from "./Hero";
import PartnersSection from "./PartnersSection";
import SEO from "../../components/SEO";
import StructuredData from "../../components/StructuredData";
import FAQ from "../../components/FAQ";

const HomePage = () => {
  return (
    <div>
      <SEO 
        title="Safe Solutions Int. - IT Infrastructure & Security Hardware"
        description="Safe Solutions Int. is Bangladesh's premier engineering and technology partner, specializing in Fire Safety, Security & Surveillance hardware, and Enterprise IT Infrastructure. Authorized partners of VARITO, CQR Security, and BOSCH."
        keywords="Safe Solutions Int., VARITO Bangladesh, CQR Security, fire safety equipment, IT infrastructure services, surveillance systems, energy saving pumps, enterprise SaaS Bangladesh"
        url="/"
        type="website"
      />
      
      <StructuredData type="organization" />
      <StructuredData type="website" />
      
      <Hero />
      <PartnersSection />
      <ExpertiseSection />
      <About />
      <FAQ />
      <Contact />
    </div>
  );
};

export default HomePage;