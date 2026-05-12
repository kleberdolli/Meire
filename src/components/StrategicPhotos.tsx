import Image from "next/image";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Photo = {
  id: string;
  src?: string;
  alt?: string;
  label: string;
  description: string;
};

const photos: Photo[] = [
  {
    id: "consultorio",
    src: "/consultorio.png",
    alt: "Profissional em ambiente de trabalho organizado, com notebook e caderno, pronta para o atendimento",
    label: "Consultório",
    description: "Ambiente acolhedor para sessões presenciais.",
  },
  {
    id: "atendimento",
    src: "/consultorio-atendimento.png",
    alt: "Psicóloga Meire Ribeiro em sessão de atendimento no consultório, ambiente acolhedor com decoração sofisticada",
    label: "Atendimento",
    description: "Registro visual do cuidado com a experiência terapêutica.",
  },
  {
    id: "detalhe",
    src: "/meire-ribeiro-2.png",
    alt: "Psicóloga Meire Ribeiro com uniforme profissional com bordado Meire Ribeiro Neuropsicóloga, sorrindo",
    label: "Meire Ribeiro",
    description: "Profissional comprometida com ética e cuidado.",
  },
];

export function StrategicPhotos() {
  return (
    <section className="bg-beige/50 py-20 sm:py-24">
      <div className="section-shell space-y-12">
        <SectionHeading
          eyebrow="Ambiente"
          title="Um espaço pensado para acolher com discrição e cuidado"
          description="Ambiente seguro, acolhedor e reservado para que o processo terapêutico aconteça com conforto, ética e tranquilidade."
          align="center"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) =>
            photo.src ? (
              <div
                key={photo.id}
                className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-card"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt ?? photo.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ) : (
              <PhotoPlaceholder
                key={photo.id}
                label={photo.label}
                description={photo.description}
                aspectClassName="aspect-[4/5]"
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
