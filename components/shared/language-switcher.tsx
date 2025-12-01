"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useState } from "react";

const languages = [
  { code: "en", label: "English" },
  { code: "uk", label: "Українська" },
];

export function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState("en");
  // TODO: Integrate with next-intl

  return (
    <DropdownMenu
      trigger={
        <Button variant="ghost" size="icon" aria-label="Change language">
          <Globe />
        </Button>
      }
    >
      {languages.map((lang) => (
        <DropdownMenuItem
          key={lang.code}
          onClick={() => setCurrentLang(lang.code)}
        >
          {lang.label}
        </DropdownMenuItem>
      ))}
    </DropdownMenu>
  );
}

