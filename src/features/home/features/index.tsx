import { Features } from "@data/Features";

import Section from "@layout/Section";
import WidthRestriction from "@layout/WidthRestriction";

export default function FeaturesSection() {
    return (
        <Section>
            <h2 className="sr-only">Features</h2>
            <WidthRestriction>
                <div className="grid grid-cols-2 w-[min(55rem,100%)] gap-x-12 gap-y-28 mx-auto">
                    {Features.map(({ id, Icon, title, info }) => (
                        <article
                            key={id}
                            className="ring-0 flex flex-col items-center justify-start gap-2 text-center"
                        >
                            <div className="flex-1 flex items-center justify-center">
                                <Icon />
                            </div>
                            <h3 className="text-2xl font-bold font-header">
                                {title}
                            </h3>
                            <p className="text-base">{info}</p>
                        </article>
                    ))}
                </div>
            </WidthRestriction>
        </Section>
    );
}
