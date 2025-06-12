import { createBrowserRouter } from "react-router";
import Main from "../Layouts/Main";
import HomePage from "../Pages/HomePage/HomePage";
import Services from "../Pages/Services/Services";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Projects from "../Pages/Project/Projects";
import ProjectDetails from "../Pages/Project/ProjectDetails";
import Blog from "../Pages/Blog/Blog";
import BlogDetails from "../Pages/Blog/BlogDetails";
import ContactPage from "../Pages/ContactPage/ContactPage";
import AboutUs from "../Pages/AboutUs/AboutUs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/service",
        element: <Services />,
      },
      {
        path: "/service_details",
        element: <ServiceDetails />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/project_details",
        element: <ProjectDetails />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog_details",
        element: <BlogDetails />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
