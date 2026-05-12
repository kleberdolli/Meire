import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "whatsapp" | "headerCta";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-coffee text-sand shadow-card hover:bg-coffee-deep focus-visible:outline-coffee",
  secondary:
    "border border-gold/40 bg-surface text-coffee hover:border-gold hover:bg-beige/60 focus-visible:outline-gold",
  ghost:
    "bg-transparent text-coffee hover:bg-beige/70 focus-visible:outline-coffee",
  whatsapp:
    "border border-[#2d9e65]/40 bg-[#1f7a4d]/60 text-white backdrop-blur-sm hover:bg-[#1f7a4d]/80 focus-visible:outline-[#1f7a4d] !px-5 !py-2.5 !text-xs",
  headerCta:
    "border border-[#C9A45C] bg-[#C9A45C] text-[#2F241D] hover:bg-[#E5D0A3] hover:text-[#2F241D] focus-visible:outline-[#C9A45C] !px-5 !py-2.5 !text-xs",
};

type ButtonProps = ComponentProps<"button"> & {
  href?: string;
  variant?: ButtonVariant;
};

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
  type,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variantClasses[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http");

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} className={classes} {...props}>
      {children}
    </button>
  );
}
