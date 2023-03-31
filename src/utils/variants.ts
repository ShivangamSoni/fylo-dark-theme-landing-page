import { type Variants } from "framer-motion";

export const popUp: Variants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            delay: 0.1,
        },
    },
};

export const zoomIn: Variants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            delay: 0.1,
        },
    },
};
