import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contrato online",
  description: "Área reservada para contrato online da Psicóloga Meire Ribeiro.",
  robots: { index: false, follow: false },
};

export default function OnlineContractPage() {
  return (
    <main className="section-shell py-20">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-medium text-coffee underline">
          Voltar ao início
        </Link>
        <h1 className="mt-6 font-serif text-4xl text-coffee-deep sm:text-5xl">
          Contrato online
        </h1>
        <div className="mt-8 rounded-[2rem] border border-dashed border-gold/35 bg-surface p-8 shadow-card sm:p-10">
          <p className="text-base leading-8 text-muted">
            Esta área está reservada para a futura disponibilização do contrato
            online de prestação de serviços psicológicos de {site.name}, CRP{" "}
            {site.crp}.
          </p>
          <p className="mt-4 text-base leading-8 text-muted">
            Enquanto a funcionalidade não estiver ativa, as orientações contratuais
            serão compartilhadas diretamente no atendimento ou por canais oficiais
            de contato.
          </p>
        </div>
      </div>
    </main>
  );
}
