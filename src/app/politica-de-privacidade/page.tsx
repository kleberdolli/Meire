import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: "Política de privacidade do site institucional da Psicóloga Meire Ribeiro.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="section-shell py-20">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-medium text-coffee underline">
          Voltar ao início
        </Link>
        <h1 className="mt-6 font-serif text-4xl text-coffee-deep sm:text-5xl">
          Política de privacidade
        </h1>
        <div className="mt-8 space-y-6 text-base leading-8 text-muted">
          <p>
            Esta política descreve como {site.name}, CRP {site.crp}, trata dados
            pessoais enviados por este site.
          </p>
          <p>
            Os dados informados no formulário de contato são utilizados apenas
            para retorno de contato, organização de agenda e comunicação
            profissional relacionada ao atendimento psicológico.
          </p>
          <p>
            As informações não são comercializadas. O acesso é restrito à
            profissional responsável e segue princípios de confidencialidade e
            sigilo profissional.
          </p>
          <p>
            Você pode solicitar atualização ou exclusão de dados de contato
            enviados por este site mediante mensagem pelo WhatsApp informado na
            página principal.
          </p>
        </div>
      </div>
    </main>
  );
}
