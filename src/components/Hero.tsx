import Image from "next/image";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const whatsappInfoHref = `${site.whatsappLink}?text=${encodeURIComponent(site.whatsappMessage)}`;
  const whatsappScheduleHref = `${site.whatsappLink}?text=${encodeURIComponent(site.whatsappScheduleMessage)}`;

  return (
    <section id="inicio" className="relative overflow-hidden pb-20 pt-10 sm:pb-24 sm:pt-16">
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(184,150,94,0.18),transparent_70%)]" />
      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col gap-8">
          <div className="inline-flex w-fit items-center gap-3 rounded-full border border-gold/25 bg-surface/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            <span className="h-2 w-2 rounded-full bg-gold" />
            {site.specialty}
          </div>

          <div className="space-y-5">
            <h1 className="glow-text max-w-2xl font-serif text-4xl leading-[1.05] text-coffee-deep sm:text-5xl lg:text-6xl">
              Psicoterapia com acolhimento, método e respeito à sua história.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-muted">
              Atendimento psicológico para adultos e idosos, com base na{" "}
              Abordagem TCC — Terapia Cognitivo-Comportamental, presencialmente
              na Chapada Diamantina e online para todo o Brasil.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={whatsappScheduleHref}>
              Agendar atendimento
            </Button>
            <Button href="#contato" variant="secondary">
              Solicitar informações
            </Button>
          </div>

          <p className="text-sm text-muted">
            {site.profession} — CRP {site.crp}
          </p>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-soft lg:min-h-[28rem]">
          <Image
            src="/meire-ribeiro.png"
            alt="Psicóloga Meire Ribeiro sentada em poltrona, sorrindo, em ambiente acolhedor de consultório"
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
        </div>
      </div>
    </section>
  );
}
