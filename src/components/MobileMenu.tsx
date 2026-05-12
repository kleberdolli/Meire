"use client";

import { useEffect, useRef, useState } from "react";
import { navigation, site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const whatsappHref = `${site.whatsappLink}?text=${encodeURIComponent(site.whatsappMessage)}`;

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className="lg:hidden" ref={menuRef}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((current) => !current)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-surface text-coffee"
      >
        <span aria-hidden className="text-lg">
          {open ? "×" : "≡"}
        </span>
      </button>

      {open ? (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-gold/15 bg-sand px-5 py-6 shadow-soft"
        >
          <nav className="flex flex-col gap-4" aria-label="Navegação mobile">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-coffee"
              >
                {item.label}
              </a>
            ))}
            <Button href={whatsappHref} variant="whatsapp" className="w-full">
              Falar no WhatsApp
            </Button>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
