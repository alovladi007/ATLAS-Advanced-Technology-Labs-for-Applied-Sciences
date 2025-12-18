import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { GradientText } from "../components/GradientText";
import { SiteLayout } from "../components/SiteLayout";

const faqs = [
  {
    q: "What industries do you serve?",
    a: "We serve advanced engineering sectors including semiconductor manufacturing, photonics, biomedical/pharma, materials science, defense/aerospace, and academic research.",
  },
  {
    q: "How long does a typical project take?",
    a: "With AI-powered automation, many projects go from concept to deployment in 4–48 hours. Complex enterprise integrations may take 1–2 weeks.",
  },
  {
    q: "Do you offer pilot programs?",
    a: "Yes. We offer time-boxed pilots for qualified teams to validate outcomes with real data before scaling.",
  },
  {
    q: "What about data security and compliance?",
    a: "Security-first architecture with optional compliance requirements (e.g., HIPAA-ready designs for healthcare workflows).",
  },
];

function Field({ label, required, children }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-atlas-text-muted">
        {label} {required ? <span className="text-pink-300">*</span> : null}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function inputCls() {
  return "w-full rounded-xl border border-atlas-border bg-black/40 px-4 py-3 text-sm text-white placeholder:text-atlas-text-muted focus:border-violet-400/60 focus:outline-none focus:ring-2 focus:ring-violet-400/20";
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    interest: "General Inquiry",
  });
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = useMemo(() => {
    return (
      formData.name.trim().length > 0 &&
      formData.email.trim().length > 0 &&
      formData.subject.trim().length > 0 &&
      formData.message.trim().length > 0
    );
  }, [formData]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4500);

    // No backend wired yet — keep UX smooth and future-proof.
    // eslint-disable-next-line no-console
    console.log("Contact form submitted", formData);
  };

  return (
    <SiteLayout title="Contact — ATLAS" description="Contact ATLAS to discuss pilots, partnerships, or platform builds.">
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-14 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet-500/12 blur-[90px]" />
        </div>

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="inline-flex items-center rounded-full border border-atlas-border bg-white/5 px-4 py-2 text-xs font-semibold text-pink-300">
              CONTACT
            </div>
            <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight sm:text-6xl">
              Get in <GradientText>touch</GradientText>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-atlas-text-secondary sm:text-lg">
              Have a project in mind? We typically respond within 24 hours.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[{
              icon: "📧",
              title: "Email",
              value: "contact@atlas-labs.io",
              href: "mailto:contact@atlas-labs.io",
            },{
              icon: "🐙",
              title: "GitHub",
              value: "github.com/alovladi007",
              href: "https://github.com/alovladi007",
            },{
              icon: "💬",
              title: "Schedule",
              value: "Book a meeting",
              href: "#",
            },{
              icon: "💼",
              title: "LinkedIn",
              value: "ATLAS Labs",
              href: "#",
            }].map((c) => (
              <a key={c.title} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined} className="group">
                <Card className="flex items-center gap-4 p-5 transition hover:-translate-y-1 hover:border-white/20">
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-lg">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-atlas-text-muted">
                      {c.title}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-white group-hover:text-white">
                      {c.value}
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                Let’s build something <GradientText>amazing</GradientText>
              </h2>
              <p className="mt-4 text-base leading-7 text-atlas-text-secondary">
                Whether you’re integrating AI into engineering workflows, partnering on research initiatives, or exploring investment opportunities — we’ll help accelerate your vision.
              </p>

              <Card className="mt-6 p-6">
                <div className="flex items-center gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 text-xl">
                    ⚡
                  </div>
                  <div>
                    <div className="text-sm font-bold text-emerald-300">Fast response</div>
                    <div className="mt-1 text-sm text-atlas-text-secondary">
                      Typical response time: 4–8 hours
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="mt-6 p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-violet-300">
                  Headquarters
                </div>
                <div className="mt-2 text-lg font-bold text-white">San Francisco</div>
                <div className="mt-1 text-sm text-atlas-text-secondary">
                  548 Market St, Suite 35000
                </div>
                <div className="mt-2 text-sm font-semibold text-cyan-300">PST (UTC-8)</div>
              </Card>
            </div>

            <Card className="p-6">
              <form onSubmit={onSubmit} className="grid gap-5">
                {submitted ? (
                  <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm font-semibold text-emerald-300">
                    ✓ Thanks — we’ll get back to you soon.
                  </div>
                ) : null}

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" required>
                    <input
                      className={inputCls()}
                      name="name"
                      value={formData.name}
                      onChange={onChange}
                      placeholder="John Doe"
                      required
                    />
                  </Field>
                  <Field label="Email" required>
                    <input
                      className={inputCls()}
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={onChange}
                      placeholder="john@company.com"
                      required
                    />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Company">
                    <input
                      className={inputCls()}
                      name="company"
                      value={formData.company}
                      onChange={onChange}
                      placeholder="Your company"
                    />
                  </Field>
                  <Field label="Area of interest">
                    <select
                      className={inputCls()}
                      name="interest"
                      value={formData.interest}
                      onChange={onChange}
                    >
                      {["General Inquiry", "Partnership", "ElectroAI - Semiconductor", "PhotonAI - Photonics", "BioAI - Biomedical", "NanoAI - Materials", "DefenseAI - Autonomous", "Investment", "Careers"].map(
                        (o) => (
                          <option key={o} value={o} className="bg-black">
                            {o}
                          </option>
                        )
                      )}
                    </select>
                  </Field>
                </div>

                <Field label="Subject" required>
                  <input
                    className={inputCls()}
                    name="subject"
                    value={formData.subject}
                    onChange={onChange}
                    placeholder="How can we help?"
                    required
                  />
                </Field>

                <Field label="Message" required>
                  <textarea
                    className={inputCls()}
                    name="message"
                    value={formData.message}
                    onChange={onChange}
                    placeholder="Tell us about your project, requirements, or questions…"
                    rows={6}
                    required
                  />
                </Field>

                <button
                  type="submit"
                  disabled={!canSubmit}
                  className={[
                    "w-full rounded-xl px-5 py-3 text-sm font-bold text-white transition",
                    canSubmit
                      ? "bg-atlas-gradient shadow-glow hover:opacity-95"
                      : "cursor-not-allowed bg-white/10 text-atlas-text-muted",
                  ].join(" ")}
                >
                  Send message
                </button>
              </form>
            </Card>
          </div>
        </Container>
      </section>

      <section className="bg-atlas-bg-secondary py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-atlas-border bg-white/5 px-4 py-2 text-xs font-semibold text-cyan-300">
              FAQ
            </div>
            <h2 className="mt-6 text-balance text-3xl font-extrabold tracking-tight">
              Frequently asked <GradientText>questions</GradientText>
            </h2>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4">
            {faqs.map((f) => (
              <Card key={f.q} className="p-6">
                <div className="text-sm font-bold text-cyan-300">{f.q}</div>
                <p className="mt-2 text-sm leading-6 text-atlas-text-secondary">
                  {f.a}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button href="/projects" variant="secondary">
              Explore projects
            </Button>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}
