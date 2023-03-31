import { Features } from "@data/Features";

import Section from "@layout/Section";
import WidthRestriction from "@layout/WidthRestriction";

export default function FeaturesSection() {
    return (
        <Section>
            <h2 className="sr-only">Features</h2>
            <WidthRestriction>
                <div className="grid md:grid-cols-2 w-[min(55rem,100%)] md:gap-x-12 gap-y-20 md:gap-y-28 px-8 mx-auto">
                    {Features.map(({ id, Icon, title, info }) => (
                        <article
                            key={id}
                            className="flex flex-col items-center justify-start gap-4 text-center max-w-[30rem] mx-auto md:max-w-none md:mx-0"
                        >
                            <div className="flex-1 flex items-center justify-center mb-4">
                                <Icon />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold font-header">
                                {title}
                            </h3>
                            <p className="text-sm md:text-base">{info}</p>
                        </article>
                    ))}
                </div>
            </WidthRestriction>
        </Section>
    );
}
