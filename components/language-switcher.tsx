"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Languages } from "lucide-react";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname(); // contoh: /id/projects/bookstore

  // Extract locale dari URL
  const currentLocale = pathname.split("/")[1] === "en" ? "en" : "id";

  const toggleLocale = () => {
    const newLocale = currentLocale === "id" ? "en" : "id";

    // Ganti locale di URL, contoh:
    // /id/projects/bookstore -> /en/projects/bookstore
    // /projects/bookstore (default id) -> /en/projects/bookstore
    const segments = pathname.split("/");

    if (segments[1] === "id" || segments[1] === "en") {
      segments[1] = newLocale;
    } else {
      // jika defaultLocale (id) tanpa prefix, tambahkan prefix baru
      segments.splice(1, 0, newLocale);
    }

    const newPathname = segments.join("/");

    router.push(newPathname);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleLocale}
      aria-label="Toggle language"
    >
      {currentLocale.toUpperCase()}
    </Button>
  );
}
