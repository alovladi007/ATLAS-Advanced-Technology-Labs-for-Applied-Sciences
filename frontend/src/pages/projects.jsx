import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// Design System (shared)
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
      red: '#ef4444',
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

// Project data
const projects = [
  {
    id: 'galileo',
    name: 'GALILEO V2.0',
    fullName: 'Geospatial Analysis Language for Intelligent Learning of Environment and Observations',
    tagline: 'Enterprise-Grade AI-Enhanced Space-Based Geophysical Sensing Platform',
    description: 'A comprehensive, production-ready orbital dynamics, guidance/navigation/control, geophysical inversion, and machine learning platform for autonomous satellite-based gravimetry missions.',
    category: 'Space & Geophysics',
    color: theme.colors.accent.cyan,
    icon: '🛰️',
    features: ['Orbit propagation', 'Formation flying', 'PINN models', 'Bayesian inversion'],
    tech: ['Python', 'JAX', 'FastAPI', 'Next.js', 'PostgreSQL', 'TimescaleDB'],
    status: 'Production',
    github: 'https://github.com/alovladi007/GALILEO-V2.0',
  },
  {
    id: 'aurora-nav',
    name: 'AURORA-NAV',
    fullName: 'Advanced Underwater Remote Operations Research & Autonomous Navigation',
    tagline: 'Multi-Sensor Fusion for GPS-Denied Undersea Navigation',
    description: 'Enterprise-grade simulation platform for autonomous underwater vehicles. Integrates INS, DVL, LBL/USBL acoustic positioning, and EKF sensor fusion.',
    category: 'Maritime & Defense',
    color: theme.colors.accent.violet,
    icon: '🌊',
    features: ['INS/DVL simulation', 'EKF fusion', 'Acoustic modeling', 'Multi-AUV coordination'],
    tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'TensorFlow'],
    status: 'Active',
    github: 'https://github.com/alovladi007/AURORA-NAV',
  },
  {
    id: 'brainiac',
    name: 'BRAINIAC',
    fullName: 'Bionic Research Analytics using Intelligent Neuro-Architectural Computing',
    tagline: 'Brain Connectivity Mapping with Graph Neural Networks',
    description: 'Research platform for analyzing brain connectivity using GNNs. Enables exploration of connectivity patterns, modules, and brain subtypes.',
    category: 'Neuroscience',
    color: theme.colors.accent.emerald,
    icon: '🧠',
    features: ['Multi-modal imaging', 'GCN/GAT/GraphSAGE', 'Graph autoencoders', '3D visualization'],
    tech: ['Python', 'PyTorch', 'PyTorch Geometric', 'FastAPI', 'PostgreSQL'],
    status: 'Research',
    github: 'https://github.com/alovladi007/BRAINIAC',
  },
  {
    id: 'biopharma',
    name: 'P.R.O.M.E.T.H.E.U.S.',
    fullName: 'Precision Research and Oncology Machine-learning Engine for Therapeutics',
    tagline: 'AI-Powered Pharmaceutical Research Platform',
    description: 'Comprehensive AI-driven platform for drug development, from molecular design to clinical trials. Integrates drug design, repurposing, and safety modules.',
    category: 'Biomedical',
    color: theme.colors.accent.magenta,
    icon: '💊',
    features: ['De novo generation', 'SAR prediction', 'Trial optimization', 'ADMET prediction'],
    tech: ['Python', 'PyTorch', 'RDKit', 'FastAPI', 'Next.js', 'PostgreSQL'],
    status: 'Active',
    github: 'https://github.com/alovladi007/BioPharma-LLM',
  },
  {
    id: 'orion',
    name: 'O.R.I.O.N.',
    fullName: 'Optimized Research & Innovation for Organized Nanomaterials',
    tagline: 'Computational Materials Research Operating System',
    description: 'Modular platform integrating multi-scale simulations (DFT, MD), ML property predictions, and automated AI-driven materials discovery campaigns.',
    category: 'Materials Science',
    color: theme.colors.accent.amber,
    icon: '⚛️',
    features: ['DFT calculations', 'MD simulations', 'GNN predictions', 'Bayesian optimization'],
    tech: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'Redis', 'Celery'],
    status: 'Active',
    github: 'https://github.com/alovladi007/O.R.I.O.N-LLM-Research-Platform',
  },
  {
    id: 'spectra',
    name: 'SPECTRA-Lab',
    fullName: 'Semiconductor Process Engineering Characterization & Testing Research Analytics',
    tagline: 'Enterprise Semiconductor Characterization Platform',
    description: 'Enterprise-grade semiconductor characterization with electrical, optical, structural capabilities. Includes LIMS/ELN, SPC analytics, and ML optimization.',
    category: 'Semiconductor',
    color: theme.colors.accent.cyan,
    icon: '🔬',
    features: ['Process modules', 'Real-time telemetry', 'SPC dashboards', 'Predictive maintenance'],
    tech: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'Redis', 'WebSocket'],
    status: 'Production',
    github: 'https://github.com/alovladi007/SPECTRA-Lab',
  },
  {
    id: 'sage',
    name: 'SAGE.AI',
    fullName: 'Scientific Academic Governance & Ethics AI',
    tagline: 'ML-Powered Academic Integrity Platform',
    description: 'Comprehensive system to detect plagiarism, data fabrication, and academic misconduct across research papers and theses.',
    category: 'Academic',
    color: theme.colors.accent.violet,
    icon: '📚',
    features: ['Plagiarism detection', 'Statistical anomaly', 'Image forensics', 'Citation analysis'],
    tech: ['Python', 'FastAPI', 'React', 'Elasticsearch', 'PostgreSQL', 'Ray'],
    status: 'Active',
    github: 'https://github.com/alovladi007/SAGE.AI',
  },
  {
    id: 'veritas',
    name: 'Veritas Medical',
    fullName: 'Veritas Medical Intelligence Systems',
    tagline: 'AI-Powered Medical Diagnostics Platform',
    description: 'Advanced medical AI for diagnostic imaging, clinical decision support, and healthcare workflow optimization. HIPAA-compliant architecture.',
    category: 'Healthcare',
    color: theme.colors.accent.emerald,
    icon: '🏥',
    features: ['Medical imaging', 'Clinical decision', 'EHR integration', 'Audit trails'],
    tech: ['Python', 'PyTorch', 'FastAPI', 'PostgreSQL', 'DICOM'],
    status: 'Beta',
    github: 'https://github.com/alovladi007/Veritas-Medical-Systems',
  },
  {
    id: 'synapse',
    name: 'Synapse Medical AI',
    fullName: 'Synapse Neural Network Medical Analytics Platform',
    tagline: 'Real-Time Medical AI Infrastructure',
    description: 'Enterprise medical AI infrastructure for real-time inference, model deployment, and clinical workflow integration.',
    category: 'Healthcare',
    color: theme.colors.accent.magenta,
    icon: '⚕️',
    features: ['Real-time inference', 'Model versioning', 'FHIR support', 'A/B testing'],
    tech: ['Python', 'FastAPI', 'Triton', 'PostgreSQL', 'Kubernetes'],
    status: 'Private',
    github: null,
  },
  {
    id: 'patent',
    name: 'Patent Filing Platform',
    fullName: 'AI-Assisted Patent Filing & Analysis Platform',
    tagline: 'Streamlined Intellectual Property Management',
    description: 'AI-powered platform for patent drafting, prior art search, claim analysis, and prosecution workflow management.',
    category: 'Legal Tech',
    color: theme.colors.accent.amber,
    icon: '📜',
    features: ['AI drafting', 'Prior art search', 'Claim analysis', 'USPTO integration'],
    tech: ['TypeScript', 'Next.js', 'Python', 'PostgreSQL', 'OpenAI'],
    status: 'Private',
    github: null,
  },
];

const categories = ['All', 'Space & Geophysics', 'Maritime & Defense', 'Neuroscience', 'Biomedical', 'Materials Science', 'Semiconductor', 'Academic', 'Healthcare', 'Legal Tech'];

// Gradient Text Component
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
            { name: 'Projects', href: '/projects', active: true },
            { name: 'About', href: '/about' },
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

// Project Card
function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const statusColors = {
    Production: theme.colors.accent.emerald,
    Active: theme.colors.accent.cyan,
    Research: theme.colors.accent.violet,
    Beta: theme.colors.accent.amber,
    Private: theme.colors.text.muted,
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link href={`/projects/${project.id}`} style={{ textDecoration: 'none' }}>
        <motion.div
          whileHover={{ y: -8, borderColor: `${project.color}40` }}
          transition={{ duration: 0.3 }}
          style={{
            height: '100%',
            padding: '28px',
            background: theme.colors.glass,
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            border: `1px solid ${theme.colors.border}`,
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Top Gradient Line */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
            opacity: 0.6,
          }} />

          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '14px',
              background: `${project.color}15`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '26px',
            }}>
              {project.icon}
            </div>
            <span style={{
              padding: '6px 12px',
              borderRadius: '100px',
              fontSize: '11px',
              fontWeight: 600,
              background: `${statusColors[project.status]}15`,
              color: statusColors[project.status],
              border: `1px solid ${statusColors[project.status]}30`,
            }}>
              {project.status}
            </span>
          </div>

          {/* Title */}
          <h3 style={{
            fontSize: '20px',
            fontWeight: 700,
            color: theme.colors.text.primary,
            marginBottom: '4px',
          }}>{project.name}</h3>

          <p style={{
            fontSize: '12px',
            color: project.color,
            marginBottom: '12px',
            fontWeight: 500,
          }}>{project.category}</p>

          {/* Tagline */}
          <p style={{
            fontSize: '14px',
            color: theme.colors.text.secondary,
            lineHeight: 1.5,
            marginBottom: '20px',
            flex: 1,
          }}>{project.tagline}</p>

          {/* Features */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
            {project.features.slice(0, 3).map((feature) => (
              <span key={feature} style={{
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '11px',
                color: theme.colors.text.muted,
                background: theme.colors.bg.elevated,
              }}>
                {feature}
              </span>
            ))}
            {project.features.length > 3 && (
              <span style={{
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '11px',
                color: theme.colors.text.muted,
                background: theme.colors.bg.elevated,
              }}>
                +{project.features.length - 3}
              </span>
            )}
          </div>

          {/* Tech Stack */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {project.tech.slice(0, 4).map((tech) => (
              <span key={tech} style={{
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: 500,
                color: theme.colors.text.secondary,
                border: `1px solid ${theme.colors.border}`,
              }}>
                {tech}
              </span>
            ))}
          </div>

          {/* Hover Glow */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(circle at 50% 0%, ${project.color}08 0%, transparent 60%)`,
              pointerEvents: 'none',
            }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}

// Filter Button
function FilterButton({ category, isActive, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      style={{
        padding: '8px 18px',
        borderRadius: '100px',
        fontSize: '13px',
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'all 0.2s',
        background: isActive ? theme.gradients.primary : 'transparent',
        color: isActive ? 'white' : theme.colors.text.secondary,
        border: isActive ? 'none' : `1px solid ${theme.colors.border}`,
      }}
    >
      {category}
    </motion.button>
  );
}

// Main Projects Page
export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
        input::placeholder { color: ${theme.colors.text.muted}; }
      `}</style>

      <Navigation />

      {/* Hero */}
      <section style={{
        padding: '180px 24px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background Glow */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80vw',
          height: '50vw',
          maxWidth: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 60%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ position: 'relative', zIndex: 1 }}
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
          }}>
            {projects.length} PROJECTS
          </span>

          <h1 style={{
            fontSize: 'clamp(40px, 8vw, 64px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            marginBottom: '20px',
          }}>
            Our <GradientText>Projects</GradientText>
          </h1>

          <p style={{
            fontSize: '18px',
            color: theme.colors.text.secondary,
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: 1.6,
          }}>
            Cutting-edge AI platforms spanning space, defense, biomedical,
            materials science, and beyond.
          </p>

          {/* Search */}
          <div style={{
            maxWidth: '480px',
            margin: '0 auto 32px',
            position: 'relative',
          }}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke={theme.colors.text.muted}
              strokeWidth="2"
              style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            >
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '16px 20px 16px 48px',
                background: theme.colors.glass,
                backdropFilter: 'blur(20px)',
                border: `1px solid ${theme.colors.border}`,
                borderRadius: '14px',
                color: theme.colors.text.primary,
                fontSize: '15px',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => e.target.style.borderColor = theme.colors.accent.violet}
              onBlur={e => e.target.style.borderColor = theme.colors.border}
            />
          </div>

          {/* Category Filters */}
          <div style={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            maxWidth: '900px',
            margin: '0 auto',
          }}>
            {categories.map(cat => (
              <FilterButton
                key={cat}
                category={cat}
                isActive={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section style={{
        padding: '20px 24px 100px',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchQuery}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
              gap: '24px',
            }}
          >
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              textAlign: 'center',
              padding: '80px 20px',
            }}
          >
            <p style={{ fontSize: '18px', color: theme.colors.text.secondary, marginBottom: '20px' }}>
              No projects found matching your criteria.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              style={{
                padding: '12px 24px',
                background: theme.gradients.primary,
                border: 'none',
                borderRadius: '10px',
                color: 'white',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Clear Filters
            </motion.button>
          </motion.div>
        )}
      </section>

      {/* Stats */}
      <section style={{
        padding: '80px 24px',
        background: theme.colors.bg.secondary,
        borderTop: `1px solid ${theme.colors.border}`,
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
        }}>
          {[
            { value: '10+', label: 'Active Projects', color: theme.colors.accent.cyan },
            { value: '500K+', label: 'Lines of Code', color: theme.colors.accent.violet },
            { value: '6', label: 'Research Domains', color: theme.colors.accent.emerald },
            { value: '99.9%', label: 'System Uptime', color: theme.colors.accent.magenta },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
