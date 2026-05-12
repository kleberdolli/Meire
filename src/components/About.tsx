import { site } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="sobre" className="py-20 sm:py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="Sobre"
          title={`Conheça ${site.shortName}`}
          description="Cada pessoa carrega sua bagagem de vida em uma história única. O cuidado também precisa ser."
        />

        <div className="space-y-6 rounded-[2rem] border border-gold/20 bg-surface p-8 shadow-card sm:p-10">
          <p className="text-base leading-8 text-muted">
            Meire Ribeiro é {site.profession}, com atuação clínica voltada ao
            cuidado de adultos e idosos. Seu trabalho utiliza a Abordagem TCC —
            Terapia Cognitivo-Comportamental, considerando a história, as
            necessidades e o contexto de vida de cada pessoa.
          </p>
          <p className="text-base leading-8 text-muted">
            A escuta clínica é conduzida com acolhimento, ética, orientação e
            cuidado com as expectativas do processo terapêutico.
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
                Público atendido
              </p>
              <p className="mt-2 font-medium text-coffee">Adultos e Idosos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
