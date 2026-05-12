import { attendanceSteps } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorks() {
  return (
    <section id="atendimento" className="py-20 sm:py-24">
      <div className="section-shell space-y-12">
        <SectionHeading
          eyebrow="Atendimento"
          title="Como funciona o acompanhamento"
          description="Um percurso organizado para que você se sinta acolhida desde o primeiro contato até o acompanhamento contínuo."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {attendanceSteps.map((step) => (
            <article
              key={step.step}
              className="rounded-[1.75rem] border border-gold/20 bg-surface p-6 shadow-card"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
                Etapa {step.step}
              </p>
              <h3 className="mt-4 font-serif text-2xl text-coffee-deep">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
