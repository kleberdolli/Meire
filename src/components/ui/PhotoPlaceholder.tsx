type PhotoPlaceholderProps = {
  label: string;
  description?: string;
  aspectClassName?: string;
};

export function PhotoPlaceholder({
  label,
  description,
  aspectClassName = "aspect-[4/5]",
}: PhotoPlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-gold/25 bg-gradient-to-br from-beige via-surface to-beige shadow-card ${aspectClassName}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(184,150,94,0.18),transparent_55%)]" />
      <div className="absolute inset-5 rounded-[1.5rem] border border-dashed border-gold/35" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
        <span className="rounded-full border border-gold/30 bg-surface/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
          Foto
        </span>
        <p className="font-serif text-2xl text-coffee-deep">{label}</p>
        {description ? (
          <p className="max-w-xs text-sm leading-6 text-muted">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
