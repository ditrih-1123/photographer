import { Navigation } from "./navigation";
import { MobileMenu } from "./mobile-menu";
import { Logo } from "@/components/shared/logo";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-black/90 backdrop-blur-md border-b border-border/20">
      <div className="container flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
        <Logo />
        <Navigation />
        <MobileMenu />
      </div>
    </header>
  );
}

