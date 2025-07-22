import About from "./About";
import Contact from "./Contact";
import ExpertiseSection from "./ExpertiseSection";
import Hero from "./Hero";
import ServicesSection from "./ServicesSection";
import SEO from "../../components/SEO";
import StructuredData from "../../components/StructuredData";

const HomePage = () => {
  return (
    <div>
      <SEO 
        title="Safe Solution International - Complete Business Solutions & Consultancy"
        description="Safe Solution International offers comprehensive business solutions including startup consultancy, IT infrastructure, government tender support, transportation services, and project management. Your trusted partner for business growth in Bangladesh with 100+ successful projects and 200+ satisfied clients."
        keywords="business solutions Bangladesh, startup consultancy, IT infrastructure, government tenders, transportation services, project management, business setup Bangladesh, Safe Solution International, construction services, logistics Bangladesh"
        url="/"
        type="website"
      />
      
      <StructuredData type="organization" />
      <StructuredData type="website" />
      
      <Hero />
      <ServicesSection />
      <ExpertiseSection />
      <About />
      <Contact />
    </div>
  );
};

export default HomePage;