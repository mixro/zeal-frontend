import { Category, ElectricalServices, Favorite, Home, HowToReg, Login, Recycling, ShoppingCart } from "@mui/icons-material";

export const NavigationLinks = [
    {
        id: 1,
        name: "Automation & control",
        path: "/automation",
    },
    {
        id: 2,
        name: "Boxes, Racks & Enclosure",
        path: "/automation",
    },
    {
        id: 3,
        name: "Cables & wires",
        path: "/automation",
    },
    {
        id: 4,
        name: "Connectores",
        path: "/automation",
    },
    {
        id: 5,
        name: "Electromechanical",
        path: "/automation",
    },
    {
        id: 6,
        name: "Hardware and fasters",
        path: "/automation",
    },
    {
        id: 7,
        name: "Passive",
        path: "/automation",
    },
]

export const InformationLinks = [
    {
        id: 1,
        name: "About Zeal Energy",
        path: "/about"
    },
    {
        id: 2,
        name: "Markertplace",
        path: "/about"
    },
    {
        id: 3,
        name: "Careers",
        path: "/about"
    },
    {
        id: 4,
        name: "Site map",
        path: "/about"
    },
    {
        id: 5,
        name: "Newsroom",
        path: "/about"
    },
]

export const HelpLinks = [
    {
        id: 1,
        name: "Help and support",
        path: "/support",
    },
    {
        id: 2,
        name: "Order status",
        path: "/support",
    },
    {
        id: 3,
        name: "Shipping rates",
        path: "/support",
    },
]

export const SidemenuLinks = [
    {
        id:1,
        icon:<Home />,
        text:"Home",
        location:"/",
    },
    
    {
        id:2,
        icon:<Category />,
        text:"Products",
        location:"/products",
    },

    {
        id:3,
        icon:<ElectricalServices />,
        text:"Services",
        location:"/services-and-installations",
    },

    {
        id:3,
        icon:<Recycling />,
        text:"Recycling",
        location:"/recycling",
    }
];

export const TopbarMenuLink = [
    {
        id: 1,
        icon: <Favorite />,
        text: "Wishlist",
        location: "/wishlist"
    },
    {
        id: 2,
        icon: <ShoppingCart />,
        text: "Cart",
        location: "/cart"
    }
]

export const SidemenuLinksBottom = [
    {
        id: 1,
        icon: <HowToReg />,
        text: "Register",
        location: "/register"
    },
    {
        id: 2,
        icon: <Login />,
        text: "Login",
        location: "/login"
    }
]

export const ProductAttributes = [
    {
        id:2,
        type: "Category",
        description: "Accessories",
    },
    {
        id:3,
        type: "Manufacturer",
        description: "Klein Tools, Inc",
    },
    {
        id:4,
        type: "Series",
        description: "-",
    },
    {
        id:5,
        type: "Packaging",
        description: "Bulk",
    },
    {
        id:6,
        type: "Part status",
        description: "Active",
    },
    {
        id:7,
        type: "Accessory type",
        description: "Earbud",
    },
    {
        id:8,
        type: "Color",
        description: "Black, Orange",
    },
    {
        id:9,
        type: "Material",
        description: "Acrylonitrile Butadiene Styrene (ABS)",
    },
]

export const AdditionalResources = [
    {
        id:1,
        type: "Other name",
        desc: "1742-AESEB1S",
    },
    {
        id:2,
        type: "Standard Packages",
        desc: "1",
    },
]

export const RecyclingStats = [
    {
        id:1,
        header: "Waste",
        number: 3850.7,
    },
    {
        id:2,
        header: "Cardboard",
        number: 2053,
    },
    {
        id:3,
        header: "Mixed Recycling",
        number: 654.97,
    },
    {
        id:4,
        header: "Plastic",
        number: 240.11,
    },
    {
        id:5,
        header: "Metal",
        number: 13.61,
    },
    {
        id:6,
        header: "Pallet",
        number: 3.3,
    },
]