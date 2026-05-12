import { site } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="sobre" className="py-20 sm:py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="Sobre"
          title={`Conheça ${site.shortName}`}
          description="Psicóloga com atuação baseada na TCC e formação complementar em Neuropsicologia, com compromisso com escuta, clareza e responsabilidade profissional."
        />

        <div className="space-y-6 rounded-[2rem] border border-gold/20 bg-surface p-8 shadow-card sm:p-10">
          <p className="text-base leading-8 text-muted">
            O cuidado psicológico é construído em parceria. Meu trabalho busca
            oferecer um ambiente seguro para compreender experiências, emoções e
            comportamentos, respeitando o seu tempo e a sua história.
          </p>
          <p className="text-base leading-8 text-muted">
            A Terapia Cognitivo-Comportamental orienta intervenções com foco em
            autoconhecimento, regulação emocional e mudanças práticas no
            cotidiano, sempre com linguagem acolhedora e ética.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-beige/70 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Especialidade
              </p>
              <p className="mt-2 font-medium text-coffee">{site.specialty}</p>
            </div>
            <div className="rounded-3xl bg-beige/70 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Formação
              </p>
              <p className="mt-2 font-medium text-coffee">{site.education}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
