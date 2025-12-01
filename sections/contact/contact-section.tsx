"use client";

import { useState } from "react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    remarks: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement form submission
    setTimeout(() => {
      setIsLoading(false);
      setFormData({ name: "", email: "", phone: "", message: "", remarks: "" });
      setCharCount(0);
    }, 1000);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= 180) {
      setFormData({ ...formData, message: value });
      setCharCount(value.length);
    }
  };

  return (
    <section className="relative w-full py-20 md:py-32 bg-black">
      <Container className="max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex flex-col items-center space-y-4 mb-6">
            <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
              <Send className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Content Creator
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Book Your FilmCrew • Buche Dein Filmteam
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Kontaktiere uns
              </h3>
              <p className="text-gray-400 mb-6">
                Wir freuen uns immer über Ihren Vorschlag! Verwenden Sie das
                Formular, um das Gespräch zu beginnen.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-900 bg-black">
                <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Fulltime 24/7 Worldwide</p>
                  <a
                    href="tel:+4915128400225"
                    className="text-white hover:text-primary transition-colors font-medium"
                  >
                    +49 151 28 400 225
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-900 bg-black">
                <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a
                    href="mailto:info@johannpictures.com"
                    className="text-white hover:text-primary transition-colors font-medium"
                  >
                    info@johannpictures.com
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-primary/30 bg-primary/5">
              <p className="text-white font-semibold mb-2">
                Dein Partner für Film und Fotografie
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
              Kontaktiere uns jetzt
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-white mb-2 block">
                  Name und Firma
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Name und Firma"
                  required
                  className="bg-black border-gray-900 text-white placeholder:text-gray-500"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-white mb-2 block">
                  Meine Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="meine@email.com"
                  required
                  className="bg-black border-gray-900 text-white placeholder:text-gray-500"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-white mb-2 block">
                  Telefonnummer (+49)
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+49 123 456 789"
                  className="bg-black border-gray-900 text-white placeholder:text-gray-500"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-white mb-2 block">
                  Sag uns was du vor hast
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleMessageChange}
                  placeholder="Sag uns was du vor hast"
                  required
                  rows={4}
                  maxLength={180}
                  className="bg-black border-gray-900 text-white placeholder:text-gray-500 resize-none"
                />
                <p className="text-sm text-gray-500 mt-1 text-right">
                  {charCount} / 180
                </p>
              </div>

              <div>
                <Label htmlFor="remarks" className="text-white mb-2 block">
                  Sonstige Bemerkungen bitte hier eintragen
                </Label>
                <Textarea
                  id="remarks"
                  value={formData.remarks}
                  onChange={(e) =>
                    setFormData({ ...formData, remarks: e.target.value })
                  }
                  placeholder="Sonstige Bemerkungen bitte hier eintragen"
                  rows={4}
                  className="bg-black border-gray-900 text-white placeholder:text-gray-500 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                size="lg"
                className="w-full bg-primary hover:bg-primary/90"
              >
                {isLoading ? (
                  "Wird gesendet..."
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Absenden
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

