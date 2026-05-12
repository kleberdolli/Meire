const SHARE_URL = "https://site-meire-ribeiro.vercel.app/";

export function ReferralCta() {
  return (
    <section
      aria-label="Indicar profissional"
      className="py-14 sm:py-16"
      style={{ background: "#2F241D" }}
    >
      <div className="section-shell flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#C9A45C]">
            Indique
          </p>
          <h2 className="mt-1 font-serif text-2xl text-[#F4EDE3] sm:text-3xl">
            Conhece alguém que pode se beneficiar?
          </h2>
          <p className="mt-2 max-w-lg text-sm leading-7 text-[#D8C3A5]">
            Indique Meire Ribeiro para quem você acredita que pode se beneficiar
            de um acompanhamento psicológico com cuidado, ética e escuta
            qualificada.
          </p>
        </div>

        <a
          href={SHARE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir site da Psicóloga Meire Ribeiro para indicar"
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#C9A45C] px-7 py-3 text-sm font-semibold tracking-wide text-[#C9A45C] transition hover:bg-[#C9A45C] hover:text-[#2F241D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C]"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" x2="12" y1="2" y2="15" />
          </svg>
          Indicar Meire Ribeiro
        </a>
      </div>
    </section>
  );
}
