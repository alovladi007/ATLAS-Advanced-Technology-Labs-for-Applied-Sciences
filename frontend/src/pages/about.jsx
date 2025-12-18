import { motion } from "framer-motion";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { GradientText } from "../components/GradientText";
import { SiteLayout } from "../components/SiteLayout";

const divisions = [
  {
    name: "ElectroAI",
    icon: "⚡",
    focus: "Semiconductor & Electronics",
    description:
      "AI for process optimization, yield prediction, SPC analytics, and predictive maintenance.",
    color: "#8b5cf6",
  },
  {
    name: "PhotonAI",
    icon: "💡",
    focus: "Photonics & Optoelectronics",
    description:
      "Simulation orchestration, waveguide optimization, inverse design, and layout generation.",
    color: "#00d4ff",
  },
  {
    name: "BioAI",
    icon: "🧬",
    focus: "Biomedical & Life Sciences",
    description:
      "Biosignal analysis, discovery pipelines, and clinical decision support with compliance-ready architecture.",
    color: "#10b981",
  },
  {
    name: "NanoAI",
    icon: "⚛️",
    focus: "Materials Science & Nanotechnology",
    description:
      "Multi-scale simulations, ML property prediction, and AI-driven materials discovery campaigns.",
    color: "#f59e0b",
  },
  {
    name: "DefenseAI",
    icon: "🛡️",
    focus: "Defense & Autonomous Systems",
    description:
      "Sensor fusion, GPS-denied navigation, and autonomy workflows engineered for reliability.",
    color: "#ec4899",
  },
];

const timeline = [
  {
    year: "2022",
    event: "ATLAS founded",
    description: "Research lab established to build AI-powered automation platforms.",
  },
  {
    year: "2023",
    event: "First platforms ship",
    description: "Foundational work across geophysics + semiconductor analytics.",
  },
  {
    year: "2024",
    event: "Multi-domain expansion",
    description: "Broader coverage: underwater navigation, materials, and biomedical pipelines.",
  },
  {
    year: "2025",
    event: "ATLAS 2.0",
    description: "Unified product layer across all divisions with shared infrastructure.",
  },
];

const techStack = [
  { category: "AI Core", items: ["LangGraph", "CrewAI", "LLM toolchains"], color: "#00d4ff" },
  { category: "Backend", items: ["NestJS", "FastAPI", "PostgreSQL", "Redis"], color: "#8b5cf6" },
  { category: "Frontend", items: ["Next.js", "React", "TailwindCSS", "Three.js"], color: "#ec4899" },
  { category: "ML", items: ["PyTorch", "JAX", "Triton", "MLflow"], color: "#10b981" },
  { category: "DevOps", items: ["Docker", "Kubernetes", "Terraform", "CI/CD"], color: "#f59e0b" },
];

export default function AboutPage() {
  return (
    <SiteLayout
      title="About — ATLAS"
      description="Advanced Technology Labs for Applied Sciences. AI-orchestrated automation for domain-specific platforms."
    >
      {/* Hero */}
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-10 top-10 h-[520px] w-[520px] rounded-full bg-violet-500/12 blur-[90px]" />
          <div className="absolute right-[-10%] bottom-[-10%] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[100px]" />
        </div>

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-atlas-border bg-white/5 px-4 py-2 text-xs font-semibold text-cyan-300">
              ABOUT ATLAS
            </div>
            <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight sm:text-6xl">
              Building the <GradientText>intelligence</GradientText> that builds the future
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-atlas-text-secondary sm:text-lg">
              ATLAS is an AI-orchestrated automation ecosystem that designs, builds, and operates domain-specific software — reducing development time and operational cost across advanced engineering sectors.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/projects" variant="primary">
                View projects
              </Button>
              <Button href="/contact" variant="secondary">
                Contact us
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Mission */}
      <section className="bg-atlas-bg-secondary py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-atlas-border bg-white/5 px-4 py-2 text-xs font-semibold text-violet-300">
                OUR MISSION
              </div>
              <h2 className="mt-6 text-balance text-3xl font-extrabold tracking-tight">
                From concept to deployment in <GradientText>hours</GradientText>
              </h2>
              <p className="mt-4 text-base leading-7 text-atlas-text-secondary">
                We translate natural language requirements into production-grade architectures, APIs, and user experiences — with strong foundations in security, observability, and maintainability.
              </p>
              <p className="mt-4 text-base leading-7 text-atlas-text-secondary">
                The result: repeatable, enterprise-ready platforms across multiple research domains.
              </p>
            </div>

            <Card className="p-8">
              <div className="grid grid-cols-2 gap-6">
                {[{
                  value: "90%",
                  label: "Faster development",
                  color: "text-cyan-300",
                },{
                  value: "70%",
                  label: "Cost reduction",
                  color: "text-violet-300",
                },{
                  value: "4h",
                  label: "Avg deploy time",
                  color: "text-emerald-300",
                },{
                  value: "10+",
                  label: "Active platforms",
                  color: "text-pink-300",
                }].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className={["text-4xl font-extrabold tracking-tight", s.color].join(" ")}>{s.value}</div>
                    <div className="mt-1 text-xs font-semibold text-atlas-text-muted">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Divisions */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-atlas-border bg-white/5 px-4 py-2 text-xs font-semibold text-emerald-300">
              RESEARCH DIVISIONS
            </div>
            <h2 className="mt-6 text-balance text-3xl font-extrabold tracking-tight">
              Five specialized <GradientText>divisions</GradientText>
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {divisions.map((d) => (
              <Card
                key={d.name}
                className="group relative overflow-hidden p-6 transition hover:-translate-y-1 hover:border-white/20"
              >
                <div
                  className="absolute inset-x-0 top-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${d.color}, transparent)` }}
                />
                <div
                  className="grid h-12 w-12 place-items-center rounded-2xl border"
                  style={{ borderColor: `${d.color}33`, backgroundColor: `${d.color}1A` }}
                >
                  <span className="text-2xl">{d.icon}</span>
                </div>
                <div className="mt-4 text-lg font-bold tracking-tight text-white">{d.name}</div>
                <div className="mt-1 text-sm font-semibold" style={{ color: d.color }}>
                  {d.focus}
                </div>
                <p className="mt-3 text-sm leading-6 text-atlas-text-secondary">{d.description}</p>
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${d.color}14 0%, transparent 60%)` }}
                />
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="bg-atlas-bg-secondary py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-atlas-border bg-white/5 px-4 py-2 text-xs font-semibold text-cyan-300">
              OUR JOURNEY
            </div>
            <h2 className="mt-6 text-balance text-3xl font-extrabold tracking-tight">
              Timeline of <GradientText>innovation</GradientText>
            </h2>
          </div>

          <div className="mt-10 grid gap-4">
            {timeline.map((t) => (
              <Card key={t.year + t.event} className="p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-atlas-text-muted">
                      {t.year}
                    </div>
                    <div className="mt-1 text-lg font-bold text-white">{t.event}</div>
                    <p className="mt-2 text-sm leading-6 text-atlas-text-secondary">
                      {t.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Tech stack */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-atlas-border bg-white/5 px-4 py-2 text-xs font-semibold text-pink-300">
              TECHNOLOGY STACK
            </div>
            <h2 className="mt-6 text-balance text-3xl font-extrabold tracking-tight">
              Built with <GradientText>cutting-edge</GradientText> tech
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {techStack.map((s) => (
              <Card key={s.category} className="p-6">
                <div className="text-sm font-bold" style={{ color: s.color }}>
                  {s.category}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <span
                      key={i}
                      className="rounded-lg border border-atlas-border bg-white/[0.03] px-3 py-2 text-sm font-semibold text-atlas-text-secondary"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button href="/contact" variant="primary">
              Talk to us
            </Button>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}
