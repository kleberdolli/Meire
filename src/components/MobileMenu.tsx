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
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A45C]/45 bg-transparent text-[#F4EDE3] transition hover:border-[#C9A45C] hover:bg-[rgb(201_164_92_/0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C]"
      >
        <span aria-hidden className="text-lg">
          {open ? "×" : "≡"}
        </span>
      </button>

      {open ? (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b px-5 py-6 shadow-[0_12px_40px_rgb(0_0_0_/0.25)]"
          style={{
            background: "#2F241D",
            borderColor: "rgb(201 164 92 / 0.22)",
          }}
        >
          <nav className="flex flex-col gap-4" aria-label="Navegação mobile">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-[#F4EDE3] transition hover:text-[#C9A45C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C]"
              >
                {item.label}
              </a>
            ))}
            <Button href={whatsappHref} variant="headerCta" className="w-full">
              Falar no WhatsApp
            </Button>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
