import { HeroSection } from "@/sections/hero";
import { WhyChooseUsSection } from "@/sections/why-choose-us";
import { ServicesSection } from "@/sections/services";
import { AboutSection } from "@/sections/about";
import { ContactSection } from "@/sections/contact";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="bg-black">
      <Header />
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
