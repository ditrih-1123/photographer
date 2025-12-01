import { MessageSquare } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "John Doe",
      text: "Amazing work! Highly recommended.",
    },
    {
      name: "Jane Smith",
      text: "Professional and creative photographer.",
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container">
        <div className="text-center mb-12">
          <div className="flex flex-col items-center space-y-4 mb-6">
            <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Kundenstimmen
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Was unsere Kunden über uns sagen
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-black border border-gray-900 p-6 rounded-lg">
              <p className="mb-4 text-gray-300">{testimonial.text}</p>
              <p className="font-semibold text-white">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



