import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root"
import Home from "../App";
import About from "../pages/about";
import Blog from "../pages/blog";
import BlogDetails from "../pages/blog-details";
import LayoutTwo from "../layout/layoutTwo";
import HomeTwo from "../pages/home-2";
import Contact from "../pages/contact";
import Faq from "../pages/faq";
import Testimonials from "../pages/testimonials";
import HomeThree from "../pages/home-3";
import ServiceDetails from "../pages/service-details";
import Services from "../pages/services";
import TermsConditions from "../pages/terms-conditions";
import PrivacyPolicy from "../pages/privacy-policy";
import SearchResult from "../pages/search-result";
import Register from "../pages/register";
import Team from "../pages/team";
import Pricing from "../pages/pricing";
import Login from "../pages/login";
import NotFound from "../pages/404";
import Author from "../pages/author";
import Categories from "../pages/categories";
import WebDevelopment from "../pages/web-development"; // Import the new component
import SEOServices from "../pages/seo-services";
import PaidAdvertising from "../pages/Paid-Advertising";
import AppDevelopment from "../pages/App-Development";
import BusinessAutomation from "../pages/Business-Automation";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />
            },
        ],
    },
    {
        path: "/",
        element: <LayoutTwo />,
        children:[
            {
                path: "/home-2",
                element: <HomeTwo />
            },
            {
                path: "/home-3",
                element: <HomeThree />
            },
            {
                path: "/service-details",
                element: <ServiceDetails />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "web-development", // Add the new route here
                element: <WebDevelopment />
            },
            {
                path: "seo-services", // Add the new route here
                element: <SEOServices />
            },
            {
                path: "/Paid-Advertising", // Ensure this path is correct with a leading slash
                element: <PaidAdvertising /> // Ensure the component name is correct
            },
            {
                path: "/App-Development", // Ensure this path is correct with a leading slash
                element: <AppDevelopment/> // Ensure the component name is correct
            },
            {
                path: "/Business-Automation", // Ensure this path is correct with a leading slash
                element: <BusinessAutomation/> // Ensure the component name is correct
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/blog-details",
                element: <BlogDetails />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/faq",
                element: <Faq />
            },
            {
                path: "/testimonials",
                element: <Testimonials />
            },
            {
                path: "/team",
                element: <Team />
            },
            {
                path: "/pricing",
                element: <Pricing />
            },
            {
                path: "/terms-conditions",
                element: <TermsConditions />
            },
            {
                path: "/privacy-policy",
                element: <PrivacyPolicy />
            },
            {
                path: "/search-result",
                element: <SearchResult />   
            },
            {
                path: "/register",
                element: <Register />   
            },
            {
                path: "/login",
                element: <Login />   
            },
            {
                path: "/author",
                element: <Author />   
            },
            {
                path: "/categories",
                element: <Categories />   
            },
        ]
    }
])