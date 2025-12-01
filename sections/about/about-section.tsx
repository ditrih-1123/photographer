"use client";

import { useState } from "react";
import { Container } from "@/components/layout/container";
import { 
  Sparkles, 
  Film, 
  Globe, 
  Target, 
  Building2,
  TrendingUp,
  Image as ImageIcon,
  CheckCircle2,
  ArrowLeft,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Storytelling & Marketing",
    description:
      "Es hilft dabei, dass die Dinge, die Sie erzählen, länger im Gedächtnis bleiben. Außerdem trägt es dazu bei, dass Ihre potenziellen Kunden Vertrauen zu Ihnen aufbauen – und Vertrauen ist die Basis für jede erfolgreiche Kundenbeziehung.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    points: [
      { icon: Sparkles, text: "Only Storytelling makes Marketing" },
      { icon: Film, text: "Deine Filmproduktion aus Freiburg" },
      { icon: Globe, text: "Die Welt wartet nicht mehr auf die nächste Zeitungsbeilage" },
    ],
  },
  {
    title: "Production & Strategy",
    description:
      "Doch ein Film allein reicht nicht. Wir helfen Ihnen, sein volles Potenzial auszuschöpfen – von der Idee über die Produktion bis zur strategischen Vermarktung. In Film we trust – mit gezielter Content Creation für maximale Wirkung.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
    points: [
      { icon: Target, text: "Volles Potenzial ausschöpfen" },
      { icon: Building2, text: "Deine Digitale Content Agentur auf Freiburg" },
      { icon: TrendingUp, text: "Kampagnen zur Neukundengewinnung" },
    ],
  },
  {
    title: "Branding & Investment",
    description:
      "Täglich besuchen viele Menschen deine Website oder Landingpage – sei es durch Empfehlungen oder teure Werbeanzeigen. Diese potenziellen Kunden suchen deine Expertise und sind bereit, gut zu zahlen.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    points: [
      { icon: ImageIcon, text: "WARUM DU IN BRANDING INVESTIEREN SOLLTEST?" },
      { icon: CheckCircle2, text: "Hochwertige Fotos und Videos für Vertrauen" },
      { icon: TrendingUp, text: "Senkung der Werbekosten durch professionelle Präsentation" },
    ],
  },
];

export function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full py-20 md:py-32 bg-black">
      <Container className="max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex flex-col items-center space-y-4 mb-6">
            <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              In Creativity We Trust
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Professionelle Content Creation und Marketing-Lösungen für Ihr Unternehmen
            </p>
          </div>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-lg border border-gray-900 bg-black">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="p-6 md:p-8 lg:p-12"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left side: Content */}
                  <div className="space-y-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {slides[currentSlide].title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                      {slides[currentSlide].description}
                    </p>
                    
                    {/* Points with icons */}
                    <div className="space-y-4 mt-8">
                      {slides[currentSlide].points.map((point, index) => {
                        const Icon = point.icon;
                        return (
                          <div key={index} className="flex items-start gap-4">
                            <div className="p-2 rounded-lg bg-primary/20 border border-primary/30 flex-shrink-0">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                            <p className="text-gray-300 text-sm md:text-base pt-1">
                              {point.text}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right side: Image */}
                  <div className="relative h-64 md:h-96 rounded-lg overflow-hidden border border-gray-900">
                    <Image
                      src={slides[currentSlide].image}
                      alt={slides[currentSlide].title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="border-gray-900 hover:border-primary/50"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? "w-8 bg-primary"
                      : "w-2 bg-gray-700 hover:bg-gray-600"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="border-gray-900 hover:border-primary/50"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="w-full flex flex-col items-center space-y-4 p-8 rounded-lg bg-primary">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              JETZT unverbindlich ANFRAGEN!
            </h3>
            <p className="text-lg text-white font-semibold">
              #jpxMedia or Nothing!
            </p>
            <Link href="/contact">
              <Button size="lg" className="mt-4" variant="secondary">
                Kontakt aufnehmen
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

