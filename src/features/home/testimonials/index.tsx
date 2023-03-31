import { motion, useReducedMotion } from "framer-motion";
import { popUp } from "@utils/variants";

import { Testimonials } from "@data/Testimonials";

import Section from "@layout/Section";
import WidthRestriction from "@layout/WidthRestriction";
import NewsLetter from "../newsletter";

export default function TestimonialsSection() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <Section className="pb-96 px-8 relative">
            <WidthRestriction>
                <div>
                    <h2 className="sr-only">Testimonials</h2>

                    <div className="grid lg:grid-cols-3 gap-8 relative isolate after:absolute after:-top-9 after:-left-3 after:w-full after:h-full after:-z-[1] after:bg-transparent after:bg-[url(/assets/bg/quotes.png)] after:bg-no-repeat">
                        {Testimonials.map(({ id, review, user }) => (
                            <motion.article
                                variants={popUp}
                                initial={
                                    shouldReduceMotion ? "visible" : "hidden"
                                }
                                whileInView="visible"
                                viewport={{
                                    once: true,
                                    amount: 0.4,
                                }}
                                key={id}
                                className="grid gap-8 p-8 bg-primary-darkBlue-100 rounded-md shadow-lg shadow-primary-darkBlue-200"
                            >
                                <p className="text-base md:text-lg lg:text-xl">
                                    {review}
                                </p>
                                <figure className="flex items-center justify-start gap-2">
                                    <img
                                        className="w-8 md:w-10 rounded-full"
                                        src={user.imageUrl}
                                        alt=""
                                    />
                                    <figcaption className="grid">
                                        <span className="font-bold text-sm md:text-base">
                                            {user.name}
                                        </span>
                                        <span className="text-xs md:text-sm text-gray-400">
                                            {user.title}
                                        </span>
                                    </figcaption>
                                </figure>
                            </motion.article>
                        ))}
                    </div>
                </div>

                <div className="w-full absolute bottom-0 left-1/2 translate-y-1/2 md:translate-y-1/3 -translate-x-1/2 px-4">
                    <NewsLetter />
                </div>
            </WidthRestriction>
        </Section>
    );
}
