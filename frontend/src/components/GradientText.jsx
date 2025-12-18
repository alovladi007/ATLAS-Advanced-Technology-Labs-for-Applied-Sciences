export function GradientText({ children, className = "" }) {
  return (
    <span
      className={[
        "bg-atlas-gradient bg-clip-text text-transparent",
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}

