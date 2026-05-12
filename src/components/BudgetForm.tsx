"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

type Modality = "presencial" | "online" | "nao_sei" | "";

type FormState = {
  name: string;
  email: string;
  phone: string;
  city: string;
  modality: Modality;
  contactTime: string;
  message: string;
  consent: boolean;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  city: "",
  modality: "",
  contactTime: "",
  message: "",
  consent: false,
};

const inputClass =
  "w-full rounded-2xl border border-gold/20 bg-sand px-4 py-3 text-base font-normal text-coffee outline-none transition focus:border-gold";

export function BudgetForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!form.consent) {
      setError(
        "É necessário aceitar a política de privacidade para enviar a mensagem.",
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/orcamento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          city: form.city,
          modality: form.modality,
          contactTime: form.contactTime,
          message: form.message,
        }),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? "Não foi possível enviar sua mensagem.");
      }

      router.push("/obrigado");
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Não foi possível enviar sua mensagem.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contato" className="py-20 sm:py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          eyebrow="Contato"
          title="Solicite informações sobre atendimento"
          description="Preencha o formulário para receber orientações sobre disponibilidade, valores e formato de atendimento."
        />

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-[2rem] border border-gold/20 bg-surface p-8 shadow-card sm:p-10"
        >
          {/* Nome + Telefone */}
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-coffee">
              <span>Nome completo</span>
              <input
                required
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                className={inputClass}
                name="name"
                autoComplete="name"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-coffee">
              <span>Telefone / WhatsApp</span>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
                className={inputClass}
                name="phone"
                autoComplete="tel"
              />
            </label>
          </div>

          {/* Email + Cidade */}
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-coffee">
              <span>E-mail</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                className={inputClass}
                name="email"
                autoComplete="email"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-coffee">
              <span>Cidade / Estado</span>
              <input
                value={form.city}
                onChange={(e) => set("city", e.target.value)}
                className={inputClass}
                name="city"
                placeholder="Ex: Salvador / BA"
                autoComplete="address-level2"
              />
            </label>
          </div>

          {/* Modalidade + Horário */}
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-coffee">
              <span>Modalidade desejada</span>
              <select
                value={form.modality}
                onChange={(e) => set("modality", e.target.value as Modality)}
                className={inputClass}
                name="modality"
              >
                <option value="">Selecione</option>
                <option value="presencial">Presencial</option>
                <option value="online">Online</option>
                <option value="nao_sei">Ainda não sei</option>
              </select>
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-coffee">
              <span>Melhor horário para contato</span>
              <input
                value={form.contactTime}
                onChange={(e) => set("contactTime", e.target.value)}
                className={inputClass}
                name="contactTime"
                placeholder="Ex: manhã, após 18h…"
              />
            </label>
          </div>

          {/* Mensagem */}
          <label className="flex flex-col gap-2 text-sm font-medium text-coffee">
            <span>Como posso ajudar?</span>
            <textarea
              required
              value={form.message}
              onChange={(e) => set("message", e.target.value)}
              className={`${inputClass} min-h-36 resize-none`}
              name="message"
            />
          </label>

          {/* Consentimento */}
          <label className="flex items-start gap-3 text-sm leading-6 text-muted">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(e) => set("consent", e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-gold/40 text-coffee"
            />
            <span>
              Li e concordo com a{" "}
              <a
                href="/politica-de-privacidade"
                className="font-medium text-coffee underline"
              >
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
            {isSubmitting ? "Enviando..." : "Solicitar informações sobre atendimento"}
          </Button>
        </form>
      </div>
    </section>
  );
}
