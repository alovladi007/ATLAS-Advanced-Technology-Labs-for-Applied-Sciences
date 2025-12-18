import Link from "next/link";
import { Container } from "./Container";

const footerSections = [
  {
    title: "Platform",
    links: [
      { name: "Projects", href: "/projects" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "GitHub", href: "https://github.com/alovladi007", external: true },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-atlas-border bg-atlas-bg-secondary">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
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
            <p className="mt-4 max-w-sm text-sm leading-6 text-atlas-text-muted">
              Building the intelligence that builds the future.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 md:col-span-2">
            {footerSections.map((sec) => (
              <div key={sec.title}>
                <div className="text-xs font-semibold uppercase tracking-wider text-atlas-text-muted">
                  {sec.title}
                </div>
                <div className="mt-4 grid gap-3">
                  {sec.links.map((l) => (
                    <Link
                      key={l.name}
                      href={l.href}
                      target={l.external ? "_blank" : undefined}
                      rel={l.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-atlas-text-secondary hover:text-white"
                    >
                      {l.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-atlas-border pt-6 text-xs text-atlas-text-muted sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} ATLAS - Advanced Technology Labs</div>
          <div className="flex gap-6">
            <a className="hover:text-white" href="#">
              Privacy
            </a>
            <a className="hover:text-white" href="#">
              Terms
            </a>
            <a className="hover:text-white" href="#">
              Security
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

