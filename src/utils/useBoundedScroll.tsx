import { useEffect } from "react";
import {
    useScroll,
    useMotionValue,
    useTransform,
    useReducedMotion,
} from "framer-motion";

export function useBoundedScroll(bounds: number) {
    const shouldReduceMotion = useReducedMotion();
    const { scrollY } = useScroll();
    const scrollYBounded = useMotionValue(0);
    const scrollYBoundedProgress = useTransform(
        scrollYBounded,
        [0, bounds],
        [0, 1],
    );

    useEffect(() => {
        return scrollY.on("change", (current) => {
            if (shouldReduceMotion) {
                scrollYBounded.set(0);
                return;
            }

            const previous = scrollY.getPrevious();
            const diff = current - previous;
            const newScrollYBounded = scrollYBounded.get() + diff;
            scrollYBounded.set(clamp(newScrollYBounded, 0, bounds));
        });
    }, [bounds, scrollY, scrollYBounded]);

    return { scrollYBounded, scrollYBoundedProgress };
}

function clamp(number: number, min: number, max: number) {
    return Math.min(Math.max(number, min), max);
}
