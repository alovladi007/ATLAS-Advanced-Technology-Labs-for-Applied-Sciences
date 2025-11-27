import React, { useState, useRef, Suspense, useMemo } from 'react';
import * as THREE from 'three';

// =====================================================
// ATLAS - Advanced Technology Labs for Applied Sciences
// Interactive Marketing Website
// "Building the Intelligence that Builds the Future"
// =====================================================

// Brand Colors
const colors = {
  deepSpace: '#0a0f1a',
  auroraCyan: '#00d4ff',
  auroraViolet: '#7c3aed',
  auroraMagenta: '#ec4899',
  silver: '#94a3b8',
  white: '#ffffff',
  darkSurface: '#1e293b',
  accentGreen: '#10b981',
};

// Animated Hexagon Grid Background
function HexagonGrid() {
  const groupRef = useRef();
  const [time, setTime] = useState(0);
  
  React.useEffect(() => {
    const interval = setInterval(() => setTime(t => t + 0.02), 50);
    return () => clearInterval(interval);
  }, []);

  const hexagons = useMemo(() => {
    const items = [];
    for (let x = -5; x <= 5; x++) {
      for (let y = -3; y <= 3; y++) {
        const offset = y % 2 === 0 ? 0 : 0.9;
        items.push({ x: x * 1.8 + offset, y: y * 1.6, z: -5 });
      }
    }
    return items;
  }, []);

  return (
    <group ref={groupRef}>
      {hexagons.map((hex, i) => {
        const pulse = Math.sin(time + i * 0.2) * 0.5 + 0.5;
        const color = i % 3 === 0 ? colors.auroraCyan : i % 3 === 1 ? colors.auroraViolet : colors.auroraMagenta;
        return (
          <mesh key={i} position={[hex.x, hex.y, hex.z]}>
            <circleGeometry args={[0.4, 6]} />
            <meshBasicMaterial 
              color={color} 
              transparent 
              opacity={pulse * 0.15 + 0.05}
              wireframe
            />
          </mesh>
        );
      })}
    </group>
  );
}

// Rotating DNA-like Helix representing AI/Biotech
function AIHelix() {
  const groupRef = useRef();
  const [rotation, setRotation] = useState(0);
  
  React.useEffect(() => {
    const interval = setInterval(() => setRotation(r => r + 0.01), 30);
    return () => clearInterval(interval);
  }, []);

  const spheres = useMemo(() => {
    const items = [];
    for (let i = 0; i < 30; i++) {
      const t = i * 0.4;
      items.push({
        x: Math.cos(t) * 1.5,
        y: (i - 15) * 0.3,
        z: Math.sin(t) * 1.5,
        color: i % 2 === 0 ? colors.auroraCyan : colors.auroraViolet
      });
    }
    return items;
  }, []);

  return (
    <group ref={groupRef} rotation={[0, rotation, 0.2]} position={[4, 0, -2]}>
      {spheres.map((s, i) => (
        <mesh key={i} position={[s.x, s.y, s.z]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshBasicMaterial color={s.color} />
        </mesh>
      ))}
    </group>
  );
}

// Neural Network Visualization
function NeuralNetwork() {
  const [pulse, setPulse] = useState(0);
  
  React.useEffect(() => {
    const interval = setInterval(() => setPulse(p => (p + 0.05) % (Math.PI * 2)), 50);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { x: -2, y: 1, z: 0 }, { x: -2, y: 0, z: 0 }, { x: -2, y: -1, z: 0 },
    { x: 0, y: 1.5, z: 0 }, { x: 0, y: 0.5, z: 0 }, { x: 0, y: -0.5, z: 0 }, { x: 0, y: -1.5, z: 0 },
    { x: 2, y: 0.5, z: 0 }, { x: 2, y: -0.5, z: 0 },
  ];

  return (
    <group position={[-4, 0, -2]}>
      {nodes.map((node, i) => (
        <mesh key={i} position={[node.x, node.y, node.z]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshBasicMaterial 
            color={colors.auroraCyan} 
            transparent 
            opacity={Math.sin(pulse + i * 0.5) * 0.4 + 0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

// Simple 3D Scene without R3F Canvas (using CSS 3D transforms for compatibility)
function Scene3D() {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      background: `radial-gradient(ellipse at center, ${colors.darkSurface} 0%, ${colors.deepSpace} 70%)`,
    }}>
      {/* Animated gradient orbs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${colors.auroraCyan}20, transparent 70%)`,
        filter: 'blur(40px)',
        animation: 'float 8s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '15%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${colors.auroraViolet}20, transparent 70%)`,
        filter: 'blur(50px)',
        animation: 'float 10s ease-in-out infinite reverse',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '30%',
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${colors.auroraMagenta}15, transparent 70%)`,
        filter: 'blur(45px)',
        animation: 'float 12s ease-in-out infinite',
      }} />
      
      {/* Grid pattern */}
      <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.1 }}>
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke={colors.auroraCyan} strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

// Navigation Component
function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: `linear-gradient(180deg, ${colors.deepSpace}ee 0%, ${colors.deepSpace}00 100%)`,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <svg width="40" height="40" viewBox="0 0 120 120">
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.auroraCyan}/>
              <stop offset="100%" stopColor={colors.auroraViolet}/>
            </linearGradient>
          </defs>
          <polygon points="60,10 100,35 100,75 60,100 20,75 20,35" fill="none" stroke="url(#logoGrad)" strokeWidth="3"/>
          <circle cx="60" cy="55" r="8" fill="url(#logoGrad)"/>
        </svg>
        <span style={{ fontSize: '24px', fontWeight: 800, color: colors.auroraCyan, letterSpacing: '2px' }}>ATLAS</span>
      </div>
      
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        {['Product', 'Solutions', 'Pricing', 'Docs'].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{
            color: colors.silver,
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 500,
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.target.style.color = colors.white}
          onMouseLeave={e => e.target.style.color = colors.silver}
          >{item}</a>
        ))}
        <button style={{
          background: `linear-gradient(135deg, ${colors.auroraCyan}, ${colors.auroraViolet})`,
          border: 'none',
          borderRadius: '8px',
          padding: '10px 20px',
          color: colors.white,
          fontWeight: 600,
          cursor: 'pointer',
          fontSize: '14px',
        }}>Get Started</button>
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 40px 80px',
    }}>
      <Scene3D />
      
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        maxWidth: '900px',
      }}>
        <div style={{
          display: 'inline-block',
          padding: '8px 16px',
          background: `${colors.auroraViolet}20`,
          borderRadius: '20px',
          marginBottom: '24px',
          border: `1px solid ${colors.auroraViolet}40`,
        }}>
          <span style={{ color: colors.auroraViolet, fontSize: '13px', fontWeight: 600 }}>
            🚀 Now in Private Beta
          </span>
        </div>
        
        <h1 style={{
          fontSize: 'clamp(40px, 8vw, 72px)',
          fontWeight: 900,
          color: colors.white,
          margin: '0 0 24px',
          lineHeight: 1.1,
        }}>
          Building the Intelligence<br/>
          <span style={{
            background: `linear-gradient(135deg, ${colors.auroraCyan}, ${colors.auroraViolet}, ${colors.auroraMagenta})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>that Builds the Future</span>
        </h1>
        
        <p style={{
          fontSize: '20px',
          color: colors.silver,
          margin: '0 0 40px',
          lineHeight: 1.6,
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          AI-powered meta-automation that designs, codes, and deploys domain-specific SaaS 
          for electronics, photonics, and biomedical engineering.
        </p>
        
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button style={{
            background: `linear-gradient(135deg, ${colors.auroraCyan}, ${colors.auroraViolet})`,
            border: 'none',
            borderRadius: '12px',
            padding: '16px 32px',
            color: colors.white,
            fontWeight: 700,
            fontSize: '16px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            Start Building Free →
          </button>
          <button style={{
            background: 'transparent',
            border: `2px solid ${colors.silver}40`,
            borderRadius: '12px',
            padding: '14px 32px',
            color: colors.white,
            fontWeight: 600,
            fontSize: '16px',
            cursor: 'pointer',
          }}>
            Watch Demo
          </button>
        </div>
        
        <div style={{
          marginTop: '60px',
          display: 'flex',
          justifyContent: 'center',
          gap: '48px',
          flexWrap: 'wrap',
        }}>
          {[
            { value: '90%', label: 'Faster Development' },
            { value: '70%', label: 'Cost Reduction' },
            { value: '4hr', label: 'Prompt to Deploy' },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 800, color: colors.accentGreen }}>{stat.value}</div>
              <div style={{ fontSize: '14px', color: colors.silver }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: '⚡',
      title: 'ElectroAI',
      subtitle: 'Semiconductor & Electronics',
      description: 'CMP optimization, yield prediction, SPC dashboards, and fault detection for fab automation.',
      color: colors.auroraViolet,
    },
    {
      icon: '💡',
      title: 'PhotonAI',
      subtitle: 'Photonics & Optoelectronics',
      description: 'FDTD simulation orchestration, waveguide design, and photonic chip layout generation.',
      color: colors.auroraCyan,
    },
    {
      icon: '🧬',
      title: 'BioAI',
      subtitle: 'Biomedical Engineering',
      description: 'HIPAA-compliant biosignal analysis, DICOM processing, and clinical decision support.',
      color: colors.accentGreen,
    },
  ];

  return (
    <section id="solutions" style={{
      padding: '120px 40px',
      background: colors.deepSpace,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: 800, color: colors.white, margin: '0 0 16px' }}>
            Three Verticals. One Platform.
          </h2>
          <p style={{ fontSize: '18px', color: colors.silver, maxWidth: '600px', margin: '0 auto' }}>
            Domain-specific AI agents that understand your industry and generate production-ready software.
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {features.map(feature => (
            <div key={feature.title} style={{
              background: colors.darkSurface,
              borderRadius: '16px',
              padding: '32px',
              border: `1px solid ${colors.silver}20`,
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = `0 20px 40px ${feature.color}20`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <div style={{
                width: '56px',
                height: '56px',
                background: `${feature.color}20`,
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                marginBottom: '20px',
              }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: feature.color, margin: '0 0 4px' }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: '14px', color: colors.silver, margin: '0 0 16px' }}>
                {feature.subtitle}
              </p>
              <p style={{ fontSize: '15px', color: colors.white, margin: 0, lineHeight: 1.6 }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    { num: '01', title: 'Prompt', desc: 'Describe your SaaS in natural language', color: colors.auroraCyan },
    { num: '02', title: 'Design', desc: 'AI architects the full system', color: colors.auroraViolet },
    { num: '03', title: 'Generate', desc: 'Complete codebase is created', color: colors.auroraMagenta },
    { num: '04', title: 'Deploy', desc: 'Auto-deployed to production', color: colors.accentGreen },
  ];

  return (
    <section id="product" style={{
      padding: '120px 40px',
      background: `linear-gradient(180deg, ${colors.deepSpace} 0%, ${colors.darkSurface} 100%)`,
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '42px', fontWeight: 800, color: colors.white, textAlign: 'center', margin: '0 0 64px' }}>
          From Prompt to Production
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '32px',
        }}>
          {steps.map((step, i) => (
            <div key={step.num} style={{ textAlign: 'center', position: 'relative' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: `${step.color}20`,
                border: `2px solid ${step.color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
              }}>
                <span style={{ fontSize: '24px', fontWeight: 800, color: step.color }}>{step.num}</span>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: step.color, margin: '0 0 8px' }}>{step.title}</h3>
              <p style={{ fontSize: '14px', color: colors.silver, margin: 0 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section style={{
      padding: '120px 40px',
      background: colors.deepSpace,
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '48px', fontWeight: 800, color: colors.white, margin: '0 0 24px' }}>
          Ready to Build the Future?
        </h2>
        <p style={{ fontSize: '18px', color: colors.silver, margin: '0 0 40px', lineHeight: 1.6 }}>
          Join the private beta and be among the first to automate your engineering software development.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <input 
            type="email" 
            placeholder="Enter your email"
            style={{
              background: colors.darkSurface,
              border: `1px solid ${colors.silver}30`,
              borderRadius: '12px',
              padding: '16px 24px',
              color: colors.white,
              fontSize: '16px',
              width: '300px',
              outline: 'none',
            }}
          />
          <button style={{
            background: `linear-gradient(135deg, ${colors.auroraCyan}, ${colors.auroraViolet})`,
            border: 'none',
            borderRadius: '12px',
            padding: '16px 32px',
            color: colors.white,
            fontWeight: 700,
            fontSize: '16px',
            cursor: 'pointer',
          }}>
            Request Access
          </button>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer style={{
      padding: '60px 40px 40px',
      background: colors.darkSurface,
      borderTop: `1px solid ${colors.silver}20`,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '40px',
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span style={{ fontSize: '20px', fontWeight: 800, color: colors.auroraCyan }}>ATLAS</span>
            <span style={{ fontSize: '14px', color: colors.silver }}>ADVANCED TECHNOLOGY LABS</span>
          </div>
          <p style={{ fontSize: '14px', color: colors.silver, maxWidth: '300px' }}>
            Building the Intelligence that Builds the Future.
          </p>
        </div>
        
        {[
          { title: 'Product', links: ['Features', 'Pricing', 'Docs', 'API'] },
          { title: 'Company', links: ['About', 'Careers', 'Blog', 'Contact'] },
          { title: 'Legal', links: ['Privacy', 'Terms', 'Security'] },
        ].map(section => (
          <div key={section.title}>
            <h4 style={{ fontSize: '14px', fontWeight: 700, color: colors.white, margin: '0 0 16px' }}>{section.title}</h4>
            {section.links.map(link => (
              <a key={link} href="#" style={{ display: 'block', fontSize: '14px', color: colors.silver, textDecoration: 'none', marginBottom: '8px' }}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
      
      <div style={{
        maxWidth: '1200px',
        margin: '40px auto 0',
        paddingTop: '20px',
        borderTop: `1px solid ${colors.silver}20`,
        textAlign: 'center',
      }}>
        <p style={{ fontSize: '13px', color: colors.silver }}>
          © 2025 ATLAS - Advanced Technology Labs for Applied Sciences. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// Main App Component
export default function ATLASWebsite() {
  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: colors.deepSpace,
      minHeight: '100vh',
      color: colors.white,
    }}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
      `}</style>
      
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </div>
  );
}
