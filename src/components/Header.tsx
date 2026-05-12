import { navigation, site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/MobileMenu";

export function Header() {
  const whatsappHref = `${site.whatsappLink}?text=${encodeURIComponent(site.whatsappMessage)}`;

  return (
    <header className="sticky top-0 z-40 border-b border-gold/15 bg-sand/90 backdrop-blur-md">
      <div className="section-shell flex items-center justify-between gap-4 py-4">
        <a href="#inicio" className="group flex min-w-0 flex-col">
          <span className="glow-text font-serif text-[2.25rem] leading-none text-coffee-deep transition group-hover:text-coffee">
            {site.shortName}
          </span>
          <span className="text-xs uppercase tracking-[0.22em] text-gold">
            Psicóloga · CRP {site.crp}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-coffee transition hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href={whatsappHref} variant="whatsapp" className="hidden sm:inline-flex">
            WhatsApp
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
