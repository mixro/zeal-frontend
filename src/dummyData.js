import { Category, ElectricalServices, Home, Recycling } from "@mui/icons-material";

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
        location:"/lessons",
    },

    {
        id:3,
        icon:<ElectricalServices />,
        text:"Services",
        location:"/rooms",
    },

    {
        id:3,
        icon:<Recycling />,
        text:"Recycling",
        location:"/rooms",
    }
];