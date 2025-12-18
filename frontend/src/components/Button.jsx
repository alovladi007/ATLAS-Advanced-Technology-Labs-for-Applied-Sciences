import Link from "next/link";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atlas-accent-cyan/70 focus-visible:ring-offset-0";

const variants = {
  primary:
    "bg-atlas-gradient text-white shadow-glow hover:opacity-95 active:opacity-90",
  secondary:
    "border border-atlas-border bg-white/5 text-white hover:bg-white/10",
  ghost: "text-atlas-text-secondary hover:text-white hover:bg-white/5",
};

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const cls = [base, variants[variant] || variants.primary, className].join(
    " "
  );

  if (href) {
    return (
      <Link href={href} className={cls} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={cls} {...props}>
      {children}
    </button>
  );
}

