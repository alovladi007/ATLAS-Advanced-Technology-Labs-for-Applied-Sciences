import Link from "next/link";
import { useRouter } from "next/router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { GradientText } from "../../components/GradientText";
import { SiteLayout } from "../../components/SiteLayout";
import { projectById } from "../../lib/projects";

function AnimatedIn({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ProjectDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const project = useMemo(() => (id ? projectById[id] : null), [id]);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.6], [0, 80]);

  if (!id || !project) {
    return (
      <SiteLayout title="Project — ATLAS">
        <Container className="py-24">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-6xl">🔍</div>
            <h1 className="mt-6 text-3xl font-extrabold tracking-tight">
              <GradientText>Project not found</GradientText>
            </h1>
            <p className="mt-3 text-base text-atlas-text-secondary">
              The project you’re looking for doesn’t exist or has been moved.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/projects" variant="secondary">
                ← Back to Projects
              </Button>
            </div>
          </div>
        </Container>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout title={`${project.name} — ATLAS`} description={project.tagline}>
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative overflow-hidden py-20"
      >
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -top-24 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full blur-[90px]"
            style={{ background: `${project.color}20` }}
          />
          <div
            className="absolute right-[-10%] top-24 h-[360px] w-[360px] rounded-full blur-[80px]"
            style={{ background: `${project.color}18` }}
          />
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        </div>

        <Container className="relative">
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-atlas-border bg-white/5 px-4 py-2 text-sm text-atlas-text-secondary hover:bg-white/10 hover:text-white"
            >
              <span aria-hidden>←</span> Back to Projects
            </Link>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            <div
              className="grid h-24 w-24 place-items-center rounded-3xl border"
              style={{
                borderColor: `${project.color}33`,
                backgroundColor: `${project.color}1A`,
              }}
            >
              <span className="text-5xl">{project.icon}</span>
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                  <span className="bg-atlas-gradient bg-clip-text text-transparent">
                    {project.name}
                  </span>
                </h1>
                <span
                  className="rounded-full border px-3 py-1 text-xs font-semibold"
                  style={{
                    borderColor: `${project.color}33`,
                    backgroundColor: `${project.color}12`,
                    color: project.color,
                  }}
                >
                  {project.status}
                </span>
              </div>

              <div className="mt-2 text-sm font-semibold" style={{ color: project.color }}>
                {project.category}
              </div>

              <p className="mt-4 max-w-3xl text-base leading-7 text-atlas-text-secondary sm:text-lg">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-atlas-gradient px-5 py-3 text-sm font-semibold text-white shadow-glow hover:opacity-95"
                  >
                    View on GitHub
                    <span aria-hidden>↗</span>
                  </a>
                ) : (
                  <span className="rounded-xl border border-atlas-border bg-white/5 px-5 py-3 text-sm font-semibold text-atlas-text-secondary">
                    Private repository
                  </span>
                )}
                <Button href="/contact" variant="secondary">
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </motion.section>

      <section className="border-y border-atlas-border bg-atlas-bg-secondary py-14">
        <Container>
          <AnimatedIn>
            <div className="text-xs font-semibold uppercase tracking-wider text-atlas-text-muted">
              Technology Stack
            </div>
            <div className="mt-3 text-2xl font-extrabold tracking-tight">
              Built with modern technologies
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-atlas-border bg-white/[0.03] px-3 py-2 text-sm font-semibold text-atlas-text-secondary"
                >
                  {t}
                </span>
              ))}
            </div>
          </AnimatedIn>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <AnimatedIn>
            <div className="text-xs font-semibold uppercase tracking-wider text-atlas-text-muted">
              Capabilities
            </div>
            <div className="mt-3 text-3xl font-extrabold tracking-tight">
              Key features
            </div>
          </AnimatedIn>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {project.features.map((f, idx) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: idx * 0.03 }}
              >
                <Card className="p-5">
                  <div className="flex items-start gap-3">
                    <div
                      className="grid h-9 w-9 flex-none place-items-center rounded-xl border text-xs font-bold"
                      style={{
                        borderColor: `${project.color}33`,
                        backgroundColor: `${project.color}12`,
                        color: project.color,
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <div className="text-sm leading-6 text-white">{f}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-atlas-border bg-atlas-bg-secondary py-16">
        <Container className="text-center">
          <AnimatedIn>
            <div className="mx-auto max-w-2xl">
              <div className="text-6xl">{project.icon}</div>
              <h2 className="mt-6 text-3xl font-extrabold tracking-tight">
                Interested in <GradientText>{project.name}</GradientText>?
              </h2>
              <p className="mt-3 text-base leading-7 text-atlas-text-secondary">
                Get in touch to discuss implementation, licensing, or partnership opportunities.
              </p>
              <div className="mt-8 flex justify-center gap-3">
                <Button href="/contact" variant="primary">
                  Contact us
                </Button>
                <Button href="/projects" variant="secondary">
                  View all projects
                </Button>
              </div>
            </div>
          </AnimatedIn>
        </Container>
      </section>
    </SiteLayout>
  );
}
