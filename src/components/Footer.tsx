import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  const whatsappHref = `${site.whatsappLink}?text=${encodeURIComponent(site.whatsappMessage)}`;

  return (
    <footer className="border-t border-gold/15 bg-coffee-deep py-16 text-sand">
      <div className="section-shell grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="font-serif text-3xl">{site.name}</p>
          <p className="mt-1 text-sm font-medium tracking-wide text-gold">
            CRP {site.crp}
          </p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-gold-soft">
            Atendimento psicológico com escuta, ética e responsabilidade
            profissional.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <p>
            WhatsApp:{" "}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sand underline"
            >
              {site.whatsappDisplay}
            </a>
          </p>
          <p>
            <Link href="/politica-de-privacidade" className="underline">
              Política de privacidade
            </Link>
          </p>
          <p>
            <Link href="/contrato-online" className="underline">
              Contrato online
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
