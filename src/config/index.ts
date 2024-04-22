export const PRODUCT_CATEGORIES = [
    {
        label: "UI Kits",
        value: "ui_kits" as const,
        featured: [
            {
                name: "Editor picks",
                href: "#",
                imageScr: '/nav/ui_kits/mixed.jpg'
            },
            {
                name: "Editor New Arrivals",
                href: "#",
                imageScr: '/nav/ui_kits/blue.jpg'
            },
            {
                name: "Best Sellers",
                href: "#",
                imageScr: '/nav/ui_kits/purple.jpg'
            },
        ],
    },
    {
        label: "Icons",
        value: "icons" as const,
        featured: [
            {
                name: "Favorite Icon Picks",
                href: "#",
                imageScr: '/nav/icons/picks.jpg'
            },
            {
                name: "Editor New Arrivals",
                href: "#",
                imageScr: '/nav/icons/new.jpg'
            },
            {
                name: "Bestselling Icons",
                href: "#",
                imageScr: '/nav/icons/bestsellers.jpg'
            },
        ],
    },
]