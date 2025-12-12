import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

// Design System
const theme = {
  colors: {
    bg: {
      primary: '#000000',
      secondary: '#0a0a0a',
      tertiary: '#111111',
      elevated: '#1a1a1a',
    },
    accent: {
      cyan: '#00d4ff',
      violet: '#8b5cf6',
      magenta: '#ec4899',
      emerald: '#10b981',
      amber: '#f59e0b',
    },
    text: {
      primary: '#ffffff',
      secondary: '#a1a1aa',
      muted: '#71717a',
    },
    border: 'rgba(255, 255, 255, 0.08)',
    glass: 'rgba(255, 255, 255, 0.03)',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #00d4ff 0%, #8b5cf6 50%, #ec4899 100%)',
  },
};

// Research Divisions
const divisions = [
  {
    name: 'ElectroAI',
    icon: '⚡',
    color: theme.colors.accent.violet,
    focus: 'Semiconductor & Electronics',
    description: 'AI for semiconductor process optimization, yield prediction, SPC analytics, and predictive maintenance.',
    projects: ['SPECTRA-Lab', 'GALILEO V2.0'],
  },
  {
    name: 'PhotonAI',
    icon: '💡',
    color: theme.colors.accent.cyan,
    focus: 'Photonics & Optoelectronics',
    description: 'AI-driven photonic design, FDTD simulation orchestration, waveguide optimization, and inverse design.',
    projects: ['GALILEO V2.0', 'O.R.I.O.N.'],
  },
  {
    name: 'BioAI',
    icon: '🧬',
    color: theme.colors.accent.emerald,
    focus: 'Biomedical & Life Sciences',
    description: 'HIPAA-compliant biosignal analysis, drug discovery, brain mapping, and clinical decision support.',
    projects: ['BRAINIAC', 'P.R.O.M.E.T.H.E.U.S.', 'Veritas Medical'],
  },
  {
    name: 'NanoAI',
    icon: '⚛️',
    color: theme.colors.accent.amber,
    focus: 'Materials Science & Nanotechnology',
    description: 'Computational materials research, multi-scale simulations, and AI-driven materials discovery.',
    projects: ['O.R.I.O.N.', 'SPECTRA-Lab'],
  },
  {
    name: 'DefenseAI',
    icon: '🛡️',
    color: theme.colors.accent.magenta,
    focus: 'Defense & Autonomous Systems',
    description: 'GPS-denied navigation, sensor fusion, underwater communications, and autonomous intelligence.',
    projects: ['AURORA-NAV', 'GALILEO V2.0'],
  },
];

// Timeline
const timeline = [
  { year: '2022', event: 'ATLAS Founded', description: 'Research lab established with focus on AI-powered automation.' },
  { year: '2023', event: 'GALILEO V1.0', description: 'First space-based geophysical sensing platform deployed.' },
  { year: '2023', event: 'SPECTRA-Lab Beta', description: 'Semiconductor characterization platform enters beta.' },
  { year: '2024', event: 'AURORA-NAV', description: 'Multi-sensor fusion platform for underwater navigation.' },
  { year: '2024', event: 'BioPharma Suite', description: 'BRAINIAC and P.R.O.M.E.T.H.E.U.S. platforms released.' },
  { year: '2025', event: 'ATLAS 2.0', description: 'Unified platform integrating all research divisions.' },
];

// Tech Stack
const techStack = [
  { category: 'AI Core', items: ['Claude', 'GPT-4', 'LangGraph', 'CrewAI'], color: theme.colors.accent.cyan },
  { category: 'Backend', items: ['NestJS', 'FastAPI', 'PostgreSQL', 'Redis'], color: theme.colors.accent.violet },
  { category: 'Frontend', items: ['Next.js', 'React', 'TailwindCSS', 'Three.js'], color: theme.colors.accent.magenta },
  { category: 'ML/AI', items: ['PyTorch', 'JAX', 'MLflow', 'Triton'], color: theme.colors.accent.emerald },
  { category: 'DevOps', items: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'], color: theme.colors.accent.amber },
  { category: 'Data', items: ['MinIO', 'pgvector', 'TimescaleDB', 'Elasticsearch'], color: theme.colors.accent.cyan },
];

// Gradient Text
function GradientText({ children }) {
  return (
    <span style={{
      background: theme.gradients.primary,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}>
      {children}
    </span>
  );
}

// Navigation
function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '16px 24px',
      }}
    >
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 24px',
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(20px)',
        borderRadius: '16px',
        border: `1px solid ${theme.colors.border}`,
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: theme.gradients.primary,
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2"/>
              <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2"/>
              <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2"/>
            </svg>
          </div>
          <span style={{ fontSize: '20px', fontWeight: 700, color: theme.colors.text.primary }}>ATLAS</span>
        </Link>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {[
            { name: 'Projects', href: '/projects' },
            { name: 'About', href: '/about', active: true },
            { name: 'Contact', href: '/contact' },
          ].map((item) => (
            <Link key={item.name} href={item.href} style={{ textDecoration: 'none' }}>
              <div style={{
                padding: '10px 16px',
                borderRadius: '10px',
                color: item.active ? theme.colors.text.primary : theme.colors.text.secondary,
                fontSize: '14px',
                fontWeight: item.active ? 600 : 500,
                background: item.active ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
              }}>
                {item.name}
              </div>
            </Link>
          ))}
          <Link href="/contact" style={{ textDecoration: 'none', marginLeft: '8px' }}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '10px 20px',
                background: theme.colors.text.primary,
                color: theme.colors.bg.primary,
                border: 'none',
                borderRadius: '10px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}

// Division Card
function DivisionCard({ division, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      style={{
        padding: '32px',
        background: theme.colors.glass,
        backdropFilter: 'blur(20px)',
        borderRadius: '20px',
        border: `1px solid ${theme.colors.border}`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: `linear-gradient(90deg, transparent, ${division.color}, transparent)`,
      }} />

      <div style={{
        width: '56px',
        height: '56px',
        borderRadius: '14px',
        background: `${division.color}15`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '28px',
        marginBottom: '20px',
      }}>
        {division.icon}
      </div>

      <h3 style={{
        fontSize: '22px',
        fontWeight: 700,
        color: division.color,
        marginBottom: '4px',
      }}>{division.name}</h3>

      <p style={{
        fontSize: '13px',
        color: theme.colors.text.muted,
        marginBottom: '12px',
      }}>{division.focus}</p>

      <p style={{
        fontSize: '14px',
        color: theme.colors.text.secondary,
        lineHeight: 1.6,
        marginBottom: '20px',
      }}>{division.description}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {division.projects.map(proj => (
          <span key={proj} style={{
            padding: '6px 12px',
            background: `${division.color}15`,
            color: division.color,
            borderRadius: '100px',
            fontSize: '12px',
            fontWeight: 500,
          }}>
            {proj}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

// Timeline Item
function TimelineItem({ item, index, isLast }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        display: 'flex',
        justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
        paddingBottom: isLast ? 0 : '48px',
        position: 'relative',
      }}
    >
      <div style={{
        width: '45%',
        padding: '24px',
        background: theme.colors.glass,
        backdropFilter: 'blur(20px)',
        borderRadius: '16px',
        border: `1px solid ${theme.colors.border}`,
      }}>
        <span style={{
          display: 'inline-block',
          padding: '4px 12px',
          background: `${theme.colors.accent.violet}20`,
          color: theme.colors.accent.violet,
          borderRadius: '100px',
          fontSize: '12px',
          fontWeight: 700,
          marginBottom: '12px',
        }}>
          {item.year}
        </span>
        <h4 style={{
          fontSize: '18px',
          fontWeight: 700,
          color: theme.colors.text.primary,
          marginBottom: '8px',
        }}>{item.event}</h4>
        <p style={{
          fontSize: '14px',
          color: theme.colors.text.secondary,
          lineHeight: 1.5,
        }}>{item.description}</p>
      </div>

      {/* Center dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
        style={{
          position: 'absolute',
          left: '50%',
          top: '24px',
          width: '16px',
          height: '16px',
          background: theme.colors.accent.cyan,
          borderRadius: '50%',
          transform: 'translateX(-50%)',
          boxShadow: `0 0 20px ${theme.colors.accent.cyan}`,
        }}
      />
    </motion.div>
  );
}

// Tech Stack Card
function TechCard({ stack, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      style={{
        padding: '24px',
        background: theme.colors.glass,
        borderRadius: '16px',
        border: `1px solid ${stack.color}20`,
      }}
    >
      <h4 style={{
        fontSize: '16px',
        fontWeight: 700,
        color: stack.color,
        marginBottom: '16px',
      }}>{stack.category}</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {stack.items.map(item => (
          <span key={item} style={{
            padding: '8px 14px',
            background: `${stack.color}10`,
            color: theme.colors.text.secondary,
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: 500,
          }}>
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

// Main About Page
export default function AboutPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
      background: theme.colors.bg.primary,
      minHeight: '100vh',
      color: theme.colors.text.primary,
    }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::selection { background: rgba(139, 92, 246, 0.4); }
        body { overflow-x: hidden; }
      `}</style>

      <Navigation />

      {/* Hero */}
      <section ref={heroRef} style={{
        position: 'relative',
        padding: '180px 24px 120px',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        {/* Background Effects */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '20%',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 60%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '40vw',
          height: '40vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 60%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }} />

        <motion.div style={{ y, opacity, position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span style={{
              display: 'inline-block',
              padding: '8px 16px',
              background: theme.colors.glass,
              borderRadius: '100px',
              border: `1px solid ${theme.colors.border}`,
              fontSize: '13px',
              color: theme.colors.accent.cyan,
              fontWeight: 600,
              marginBottom: '24px',
            }}>ABOUT ATLAS</span>

            <h1 style={{
              fontSize: 'clamp(40px, 8vw, 72px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginBottom: '24px',
            }}>
              Building the <GradientText>Intelligence</GradientText>
              <br />that Builds the Future
            </h1>

            <p style={{
              fontSize: '20px',
              color: theme.colors.text.secondary,
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}>
              <strong style={{ color: theme.colors.text.primary }}>Advanced Technology Labs for Applied Sciences</strong>
              <br />
              AI-orchestrated automation for domain-specific software platforms.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section style={{
        padding: '120px 24px',
        background: theme.colors.bg.secondary,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
          }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span style={{
                display: 'inline-block',
                padding: '8px 16px',
                background: theme.colors.glass,
                borderRadius: '100px',
                border: `1px solid ${theme.colors.border}`,
                fontSize: '13px',
                color: theme.colors.accent.violet,
                fontWeight: 600,
                marginBottom: '24px',
              }}>OUR MISSION</span>

              <h2 style={{
                fontSize: '40px',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                marginBottom: '24px',
              }}>
                From concept to deployment in <GradientText>hours</GradientText>
              </h2>

              <p style={{
                fontSize: '17px',
                color: theme.colors.text.secondary,
                lineHeight: 1.8,
                marginBottom: '20px',
              }}>
                ATLAS is an AI-orchestrated automation ecosystem that designs, builds, and operates
                domain-specific software platforms — reducing development time and operational cost
                across advanced engineering sectors.
              </p>

              <p style={{
                fontSize: '17px',
                color: theme.colors.text.secondary,
                lineHeight: 1.8,
              }}>
                We transform natural language prompts into production-ready, enterprise-grade software
                using physics-informed neural networks and deep domain expertise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                padding: '48px',
                background: theme.colors.glass,
                backdropFilter: 'blur(20px)',
                borderRadius: '24px',
                border: `1px solid ${theme.colors.border}`,
              }}
            >
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '40px',
              }}>
                {[
                  { value: '90%', label: 'Faster Development', color: theme.colors.accent.cyan },
                  { value: '70%', label: 'Cost Reduction', color: theme.colors.accent.violet },
                  { value: '4hr', label: 'Avg. Deploy Time', color: theme.colors.accent.emerald },
                  { value: '10+', label: 'Active Platforms', color: theme.colors.accent.magenta },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    style={{ textAlign: 'center' }}
                  >
                    <div style={{
                      fontSize: '48px',
                      fontWeight: 800,
                      color: stat.color,
                      letterSpacing: '-0.02em',
                    }}>{stat.value}</div>
                    <div style={{
                      fontSize: '14px',
                      color: theme.colors.text.muted,
                      marginTop: '4px',
                    }}>{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section style={{
        padding: '120px 24px',
        background: theme.colors.bg.primary,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <span style={{
              display: 'inline-block',
              padding: '8px 16px',
              background: theme.colors.glass,
              borderRadius: '100px',
              border: `1px solid ${theme.colors.border}`,
              fontSize: '13px',
              color: theme.colors.accent.emerald,
              fontWeight: 600,
              marginBottom: '24px',
            }}>RESEARCH DIVISIONS</span>

            <h2 style={{
              fontSize: 'clamp(36px, 6vw, 48px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
            }}>
              Five specialized <GradientText>divisions</GradientText>
            </h2>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
          }}>
            {divisions.map((division, i) => (
              <DivisionCard key={division.name} division={division} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section style={{
        padding: '120px 24px',
        background: theme.colors.bg.secondary,
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '80px' }}
          >
            <span style={{
              display: 'inline-block',
              padding: '8px 16px',
              background: theme.colors.glass,
              borderRadius: '100px',
              border: `1px solid ${theme.colors.border}`,
              fontSize: '13px',
              color: theme.colors.accent.cyan,
              fontWeight: 600,
              marginBottom: '24px',
            }}>OUR JOURNEY</span>

            <h2 style={{
              fontSize: 'clamp(36px, 6vw, 48px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
            }}>
              Timeline of <GradientText>innovation</GradientText>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div style={{ position: 'relative' }}>
            {/* Center line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              background: `linear-gradient(180deg, ${theme.colors.accent.cyan}, ${theme.colors.accent.violet})`,
              transform: 'translateX(-50%)',
            }} />

            {timeline.map((item, i) => (
              <TimelineItem
                key={item.year + item.event}
                item={item}
                index={i}
                isLast={i === timeline.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section style={{
        padding: '120px 24px',
        background: theme.colors.bg.primary,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <span style={{
              display: 'inline-block',
              padding: '8px 16px',
              background: theme.colors.glass,
              borderRadius: '100px',
              border: `1px solid ${theme.colors.border}`,
              fontSize: '13px',
              color: theme.colors.accent.magenta,
              fontWeight: 600,
              marginBottom: '24px',
            }}>TECHNOLOGY STACK</span>

            <h2 style={{
              fontSize: 'clamp(36px, 6vw, 48px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
            }}>
              Built with <GradientText>cutting-edge</GradientText> tech
            </h2>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}>
            {techStack.map((stack, i) => (
              <TechCard key={stack.category} stack={stack} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '120px 24px',
        background: theme.colors.bg.secondary,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60vw',
          height: '60vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 60%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ position: 'relative', maxWidth: '700px', margin: '0 auto' }}
        >
          <h2 style={{
            fontSize: 'clamp(36px, 6vw, 52px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '24px',
          }}>
            Ready to <GradientText>build with us</GradientText>?
          </h2>

          <p style={{
            fontSize: '18px',
            color: theme.colors.text.secondary,
            marginBottom: '40px',
            lineHeight: 1.6,
          }}>
            Explore our projects or get in touch to discuss how ATLAS can accelerate your research.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link href="/projects" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: '16px 32px',
                  background: theme.gradients.primary,
                  border: 'none',
                  borderRadius: '12px',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                View Projects
              </motion.button>
            </Link>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: '16px 32px',
                  background: 'transparent',
                  border: `1px solid ${theme.colors.border}`,
                  borderRadius: '12px',
                  color: theme.colors.text.primary,
                  fontSize: '16px',
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px 24px',
        background: theme.colors.bg.primary,
        borderTop: `1px solid ${theme.colors.border}`,
        textAlign: 'center',
      }}>
        <p style={{ fontSize: '13px', color: theme.colors.text.muted }}>
          © 2025 ATLAS - Advanced Technology Labs for Applied Sciences
        </p>
      </footer>
    </div>
  );
}
