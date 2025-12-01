import { Sparkles } from "lucide-react";

export function FeaturesSection() {
  const features = [
    { title: "Professional Quality", description: "High-end equipment" },
    { title: "Creative Vision", description: "Unique perspectives" },
    { title: "Fast Delivery", description: "Quick turnaround times" },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container">
        <div className="text-center mb-12">
          <div className="flex flex-col items-center space-y-4 mb-6">
            <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Unsere Features
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Was uns auszeichnet und Ihre Projekte zum Erfolg führt
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-2">
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



