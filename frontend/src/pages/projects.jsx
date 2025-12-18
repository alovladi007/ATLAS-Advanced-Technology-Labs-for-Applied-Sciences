import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { GradientText } from "../components/GradientText";
import { SiteLayout } from "../components/SiteLayout";
import { categories, projectList } from "../lib/projects";

function StatusPill({ status }) {
  const cls =
    status === "Production"
      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
      : status === "Active"
        ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
        : status === "Beta"
          ? "border-amber-400/30 bg-amber-400/10 text-amber-300"
          : status === "Research"
            ? "border-violet-400/30 bg-violet-400/10 text-violet-300"
            : "border-white/20 bg-white/5 text-atlas-text-secondary";

  return (
    <span className={["rounded-full border px-3 py-1 text-[11px] font-semibold", cls].join(" ")}>
      {status}
    </span>
  );
}

function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.id}`} className="group block">
      <Card className="relative h-full overflow-hidden p-6 transition hover:-translate-y-1 hover:border-white/20">
        <div
          className="absolute inset-x-0 top-0 h-[2px] opacity-70"
          style={{
            background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
          }}
        />
        <div className="flex items-start justify-between gap-4">
          <div
            className="grid h-12 w-12 place-items-center rounded-2xl border"
            style={{
              borderColor: `${project.color}33`,
              backgroundColor: `${project.color}1A`,
            }}
          >
            <span className="text-xl">{project.icon}</span>
          </div>
          <StatusPill status={project.status} />
        </div>

        <div className="mt-4">
          <div className="text-lg font-bold tracking-tight text-white">
            {project.name}
          </div>
          <div className="mt-1 text-xs font-semibold" style={{ color: project.color }}>
            {project.category}
          </div>
          <p className="mt-3 text-sm leading-6 text-atlas-text-secondary">
            {project.tagline}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.features.slice(0, 3).map((f) => (
            <span
              key={f}
              className="rounded-md bg-atlas-bg-elevated px-2.5 py-1 text-[11px] text-atlas-text-muted"
            >
              {f}
            </span>
          ))}
          {project.features.length > 3 && (
            <span className="rounded-md bg-atlas-bg-elevated px-2.5 py-1 text-[11px] text-atlas-text-muted">
              +{project.features.length - 3}
            </span>
          )}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((t) => (
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
            background: `radial-gradient(circle at 50% 0%, ${project.color}14 0%, transparent 60%)`,
          }}
        />
      </Card>
    </Link>
  );
}

function FilterButton({ category, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-full px-4 py-2 text-xs font-semibold transition",
        isActive
          ? "bg-atlas-gradient text-white"
          : "border border-atlas-border bg-transparent text-atlas-text-secondary hover:bg-white/5 hover:text-white",
      ].join(" ")}
    >
      {category}
    </button>
  );
}

// Main Projects Page
export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return projectList.filter((p) => {
      const matchesCategory =
        selectedCategory === "All" || p.category === selectedCategory;
      const matchesSearch =
        q.length === 0 ||
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <SiteLayout
      title="Projects — ATLAS"
      description="Explore ATLAS projects across space, defense, biomedical engineering, materials science, and more."
    >
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet-500/15 blur-[80px]" />
          <div className="absolute right-[-10%] top-40 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[90px]" />
        </div>

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-atlas-border bg-white/5 px-4 py-2 text-xs font-semibold text-violet-300">
              {projectList.length} PROJECTS
            </div>

            <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight sm:text-6xl">
              Our <GradientText>Projects</GradientText>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-7 text-atlas-text-secondary sm:text-lg">
              Cutting-edge AI platforms spanning space, defense, biomedical, and
              materials science — engineered for production.
            </p>

            <div className="mx-auto mt-10 max-w-xl">
              <div className="relative">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-atlas-text-muted"
                >
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                  <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" />
                </svg>
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects…"
                  className="w-full rounded-2xl border border-atlas-border bg-white/[0.04] py-4 pl-12 pr-4 text-sm text-white placeholder:text-atlas-text-muted focus:border-violet-400/60 focus:outline-none focus:ring-2 focus:ring-violet-400/20"
                />
              </div>
            </div>

            <div className="mx-auto mt-6 flex max-w-5xl flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <FilterButton
                  key={cat}
                  category={cat}
                  isActive={selectedCategory === cat}
                  onClick={() => setSelectedCategory(cat)}
                />
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
            >
              {filteredProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-base text-atlas-text-secondary">
                No projects found matching your criteria.
              </p>
              <button
                type="button"
                className="mt-6 rounded-xl bg-atlas-gradient px-5 py-3 text-sm font-semibold text-white"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </Container>
      </section>
    </SiteLayout>
  );
}
