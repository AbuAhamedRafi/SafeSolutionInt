import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Main = () => {
  return (
    <div className="">
      <ScrollToTop />
      <Navbar />
      <div className="min-h-screen md:mt-28 mt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
