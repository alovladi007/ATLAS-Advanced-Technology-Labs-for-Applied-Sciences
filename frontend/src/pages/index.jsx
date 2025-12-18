import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { GradientText } from "../components/GradientText";
import { SiteLayout } from "../components/SiteLayout";
import { projectList } from "../lib/projects";

const OrbCanvas = dynamic(
  () => import("../components/OrbCanvas").then((m) => m.OrbCanvas),
  { ssr: false }
);

function SectionHeader({ badge, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {badge ? (
        <div className="inline-flex items-center gap-2 rounded-full border border-atlas-border bg-white/5 px-4 py-2 text-xs font-semibold text-atlas-text-secondary">
          {badge}
        </div>
      ) : null}
      <h2 className="mt-6 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-3 max-w-2xl text-pretty text-base leading-7 text-atlas-text-secondary">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  const reduceMotion = useReducedMotion();

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden pb-14 pt-20">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : { x: [0, 60, 0], y: [0, -30, 0], scale: [1, 1.12, 1] }
            }
            transition={
              reduceMotion
                ? undefined
                : { duration: 18, repeat: Infinity, ease: "easeInOut" }
            }
            className="absolute -top-28 left-10 h-[520px] w-[520px] rounded-full bg-violet-500/15 blur-[90px]"
          />
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : { x: [0, -70, 0], y: [0, 50, 0], scale: [1, 1.08, 1] }
            }
            transition={
              reduceMotion
                ? undefined
                : { duration: 22, repeat: Infinity, ease: "easeInOut" }
            }
            className="absolute right-[-10%] top-16 h-[560px] w-[560px] rounded-full bg-cyan-500/12 blur-[100px]"
          />
          <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        </div>

        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-atlas-border bg-white/5 px-4 py-2 text-xs font-semibold text-atlas-text-secondary">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(16,185,129,0.45)]" />
                Now in Private Beta
              </div>

              <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight sm:text-6xl">
                Build the future with <GradientText>AI-powered automation</GradientText>
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-atlas-text-secondary sm:text-lg">
                Transform research into production-ready software. From semiconductors to biomedical engineering — deploy domain-specific AI in hours, not months.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/projects" variant="primary">
                  Explore Projects <span aria-hidden>→</span>
                </Button>
                <Button href="/about" variant="secondary">
                  Learn More
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6">
                {["90% faster", "10+ platforms", "4h deploy"].map((v) => (
                  <div key={v} className="text-left">
                    <div className="bg-atlas-gradient bg-clip-text text-2xl font-extrabold text-transparent">
                      {v.split(" ")[0]}
                    </div>
                    <div className="mt-1 text-xs font-semibold text-atlas-text-muted">
                      {v.split(" ").slice(1).join(" ")}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="relative hidden h-[520px] lg:block">
              {/* 3D (client-only) */}
              <div className="absolute inset-0 rounded-3xl border border-atlas-border bg-white/[0.02]" />
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute -right-24 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-violet-500/10 blur-[80px]" />
                <div className="absolute -left-24 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-cyan-500/8 blur-[90px]" />
              </div>
              {!reduceMotion ? (
                <OrbCanvas className="absolute inset-0" color="#8b5cf6" />
              ) : (
                <div className="absolute inset-0 grid place-items-center">
                  <div className="h-64 w-64 rounded-full bg-atlas-gradient opacity-30 blur-[40px]" />
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Divisions */}
      <section className="bg-atlas-bg-secondary py-16">
        <Container>
          <SectionHeader
            badge="RESEARCH DIVISIONS"
            title={
              <>
                Six verticals. <GradientText>One platform.</GradientText>
              </>
            }
            subtitle="Domain-specific AI agents that understand your industry and generate production-ready software."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                icon: "⚡",
                title: "ElectroAI",
                subtitle: "Semiconductor & Electronics",
                copy: "Yield prediction, SPC analytics, and fab automation workflows.",
                color: "#8b5cf6",
              },
              {
                icon: "💡",
                title: "PhotonAI",
                subtitle: "Photonics & Optoelectronics",
                copy: "Simulation orchestration, inverse design, and layout generation.",
                color: "#00d4ff",
              },
              {
                icon: "🧬",
                title: "BioAI",
                subtitle: "Biomedical Engineering",
                copy: "Biosignal analysis, discovery pipelines, and clinical decision support.",
                color: "#10b981",
              },
              {
                icon: "⚛️",
                title: "NanoAI",
                subtitle: "Materials Science",
                copy: "Multi-scale simulations and AI-driven materials discovery campaigns.",
                color: "#f59e0b",
              },
              {
                icon: "🛡️",
                title: "DefenseAI",
                subtitle: "Autonomous Systems",
                copy: "Sensor fusion, GPS-denied navigation, and autonomous intelligence.",
                color: "#ec4899",
              },
              {
                icon: "🚀",
                title: "SpaceAI",
                subtitle: "Aerospace & Orbital",
                copy: "Orbital mechanics, constellation management, and sensing workflows.",
                color: "#00d4ff",
              },
            ].map((f) => (
              <Card
                key={f.title}
                className="group relative overflow-hidden p-6 transition hover:-translate-y-1 hover:border-white/20"
              >
                <div
                  className="absolute inset-x-0 top-0 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${f.color}, transparent)`,
                  }}
                />
                <div
                  className="grid h-12 w-12 place-items-center rounded-2xl border"
                  style={{
                    borderColor: `${f.color}33`,
                    backgroundColor: `${f.color}1A`,
                  }}
                >
                  <span className="text-2xl">{f.icon}</span>
                </div>
                <div className="mt-4 text-lg font-bold tracking-tight text-white">
                  {f.title}
                </div>
                <div className="mt-1 text-sm font-semibold" style={{ color: f.color }}>
                  {f.subtitle}
                </div>
                <p className="mt-3 text-sm leading-6 text-atlas-text-secondary">
                  {f.copy}
                </p>
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${f.color}14 0%, transparent 60%)`,
                  }}
                />
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured projects */}
      <section className="py-16">
        <Container>
          <SectionHeader
            badge="PROJECTS"
            title={
              <>
                Explore what we’ve <GradientText>built</GradientText>
              </>
            }
            subtitle="A selection of production-grade platforms spanning multiple domains."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projectList.slice(0, 6).map((p) => (
              <Link key={p.id} href={`/projects/${p.id}`} className="group block">
                <Card className="relative h-full overflow-hidden p-6 transition hover:-translate-y-1 hover:border-white/20">
                  <div
                    className="absolute inset-x-0 top-0 h-[2px] opacity-70"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${p.color}, transparent)`,
                    }}
                  />
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="grid h-12 w-12 place-items-center rounded-2xl border"
                      style={{
                        borderColor: `${p.color}33`,
                        backgroundColor: `${p.color}1A`,
                      }}
                    >
                      <span className="text-xl">{p.icon}</span>
                    </div>
                    <div
                      className="rounded-full border px-3 py-1 text-[11px] font-semibold"
                      style={{
                        borderColor: `${p.color}33`,
                        backgroundColor: `${p.color}12`,
                        color: p.color,
                      }}
                    >
                      {p.status}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="text-lg font-bold tracking-tight text-white">
                      {p.name}
                    </div>
                    <div className="mt-1 text-xs font-semibold" style={{ color: p.color }}>
                      {p.category}
                    </div>
                    <p className="mt-3 text-sm leading-6 text-atlas-text-secondary">
                      {p.tagline}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-atlas-border px-2.5 py-1 text-[12px] font-medium text-atlas-text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${p.color}14 0%, transparent 60%)`,
                    }}
                  />
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button href="/projects" variant="secondary">
              View all projects
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-atlas-bg-secondary py-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/12 blur-[90px]" />
        </div>
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ready to build the <GradientText>future</GradientText>?
            </h2>
            <p className="mt-3 text-base leading-7 text-atlas-text-secondary">
              Join the private beta and be among the first to automate your engineering software development.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/contact" variant="primary">
                Request access
              </Button>
              <Button href="/about" variant="secondary">
                Learn about ATLAS
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}
