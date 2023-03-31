import { Intro } from "@assets/Illustrations";

import Button from "@components/Button";
import Section from "@layout/Section";
import WidthRestriction from "@layout/WidthRestriction";

export default function HeroSection() {
    return (
        <Section className="bg-primary-darkBlue-200 py-32 bg-[url(/assets/bg/curvy-desktop.svg)] bg-no-repeat [background-position:bottom] [background-size:100%_10rem] md:[background-size:100%_20rem] lg:[background-size:100%_30rem]">
            <WidthRestriction>
                <div className="flex flex-col items-center justify-center gap-8 w-[min(55rem,100%)] mx-auto">
                    <img className="w-full" src={Intro} alt="" />
                    <div className="text-center grid gap-8">
                        <h2 className="font-bold font-header text-2xl md:text-3xl lg:text-4xl">
                            All your files in one secure location, accessible
                            anywhere.
                        </h2>
                        <p className="w-[min(40rem,90%)] mx-auto text-base md:text-lg lg:text-xl">
                            Fylo stores all your most important files in one
                            secure location.
                            <br />
                            Access them wherever you need, share and collaborate
                            with friends family, and co-workers.
                        </p>
                        <Button className="w-[min(25rem,70%)] mx-auto">
                            Get Started
                        </Button>
                    </div>
                </div>
            </WidthRestriction>
        </Section>
    );
}
