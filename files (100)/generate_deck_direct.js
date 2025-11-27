const pptxgen = require("pptxgenjs");

async function createPitchDeck() {
  const pptx = new pptxgen();
  
  // Set presentation properties
  pptx.layout = "LAYOUT_16x9";
  pptx.title = "AURION Research Labs - Investor Pitch Deck";
  pptx.author = "AURION Research Labs";
  
  // Brand colors
  const colors = {
    deepSpace: "0a0f1a",
    auroraCyan: "00d4ff",
    auroraViolet: "7c3aed",
    auroraMagenta: "ec4899",
    silver: "94a3b8",
    white: "ffffff",
    darkSurface: "1e293b",
    accentGreen: "10b981",
    accentOrange: "f59e0b",
    accentRed: "ef4444"
  };
  
  // ============================================================
  // SLIDE 1: Title
  // ============================================================
  let slide1 = pptx.addSlide();
  slide1.background = { color: colors.deepSpace };
  
  slide1.addText("AURION", {
    x: 0, y: 1.8, w: "100%", h: 0.9,
    fontSize: 72, fontFace: "Arial Black", color: colors.auroraCyan,
    align: "center", bold: true
  });
  
  slide1.addText("RESEARCH LABS", {
    x: 0, y: 2.7, w: "100%", h: 0.4,
    fontSize: 18, fontFace: "Arial", color: colors.silver,
    align: "center", charSpacing: 12
  });
  
  slide1.addText("Building the Intelligence that Builds the Future", {
    x: 0, y: 3.4, w: "100%", h: 0.5,
    fontSize: 24, fontFace: "Arial", color: colors.white,
    align: "center", bold: true
  });
  
  slide1.addText("AI-Powered Meta-Automation for Engineering Innovation", {
    x: 0, y: 4.2, w: "100%", h: 0.3,
    fontSize: 14, fontFace: "Arial", color: colors.silver,
    align: "center"
  });
  
  slide1.addText("Confidential | Investor Presentation | Q4 2025", {
    x: 0, y: 4.9, w: "100%", h: 0.2,
    fontSize: 10, fontFace: "Arial", color: colors.silver,
    align: "center"
  });
  
  // ============================================================
  // SLIDE 2: Problem
  // ============================================================
  let slide2 = pptx.addSlide();
  slide2.background = { color: colors.deepSpace };
  
  // Accent bar
  slide2.addShape(pptx.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.1, h: "100%",
    fill: { type: "solid", color: colors.accentRed }
  });
  
  slide2.addText("THE PROBLEM", {
    x: 0.4, y: 0.3, w: 9, h: 0.6,
    fontSize: 36, fontFace: "Arial Black", color: colors.accentRed,
    bold: true
  });
  
  slide2.addText("Engineering software development is fundamentally broken", {
    x: 0.4, y: 0.85, w: 9, h: 0.3,
    fontSize: 14, fontFace: "Arial", color: colors.silver
  });
  
  // Pain points
  const painPoints = [
    { title: "SLOW DEVELOPMENT", stat: "18-24 months", desc: "Average time to build domain-specific SaaS" },
    { title: "TALENT SHORTAGE", stat: "1.4M unfilled jobs", desc: "Global shortage of dual-skilled engineers" },
    { title: "PROHIBITIVE COSTS", stat: "$2-5M per product", desc: "Cost to develop specialized engineering software" }
  ];
  
  painPoints.forEach((item, i) => {
    const y = 1.5 + i * 1.15;
    slide2.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: 0.4, y: y, w: 4.2, h: 1.0,
      fill: { color: colors.darkSurface },
      line: { color: colors.accentRed, pt: 1, dashType: "solid" }
    });
    slide2.addText(item.title, { x: 0.55, y: y + 0.1, w: 4, h: 0.25, fontSize: 11, color: colors.accentOrange, bold: true });
    slide2.addText(item.stat, { x: 0.55, y: y + 0.35, w: 4, h: 0.3, fontSize: 18, color: colors.white, bold: true });
    slide2.addText(item.desc, { x: 0.55, y: y + 0.7, w: 4, h: 0.25, fontSize: 9, color: colors.silver });
  });
  
  // Market impact
  slide2.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 5, y: 1.5, w: 4.5, h: 2.0,
    fill: { color: colors.darkSurface }
  });
  slide2.addText("MARKET IMPACT", { x: 5.15, y: 1.6, w: 4, h: 0.3, fontSize: 12, color: colors.auroraCyan, bold: true });
  slide2.addText("▼  Innovation velocity slowing in critical industries", { x: 5.15, y: 2.0, w: 4.2, h: 0.25, fontSize: 10, color: colors.white });
  slide2.addText("▼  Research-to-production gaps widening", { x: 5.15, y: 2.35, w: 4.2, h: 0.25, fontSize: 10, color: colors.white });
  slide2.addText("▼  Competitive advantage shifting overseas", { x: 5.15, y: 2.7, w: 4.2, h: 0.25, fontSize: 10, color: colors.white });
  
  // Key quote
  slide2.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 5, y: 3.7, w: 4.5, h: 1.0,
    fill: { color: "0f172a" },
    line: { color: colors.accentRed, pt: 2 }
  });
  slide2.addText("THE BOTTLENECK", { x: 5.15, y: 3.8, w: 4.2, h: 0.25, fontSize: 11, color: colors.white, bold: true, align: "center" });
  slide2.addText("Human-coded development cannot scale to meet modern engineering R&D demands", {
    x: 5.15, y: 4.1, w: 4.2, h: 0.5, fontSize: 9, color: colors.silver, align: "center"
  });
  
  slide2.addText("AURION Research Labs | 2", { x: 8.5, y: 5.1, w: 1.3, h: 0.2, fontSize: 9, color: colors.silver });
  
  // ============================================================
  // SLIDE 3: Solution
  // ============================================================
  let slide3 = pptx.addSlide();
  slide3.background = { color: colors.deepSpace };
  
  slide3.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: 0.1, h: "100%", fill: { color: colors.auroraCyan } });
  
  slide3.addText("THE SOLUTION", { x: 0.4, y: 0.3, w: 9, h: 0.6, fontSize: 36, fontFace: "Arial Black", color: colors.auroraCyan, bold: true });
  slide3.addText("AI-powered \"factory of factories\" for engineering software", { x: 0.4, y: 0.85, w: 9, h: 0.3, fontSize: 14, color: colors.silver });
  
  // Main value prop box
  slide3.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.4, y: 1.3, w: 9.2, h: 0.9,
    fill: { color: colors.darkSurface },
    line: { color: colors.auroraCyan, pt: 2 }
  });
  slide3.addText("AURION Labs builds AI systems that design, code, and deploy domain-specific SaaS autonomously", {
    x: 0.5, y: 1.4, w: 9, h: 0.4, fontSize: 16, color: colors.white, bold: true, align: "center"
  });
  slide3.addText("From natural language prompt → Production-ready software in hours, not months", {
    x: 0.5, y: 1.85, w: 9, h: 0.25, fontSize: 12, color: colors.auroraCyan, align: "center"
  });
  
  // Three pillars
  const pillars = [
    { num: "1", title: "AI CODE FACTORY", desc: "LLM-driven engine generates complete software stacks", color: colors.auroraCyan },
    { num: "2", title: "DOMAIN INTELLIGENCE", desc: "Knowledge graph with deep engineering embeddings", color: colors.auroraViolet },
    { num: "3", title: "AUTO-DEPLOYMENT", desc: "End-to-end automation from code to cloud", color: colors.auroraMagenta }
  ];
  
  pillars.forEach((p, i) => {
    const x = 0.4 + i * 3.15;
    slide3.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: x, y: 2.4, w: 3.0, h: 1.8,
      fill: { color: colors.darkSurface }
    });
    slide3.addShape(pptx.shapes.RECTANGLE, { x: x, y: 2.4, w: 3.0, h: 0.06, fill: { color: p.color } });
    slide3.addText(p.num, { x: x + 0.1, y: 2.55, w: 0.4, h: 0.4, fontSize: 18, color: p.color, bold: true });
    slide3.addText(p.title, { x: x + 0.5, y: 2.6, w: 2.4, h: 0.3, fontSize: 11, color: p.color, bold: true });
    slide3.addText(p.desc, { x: x + 0.1, y: 3.0, w: 2.8, h: 0.6, fontSize: 10, color: colors.white });
  });
  
  // Bottom metrics
  const metrics = [
    { value: "90%", label: "Faster Development", color: colors.accentGreen },
    { value: "70%", label: "Cost Reduction", color: colors.accentGreen },
    { value: "24/7", label: "Autonomous Operation", color: colors.accentGreen }
  ];
  
  metrics.forEach((m, i) => {
    const x = 1.5 + i * 3;
    slide3.addText(m.value, { x: x, y: 4.5, w: 1.5, h: 0.4, fontSize: 26, color: m.color, bold: true, align: "center" });
    slide3.addText(m.label, { x: x, y: 4.9, w: 1.5, h: 0.2, fontSize: 9, color: colors.silver, align: "center" });
  });
  
  slide3.addText("AURION Research Labs | 3", { x: 8.5, y: 5.1, w: 1.3, h: 0.2, fontSize: 9, color: colors.silver });
  
  // ============================================================
  // SLIDE 4: Product - How it Works
  // ============================================================
  let slide4 = pptx.addSlide();
  slide4.background = { color: colors.deepSpace };
  
  slide4.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: 0.1, h: "100%", fill: { color: colors.accentGreen } });
  slide4.addText("HOW IT WORKS", { x: 0.4, y: 0.3, w: 9, h: 0.6, fontSize: 36, fontFace: "Arial Black", color: colors.auroraCyan, bold: true });
  slide4.addText("Prompt to production in 4 autonomous steps", { x: 0.4, y: 0.85, w: 9, h: 0.3, fontSize: 14, color: colors.silver });
  
  const steps = [
    { step: "1", title: "PROMPT", desc: "Natural language input or domain template", color: colors.auroraCyan },
    { step: "2", title: "AI ARCHITECT", desc: "Designs architecture, schemas, ML pipeline", color: colors.auroraViolet },
    { step: "3", title: "AI CODER", desc: "Generates frontend, backend, APIs, tests", color: colors.auroraMagenta },
    { step: "4", title: "DEPLOY", desc: "Auto-deployed with monitoring & billing", color: colors.accentGreen }
  ];
  
  steps.forEach((s, i) => {
    const x = 0.3 + i * 2.4;
    slide4.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: x, y: 1.5, w: 2.2, h: 2.8,
      fill: { color: colors.darkSurface }
    });
    slide4.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: x + 0.7, y: 1.35, w: 0.8, h: 0.35,
      fill: { color: s.color }
    });
    slide4.addText("STEP " + s.step, { x: x + 0.7, y: 1.35, w: 0.8, h: 0.35, fontSize: 10, color: colors.deepSpace, bold: true, align: "center", valign: "middle" });
    slide4.addText(s.title, { x: x + 0.1, y: 2.4, w: 2.0, h: 0.3, fontSize: 12, color: s.color, bold: true, align: "center" });
    slide4.addText(s.desc, { x: x + 0.1, y: 2.8, w: 2.0, h: 0.6, fontSize: 9, color: colors.white, align: "center" });
    
    // Arrow between steps
    if (i < 3) {
      slide4.addText("→", { x: x + 2.15, y: 2.7, w: 0.3, h: 0.3, fontSize: 20, color: s.color });
    }
  });
  
  slide4.addText("AURION Research Labs | 4", { x: 8.5, y: 5.1, w: 1.3, h: 0.2, fontSize: 9, color: colors.silver });
  
  // ============================================================
  // SLIDE 5: Technology Moat
  // ============================================================
  let slide5 = pptx.addSlide();
  slide5.background = { color: colors.deepSpace };
  
  slide5.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: 0.1, h: "100%", fill: { color: colors.auroraViolet } });
  slide5.addText("TECHNOLOGY MOAT", { x: 0.4, y: 0.3, w: 9, h: 0.6, fontSize: 36, fontFace: "Arial Black", color: colors.auroraViolet, bold: true });
  slide5.addText("Defensible advantages that compound over time", { x: 0.4, y: 0.85, w: 9, h: 0.3, fontSize: 14, color: colors.silver });
  
  const moats = [
    { title: "DOMAIN INTELLIGENCE GRAPH", desc: "50K+ domain concepts, RAG-powered reasoning", color: colors.auroraCyan },
    { title: "SIMULATION CONNECTORS", desc: "Native COMSOL, Lumerical, ANSYS integration", color: colors.auroraViolet },
    { title: "COMPLIANCE ENGINE", desc: "Built-in HIPAA, ISO 13485, ISO 9001", color: colors.auroraMagenta }
  ];
  
  moats.forEach((m, i) => {
    const x = 0.4 + i * 3.15;
    slide5.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: x, y: 1.3, w: 3.0, h: 1.4,
      fill: { color: colors.darkSurface }
    });
    slide5.addText(m.title, { x: x + 0.1, y: 1.45, w: 2.8, h: 0.35, fontSize: 11, color: m.color, bold: true });
    slide5.addText(m.desc, { x: x + 0.1, y: 1.85, w: 2.8, h: 0.6, fontSize: 10, color: colors.white });
  });
  
  // Tech stack
  slide5.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 2.9, w: 9.2, h: 1.3, fill: { color: colors.darkSurface } });
  slide5.addText("CORE TECHNOLOGY STACK", { x: 0.5, y: 3.0, w: 9, h: 0.3, fontSize: 12, color: colors.accentOrange, bold: true });
  
  const techStack = [
    { cat: "AI CORE", tech: "Claude, GPT, LangGraph" },
    { cat: "BACKEND", tech: "NestJS, PostgreSQL, Redis" },
    { cat: "FRONTEND", tech: "Next.js, React, R3F" },
    { cat: "ML OPS", tech: "MLflow, Triton, PyTorch" },
    { cat: "DEVOPS", tech: "K8s, Terraform, GHA" }
  ];
  
  techStack.forEach((t, i) => {
    const x = 0.6 + i * 1.85;
    slide5.addText(t.cat, { x: x, y: 3.35, w: 1.7, h: 0.2, fontSize: 9, color: colors.auroraCyan, bold: true });
    slide5.addText(t.tech, { x: x, y: 3.55, w: 1.7, h: 0.4, fontSize: 9, color: colors.white });
  });
  
  // Network effects box
  slide5.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.4, y: 4.35, w: 9.2, h: 0.65,
    fill: { color: "0f172a" },
    line: { color: colors.auroraCyan, pt: 2 }
  });
  slide5.addText("NETWORK EFFECTS: Each deployment improves DIG, making future products smarter", {
    x: 0.5, y: 4.45, w: 9, h: 0.45, fontSize: 12, color: colors.white, align: "center"
  });
  
  slide5.addText("AURION Research Labs | 5", { x: 8.5, y: 5.1, w: 1.3, h: 0.2, fontSize: 9, color: colors.silver });
  
  // ============================================================
  // SLIDE 6: Three Verticals
  // ============================================================
  let slide6 = pptx.addSlide();
  slide6.background = { color: colors.deepSpace };
  
  slide6.addText("THREE VERTICALS", { x: 0.4, y: 0.3, w: 9, h: 0.6, fontSize: 36, fontFace: "Arial Black", color: colors.white, bold: true });
  slide6.addText("Domain-specific AI divisions powering specialized automation", { x: 0.4, y: 0.85, w: 9, h: 0.3, fontSize: 14, color: colors.silver });
  
  const verticals = [
    { name: "ElectroAI", domain: "Electronics & Semiconductor", color: colors.auroraViolet, tam: "$48B",
      features: ["CMP optimization & yield modeling", "SPC dashboards & control charts", "Tool fault detection & prediction"] },
    { name: "PhotonAI", domain: "Photonics & Optoelectronics", color: colors.auroraCyan, tam: "$12B",
      features: ["FDTD/COMSOL simulation pipelines", "Photonic chip layout generation", "Band-gap optimization"] },
    { name: "BioAI", domain: "Biomedical Engineering", color: colors.accentGreen, tam: "$28B",
      features: ["EEG/ECG/HRV signal analysis", "DICOM imaging pipelines", "Clinical decision support"] }
  ];
  
  verticals.forEach((v, i) => {
    const x = 0.4 + i * 3.15;
    slide6.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: x, y: 1.3, w: 3.0, h: 3.4,
      fill: { color: colors.darkSurface },
      line: { color: v.color, pt: 2 }
    });
    slide6.addText(v.name, { x: x + 0.1, y: 1.45, w: 2.8, h: 0.35, fontSize: 16, color: v.color, bold: true });
    slide6.addText(v.domain, { x: x + 0.1, y: 1.8, w: 2.8, h: 0.25, fontSize: 9, color: colors.silver });
    
    v.features.forEach((f, j) => {
      slide6.addText("▸ " + f, { x: x + 0.1, y: 2.2 + j * 0.35, w: 2.8, h: 0.3, fontSize: 9, color: colors.white });
    });
    
    slide6.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: x + 0.3, y: 3.9, w: 2.4, h: 0.65, fill: { color: "0f172a" } });
    slide6.addText(v.tam, { x: x + 0.3, y: 3.95, w: 2.4, h: 0.35, fontSize: 18, color: v.color, bold: true, align: "center" });
    slide6.addText("TAM", { x: x + 0.3, y: 4.3, w: 2.4, h: 0.2, fontSize: 9, color: colors.silver, align: "center" });
  });
  
  slide6.addText("AURION Research Labs | 6", { x: 8.5, y: 5.1, w: 1.3, h: 0.2, fontSize: 9, color: colors.silver });
  
  // ============================================================
  // SLIDE 7: Market Opportunity
  // ============================================================
  let slide7 = pptx.addSlide();
  slide7.background = { color: colors.deepSpace };
  
  slide7.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: 0.1, h: "100%", fill: { color: colors.accentOrange } });
  slide7.addText("MARKET OPPORTUNITY", { x: 0.4, y: 0.3, w: 9, h: 0.6, fontSize: 36, fontFace: "Arial Black", color: colors.accentOrange, bold: true });
  slide7.addText("Massive TAM across three high-growth engineering verticals", { x: 0.4, y: 0.85, w: 9, h: 0.3, fontSize: 14, color: colors.silver });
  
  // TAM/SAM/SOM
  slide7.addShape(pptx.shapes.OVAL, { x: 0.5, y: 1.4, w: 4.0, h: 3.4, fill: { color: "1a1a2e" }, line: { color: colors.accentOrange, pt: 2 } });
  slide7.addText("TAM", { x: 2.1, y: 1.6, w: 0.8, h: 0.25, fontSize: 11, color: colors.accentOrange, bold: true });
  slide7.addText("$88B", { x: 1.5, y: 1.85, w: 2, h: 0.5, fontSize: 28, color: colors.white, bold: true });
  
  slide7.addShape(pptx.shapes.OVAL, { x: 1.2, y: 2.5, w: 2.7, h: 2.0, fill: { color: "1a1a2e" }, line: { color: colors.auroraCyan, pt: 2 } });
  slide7.addText("SAM $24B", { x: 1.8, y: 3.0, w: 1.5, h: 0.5, fontSize: 14, color: colors.auroraCyan, bold: true });
  
  slide7.addShape(pptx.shapes.OVAL, { x: 1.8, y: 3.4, w: 1.5, h: 1.0, fill: { color: colors.accentGreen }, line: { color: colors.accentGreen, pt: 1 } });
  slide7.addText("SOM $2.4B", { x: 1.8, y: 3.65, w: 1.5, h: 0.5, fontSize: 11, color: colors.white, bold: true });
  
  // Market breakdown
  slide7.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 5, y: 1.4, w: 4.5, h: 2.2, fill: { color: colors.darkSurface } });
  slide7.addText("ADDRESSABLE MARKETS", { x: 5.15, y: 1.5, w: 4.2, h: 0.3, fontSize: 12, color: colors.accentOrange, bold: true });
  
  const markets = [
    { name: "Semiconductor Analytics", value: "$48B", pct: 55, color: colors.auroraViolet },
    { name: "Healthcare AI/ML", value: "$28B", pct: 32, color: colors.accentGreen },
    { name: "Photonics Design", value: "$12B", pct: 14, color: colors.auroraCyan }
  ];
  
  markets.forEach((m, i) => {
    const y = 1.9 + i * 0.55;
    slide7.addText(m.name, { x: 5.15, y: y, w: 2.5, h: 0.2, fontSize: 10, color: colors.white });
    slide7.addText(m.value, { x: 8.5, y: y, w: 0.8, h: 0.2, fontSize: 10, color: m.color, bold: true });
    slide7.addShape(pptx.shapes.RECTANGLE, { x: 5.15, y: y + 0.22, w: 4, h: 0.1, fill: { color: "0f172a" } });
    slide7.addShape(pptx.shapes.RECTANGLE, { x: 5.15, y: y + 0.22, w: 4 * m.pct / 100, h: 0.1, fill: { color: m.color } });
  });
  
  // Growth metrics
  slide7.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 5, y: 3.8, w: 2.1, h: 0.9, fill: { color: "0f172a" } });
  slide7.addText("42%", { x: 5.1, y: 3.9, w: 1.9, h: 0.4, fontSize: 22, color: colors.accentGreen, bold: true, align: "center" });
  slide7.addText("AI Eng. CAGR", { x: 5.1, y: 4.35, w: 1.9, h: 0.25, fontSize: 9, color: colors.silver, align: "center" });
  
  slide7.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 7.3, y: 3.8, w: 2.1, h: 0.9, fill: { color: "0f172a" } });
  slide7.addText("3.2x", { x: 7.4, y: 3.9, w: 1.9, h: 0.4, fontSize: 22, color: colors.auroraCyan, bold: true, align: "center" });
  slide7.addText("Growth 2025-30", { x: 7.4, y: 4.35, w: 1.9, h: 0.25, fontSize: 9, color: colors.silver, align: "center" });
  
  slide7.addText("AURION Research Labs | 7", { x: 8.5, y: 5.1, w: 1.3, h: 0.2, fontSize: 9, color: colors.silver });
  
  // ============================================================
  // SLIDE 8: Business Model
  // ============================================================
  let slide8 = pptx.addSlide();
  slide8.background = { color: colors.deepSpace };
  
  slide8.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: 0.1, h: "100%", fill: { color: colors.accentGreen } });
  slide8.addText("BUSINESS MODEL", { x: 0.4, y: 0.3, w: 9, h: 0.6, fontSize: 36, fontFace: "Arial Black", color: colors.accentGreen, bold: true });
  slide8.addText("Multiple revenue streams with strong unit economics", { x: 0.4, y: 0.85, w: 9, h: 0.3, fontSize: 14, color: colors.silver });
  
  const streams = [
    { title: "META-SAAS\nSUBSCRIPTIONS", metric: "$50-500K ARR", color: colors.auroraCyan },
    { title: "USAGE-BASED\nMETERING", metric: "130% NRR", color: colors.auroraViolet },
    { title: "ENTERPRISE\nPRIVATE CLOUD", metric: "$1-5M ACV", color: colors.auroraMagenta },
    { title: "AI WORKER\nMARKETPLACE", metric: "20% take rate", color: colors.accentOrange }
  ];
  
  streams.forEach((s, i) => {
    const x = 0.4 + i * 2.4;
    slide8.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: x, y: 1.3, w: 2.2, h: 1.6, fill: { color: colors.darkSurface } });
    slide8.addShape(pptx.shapes.RECTANGLE, { x: x, y: 1.3, w: 2.2, h: 0.06, fill: { color: s.color } });
    slide8.addText(s.title, { x: x + 0.1, y: 1.5, w: 2.0, h: 0.6, fontSize: 10, color: s.color, bold: true, align: "center" });
    slide8.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: x + 0.15, y: 2.4, w: 1.9, h: 0.4, fill: { color: "0f172a" } });
    slide8.addText(s.metric, { x: x + 0.15, y: 2.45, w: 1.9, h: 0.3, fontSize: 10, color: s.color, bold: true, align: "center" });
  });
  
  // Unit economics
  slide8.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 3.1, w: 9.2, h: 1.0, fill: { color: colors.darkSurface } });
  slide8.addText("UNIT ECONOMICS", { x: 0.5, y: 3.2, w: 2, h: 0.25, fontSize: 11, color: colors.silver, bold: true });
  
  const unitEcon = [
    { value: "85%", label: "Gross Margin", color: colors.accentGreen },
    { value: "$5K", label: "CAC Target", color: colors.auroraCyan },
    { value: "36mo", label: "LTV/CAC > 5x", color: colors.auroraViolet },
    { value: "<6mo", label: "Payback Period", color: colors.auroraMagenta }
  ];
  
  unitEcon.forEach((u, i) => {
    const x = 0.8 + i * 2.3;
    slide8.addText(u.value, { x: x, y: 3.5, w: 1.5, h: 0.35, fontSize: 20, color: u.color, bold: true, align: "center" });
    slide8.addText(u.label, { x: x, y: 3.85, w: 1.5, h: 0.2, fontSize: 9, color: colors.silver, align: "center" });
  });
  
  // Revenue mix
  slide8.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 4.3, w: 9.2, h: 0.7, fill: { color: "0f172a" }, line: { color: colors.accentGreen, pt: 1 } });
  slide8.addText("REVENUE MIX (Y3):", { x: 0.5, y: 4.4, w: 2, h: 0.25, fontSize: 10, color: colors.accentGreen, bold: true });
  slide8.addText("SaaS 45%  |  Usage 25%  |  Enterprise 20%  |  Marketplace 10%", {
    x: 2.5, y: 4.4, w: 6.5, h: 0.5, fontSize: 11, color: colors.white, align: "center"
  });
  
  slide8.addText("AURION Research Labs | 8", { x: 8.5, y: 5.1, w: 1.3, h: 0.2, fontSize: 9, color: colors.silver });
  
  // ============================================================
  // SLIDE 9: Traction & Roadmap
  // ============================================================
  let slide9 = pptx.addSlide();
  slide9.background = { color: colors.deepSpace };
  
  slide9.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: 0.1, h: "100%", fill: { color: colors.auroraCyan } });
  slide9.addText("TRACTION & ROADMAP", { x: 0.4, y: 0.3, w: 9, h: 0.6, fontSize: 36, fontFace: "Arial Black", color: colors.auroraCyan, bold: true });
  slide9.addText("From concept to market leadership in 18 months", { x: 0.4, y: 0.85, w: 9, h: 0.3, fontSize: 14, color: colors.silver });
  
  // Timeline
  slide9.addShape(pptx.shapes.RECTANGLE, { x: 1, y: 1.7, w: 8, h: 0.05, fill: { color: colors.auroraCyan } });
  
  const timeline = [
    { q: "Q4 2024", label: "MVP Launch", color: colors.accentGreen },
    { q: "Q1 2025", label: "Pilot Customers", color: colors.auroraCyan },
    { q: "Q2 2025", label: "PhotonAI Launch", color: colors.auroraViolet },
    { q: "Q4 2025", label: "BioAI Launch", color: colors.auroraMagenta },
    { q: "2026", label: "Scale & Expand", color: colors.accentOrange }
  ];
  
  timeline.forEach((t, i) => {
    const x = 0.8 + i * 1.9;
    slide9.addShape(pptx.shapes.OVAL, { x: x + 0.25, y: 1.55, w: 0.35, h: 0.35, fill: { color: t.color }, line: { color: colors.deepSpace, pt: 2 } });
    slide9.addText(t.q, { x: x, y: 2.0, w: 0.85, h: 0.2, fontSize: 9, color: t.color, bold: true, align: "center" });
    slide9.addText(t.label, { x: x, y: 2.2, w: 0.85, h: 0.2, fontSize: 8, color: colors.silver, align: "center" });
  });
  
  // Current traction
  slide9.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 2.6, w: 4.5, h: 2.0, fill: { color: colors.darkSurface } });
  slide9.addText("CURRENT TRACTION", { x: 0.5, y: 2.7, w: 4.3, h: 0.3, fontSize: 11, color: colors.accentGreen, bold: true });
  slide9.addText("✓  Core Platform Built - AI orchestration working", { x: 0.5, y: 3.1, w: 4.3, h: 0.25, fontSize: 10, color: colors.white });
  slide9.addText("✓  3 LOIs Signed - Semiconductor fabs", { x: 0.5, y: 3.4, w: 4.3, h: 0.25, fontSize: 10, color: colors.white });
  slide9.addText("✓  Domain Expert Team - PhDs in all verticals", { x: 0.5, y: 3.7, w: 4.3, h: 0.25, fontSize: 10, color: colors.white });
  
  // 18-month targets
  slide9.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 5.1, y: 2.6, w: 4.5, h: 2.0, fill: { color: colors.darkSurface } });
  slide9.addText("18-MONTH TARGETS", { x: 5.2, y: 2.7, w: 4.3, h: 0.3, fontSize: 11, color: colors.auroraCyan, bold: true });
  
  const targets = [
    { val: "$2M", label: "ARR" },
    { val: "25", label: "Customers" },
    { val: "100+", label: "Products" },
    { val: "3", label: "Divisions" }
  ];
  targets.forEach((t, i) => {
    const x = 5.3 + (i % 2) * 2.1;
    const y = 3.1 + Math.floor(i / 2) * 0.7;
    slide9.addText(t.val, { x: x, y: y, w: 1.5, h: 0.35, fontSize: 18, color: colors.auroraCyan, bold: true });
    slide9.addText(t.label, { x: x, y: y + 0.35, w: 1.5, h: 0.2, fontSize: 9, color: colors.silver });
  });
  
  slide9.addText("AURION Research Labs | 9", { x: 8.5, y: 5.1, w: 1.3, h: 0.2, fontSize: 9, color: colors.silver });
  
  // ============================================================
  // SLIDE 10: Competition
  // ============================================================
  let slide10 = pptx.addSlide();
  slide10.background = { color: colors.deepSpace };
  
  slide10.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: 0.1, h: "100%", fill: { color: colors.accentOrange } });
  slide10.addText("COMPETITIVE LANDSCAPE", { x: 0.4, y: 0.3, w: 9, h: 0.6, fontSize: 32, fontFace: "Arial Black", color: colors.accentOrange, bold: true });
  slide10.addText("Unique positioning: domain expertise + AI automation", { x: 0.4, y: 0.8, w: 9, h: 0.3, fontSize: 14, color: colors.silver });
  
  // Competitive table
  const tableData = [
    [{ text: "", options: { fill: { color: colors.darkSurface } } },
     { text: "Domain", options: { bold: true, color: colors.silver, fill: { color: colors.darkSurface } } },
     { text: "Code Gen", options: { bold: true, color: colors.silver, fill: { color: colors.darkSurface } } },
     { text: "Auto Deploy", options: { bold: true, color: colors.silver, fill: { color: colors.darkSurface } } },
     { text: "Compliance", options: { bold: true, color: colors.silver, fill: { color: colors.darkSurface } } }],
    [{ text: "AURION Labs", options: { bold: true, color: colors.auroraCyan, fill: { color: "1a2744" } } },
     { text: "●", options: { color: colors.accentGreen, fill: { color: "1a2744" } } },
     { text: "●", options: { color: colors.accentGreen, fill: { color: "1a2744" } } },
     { text: "●", options: { color: colors.accentGreen, fill: { color: "1a2744" } } },
     { text: "●", options: { color: colors.accentGreen, fill: { color: "1a2744" } } }],
    [{ text: "Cadence/Synopsys", options: { color: colors.white, fill: { color: colors.darkSurface } } },
     { text: "●", options: { color: colors.accentGreen, fill: { color: colors.darkSurface } } },
     { text: "○", options: { color: colors.accentRed, fill: { color: colors.darkSurface } } },
     { text: "○", options: { color: colors.accentRed, fill: { color: colors.darkSurface } } },
     { text: "◐", options: { color: colors.accentOrange, fill: { color: colors.darkSurface } } }],
    [{ text: "v0/Cursor/Bolt", options: { color: colors.white, fill: { color: colors.darkSurface } } },
     { text: "○", options: { color: colors.accentRed, fill: { color: colors.darkSurface } } },
     { text: "●", options: { color: colors.accentGreen, fill: { color: colors.darkSurface } } },
     { text: "◐", options: { color: colors.accentOrange, fill: { color: colors.darkSurface } } },
     { text: "○", options: { color: colors.accentRed, fill: { color: colors.darkSurface } } }],
    [{ text: "Retool/Appsmith", options: { color: colors.white, fill: { color: colors.darkSurface } } },
     { text: "○", options: { color: colors.accentRed, fill: { color: colors.darkSurface } } },
     { text: "◐", options: { color: colors.accentOrange, fill: { color: colors.darkSurface } } },
     { text: "●", options: { color: colors.accentGreen, fill: { color: colors.darkSurface } } },
     { text: "○", options: { color: colors.accentRed, fill: { color: colors.darkSurface } } }]
  ];
  
  slide10.addTable(tableData, {
    x: 0.4, y: 1.2, w: 6, h: 2.5,
    fontSize: 10, align: "center", valign: "middle",
    border: { pt: 1, color: "334155" },
    colW: [1.5, 1.0, 1.0, 1.1, 1.1]
  });
  
  // Why we win
  slide10.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 6.7, y: 1.2, w: 3.0, h: 2.5, fill: { color: colors.darkSurface }, line: { color: colors.auroraCyan, pt: 1 } });
  slide10.addText("WHY WE WIN", { x: 6.85, y: 1.35, w: 2.7, h: 0.3, fontSize: 12, color: colors.auroraCyan, bold: true });
  slide10.addText("1. Full-Stack Automation\n   Not just code gen — complete SaaS\n\n2. Domain Intelligence\n   Deep knowledge graphs\n\n3. Simulation Native\n   Built-in tool integration\n\n4. Compliance First\n   HIPAA/ISO built-in", {
    x: 6.85, y: 1.7, w: 2.7, h: 2.0, fontSize: 9, color: colors.white
  });
  
  // Legend
  slide10.addText("● Strong   ◐ Partial   ○ Weak", { x: 0.4, y: 3.9, w: 4, h: 0.2, fontSize: 9, color: colors.silver });
  
  // Gap box
  slide10.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 4.2, w: 9.2, h: 0.7, fill: { color: "0f172a" }, line: { color: colors.accentOrange, pt: 2 } });
  slide10.addText("THE GAP WE FILL: Traditional tools lack AI automation. AI tools lack domain expertise. AURION combines both.", {
    x: 0.5, y: 4.35, w: 9.0, h: 0.4, fontSize: 11, color: colors.white, align: "center"
  });
  
  slide10.addText("AURION Research Labs | 10", { x: 8.4, y: 5.1, w: 1.4, h: 0.2, fontSize: 9, color: colors.silver });
  
  // ============================================================
  // SLIDE 11: Go-to-Market
  // ============================================================
  let slide11 = pptx.addSlide();
  slide11.background = { color: colors.deepSpace };
  
  slide11.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: 0.1, h: "100%", fill: { color: colors.auroraViolet } });
  slide11.addText("GO-TO-MARKET", { x: 0.4, y: 0.3, w: 9, h: 0.6, fontSize: 36, fontFace: "Arial Black", color: colors.auroraViolet, bold: true });
  slide11.addText("Founder-led sales to lighthouse customers, then scale", { x: 0.4, y: 0.85, w: 9, h: 0.3, fontSize: 14, color: colors.silver });
  
  const gtmPhases = [
    { phase: "1", title: "LIGHTHOUSE", period: "Months 1-6", arr: "$500K ARR", color: colors.auroraCyan,
      items: ["Founder network outreach", "SEMICON conference", "Co-development deals"] },
    { phase: "2", title: "EXPAND", period: "Months 7-12", arr: "$2M ARR", color: colors.auroraViolet,
      items: ["First 2 AEs hired", "Content marketing", "Partner channels"] },
    { phase: "3", title: "SCALE", period: "Months 13-18", arr: "$8M ARR", color: colors.auroraMagenta,
      items: ["Marketplace live", "Enterprise motion", "APAC/EMEA expansion"] }
  ];
  
  gtmPhases.forEach((p, i) => {
    const x = 0.4 + i * 3.15;
    slide11.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: x, y: 1.3, w: 3.0, h: 2.6, fill: { color: colors.darkSurface } });
    slide11.addShape(pptx.shapes.RECTANGLE, { x: x, y: 1.3, w: 0.06, h: 2.6, fill: { color: p.color } });
    slide11.addText(p.phase, { x: x + 0.15, y: 1.4, w: 0.35, h: 0.35, fontSize: 14, color: p.color, bold: true });
    slide11.addText(p.title, { x: x + 0.55, y: 1.45, w: 2.3, h: 0.25, fontSize: 11, color: p.color, bold: true });
    slide11.addText(p.period, { x: x + 0.55, y: 1.7, w: 2.3, h: 0.2, fontSize: 9, color: colors.silver });
    
    p.items.forEach((item, j) => {
      slide11.addText("▸ " + item, { x: x + 0.15, y: 2.1 + j * 0.3, w: 2.7, h: 0.25, fontSize: 9, color: colors.white });
    });
    
    slide11.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: x + 0.4, y: 3.4, w: 2.2, h: 0.4, fill: { color: "0f172a" } });
    slide11.addText(p.arr, { x: x + 0.4, y: 3.45, w: 2.2, h: 0.3, fontSize: 12, color: p.color, bold: true, align: "center" });
  });
  
  // Target customers
  slide11.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 4.1, w: 9.2, h: 0.9, fill: { color: colors.darkSurface } });
  slide11.addText("TARGET CUSTOMERS", { x: 0.5, y: 4.2, w: 2, h: 0.25, fontSize: 10, color: colors.accentOrange, bold: true });
  slide11.addText("SEMICONDUCTOR: TSMC, Intel, Samsung, GlobalFoundries  |  PHOTONICS: Lumentum, II-VI, university labs  |  BIOMEDICAL: Hospital systems, med device companies", {
    x: 0.5, y: 4.5, w: 9.0, h: 0.4, fontSize: 9, color: colors.white
  });
  
  slide11.addText("AURION Research Labs | 11", { x: 8.4, y: 5.1, w: 1.4, h: 0.2, fontSize: 9, color: colors.silver });
  
  // ============================================================
  // SLIDE 12: Team & The Ask
  // ============================================================
  let slide12 = pptx.addSlide();
  slide12.background = { color: colors.deepSpace };
  
  slide12.addText("TEAM & THE ASK", { x: 0.4, y: 0.3, w: 9, h: 0.6, fontSize: 36, fontFace: "Arial Black", color: colors.white, bold: true });
  slide12.addText("World-class team raising to capture a generational opportunity", { x: 0.4, y: 0.85, w: 9, h: 0.3, fontSize: 14, color: colors.silver });
  
  // Team
  slide12.addText("FOUNDING TEAM", { x: 0.4, y: 1.3, w: 4, h: 0.3, fontSize: 12, color: colors.auroraCyan, bold: true });
  
  slide12.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 1.65, w: 4.5, h: 0.8, fill: { color: colors.darkSurface } });
  slide12.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.75, w: 0.6, h: 0.6, fill: { color: colors.auroraCyan } });
  slide12.addText("LM", { x: 0.5, y: 1.9, w: 0.6, h: 0.3, fontSize: 14, color: colors.deepSpace, bold: true, align: "center" });
  slide12.addText("Louis Marie • CEO & Founder", { x: 1.2, y: 1.75, w: 3.5, h: 0.25, fontSize: 11, color: colors.white, bold: true });
  slide12.addText("PhD Electronics, 10+ years semiconductor R&D", { x: 1.2, y: 2.0, w: 3.5, h: 0.35, fontSize: 9, color: colors.silver });
  
  slide12.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 2.55, w: 4.5, h: 0.8, fill: { color: colors.darkSurface } });
  slide12.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 2.65, w: 0.6, h: 0.6, fill: { color: colors.auroraViolet } });
  slide12.addText("CTO", { x: 0.5, y: 2.8, w: 0.6, h: 0.3, fontSize: 12, color: colors.white, bold: true, align: "center" });
  slide12.addText("[CTO] • Chief Technology Officer", { x: 1.2, y: 2.65, w: 3.5, h: 0.25, fontSize: 11, color: colors.white, bold: true });
  slide12.addText("Ex-Google AI, Stanford CS PhD, LangChain contributor", { x: 1.2, y: 2.9, w: 3.5, h: 0.35, fontSize: 9, color: colors.silver });
  
  // Advisors
  slide12.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 3.5, w: 4.5, h: 1.0, fill: { color: "0f172a" } });
  slide12.addText("ADVISORS", { x: 0.5, y: 3.6, w: 4.3, h: 0.25, fontSize: 10, color: colors.accentOrange, bold: true });
  slide12.addText("• Dr. Sarah Chen — Former Lam Research VP\n• Prof. Michael Torres — MIT EECS\n• James Park — Ex-a16z, Enterprise SaaS", {
    x: 0.5, y: 3.9, w: 4.3, h: 0.6, fontSize: 9, color: colors.silver
  });
  
  // The Ask
  slide12.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 5.1, y: 1.3, w: 4.5, h: 2.0, fill: { color: colors.darkSurface }, line: { color: colors.auroraCyan, pt: 2 } });
  slide12.addText("SEED ROUND", { x: 5.2, y: 1.45, w: 4.3, h: 0.3, fontSize: 12, color: colors.auroraCyan, bold: true, align: "center" });
  slide12.addText("$5M", { x: 5.2, y: 1.8, w: 4.3, h: 0.7, fontSize: 48, color: colors.white, bold: true, align: "center" });
  slide12.addText("Target Raise", { x: 5.2, y: 2.45, w: 4.3, h: 0.25, fontSize: 11, color: colors.silver, align: "center" });
  slide12.addText("18 mo runway  |  $25M post-money", { x: 5.2, y: 2.8, w: 4.3, h: 0.25, fontSize: 10, color: colors.auroraViolet, align: "center" });
  
  // Use of funds
  slide12.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 5.1, y: 3.5, w: 4.5, h: 1.0, fill: { color: colors.darkSurface } });
  slide12.addText("USE OF FUNDS", { x: 5.2, y: 3.6, w: 4.3, h: 0.25, fontSize: 10, color: colors.accentOrange, bold: true });
  slide12.addText("Engineering 50%  |  GTM 25%  |  Infra 15%  |  WC 10%", {
    x: 5.2, y: 3.9, w: 4.3, h: 0.5, fontSize: 10, color: colors.white, align: "center"
  });
  
  // CTA
  slide12.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 4.7, w: 9.2, h: 0.5, fill: { color: colors.auroraCyan } });
  slide12.addText("Let's build the future of engineering together.  |  contact@aurionlabs.ai", {
    x: 0.5, y: 4.78, w: 9.0, h: 0.35, fontSize: 12, color: colors.deepSpace, bold: true, align: "center"
  });
  
  slide12.addText("AURION Research Labs | 12", { x: 8.4, y: 5.3, w: 1.4, h: 0.2, fontSize: 9, color: colors.silver });
  
  // Save the presentation
  const outputPath = "AURION_Investor_Pitch_Deck.pptx";
  await pptx.writeFile(outputPath);
  console.log(`\n✓ Presentation saved to ${outputPath}`);
}

createPitchDeck().catch(console.error);
