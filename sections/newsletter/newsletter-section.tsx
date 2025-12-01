import { NewsletterForm } from "@/components/forms/newsletter-form";
import { Mail } from "lucide-react";

export function NewsletterSection() {
  return (
    <section className="py-24 bg-black">
      <div className="container max-w-2xl text-center space-y-6">
        <div className="flex flex-col items-center space-y-4 mb-6">
          <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Newsletter Abonnieren
          </h2>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed">
            Erhalten Sie die neuesten Updates und Tipps direkt in Ihr Postfach
          </p>
        </div>
        <NewsletterForm />
      </div>
    </section>
  );
}



