import { processExpectations } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhatToExpect() {
  return (
    <section id="expectativas" className="py-20 sm:py-24">
      <div className="section-shell space-y-12">
        <SectionHeading
          eyebrow="Processo terapêutico"
          title="O que você pode esperar do processo terapêutico"
          description="Um cuidado atento às expectativas, à orientação clínica e ao respeito pela sua história, com uma escuta qualificada e acolhedora."
          align="center"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processExpectations.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-gold/20 bg-surface p-8 shadow-card"
            >
              <div className="mb-5 inline-flex rounded-full border border-gold/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Ética e cuidado
              </div>
              <h3 className="font-serif text-2xl text-coffee-deep">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
