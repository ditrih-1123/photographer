import Link from "next/link";

const footerLinks = {
  company: [
    { href: "/about", label: "Über uns" },
    { href: "/services", label: "Leistungen" },
    { href: "/contact", label: "Kontakt" },
  ],
  legal: [
    { href: "/privacy", label: "Datenschutz" },
    { href: "/terms", label: "Impressum" },
  ],
};

export function FooterLinks() {
  return (
    <div className="grid grid-cols-2 gap-8 md:gap-12">
      <div>
        <h3 className="mb-4 font-semibold text-white">Unternehmen</h3>
        <ul className="space-y-2">
          {footerLinks.company.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="mb-4 font-semibold text-white">Rechtliches</h3>
        <ul className="space-y-2">
          {footerLinks.legal.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}



