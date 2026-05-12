"use client";

import { useState } from "react";
import { faqItems } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-surface py-20 sm:py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="Perguntas frequentes"
          description="Informações gerais para apoiar seu primeiro contato. Cada caso é avaliado de forma individual."
        />

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const triggerId = `faq-trigger-${index}`;

            return (
              <article key={item.question}>
                <div className="overflow-hidden rounded-[1.5rem] border border-gold/20 bg-sand">
                  <button
                    type="button"
                    id={triggerId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="font-medium text-coffee">{item.question}</span>
                    <span aria-hidden className="flex-shrink-0 text-gold">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen ? (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      className="border-t border-gold/15 px-6 py-5 text-sm leading-7 text-muted"
                    >
                      {item.answer}
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
