import { Category, ElectricalServices, Favorite, Home, HowToReg, LocalMall, Login, Recycling, ShoppingCart } from "@mui/icons-material";

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
        id:4,
        icon:<Recycling />,
        text:"Recycling",
        location:"/recycling",
    }
];

export const TopbarMenuLink = [
    {
        id: 1,
        icon: <ShoppingCart />,
        text: "Cart",
        location: "/cart"
    },
    {
        id: 2,
        icon: <Favorite />,
        text: "Wishlist",
        location: "/wishlist"
    },
    {
        id: 3,
        icon: <LocalMall />,
        text: "Orders",
        location: "/orders"
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

export const OrdersList = [
    {
        userId: "66def0a00bec1fe4c43cae22",
        products: [
            {
                "productId": "66dee3b963dd5c311fa80cf8",
                "title": "SIEMENS SIMATIC S7 1500",
                "desc": "We take pride in offering a wide range of high quality electrical equipment designed to meet the diverse need of our customer. Our products are sourced from reputable manufactures and rigorously tested to ensure reliability, efficiency and safety",
                "img": "https://www.dmcinfo.com/portals/0/2017_Images/Siemens-S7-1500-PLC.jpg",
                "categories": [
                    "automation",
                    "Power systems"
                ],
                "price": 100000,
                "type": "Automation equipment",
                "brand": "Siemens",
                "rating": 4.5,
                "status": true,
                "inStock": true,
                "quantity": 2
            },
            {
                "productId": "66dee59a63dd5c311fa80cfe",
                "title": "SIEMENS SIMATIC S7 1200",
                "desc": "We take pride in offering a wide range of high quality electrical equipment designed to meet the diverse need of our customer. Our products are sourced from reputable manufactures and rigorously tested to ensure reliability, efficiency and safety",
                "img": "https://www.dmcinfo.com/portals/0/2017_Images/Siemens-S7-1500-PLC.jpg",
                "categories": [
                    "automation",
                    "Power systems"
                ],
                "price": 100000,
                "type": "Automation equipment",
                "brand": "Siemens",
                "rating": 4.5,
                "status": true,
                "inStock": true,
                "quantity": 4
            }
        ],
        amount: 2566,
        address: "Dar es Salaam, Tanzania",
        phoneNumber:"+2557898909545",
        name:"Amina",
        email:"amina@gmail.com",
        status: "pending"
    }
]