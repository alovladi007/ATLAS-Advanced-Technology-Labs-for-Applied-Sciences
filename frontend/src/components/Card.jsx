export function Card({ children, className = "" }) {
  return (
    <div
      className={[
        "rounded-2xl border border-atlas-border bg-white/[0.04] backdrop-blur-xl",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

