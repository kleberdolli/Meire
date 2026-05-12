"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
  consent: false,
};

export function BudgetForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!form.consent) {
      setError("É necessário aceitar a política de privacidade para enviar a solicitação.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/orcamento", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? "Não foi possível enviar sua solicitação.");
      }

      router.push("/obrigado");
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Não foi possível enviar sua solicitação.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="orcamento" className="py-20 sm:py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          eyebrow="Orçamento"
          title="Solicite um orçamento com acolhimento e discrição"
          description="Preencha o formulário para receber orientações sobre valores, disponibilidade e formato de atendimento."
        />

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-[2rem] border border-gold/20 bg-surface p-8 shadow-card sm:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-coffee">
              <span>Nome completo</span>
              <input
                required
                value={form.name}
                onChange={(event) =>
                  setForm((current) => ({ ...current, name: event.target.value }))
                }
                className="w-full rounded-2xl border border-gold/20 bg-sand px-4 py-3 text-base font-normal text-coffee outline-none transition focus:border-gold"
                name="name"
                autoComplete="name"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-coffee">
              <span>Telefone / WhatsApp</span>
              <input
                required
                value={form.phone}
                onChange={(event) =>
                  setForm((current) => ({ ...current, phone: event.target.value }))
                }
                className="w-full rounded-2xl border border-gold/20 bg-sand px-4 py-3 text-base font-normal text-coffee outline-none transition focus:border-gold"
                name="phone"
                autoComplete="tel"
                type="tel"
              />
            </label>
          </div>

          <label className="flex flex-col gap-2 text-sm font-medium text-coffee">
            <span>E-mail</span>
            <input
              required
              type="email"
              value={form.email}
              onChange={(event) =>
                setForm((current) => ({ ...current, email: event.target.value }))
              }
              className="w-full rounded-2xl border border-gold/20 bg-sand px-4 py-3 text-base font-normal text-coffee outline-none transition focus:border-gold"
              name="email"
              autoComplete="email"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-coffee">
            <span>Como posso ajudar?</span>
            <textarea
              required
              value={form.message}
              onChange={(event) =>
                setForm((current) => ({ ...current, message: event.target.value }))
              }
              className="min-h-36 w-full rounded-2xl border border-gold/20 bg-sand px-4 py-3 text-base font-normal text-coffee outline-none transition focus:border-gold"
              name="message"
            />
          </label>

          <label className="flex items-start gap-3 text-sm leading-6 text-muted">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(event) =>
                setForm((current) => ({ ...current, consent: event.target.checked }))
              }
              className="mt-1 h-4 w-4 rounded border-gold/40 text-coffee"
            />
            <span>
              Li e concordo com a{" "}
              <a href="/politica-de-privacidade" className="font-medium text-coffee underline">
                política de privacidade
              </a>
              .
            </span>
          </label>

          {error ? (
            <p role="alert" aria-live="assertive" className="text-sm text-red-700">
              {error}
            </p>
          ) : null}

          <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar solicitação"}
          </Button>
        </form>
      </div>
    </section>
  );
}
