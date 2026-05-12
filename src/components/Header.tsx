import { navigation, site } from "@/lib/site";
import { MobileMenu } from "@/components/MobileMenu";

export function Header() {
  return (
    <header
      className="sticky top-0 z-40 border-b backdrop-blur-md"
      style={{
        background: "#2F241D",
        borderColor: "rgb(201 164 92 / 0.22)",
      }}
    >
      <div className="section-shell flex items-center justify-between gap-4 py-4">
        <a href="#inicio" className="group flex min-w-0 flex-col">
          <span className="glow-text font-serif text-[2.25rem] leading-none text-[#F4EDE3] transition group-hover:text-[#D8C3A5]">
            {site.shortName}
          </span>
          <span className="text-xs uppercase tracking-[0.22em] text-[#D8C3A5]">
            {site.profession} · <span className="text-[#C9A45C]">CRP {site.crp}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#F4EDE3] transition hover:text-[#C9A45C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
