import { HeroSection } from "@/sections/hero";
import { WhyChooseUsSection } from "@/sections/why-choose-us";
import { ServicesSection } from "@/sections/services";
import { AboutSection } from "@/sections/about";
import { ContactSection } from "@/sections/contact";

export default function HomePage() {
  return (
    <div className="bg-black">
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

