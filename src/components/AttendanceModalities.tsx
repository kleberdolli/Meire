import { SectionHeading } from "@/components/ui/SectionHeading";

const modalities = [
  {
    title: "Atendimento presencial",
    location: "Chapada Diamantina — BA",
    description:
      "Sessões presenciais na Chapada Diamantina, em ambiente acolhedor, reservado e preparado para o cuidado psicológico.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Atendimento online",
    location: "Todo o Brasil",
    description:
      "Atendimento psicológico online para adultos e idosos em todo o Brasil, com sigilo, ética e praticidade.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden
      >
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
] as const;

export function AttendanceModalities() {
  return (
    <section id="modalidades" className="bg-surface py-20 sm:py-24">
      <div className="section-shell space-y-12">
        <SectionHeading
          eyebrow="Modalidades"
          title="Modalidades de atendimento"
          description="Atendimento disponível de forma presencial ou online, para adultos e idosos, respeitando a necessidade e o contexto de cada pessoa."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {modalities.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-gold/20 bg-sand p-8 shadow-card transition hover:-translate-y-1 hover:border-gold/40 sm:p-10"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-gold">
                {item.icon}
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                {item.location}
              </p>
              <h3 className="mt-2 font-serif text-2xl text-coffee-deep">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
