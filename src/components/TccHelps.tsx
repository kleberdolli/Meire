import { tccDemands } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TccHelps() {
  return (
    <section id="tcc" className="bg-surface py-20 sm:py-24">
      <div className="section-shell space-y-12">
        <SectionHeading
          eyebrow="TCC"
          title="Como a Terapia Cognitivo-Comportamental pode ajudar"
          description="A TCC é uma abordagem estruturada e baseada em evidências, voltada à compreensão da relação entre pensamentos, emoções e comportamentos."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tccDemands.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-gold/20 bg-sand p-7 shadow-card transition hover:-translate-y-1 hover:border-gold/40"
            >
              <div className="mb-4 h-px w-12 bg-gold" />
              <h3 className="font-serif text-2xl text-coffee-deep">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
