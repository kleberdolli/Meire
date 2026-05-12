import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Solicitação recebida",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  const whatsappHref = `${site.whatsappLink}?text=${encodeURIComponent(site.whatsappMessage)}`;

  return (
    <main className="section-shell flex min-h-screen flex-col items-center justify-center py-20 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
        Solicitação recebida
      </p>
      <h1 className="mt-4 max-w-2xl font-serif text-5xl text-coffee-deep">
        Obrigada pelo seu contato
      </h1>
      <p className="mt-5 max-w-xl text-base leading-8 text-muted">
        Sua solicitação foi registrada. Em breve você receberá retorno com
        orientações sobre disponibilidade e próximos passos.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/">Voltar ao início</Button>
        <Button href={whatsappHref} variant="secondary">
          Falar no WhatsApp
        </Button>
      </div>
      <p className="mt-10 text-sm text-muted">
        {site.name} · CRP {site.crp}
      </p>
      <Link href="/politica-de-privacidade" className="mt-3 text-sm text-coffee underline">
        Política de privacidade
      </Link>
    </main>
  );
}
