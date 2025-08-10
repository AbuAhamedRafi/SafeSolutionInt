import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop";
import PerformanceOptimizer from "../components/PerformanceOptimizer";

const Main = () => {
  return (
    <div className="">
      <PerformanceOptimizer />
      <ScrollToTop />
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
