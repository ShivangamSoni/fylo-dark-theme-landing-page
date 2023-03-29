import HeroSection from "@features/home/hero";
import FeaturesSection from "@features/home/features";
import AboutSection from "@features/home/about";
import TestimonialsSection from "@features/home/testimonials";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <FeaturesSection />
            <AboutSection />
            <TestimonialsSection />
        </main>
    );
}
