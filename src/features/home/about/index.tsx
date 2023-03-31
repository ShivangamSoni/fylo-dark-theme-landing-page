import { StayProductive } from "@assets/Illustrations";
import { Arrow } from "@assets/Icons";

import Section from "@layout/Section";
import WidthRestriction from "@layout/WidthRestriction";
import Link from "@components/Link";

export default function AboutSection() {
    return (
        <Section className="px-8">
            <WidthRestriction>
                <div className="grid lg:grid-cols-2 gap-24">
                    <img
                        className="justify-self-center"
                        src={StayProductive}
                        alt=""
                    />
                    <div className="flex flex-col items-start justify-center gap-8">
                        <h2 className="font-bold font-header text-xl md:text-2xl lg:text-4xl xl:w-[60%]">
                            Stay productive, wherever you are
                        </h2>
                        <p className="text-base md:text-lg lg:text-xl">
                            Never let location be an issue when accessing your
                            files. Fylo has you covered for all of your file
                            storage needs.
                        </p>
                        <p className="text-base md:text-lg lg:text-xl">
                            Securely share files and folders with friends,
                            family and colleagues for live collaboration. No
                            email attachments required.
                        </p>
                        <Link
                            className="text-base md:text-lg lg:text-xl !text-accent-cyan hover:!text-white focus-visible:!text-white"
                            variant="fixed"
                        >
                            See how Fylo works <Arrow className="inline" />
                        </Link>
                    </div>
                </div>
            </WidthRestriction>
        </Section>
    );
}
