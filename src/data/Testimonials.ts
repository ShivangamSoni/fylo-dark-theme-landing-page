import p1 from "@assets/users/profile-1.jpg";
import p2 from "@assets/users/profile-1.jpg";
import p3 from "@assets/users/profile-1.jpg";

export const Testimonials = [
    {
        id: crypto.randomUUID(),
        review: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        user: {
            name: "Satish Patel",
            title: "Founder & CEO, Huddle",
            imageUrl: p1,
        },
    },
    {
        id: crypto.randomUUID(),
        review: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        user: {
            name: "Bruce McKenzle",
            title: "Founder & CEO, Huddle",
            imageUrl: p2,
        },
    },
    {
        id: crypto.randomUUID(),
        review: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        user: {
            name: "Iva Boyd",
            title: "Founder & CEO, Huddle",
            imageUrl: p3,
        },
    },
];
