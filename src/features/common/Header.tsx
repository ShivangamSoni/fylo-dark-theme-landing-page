import { motion, useTransform } from "framer-motion";
import { useBoundedScroll } from "@utils/useBoundedScroll";

import { NavLinks } from "@data/Links";

import Logo from "@assets/logo.svg";

import WidthRestriction from "@layout/WidthRestriction";
import Link from "@components/Link";

export default function Header() {
    const { scrollYBoundedProgress } = useBoundedScroll(200);

    const opacity = useTransform(scrollYBoundedProgress, [0, 1], [1, 0]);
    const height = useTransform(scrollYBoundedProgress, [0, 1], ["auto", 0]);
    const backgroundSize = useTransform(
        scrollYBoundedProgress,
        [0, 1],
        ["2px 2px", "4px 4px"],
    );
    const padding = useTransform(
        scrollYBoundedProgress,
        [0, 1],
        ["2rem", "1rem"],
    );
    const gap = useTransform(scrollYBoundedProgress, [0, 1], ["2rem", "0rem"]);
    const imageScale = useTransform(scrollYBoundedProgress, [0, 1], [1, 0.8]);

    return (
        <motion.header
            style={{ backgroundSize: backgroundSize }}
            className="fixed top-0 left-0 right-0 z-50 [background-image:radial-gradient(hsl(217,28%,15%)_1px,transparent_1px)] [background-size:2px_2px] [backdrop-filter:blur(10px)]"
        >
            <WidthRestriction>
                <motion.div
                    style={{ paddingBlock: padding, gap }}
                    className="flex items-center justify-between flex-col md:flex-row gap-8 font-header"
                >
                    <motion.h1
                        style={{ scale: imageScale }}
                        className="flex items-center justify-center w-24 md:w-auto"
                    >
                        <span className="sr-only">Fylo</span>
                        <img src={Logo} alt="" aria-hidden />
                    </motion.h1>
                    <motion.nav style={{ height, opacity }}>
                        <ul className="flex items-center gap-8">
                            {NavLinks.map(({ id, label, link }) => (
                                <li key={id}>
                                    <Link
                                        href={link}
                                        className="!text-gray-400 hover:!text-white focus-visible:!text-white"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.nav>
                </motion.div>
            </WidthRestriction>
        </motion.header>
    );
}
