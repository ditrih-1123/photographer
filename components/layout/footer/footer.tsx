import { FooterLinks } from "./footer-links";
import { Logo } from "@/components/shared/logo";
import { Container } from "@/components/layout/container";

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black">
      <Container className="max-w-7xl">
        <div className="py-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-start">
            {/* Logo on the left */}
            <div className="flex-shrink-0">
              <Logo />
            </div>
            
            {/* Links on the right */}
            <div className="flex-1 w-full">
              <FooterLinks />
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} JOHANNNPICTURES. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}



