export const menuList = [
    {
        id: 1,
        path: "/",
        label: "Home",
        dropDown: false
    },
    {
        id: 2,
        path: "/about",
        label: "About Us",
        dropDown: false
    },
    {
        id: 3,
        path: "#",
        label: "Services",
        dropDown: [
            {
                id: 1,
                path: "/Web-Development",
                label: "Web Development",
            },
            {
                id: 2,
                path: "/app-development",
                label: "App Development",
            },
            {
                id: 3,
                path: "/seo-services",
                label: "SEO Services",
            },
            {
                id: 4,
                path: "/Paid-Advertising", 
                label: "Paid Advertising",
            },
            {
                id: 5,
                path: "/Business-Automation",
                label: "Business Automation",
            },
            {
                id: 6,
                path: "/service-details",
                label: "Service Details",
            }
        ]
    },
    {
        id: 4,
        path: "#",
        label: "Resources",
        dropDown: [
            {
                id: 1,
                path: "/blog",
                label: "Blog",
            },
            {
                id: 2,
                path: "/faq",
                label: "FAQ",
            },
            {
                id: 3,
                path: "/testimonials",
                label: "Testimonials",
            },
            {
                id: 4,
                path: "/privacy-policy",
                label: "Privacy Policy",
            },
            {
                id: 5,
                path: "/terms-conditions",
                label: "Terms & Conditions",
            }
        ]
    },
    {
        id: 5,
        path: "/contact",
        label: "Contact Us",
        dropDown: false
    },
];
