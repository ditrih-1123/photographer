"use client";

import { Container } from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, Award, TrendingUp, CheckCircle2 } from "lucide-react";

const facts = [
  {
    icon: TrendingDown,
    title: "Geringere Werbekosten",
    description:
      "Durch unsere verkaufsstarken Bilder & Videos werden deine Werbekosten sinken, während du mehr Aufmerksamkeit in deiner Branche anziehst.",
  },
  {
    icon: Award,
    title: "Jahrelange Erfahrung",
    description:
      "Wir sind seid Jahren sehr erfahren und wissen genau worauf es in schwierigen Situationen ankommt.",
  },
  {
    icon: TrendingUp,
    title: "Umsatz steigern",
    description:
      "Unsere Brandingmaßnahmen lassen dich nicht nur gut aussehen, sondern sorgen sofort & langfristig für mehr Umsatz.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="relative w-full py-20 md:py-32 bg-black z-10">
      <Container className="max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex flex-col items-center space-y-4 mb-6">
            <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Warum Wir
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Entdecken Sie die Vorteile, die unsere professionelle Zusammenarbeit für Ihr Unternehmen bietet
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {facts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <Card 
                key={index} 
                className="group h-full hover:shadow-2xl transition-all duration-300 bg-black border border-gray-900 hover:border-primary/50 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col space-y-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative p-5 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 group-hover:scale-110 transition-transform duration-300 w-fit">
                        <Icon className="h-10 w-10 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                        {fact.title}
                      </h3>
                      <div className="h-1 w-16 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base group-hover:text-gray-200 transition-colors duration-300">
                        {fact.description}
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

