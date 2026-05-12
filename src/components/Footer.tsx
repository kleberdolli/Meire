import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  const whatsappHref = `${site.whatsappLink}?text=${encodeURIComponent(site.whatsappMessage)}`;
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t py-16"
      style={{ background: "#2F241D", borderColor: "#C9A45C26" }}
    >
      <div className="section-shell">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Identidade */}
          <div>
            <p className="font-serif text-3xl" style={{ color: "#F4EDE3" }}>
              {site.name}
            </p>
            <p
              className="mt-1 text-sm font-medium tracking-wide"
              style={{ color: "#C9A45C" }}
            >
              CRP {site.crp}
            </p>
            <p className="mt-3 max-w-xl text-sm leading-7" style={{ color: "#D8C3A5" }}>
              Atendimento psicológico com escuta, ética e responsabilidade
              profissional.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3 text-sm" style={{ color: "#D8C3A5" }}>
            <p>
              <span>WhatsApp: </span>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link font-medium"
              >
                {site.whatsappDisplay}
              </a>
            </p>
            <p>
              <Link href="/politica-de-privacidade" className="footer-link">
                Política de privacidade
              </Link>
            </p>
            <p>
              <Link href="/contrato-online" className="footer-link">
                Contrato online
              </Link>
            </p>
          </div>
        </div>

        {/* Linha divisória + direitos */}
        <div
          className="mt-10 border-t pt-6 text-xs"
          style={{ borderColor: "#C9A45C26", color: "#D8C3A5" }}
        >
          © {currentYear} {site.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
