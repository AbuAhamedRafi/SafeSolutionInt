import { createBrowserRouter } from "react-router-dom";
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
import CatalogPage from "../Pages/Catalog/CatalogPage";
import ITServices from "../Pages/ITServices/ITServices";
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
        path: "/service_details/:id",
        element: <ServiceDetails />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/project_details/:id",
        element: <ProjectDetails />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog_details/:id",
        element: <BlogDetails />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/catalog/:category",
        element: <CatalogPage />,
      },
      {
        path: "/it-services",
        element: <ITServices />,
      },
    ],
  },
]);

export default router;
