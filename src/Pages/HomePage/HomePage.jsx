import About from "./About";
import Contact from "./Contact";
import ExpertiseSection from "./ExpertiseSection";
import Hero from "./Hero";
import ServicesSection from "./ServicesSection";
import SEO from "../../components/SEO";
import StructuredData from "../../components/StructuredData";
import FAQ from "../../components/FAQ";

const HomePage = () => {
  return (
    <div>
      <SEO 
        title="Safe Solution International - Leading Business Consultancy & Solutions in Bangladesh"
        description="Safe Solution International is Bangladesh's premier business consultancy firm offering comprehensive solutions including startup consultancy, IT infrastructure, government tender support, transportation services, construction, and project management. Trusted by 200+ clients with 100+ successful projects across Dhaka and Bangladesh. Expert business solutions for startups, SMEs, and enterprises."
        keywords="Safe Solution International, Safe Solution International Bangladesh, business consultancy Bangladesh, business solutions Dhaka, startup consultancy Bangladesh, IT infrastructure services Bangladesh, government tender support Dhaka, transportation services Bangladesh, construction services Dhaka, project management Bangladesh, business setup Bangladesh, commercial solutions Bangladesh, logistics services Dhaka, business consulting firm Bangladesh"
        url="/"
        type="website"
      />
      
      <StructuredData type="organization" />
      <StructuredData type="website" />
      
      <Hero />
      <ServicesSection />
      <ExpertiseSection />
      <About />
      <FAQ />
      <Contact />
    </div>
  );
};

export default HomePage;