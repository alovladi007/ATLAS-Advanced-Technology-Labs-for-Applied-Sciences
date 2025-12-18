import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Container } from "./Container";

const navItems = [
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function NavLink({ href, children }) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      className={[
        "rounded-lg px-3 py-2 text-sm transition",
        isActive
          ? "bg-white/10 text-white"
          : "text-atlas-text-secondary hover:bg-white/5 hover:text-white",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="pt-5">
        <div
          className={[
            "flex items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur-xl transition",
            scrolled
              ? "border-atlas-border bg-black/75"
              : "border-transparent bg-transparent",
          ].join(" ")}
        >
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-atlas-gradient">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-base font-extrabold tracking-tight text-white">
              ATLAS
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((n) => (
              <NavLink key={n.href} href={n.href}>
                {n.name}
              </NavLink>
            ))}
            <Button href="/projects" variant="secondary" className="ml-2">
              Get Started
            </Button>
          </nav>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-atlas-border bg-white/5 text-white md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        {mobileOpen && (
          <div className="mt-3 rounded-2xl border border-atlas-border bg-black/80 p-3 backdrop-blur-xl md:hidden">
            <div className="grid gap-1">
              {navItems.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm text-atlas-text-secondary hover:bg-white/5 hover:text-white"
                >
                  {n.name}
                </Link>
              ))}
              <Button
                href="/projects"
                variant="primary"
                className="mt-2 w-full"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

