import { strategicPhotos } from "@/lib/site";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function StrategicPhotos() {
  return (
    <section className="bg-beige/50 py-20 sm:py-24">
      <div className="section-shell space-y-12">
        <SectionHeading
          eyebrow="Ambiente"
          title="Imagens que reforçam acolhimento e profissionalismo"
          description="Espaços reservados para fotos estratégicas do consultório e da experiência de atendimento."
          align="center"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {strategicPhotos.map((photo) => (
            <PhotoPlaceholder
              key={photo.id}
              label={photo.label}
              description={photo.description}
              aspectClassName="aspect-[4/5]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
