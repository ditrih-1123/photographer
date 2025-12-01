"use client";

import { Container } from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Film, 
  Calendar, 
  Video, 
  Drone, 
  Cpu, 
  TrendingUp,
  Briefcase
} from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Film,
    title: "Imagefilm Produktion",
    description:
      "Ein Imagefilm repräsentiert Ihr Unternehmen genau so, wie Sie es sich wünschen: Es zeigt Ihr Unternehmen authentisch und überzeugend. Wir setzen Sie ins Rampenlicht damit Sie Sichtbar werden.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
  },
  {
    icon: Calendar,
    title: "Eventfilm Produktion",
    description:
      "Eventfilm Produktion aus Freiburg. Wir begleiten Ihr Event filmisch wie auch fotografisch. Ob Festival, Kongress oder Jahresfeier. Dein Aftermovie. Eventfilem aus Freiburg.",
    image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800&h=600&fit=crop",
  },
  {
    icon: Video,
    title: "Werbe Content Produktion",
    description:
      "Ein Werbefilm oder auch Werbespot, wirbt für Produkte, eine Marke oder eine Dienstleistung. Video Marketing Trends, dazu gehören auch Social Media Kampagnen. Mit einer Sozial Media Kampagne sichert diese den höchsten ROI.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
  },
  {
    icon: Drone,
    title: "Drohnen Aufnahmen",
    subtitle: "Luft- Drohnen Aufnahme",
    description:
      "Mit einer Luftbildaufnahme fliegen Sie mit uns in schwindelerregende Höhen. Ihre Zuschauer werden exzellente Luftbildaufnahme lieben. Ihr Drohnen Pilot aus Freiburg für Bauunternehmen und Handwerker",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop",
  },
  {
    icon: Cpu,
    title: "Die Digitalisierung",
    description:
      "Digitale Prozesse sparen Zeit, reduzieren Kosten und schaffen Struktur. Automatisierung macht Ihr Unternehmen effizienter – von Anfrage bis Rechnung. Mehr Überblick, weniger Aufwand, höherer Umsatz.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
  },
  {
    icon: TrendingUp,
    title: "Kampagnen & ADS",
    description:
      "Meta und Google Ads sind genau das Richtige für dich, wenn du neue Kunden gewinnen oder dein Business skalieren willst. Wir entwickeln datenbasierte Kampagnen, die performen – klar, kreativ und mit Fokus auf messbare Ergebnisse.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
];

export function ServicesSection() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-black">
      <Container className="max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex flex-col items-center space-y-4 mb-6">
            <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Unsere Leistungen
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Professionelle Videoproduktion und digitale Lösungen für Ihr Unternehmen
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group h-full hover:shadow-lg transition-all duration-300 bg-black border-gray-900 hover:border-primary/50 overflow-hidden"
              >
                <div className="relative w-full h-48 overflow-hidden bg-black">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    unoptimized
                    onError={(e) => {
                      // Fallback если изображение не загрузилось
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 p-3 rounded-lg bg-primary/20 border border-primary/30 backdrop-blur-sm">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col space-y-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                        {service.title}
                      </h3>
                      {service.subtitle && (
                        <p className="text-sm text-primary mb-2 font-medium">
                          {service.subtitle}
                        </p>
                      )}
                      <p className="text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

