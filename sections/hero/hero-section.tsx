"use client";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative pt-16 md:pt-20 pb-20 md:pb-32 bg-black min-h-screen flex items-center">
      <Container className="max-w-7xl">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
            Professional Photography
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Capturing moments that last a lifetime
          </p>
          <div className="flex gap-4 justify-center flex-wrap mt-8">
            <Link href="/portfolio">
              <Button size="lg">View Portfolio</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">Contact Me</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

