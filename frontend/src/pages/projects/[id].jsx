import React, { useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

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
    cyan: 'linear-gradient(135deg, #00d4ff 0%, #00a0cc 100%)',
    violet: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
    magenta: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
    emerald: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    amber: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
  },
};

// Project data
const projects = {
  galileo: {
    id: 'galileo',
    name: 'GALILEO V2.0',
    fullName: 'Geospatial Analysis Language for Intelligent Learning of Environment and Observations',
    tagline: 'Enterprise-Grade AI-Enhanced Space-Based Geophysical Sensing Platform',
    description: 'A comprehensive, production-ready orbital dynamics, guidance/navigation/control, geophysical inversion, and machine learning platform designed for autonomous satellite-based gravimetry missions. GALILEO V2.0 represents the next generation of space-based Earth observation systems, combining advanced orbital mechanics with cutting-edge AI.',
    category: 'Space & Geophysics',
    color: theme.colors.accent.cyan,
    gradient: theme.gradients.cyan,
    icon: '🛰️',
    features: [
      'High-precision orbit propagation with J2-J6 perturbations',
      'Formation flying dynamics (Hill-Clohessy-Wiltshire equations)',
      'Physics-Informed Neural Networks (PINN) for gravity field recovery',
      'Tikhonov and Bayesian inversion algorithms',
      'Mission trade analysis with Pareto optimization',
      'CesiumJS 3D Earth visualization',
      'Real-time telemetry streaming',
      'Multi-satellite constellation management',
    ],
    tech: ['Python', 'JAX', 'FastAPI', 'Next.js', 'PostgreSQL', 'TimescaleDB', 'CesiumJS', 'Redis'],
    status: 'Production Ready',
    github: 'https://github.com/alovladi007/GALILEO-V2.0',
    architecture: [
      { name: 'Orbit Propagation Engine', desc: 'High-fidelity Cowell propagator with perturbation models', icon: '🌍' },
      { name: 'Gravity Inversion Module', desc: 'Spherical harmonic analysis and regularization', icon: '🧮' },
      { name: 'ML Inference Server', desc: 'JAX-based PINN models for gravity field recovery', icon: '🤖' },
      { name: 'Mission Planning', desc: 'Multi-objective optimization for mission design', icon: '📊' },
    ],
    metrics: [
      { label: 'Orbit Accuracy', value: '< 1cm', icon: '🎯' },
      { label: 'Processing Speed', value: '10k TPS', icon: '⚡' },
      { label: 'Uptime', value: '99.99%', icon: '📈' },
      { label: 'Satellites', value: '100+', icon: '🛰️' },
    ],
  },
  'aurora-nav': {
    id: 'aurora-nav',
    name: 'AURORA-NAV',
    fullName: 'Advanced Underwater Remote Operations Research & Autonomous Navigation',
    tagline: 'Multi-Sensor Fusion Simulation Suite for GPS-Denied Undersea Navigation',
    description: 'Enterprise-grade simulation and analysis platform for autonomous underwater vehicles operating in GPS-denied environments. Integrates INS, DVL, LBL/USBL acoustic positioning, terrain-aided navigation, and advanced EKF sensor fusion algorithms.',
    category: 'Maritime & Defense',
    color: theme.colors.accent.violet,
    gradient: theme.gradients.violet,
    icon: '🌊',
    features: [
      'INS (Inertial Navigation System) simulation',
      'DVL (Doppler Velocity Log) modeling',
      'LBL/USBL acoustic positioning',
      'Extended Kalman Filter sensor fusion',
      'Underwater acoustic channel modeling',
      'OFDM, DSSS, FHSS communication protocols',
      'Machine learning error correction',
      'Multi-AUV network coordination',
    ],
    tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'TensorFlow', 'Redis', 'WebSocket'],
    status: 'Active Development',
    github: 'https://github.com/alovladi007/AURORA-NAV',
    architecture: [
      { name: 'Sensor Simulation', desc: 'High-fidelity INS, DVL, acoustic sensor models', icon: '📡' },
      { name: 'Fusion Engine', desc: 'Extended Kalman Filter with adaptive tuning', icon: '🔄' },
      { name: 'Acoustic Modem', desc: 'Underwater communication channel simulation', icon: '🔊' },
      { name: 'Navigation Planner', desc: 'Path planning with terrain-aided corrections', icon: '🗺️' },
    ],
    metrics: [
      { label: 'Position Error', value: '< 0.1%', icon: '🎯' },
      { label: 'Depth Range', value: '6000m', icon: '🌊' },
      { label: 'Update Rate', value: '100 Hz', icon: '⚡' },
      { label: 'AUVs Supported', value: '50+', icon: '🤖' },
    ],
  },
  brainiac: {
    id: 'brainiac',
    name: 'BRAINIAC',
    fullName: 'Bionic Research Analytics using Intelligent Neuro-Architectural Computing',
    tagline: 'Brain Connectivity Mapping with Graph Neural Networks',
    description: 'A research platform for analyzing brain connectivity using machine learning and graph neural networks. BRAINIAC enables neuroscience researchers to explore connectivity patterns, modules, and brain subtypes using advanced graph-based deep learning techniques.',
    category: 'Neuroscience & AI',
    color: theme.colors.accent.emerald,
    gradient: theme.gradients.emerald,
    icon: '🧠',
    features: [
      'Multi-modal brain imaging support (fMRI, DTI, EEG)',
      'GCN, GAT, GraphSAGE implementations',
      'Graph autoencoders for pattern discovery',
      'Brain subtype clustering and classification',
      '2D/3D graph visualizations',
      'UMAP embedding projections',
      'Cohort comparison analysis',
      'Export to standard neuroimaging formats',
    ],
    tech: ['Python', 'PyTorch', 'PyTorch Geometric', 'FastAPI', 'PostgreSQL', 'NetworkX', 'Plotly'],
    status: 'Research Active',
    github: 'https://github.com/alovladi007/BRAINIAC',
    architecture: [
      { name: 'Graph Construction', desc: 'Build brain networks from imaging data', icon: '🔗' },
      { name: 'GNN Models', desc: 'Multiple graph neural network architectures', icon: '🧬' },
      { name: 'Analysis Pipeline', desc: 'Automated connectivity analysis workflows', icon: '⚙️' },
      { name: 'Visualization', desc: 'Interactive 3D brain network rendering', icon: '🎨' },
    ],
    metrics: [
      { label: 'Accuracy', value: '97.2%', icon: '🎯' },
      { label: 'ROI Support', value: '400+', icon: '🧠' },
      { label: 'Processing', value: '< 2min', icon: '⚡' },
      { label: 'Studies', value: '1000+', icon: '📊' },
    ],
  },
  biopharma: {
    id: 'biopharma',
    name: 'P.R.O.M.E.T.H.E.U.S.',
    fullName: 'Precision Research and Oncology Machine-learning Engine for Therapeutics, Health, Exploration, Understanding, and Science',
    tagline: 'AI-Powered Pharmaceutical Research Platform',
    description: 'Comprehensive AI-driven platform supporting researchers through all key stages of drug development, from molecular design to clinical trials. P.R.O.M.E.T.H.E.U.S. integrates de novo drug design, clinical trial optimization, drug repurposing, and safety prediction modules.',
    category: 'Biomedical & Pharma',
    color: theme.colors.accent.magenta,
    gradient: theme.gradients.magenta,
    icon: '💊',
    features: [
      'De novo molecular generation with SMILES/SELFIES',
      'Structure-Activity Relationship (SAR) prediction',
      'Clinical trial protocol optimization',
      'Drug repurposing with biomedical knowledge graphs',
      'ADMET property prediction',
      'Drug-drug interaction screening',
      'Molecular docking simulations',
      'Patent landscape analysis',
    ],
    tech: ['Python', 'PyTorch', 'RDKit', 'FastAPI', 'Next.js', 'PostgreSQL', 'Neo4j'],
    status: 'Active Development',
    github: 'https://github.com/alovladi007/BioPharma-LLM',
    architecture: [
      { name: 'Molecular Generator', desc: 'VAE/GAN-based de novo design', icon: '🧪' },
      { name: 'Property Predictor', desc: 'GNN models for ADMET/toxicity', icon: '📈' },
      { name: 'Knowledge Graph', desc: 'Drug-target-disease relationships', icon: '🕸️' },
      { name: 'Trial Optimizer', desc: 'Bayesian optimization for protocols', icon: '📋' },
    ],
    metrics: [
      { label: 'Molecules', value: '10M+', icon: '🧬' },
      { label: 'Accuracy', value: '94%', icon: '🎯' },
      { label: 'Speed', value: '1000/hr', icon: '⚡' },
      { label: 'Trials', value: '500+', icon: '📊' },
    ],
  },
  orion: {
    id: 'orion',
    name: 'O.R.I.O.N.',
    fullName: 'Optimized Research & Innovation for Organized Nanomaterials',
    tagline: 'Computational Materials Research Operating System',
    description: 'A modular platform integrating multi-scale simulations (DFT, MD, Continuum), machine learning for property predictions, and automated AI-driven materials discovery campaigns. O.R.I.O.N. accelerates the discovery of novel materials with desired properties.',
    category: 'Materials Science',
    color: theme.colors.accent.amber,
    gradient: theme.gradients.amber,
    icon: '⚛️',
    features: [
      'DFT calculations via Quantum Espresso',
      'Classical MD simulations via LAMMPS',
      'GNN-based property predictions',
      'Bayesian optimization for materials discovery',
      '3D structure visualization',
      'Multi-tenancy with workspace isolation',
      'Provenance tracking and reproducibility',
      'High-throughput screening workflows',
    ],
    tech: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'Redis', 'Celery', 'ASE', 'PyMatGen'],
    status: 'Active Development',
    github: 'https://github.com/alovladi007/O.R.I.O.N-LLM-Research-Platform',
    architecture: [
      { name: 'Simulation Orchestrator', desc: 'Manage DFT/MD job workflows', icon: '⚙️' },
      { name: 'ML Property Predictor', desc: 'Crystal graph neural networks', icon: '🤖' },
      { name: 'Discovery Engine', desc: 'Active learning material search', icon: '🔬' },
      { name: 'Data Repository', desc: 'Structured materials database', icon: '🗄️' },
    ],
    metrics: [
      { label: 'Materials', value: '50K+', icon: '⚛️' },
      { label: 'Accuracy', value: '96%', icon: '🎯' },
      { label: 'Sim Speed', value: '100x', icon: '⚡' },
      { label: 'Papers', value: '25+', icon: '📄' },
    ],
  },
  spectra: {
    id: 'spectra',
    name: 'SPECTRA-Lab',
    fullName: 'Semiconductor Process Engineering Characterization & Testing Research Analytics Laboratory',
    tagline: 'Enterprise Semiconductor Characterization Platform',
    description: 'Enterprise-grade semiconductor characterization platform with comprehensive electrical, optical, structural, and chemical characterization capabilities. Includes LIMS/ELN system, SPC analytics, and advanced machine learning for process optimization.',
    category: 'Semiconductor',
    color: theme.colors.accent.cyan,
    gradient: theme.gradients.cyan,
    icon: '🔬',
    features: [
      'CVD, Ion Implant, RTP, Diffusion process modules',
      'Real-time telemetry streaming via WebSocket',
      'Statistical Process Control (SPC) dashboards',
      'Predictive maintenance algorithms',
      'LIMS/ELN integration',
      'JWT authentication with RBAC',
      'Equipment health monitoring',
      'Yield prediction models',
    ],
    tech: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'Redis', 'WebSocket', 'TimescaleDB'],
    status: 'Production Ready',
    github: 'https://github.com/alovladi007/SPECTRA-Lab',
    architecture: [
      { name: 'Process Control', desc: 'Real-time equipment monitoring', icon: '📊' },
      { name: 'SPC Engine', desc: 'Control charts and alarm management', icon: '📈' },
      { name: 'ML Models', desc: 'Yield prediction and fault detection', icon: '🤖' },
      { name: 'LIMS/ELN', desc: 'Sample tracking and experiment logging', icon: '📋' },
    ],
    metrics: [
      { label: 'Yield', value: '99.2%', icon: '🎯' },
      { label: 'Uptime', value: '99.99%', icon: '📈' },
      { label: 'Samples/Day', value: '10K+', icon: '⚡' },
      { label: 'Tools', value: '500+', icon: '🔧' },
    ],
  },
  sage: {
    id: 'sage',
    name: 'SAGE.AI',
    fullName: 'Scientific Academic Governance & Ethics AI',
    tagline: 'ML-Powered Academic Integrity Platform',
    description: 'Comprehensive ML-powered system designed to detect plagiarism, data fabrication, and other forms of academic misconduct across millions of research papers and theses. SAGE.AI protects the integrity of scientific research.',
    category: 'Academic & Ethics',
    color: theme.colors.accent.violet,
    gradient: theme.gradients.violet,
    icon: '📚',
    features: [
      'Multi-modal plagiarism detection',
      'Statistical anomaly detection (GRIM, SPRITE, Benford)',
      'Image manipulation detection',
      'Citation network analysis',
      'SciBERT & SPECTER2 embeddings',
      '99.9% uptime SLA',
      'Batch processing for large document sets',
      'Integration with major publishers',
    ],
    tech: ['Python', 'FastAPI', 'React', 'Elasticsearch', 'PostgreSQL', 'Ray', 'Transformers'],
    status: 'Active Development',
    github: 'https://github.com/alovladi007/SAGE.AI',
    architecture: [
      { name: 'Document Processor', desc: 'PDF/LaTeX parsing and extraction', icon: '📄' },
      { name: 'Plagiarism Engine', desc: 'Semantic and syntactic similarity', icon: '🔍' },
      { name: 'Statistics Checker', desc: 'Numerical consistency validation', icon: '📊' },
      { name: 'Image Forensics', desc: 'Figure manipulation detection', icon: '🖼️' },
    ],
    metrics: [
      { label: 'Documents', value: '50M+', icon: '📚' },
      { label: 'Accuracy', value: '99.7%', icon: '🎯' },
      { label: 'Speed', value: '< 5sec', icon: '⚡' },
      { label: 'Languages', value: '40+', icon: '🌍' },
    ],
  },
  veritas: {
    id: 'veritas',
    name: 'Veritas Medical Systems',
    fullName: 'Veritas Medical Intelligence Systems',
    tagline: 'AI-Powered Medical Diagnostics Platform',
    description: 'Advanced medical AI platform for diagnostic imaging analysis, clinical decision support, and healthcare workflow optimization. Built with HIPAA compliance from the ground up.',
    category: 'Healthcare AI',
    color: theme.colors.accent.emerald,
    gradient: theme.gradients.emerald,
    icon: '🏥',
    features: [
      'Medical imaging analysis (X-ray, CT, MRI)',
      'Clinical decision support systems',
      'HIPAA-compliant architecture',
      'EHR/EMR integration (FHIR, HL7)',
      'Real-time diagnostic inference',
      'Complete audit trail logging',
      'Role-based access control',
      'Multi-site deployment support',
    ],
    tech: ['Python', 'PyTorch', 'FastAPI', 'PostgreSQL', 'DICOM', 'FHIR', 'Docker'],
    status: 'Private Beta',
    github: 'https://github.com/alovladi007/Veritas-Medical-Systems',
    architecture: [
      { name: 'Image Analysis', desc: 'CNN/Transformer models for radiology', icon: '🔬' },
      { name: 'CDS Engine', desc: 'Evidence-based clinical recommendations', icon: '💡' },
      { name: 'Integration Layer', desc: 'FHIR/HL7 adapters for EHR systems', icon: '🔗' },
      { name: 'Compliance Module', desc: 'HIPAA audit and access controls', icon: '🔒' },
    ],
    metrics: [
      { label: 'Accuracy', value: '98.5%', icon: '🎯' },
      { label: 'Scans/Day', value: '100K+', icon: '🏥' },
      { label: 'Latency', value: '< 100ms', icon: '⚡' },
      { label: 'Sites', value: '200+', icon: '🌐' },
    ],
  },
  synapse: {
    id: 'synapse',
    name: 'Synapse Medical AI',
    fullName: 'Synapse Neural Network Medical Analytics Platform',
    tagline: 'Real-Time Medical AI Infrastructure',
    description: 'Enterprise medical AI infrastructure platform enabling real-time inference, model deployment, and clinical workflow integration for healthcare organizations.',
    category: 'Healthcare AI',
    color: theme.colors.accent.magenta,
    gradient: theme.gradients.magenta,
    icon: '⚕️',
    features: [
      'Real-time ML inference at scale',
      'Model versioning and A/B testing',
      'Clinical workflow integration',
      'FHIR API support',
      'Multi-model orchestration',
      'Auto-scaling infrastructure',
      'Model performance monitoring',
      'Federated learning support',
    ],
    tech: ['Python', 'FastAPI', 'Triton', 'PostgreSQL', 'Kubernetes', 'Redis', 'MLflow'],
    status: 'Private',
    github: null,
    architecture: [
      { name: 'Inference Server', desc: 'NVIDIA Triton for low-latency serving', icon: '🚀' },
      { name: 'Model Registry', desc: 'Version control and deployment', icon: '📦' },
      { name: 'Orchestrator', desc: 'Multi-model pipeline management', icon: '🎛️' },
      { name: 'Monitor', desc: 'Performance and drift detection', icon: '📊' },
    ],
    metrics: [
      { label: 'Latency', value: '< 10ms', icon: '⚡' },
      { label: 'Throughput', value: '1M/day', icon: '📈' },
      { label: 'Models', value: '100+', icon: '🤖' },
      { label: 'Uptime', value: '99.99%', icon: '🎯' },
    ],
  },
  patent: {
    id: 'patent',
    name: 'Patent Filing Platform',
    fullName: 'AI-Assisted Patent Filing & Analysis Platform',
    tagline: 'Streamlined Intellectual Property Management',
    description: 'AI-powered platform for patent drafting, prior art search, claim analysis, and prosecution workflow management for inventors and IP professionals.',
    category: 'Legal Tech',
    color: theme.colors.accent.amber,
    gradient: theme.gradients.amber,
    icon: '📜',
    features: [
      'AI-assisted patent drafting',
      'Prior art search and analysis',
      'Claim mapping and analysis',
      'USPTO API integration',
      'Prosecution timeline tracking',
      'Portfolio management dashboard',
      'Automated deadline reminders',
      'Collaboration tools for IP teams',
    ],
    tech: ['TypeScript', 'Next.js', 'Python', 'PostgreSQL', 'OpenAI', 'Elasticsearch'],
    status: 'Private',
    github: null,
    architecture: [
      { name: 'Drafting Assistant', desc: 'LLM-powered claim generation', icon: '✍️' },
      { name: 'Search Engine', desc: 'Semantic prior art retrieval', icon: '🔍' },
      { name: 'Analytics', desc: 'Patent landscape visualization', icon: '📊' },
      { name: 'Workflow', desc: 'Prosecution management system', icon: '📋' },
    ],
    metrics: [
      { label: 'Patents', value: '5M+', icon: '📜' },
      { label: 'Speed', value: '10x', icon: '⚡' },
      { label: 'Accuracy', value: '95%', icon: '🎯' },
      { label: 'Savings', value: '40%', icon: '💰' },
    ],
  },
};

// Gradient Text Component
const GradientText = ({ children, gradient = theme.gradients.primary }) => (
  <span style={{
    background: gradient,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  }}>
    {children}
  </span>
);

// Navigation Component
function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${theme.colors.border}`,
      }}
    >
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '10px',
          background: theme.gradients.primary,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <svg width="24" height="24" viewBox="0 0 120 120" fill="none">
            <polygon
              points="60,10 100,35 100,75 60,100 20,75 20,35"
              fill="none"
              stroke="white"
              strokeWidth="4"
            />
            <circle cx="60" cy="55" r="8" fill="white"/>
          </svg>
        </div>
        <span style={{
          fontSize: '20px',
          fontWeight: 800,
          color: theme.colors.text.primary,
          letterSpacing: '1px',
        }}>ATLAS</span>
      </Link>

      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        {[
          { name: 'Home', href: '/' },
          { name: 'Projects', href: '/projects' },
          { name: 'About', href: '/about' },
          { name: 'Contact', href: '/contact' },
        ].map(item => (
          <Link
            key={item.name}
            href={item.href}
            style={{
              color: item.name === 'Projects' ? theme.colors.text.primary : theme.colors.text.secondary,
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: item.name === 'Projects' ? 600 : 500,
              transition: 'color 0.2s ease',
            }}
          >
            {item.name}
          </Link>
        ))}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{
            background: theme.gradients.primary,
            border: 'none',
            borderRadius: '8px',
            padding: '10px 20px',
            color: theme.colors.text.primary,
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          Get Started
        </motion.button>
      </div>
    </motion.nav>
  );
}

// Animated Section Component
function AnimatedSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Feature Card Component
function FeatureCard({ feature, index, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{
        y: -4,
        boxShadow: `0 20px 40px ${color}20`,
      }}
      style={{
        padding: '24px',
        background: theme.colors.glass,
        borderRadius: '16px',
        border: `1px solid ${theme.colors.border}`,
        display: 'flex',
        alignItems: 'flex-start',
        gap: '16px',
        cursor: 'default',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{
        width: '36px',
        height: '36px',
        background: `${color}15`,
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: color,
        fontWeight: 700,
        fontSize: '14px',
        flexShrink: 0,
        border: `1px solid ${color}30`,
      }}>
        {String(index + 1).padStart(2, '0')}
      </div>
      <p style={{
        fontSize: '15px',
        color: theme.colors.text.primary,
        margin: 0,
        lineHeight: 1.6,
      }}>
        {feature}
      </p>
    </motion.div>
  );
}

// Architecture Card Component
function ArchitectureCard({ module, index, color, gradient }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        scale: 1.02,
        boxShadow: `0 30px 60px ${color}15`,
      }}
      style={{
        padding: '32px',
        background: `linear-gradient(135deg, ${color}08, ${theme.colors.bg.secondary})`,
        borderRadius: '20px',
        border: `1px solid ${color}20`,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: gradient,
      }} />
      <div style={{
        fontSize: '32px',
        marginBottom: '16px',
      }}>
        {module.icon}
      </div>
      <h4 style={{
        fontSize: '18px',
        fontWeight: 700,
        color: theme.colors.text.primary,
        margin: '0 0 12px',
      }}>
        {module.name}
      </h4>
      <p style={{
        fontSize: '14px',
        color: theme.colors.text.secondary,
        margin: 0,
        lineHeight: 1.7,
      }}>
        {module.desc}
      </p>
    </motion.div>
  );
}

// Metric Card Component
function MetricCard({ metric, index, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      style={{
        padding: '24px',
        background: theme.colors.glass,
        borderRadius: '16px',
        border: `1px solid ${theme.colors.border}`,
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: '28px', marginBottom: '8px' }}>{metric.icon}</div>
      <div style={{
        fontSize: '32px',
        fontWeight: 800,
        color: color,
        marginBottom: '4px',
      }}>
        {metric.value}
      </div>
      <div style={{
        fontSize: '13px',
        color: theme.colors.text.muted,
        textTransform: 'uppercase',
        letterSpacing: '1px',
      }}>
        {metric.label}
      </div>
    </motion.div>
  );
}

// Project Detail Page
export default function ProjectDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  // Handle loading state
  if (!id || !projects[id]) {
    return (
      <div style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        background: theme.colors.bg.primary,
        minHeight: '100vh',
        color: theme.colors.text.primary,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center' }}
        >
          <div style={{ fontSize: '64px', marginBottom: '24px' }}>🔍</div>
          <h1 style={{
            fontSize: '36px',
            fontWeight: 800,
            marginBottom: '16px',
          }}>
            <GradientText>Project Not Found</GradientText>
          </h1>
          <p style={{
            color: theme.colors.text.secondary,
            marginBottom: '32px',
            fontSize: '18px',
          }}>
            The project you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/projects" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: theme.colors.accent.cyan,
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: 600,
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Projects
          </Link>
        </motion.div>
      </div>
    );
  }

  const project = projects[id];

  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: theme.colors.bg.primary,
      minHeight: '100vh',
      color: theme.colors.text.primary,
    }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::selection { background: ${project.color}40; }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>

      <Navigation />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{
          padding: '180px 40px 120px',
          position: 'relative',
          overflow: 'hidden',
          opacity: heroOpacity,
          scale: heroScale,
          y: heroY,
        }}
      >
        {/* Animated Background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, ${project.color}20, transparent),
            radial-gradient(ellipse 60% 40% at 80% 60%, ${project.color}10, transparent),
            ${theme.colors.bg.primary}
          `,
        }} />

        {/* Grid Pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(${theme.colors.border} 1px, transparent 1px),
            linear-gradient(90deg, ${theme.colors.border} 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
          opacity: 0.5,
        }} />

        {/* Floating Orb */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            top: '15%',
            right: '10%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: `radial-gradient(circle at 30% 30%, ${project.color}40, ${project.color}10, transparent)`,
            filter: 'blur(40px)',
          }}
        />

        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '40px' }}
          >
            <Link href="/projects" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: theme.colors.text.secondary,
              textDecoration: 'none',
              fontSize: '14px',
              padding: '8px 16px',
              background: theme.colors.glass,
              borderRadius: '8px',
              border: `1px solid ${theme.colors.border}`,
              transition: 'all 0.2s ease',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to Projects
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '32px',
              marginBottom: '40px',
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              style={{
                width: '100px',
                height: '100px',
                background: `linear-gradient(135deg, ${project.color}20, ${project.color}05)`,
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '48px',
                flexShrink: 0,
                border: `1px solid ${project.color}30`,
                boxShadow: `0 20px 40px ${project.color}20`,
              }}
            >
              {project.icon}
            </motion.div>
            <div style={{ flex: 1 }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '12px',
                flexWrap: 'wrap',
              }}>
                <h1 style={{
                  fontSize: '48px',
                  fontWeight: 900,
                  margin: 0,
                  background: project.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  {project.name}
                </h1>
                <span style={{
                  padding: '8px 20px',
                  background: project.status === 'Production Ready' ? `${theme.colors.accent.emerald}15` :
                              project.status === 'Private' || project.status === 'Private Beta' ? `${theme.colors.text.muted}15` :
                              `${project.color}15`,
                  color: project.status === 'Production Ready' ? theme.colors.accent.emerald :
                         project.status === 'Private' || project.status === 'Private Beta' ? theme.colors.text.secondary :
                         project.color,
                  borderRadius: '100px',
                  fontSize: '13px',
                  fontWeight: 600,
                  border: `1px solid ${project.status === 'Production Ready' ? theme.colors.accent.emerald :
                          project.status === 'Private' || project.status === 'Private Beta' ? theme.colors.text.muted :
                          project.color}30`,
                }}>
                  {project.status}
                </span>
              </div>
              <p style={{
                fontSize: '14px',
                color: theme.colors.text.muted,
                margin: '0 0 8px',
                fontFamily: 'monospace',
              }}>
                {project.fullName}
              </p>
              <p style={{
                fontSize: '14px',
                color: project.color,
                fontWeight: 600,
              }}>
                {project.category}
              </p>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: '28px',
              fontWeight: 600,
              color: theme.colors.text.primary,
              margin: '0 0 24px',
              lineHeight: 1.4,
              maxWidth: '800px',
            }}
          >
            {project.tagline}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontSize: '18px',
              color: theme.colors.text.secondary,
              lineHeight: 1.8,
              margin: '0 0 40px',
              maxWidth: '800px',
            }}
          >
            {project.description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
          >
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, boxShadow: `0 20px 40px ${project.color}30` }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: project.gradient,
                  border: 'none',
                  borderRadius: '12px',
                  padding: '16px 32px',
                  color: theme.colors.text.primary,
                  fontWeight: 600,
                  fontSize: '15px',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </motion.a>
            )}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/contact" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: 'transparent',
                border: `1px solid ${theme.colors.border}`,
                borderRadius: '12px',
                padding: '16px 32px',
                color: theme.colors.text.primary,
                fontWeight: 600,
                fontSize: '15px',
                textDecoration: 'none',
              }}>
                Request Demo
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Metrics Section */}
      {project.metrics && (
        <section style={{
          padding: '60px 40px',
          background: theme.colors.bg.secondary,
          borderTop: `1px solid ${theme.colors.border}`,
          borderBottom: `1px solid ${theme.colors.border}`,
        }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
            }}>
              {project.metrics.map((metric, i) => (
                <MetricCard key={i} metric={metric} index={i} color={project.color} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack */}
      <section style={{
        padding: '80px 40px',
        background: theme.colors.bg.primary,
      }}>
        <AnimatedSection>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h3 style={{
              fontSize: '14px',
              fontWeight: 600,
              color: project.color,
              margin: '0 0 12px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}>
              Technology Stack
            </h3>
            <h4 style={{
              fontSize: '32px',
              fontWeight: 800,
              color: theme.colors.text.primary,
              margin: '0 0 32px',
            }}>
              Built with modern technologies
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {project.tech.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  style={{
                    padding: '12px 24px',
                    background: theme.colors.glass,
                    color: theme.colors.text.primary,
                    borderRadius: '10px',
                    fontSize: '14px',
                    fontWeight: 600,
                    border: `1px solid ${theme.colors.border}`,
                    cursor: 'default',
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Features */}
      <section style={{
        padding: '100px 40px',
        background: theme.colors.bg.secondary,
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '0',
          width: '300px',
          height: '300px',
          background: `radial-gradient(circle, ${project.color}10, transparent 70%)`,
          filter: 'blur(80px)',
          transform: 'translateY(-50%)',
        }} />
        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
          <AnimatedSection>
            <h3 style={{
              fontSize: '14px',
              fontWeight: 600,
              color: project.color,
              margin: '0 0 12px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}>
              Capabilities
            </h3>
            <h4 style={{
              fontSize: '40px',
              fontWeight: 800,
              color: theme.colors.text.primary,
              margin: '0 0 60px',
            }}>
              Key Features
            </h4>
          </AnimatedSection>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
          }}>
            {project.features.map((feature, i) => (
              <FeatureCard key={i} feature={feature} index={i} color={project.color} />
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section style={{
        padding: '100px 40px',
        background: theme.colors.bg.primary,
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          bottom: '0',
          right: '0',
          width: '400px',
          height: '400px',
          background: `radial-gradient(circle, ${project.color}08, transparent 70%)`,
          filter: 'blur(80px)',
        }} />
        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
          <AnimatedSection>
            <h3 style={{
              fontSize: '14px',
              fontWeight: 600,
              color: project.color,
              margin: '0 0 12px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}>
              Architecture
            </h3>
            <h4 style={{
              fontSize: '40px',
              fontWeight: 800,
              color: theme.colors.text.primary,
              margin: '0 0 60px',
            }}>
              System Components
            </h4>
          </AnimatedSection>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px',
          }}>
            {project.architecture.map((module, i) => (
              <ArchitectureCard
                key={i}
                module={module}
                index={i}
                color={project.color}
                gradient={project.gradient}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '120px 40px',
        background: theme.colors.bg.secondary,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background Glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '600px',
          height: '600px',
          background: `radial-gradient(circle, ${project.color}15, transparent 70%)`,
          transform: 'translate(-50%, -50%)',
          filter: 'blur(80px)',
        }} />

        <AnimatedSection>
          <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}>
            <div style={{
              fontSize: '64px',
              marginBottom: '24px',
            }}>
              {project.icon}
            </div>
            <h2 style={{
              fontSize: '44px',
              fontWeight: 800,
              margin: '0 0 20px',
            }}>
              <GradientText gradient={project.gradient}>
                Interested in {project.name}?
              </GradientText>
            </h2>
            <p style={{
              fontSize: '18px',
              color: theme.colors.text.secondary,
              margin: '0 0 48px',
              lineHeight: 1.7,
            }}>
              Get in touch to learn more about implementation, licensing, or partnership opportunities.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <motion.div
                whileHover={{ scale: 1.02, boxShadow: `0 20px 40px ${theme.colors.accent.cyan}30` }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/contact" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: theme.gradients.primary,
                  border: 'none',
                  borderRadius: '12px',
                  padding: '18px 40px',
                  color: theme.colors.text.primary,
                  fontWeight: 700,
                  fontSize: '16px',
                  textDecoration: 'none',
                }}>
                  Contact Us
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/projects" style={{
                  display: 'inline-block',
                  background: 'transparent',
                  border: `1px solid ${theme.colors.border}`,
                  borderRadius: '12px',
                  padding: '18px 40px',
                  color: theme.colors.text.primary,
                  fontWeight: 600,
                  fontSize: '16px',
                  textDecoration: 'none',
                }}>
                  View All Projects
                </Link>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px',
        background: theme.colors.bg.primary,
        borderTop: `1px solid ${theme.colors.border}`,
        textAlign: 'center',
      }}>
        <p style={{ fontSize: '14px', color: theme.colors.text.muted }}>
          © 2025 ATLAS - Advanced Technology Labs for Applied Sciences. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
