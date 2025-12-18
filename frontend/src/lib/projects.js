import { theme } from "./theme";

export const projectList = [
  {
    id: "galileo",
    name: "GALILEO V2.0",
    tagline:
      "Enterprise-Grade AI-Enhanced Space-Based Geophysical Sensing Platform",
    description:
      "A comprehensive orbital dynamics + AI platform for autonomous satellite-based gravimetry missions.",
    category: "Space & Geophysics",
    color: theme.colors.accent.cyan,
    icon: "🛰️",
    status: "Production",
    github: "https://github.com/alovladi007/GALILEO-V2.0",
    tech: ["Python", "JAX", "FastAPI", "Next.js", "PostgreSQL", "TimescaleDB"],
    features: ["Orbit propagation", "Formation flying", "PINN models", "Inversion"],
  },
  {
    id: "aurora-nav",
    name: "AURORA-NAV",
    tagline: "Multi-Sensor Fusion for GPS-Denied Undersea Navigation",
    description:
      "Enterprise simulation platform for autonomous underwater vehicles with INS/DVL and EKF fusion.",
    category: "Maritime & Defense",
    color: theme.colors.accent.violet,
    icon: "🌊",
    status: "Active",
    github: "https://github.com/alovladi007/AURORA-NAV",
    tech: ["Python", "FastAPI", "React", "PostgreSQL", "TensorFlow"],
    features: ["INS/DVL simulation", "EKF fusion", "Acoustic modeling", "Multi-AUV"],
  },
  {
    id: "brainiac",
    name: "BRAINIAC",
    tagline: "Brain Connectivity Mapping with Graph Neural Networks",
    description:
      "Research platform for brain connectivity analysis using modern GNN architectures.",
    category: "Neuroscience",
    color: theme.colors.accent.emerald,
    icon: "🧠",
    status: "Research",
    github: "https://github.com/alovladi007/BRAINIAC",
    tech: ["Python", "PyTorch", "PyG", "FastAPI", "PostgreSQL"],
    features: ["Multi-modal imaging", "GNN suites", "Graph AEs", "3D viz"],
  },
  {
    id: "biopharma",
    name: "P.R.O.M.E.T.H.E.U.S.",
    tagline: "AI-Powered Pharmaceutical Research Platform",
    description:
      "End-to-end drug development platform: generation, prediction, trials, and safety.",
    category: "Biomedical",
    color: theme.colors.accent.magenta,
    icon: "💊",
    status: "Active",
    github: "https://github.com/alovladi007/BioPharma-LLM",
    tech: ["Python", "PyTorch", "RDKit", "FastAPI", "Next.js", "PostgreSQL"],
    features: ["De novo generation", "SAR prediction", "ADMET", "Trial optimization"],
  },
  {
    id: "orion",
    name: "O.R.I.O.N.",
    tagline: "Computational Materials Research Operating System",
    description:
      "Multi-scale simulations + ML property prediction + automated discovery campaigns.",
    category: "Materials Science",
    color: theme.colors.accent.amber,
    icon: "⚛️",
    status: "Active",
    github: "https://github.com/alovladi007/O.R.I.O.N-LLM-Research-Platform",
    tech: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Redis", "Celery"],
    features: ["DFT/MD", "GNN predictions", "Bayes opt", "Workflows"],
  },
  {
    id: "spectra",
    name: "SPECTRA-Lab",
    tagline: "Enterprise Semiconductor Characterization Platform",
    description:
      "LIMS/ELN + SPC analytics + ML optimization for semiconductor characterization.",
    category: "Semiconductor",
    color: theme.colors.accent.cyan,
    icon: "🔬",
    status: "Production",
    github: "https://github.com/alovladi007/SPECTRA-Lab",
    tech: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Redis", "WebSocket"],
    features: ["Telemetry", "SPC dashboards", "Predictive maintenance", "Yield ML"],
  },
  {
    id: "sage",
    name: "SAGE.AI",
    tagline: "ML-Powered Academic Integrity Platform",
    description:
      "Detect plagiarism, fabrication, and anomalies across research documents at scale.",
    category: "Academic",
    color: theme.colors.accent.violet,
    icon: "📚",
    status: "Active",
    github: "https://github.com/alovladi007/SAGE.AI",
    tech: ["Python", "FastAPI", "Elasticsearch", "PostgreSQL", "Ray"],
    features: ["Similarity", "Anomaly detection", "Image forensics", "Citations"],
  },
  {
    id: "veritas",
    name: "Veritas Medical",
    tagline: "AI-Powered Medical Diagnostics Platform",
    description:
      "HIPAA-ready medical AI for imaging, decision support, and workflow optimization.",
    category: "Healthcare",
    color: theme.colors.accent.emerald,
    icon: "🏥",
    status: "Beta",
    github: "https://github.com/alovladi007/Veritas-Medical-Systems",
    tech: ["Python", "PyTorch", "FastAPI", "PostgreSQL", "DICOM"],
    features: ["Imaging", "CDS", "EHR integration", "Audit trails"],
  },
  {
    id: "synapse",
    name: "Synapse Medical AI",
    tagline: "Real-Time Medical AI Infrastructure",
    description:
      "Real-time inference and model deployment infrastructure for healthcare orgs.",
    category: "Healthcare",
    color: theme.colors.accent.magenta,
    icon: "⚕️",
    status: "Private",
    github: null,
    tech: ["Python", "FastAPI", "Triton", "PostgreSQL", "Kubernetes"],
    features: ["Inference", "Versioning", "FHIR support", "A/B testing"],
  },
  {
    id: "patent",
    name: "Patent Filing Platform",
    tagline: "Streamlined Intellectual Property Management",
    description:
      "Patent drafting, prior art search, and prosecution workflow management.",
    category: "Legal Tech",
    color: theme.colors.accent.amber,
    icon: "📜",
    status: "Private",
    github: null,
    tech: ["TypeScript", "Next.js", "Python", "PostgreSQL"],
    features: ["Drafting", "Prior art", "Claim analysis", "Workflow"],
  },
];

export const projectById = Object.fromEntries(projectList.map((p) => [p.id, p]));

export const categories = [
  "All",
  ...Array.from(new Set(projectList.map((p) => p.category))),
];

