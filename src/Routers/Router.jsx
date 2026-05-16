import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import HomePage from "../Pages/HomePage/HomePage";
import Blog from "../Pages/Blog/Blog";
import BlogDetails from "../Pages/Blog/BlogDetails";
import ContactPage from "../Pages/ContactPage/ContactPage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import CatalogPage from "../Pages/Catalog/CatalogPage";
import ITServices from "../Pages/ITServices/ITServices";
import ServicesPage from "../Pages/Services/ServicesPage";
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
      {
        path: "/services",
        element: <ServicesPage />,
      },
    ],
  },
]);

export default router;
