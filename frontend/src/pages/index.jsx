import React, { useState, useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Environment } from '@react-three/drei';
import * as THREE from 'three';

// =====================================================
// ATLAS - Advanced Technology Labs for Applied Sciences
// Modern Interactive Website - Inspired by Vercel/Linear/Stripe
// =====================================================

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
    subtle: 'linear-gradient(135deg, rgba(0, 212, 255, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
    glow: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
  },
};

// Animated Background Orb (3D)
function AnimatedOrb() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y = clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.5}>
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

// Gradient Mesh Background
function GradientMesh() {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
    }}>
      {/* Primary Glow */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '-20%',
          left: '10%',
          width: '60vw',
          height: '60vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      {/* Secondary Glow */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '30%',
          right: '-10%',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.12) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      {/* Accent Glow */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '30%',
          width: '40vw',
          height: '40vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />
    </div>
  );
}

// Grid Pattern
function GridPattern() {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      backgroundImage: `
        linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
      `,
      backgroundSize: '60px 60px',
      maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
      pointerEvents: 'none',
    }} />
  );
}

// Animated Text Gradient
function GradientText({ children, style = {} }) {
  return (
    <span style={{
      background: theme.gradients.primary,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      ...style,
    }}>
      {children}
    </span>
  );
}

// Navigation
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
        background: scrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderRadius: '16px',
        border: scrolled ? `1px solid ${theme.colors.border}` : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.6 }}
            style={{
              width: '40px',
              height: '40px',
              background: theme.gradients.primary,
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
          <span style={{
            fontSize: '20px',
            fontWeight: 700,
            color: theme.colors.text.primary,
            letterSpacing: '-0.5px',
          }}>ATLAS</span>
        </Link>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {[
            { name: 'Projects', href: '/projects' },
            { name: 'About', href: '/about' },
            { name: 'Contact', href: '/contact' },
          ].map((item) => (
            <Link key={item.name} href={item.href} style={{ textDecoration: 'none' }}>
              <motion.div
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                style={{
                  padding: '10px 16px',
                  borderRadius: '10px',
                  color: theme.colors.text.secondary,
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.target.style.color = theme.colors.text.primary}
                onMouseLeave={(e) => e.target.style.color = theme.colors.text.secondary}
              >
                {item.name}
              </motion.div>
            </Link>
          ))}
          <Link href="/projects" style={{ textDecoration: 'none', marginLeft: '8px' }}>
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

// Hero Section
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: '120px 24px 80px',
    }}>
      <GradientMesh />
      <GridPattern />

      {/* 3D Background */}
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '-5%',
        width: '50%',
        height: '80%',
        transform: 'translateY(-50%)',
        opacity: 0.6,
      }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <AnimatedOrb />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>

      <motion.div style={{ y, opacity, position: 'relative', zIndex: 10, maxWidth: '1000px', textAlign: 'center' }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            background: theme.colors.glass,
            backdropFilter: 'blur(10px)',
            borderRadius: '100px',
            border: `1px solid ${theme.colors.border}`,
            fontSize: '13px',
            color: theme.colors.text.secondary,
            marginBottom: '32px',
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: theme.colors.accent.emerald,
              boxShadow: `0 0 12px ${theme.colors.accent.emerald}`,
            }} />
            Now in Private Beta
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            fontSize: 'clamp(48px, 10vw, 80px)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: theme.colors.text.primary,
            margin: '0 0 24px',
          }}
        >
          Build the future with
          <br />
          <GradientText>AI-powered automation</GradientText>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontSize: 'clamp(18px, 2.5vw, 22px)',
            color: theme.colors.text.secondary,
            lineHeight: 1.6,
            maxWidth: '640px',
            margin: '0 auto 48px',
          }}
        >
          Transform research into production-ready software. From semiconductors
          to biomedical engineering — deploy domain-specific AI in hours, not months.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <Link href="/projects" style={{ textDecoration: 'none' }}>
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(139, 92, 246, 0.4)' }}
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
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              Explore Projects
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </Link>
          <Link href="/about" style={{ textDecoration: 'none' }}>
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
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
              Learn More
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '64px',
            marginTop: '80px',
            flexWrap: 'wrap',
          }}
        >
          {[
            { value: '90%', label: 'Faster Development' },
            { value: '10+', label: 'Active Platforms' },
            { value: '4hrs', label: 'Avg Deploy Time' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{
                fontSize: '48px',
                fontWeight: 800,
                background: theme.gradients.primary,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em',
              }}>{stat.value}</div>
              <div style={{
                fontSize: '14px',
                color: theme.colors.text.muted,
                marginTop: '4px',
              }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <div style={{
          width: '24px',
          height: '40px',
          border: `2px solid ${theme.colors.border}`,
          borderRadius: '12px',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '8px',
        }}>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: '4px',
              height: '8px',
              background: theme.colors.text.muted,
              borderRadius: '2px',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}

// Feature Card
function FeatureCard({ feature, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      style={{
        position: 'relative',
        padding: '32px',
        background: theme.colors.glass,
        backdropFilter: 'blur(20px)',
        borderRadius: '20px',
        border: `1px solid ${theme.colors.border}`,
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      {/* Gradient Accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: `linear-gradient(90deg, transparent, ${feature.color}, transparent)`,
      }} />

      {/* Icon */}
      <div style={{
        width: '56px',
        height: '56px',
        borderRadius: '14px',
        background: `${feature.color}15`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '28px',
        marginBottom: '20px',
      }}>
        {feature.icon}
      </div>

      <h3 style={{
        fontSize: '22px',
        fontWeight: 700,
        color: theme.colors.text.primary,
        marginBottom: '4px',
      }}>{feature.title}</h3>

      <p style={{
        fontSize: '14px',
        color: feature.color,
        marginBottom: '12px',
        fontWeight: 500,
      }}>{feature.subtitle}</p>

      <p style={{
        fontSize: '15px',
        color: theme.colors.text.secondary,
        lineHeight: 1.6,
      }}>{feature.description}</p>

      {/* Hover Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 0%, ${feature.color}10 0%, transparent 60%)`,
          pointerEvents: 'none',
        }}
      />
    </motion.div>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: '⚡',
      title: 'ElectroAI',
      subtitle: 'Semiconductor & Electronics',
      description: 'CMP optimization, yield prediction, SPC dashboards, and predictive maintenance for fab automation.',
      color: theme.colors.accent.violet,
    },
    {
      icon: '💡',
      title: 'PhotonAI',
      subtitle: 'Photonics & Optoelectronics',
      description: 'FDTD simulation orchestration, waveguide design, and photonic chip layout generation.',
      color: theme.colors.accent.cyan,
    },
    {
      icon: '🧬',
      title: 'BioAI',
      subtitle: 'Biomedical Engineering',
      description: 'HIPAA-compliant biosignal analysis, drug discovery, and clinical decision support.',
      color: theme.colors.accent.emerald,
    },
    {
      icon: '⚛️',
      title: 'NanoAI',
      subtitle: 'Materials Science',
      description: 'Multi-scale simulations, ML property predictions, and automated materials discovery.',
      color: theme.colors.accent.amber,
    },
    {
      icon: '🛡️',
      title: 'DefenseAI',
      subtitle: 'Autonomous Systems',
      description: 'GPS-denied navigation, sensor fusion, and autonomous vehicle intelligence.',
      color: theme.colors.accent.magenta,
    },
    {
      icon: '🚀',
      title: 'SpaceAI',
      subtitle: 'Aerospace & Orbital',
      description: 'Satellite constellation management, orbital mechanics, and geophysical sensing.',
      color: theme.colors.accent.cyan,
    },
  ];

  return (
    <section style={{
      position: 'relative',
      padding: '160px 24px',
      background: theme.colors.bg.secondary,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
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
            color: theme.colors.accent.violet,
            fontWeight: 600,
            marginBottom: '24px',
          }}>RESEARCH DIVISIONS</span>

          <h2 style={{
            fontSize: 'clamp(36px, 6vw, 56px)',
            fontWeight: 800,
            color: theme.colors.text.primary,
            letterSpacing: '-0.02em',
            marginBottom: '20px',
          }}>
            Six verticals. <GradientText>One platform.</GradientText>
          </h2>

          <p style={{
            fontSize: '18px',
            color: theme.colors.text.secondary,
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Domain-specific AI agents that understand your industry
            and generate production-ready software.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px',
        }}>
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Process Step
function ProcessStep({ step, index, total }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '24px',
        position: 'relative',
      }}
    >
      {/* Number & Line */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '14px',
            background: theme.gradients.primary,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            fontWeight: 700,
            color: 'white',
          }}
        >
          {step.num}
        </motion.div>
        {index < total - 1 && (
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '80px' } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
            style={{
              width: '2px',
              background: `linear-gradient(180deg, ${theme.colors.accent.violet}, transparent)`,
              marginTop: '12px',
            }}
          />
        )}
      </div>

      {/* Content */}
      <div style={{ paddingTop: '8px', paddingBottom: '40px' }}>
        <h3 style={{
          fontSize: '24px',
          fontWeight: 700,
          color: theme.colors.text.primary,
          marginBottom: '8px',
        }}>{step.title}</h3>
        <p style={{
          fontSize: '16px',
          color: theme.colors.text.secondary,
          lineHeight: 1.6,
        }}>{step.desc}</p>
      </div>
    </motion.div>
  );
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    { num: '01', title: 'Describe Your Vision', desc: 'Use natural language to specify your domain, requirements, and desired functionality.' },
    { num: '02', title: 'AI Architects the System', desc: 'Our AI agents design the complete architecture, database schema, and API specifications.' },
    { num: '03', title: 'Code Generation', desc: 'Production-ready code is generated with best practices, tests, and documentation.' },
    { num: '04', title: 'Deploy & Scale', desc: 'Auto-deployed to cloud infrastructure with monitoring, CI/CD, and auto-scaling.' },
  ];

  return (
    <section style={{
      position: 'relative',
      padding: '160px 24px',
      background: theme.colors.bg.primary,
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Section Header */}
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
          }}>HOW IT WORKS</span>

          <h2 style={{
            fontSize: 'clamp(36px, 6vw, 56px)',
            fontWeight: 800,
            color: theme.colors.text.primary,
            letterSpacing: '-0.02em',
          }}>
            From prompt to <GradientText>production</GradientText>
          </h2>
        </motion.div>

        {/* Steps */}
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          {steps.map((step, i) => (
            <ProcessStep key={step.num} step={step} index={i} total={steps.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Marquee Section
function MarqueeSection() {
  const projects = [
    'GALILEO', 'AURORA-NAV', 'BRAINIAC', 'PROMETHEUS',
    'O.R.I.O.N', 'SPECTRA-Lab', 'SAGE.AI', 'Veritas Medical',
  ];

  return (
    <section style={{
      padding: '60px 0',
      background: theme.colors.bg.tertiary,
      borderTop: `1px solid ${theme.colors.border}`,
      borderBottom: `1px solid ${theme.colors.border}`,
      overflow: 'hidden',
    }}>
      <motion.div
        animate={{ x: [0, -1920] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'flex', gap: '80px', whiteSpace: 'nowrap' }}
      >
        {[...projects, ...projects, ...projects].map((name, i) => (
          <span key={i} style={{
            fontSize: '32px',
            fontWeight: 700,
            color: theme.colors.text.muted,
            opacity: 0.5,
          }}>
            {name}
          </span>
        ))}
      </motion.div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section style={{
      position: 'relative',
      padding: '160px 24px',
      background: theme.colors.bg.primary,
      overflow: 'hidden',
    }}>
      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80vw',
        height: '80vw',
        maxWidth: '800px',
        maxHeight: '800px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 60%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          position: 'relative',
          maxWidth: '700px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h2 style={{
          fontSize: 'clamp(40px, 7vw, 64px)',
          fontWeight: 800,
          color: theme.colors.text.primary,
          letterSpacing: '-0.02em',
          marginBottom: '24px',
        }}>
          Ready to build the <GradientText>future</GradientText>?
        </h2>

        <p style={{
          fontSize: '18px',
          color: theme.colors.text.secondary,
          lineHeight: 1.6,
          marginBottom: '48px',
        }}>
          Join the private beta and be among the first to automate
          your engineering software development.
        </p>

        <div style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          maxWidth: '500px',
          margin: '0 auto',
        }}>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              flex: 1,
              minWidth: '200px',
              padding: '16px 20px',
              background: theme.colors.glass,
              border: `1px solid ${theme.colors.border}`,
              borderRadius: '12px',
              color: theme.colors.text.primary,
              fontSize: '15px',
              outline: 'none',
            }}
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              padding: '16px 28px',
              background: theme.gradients.primary,
              border: 'none',
              borderRadius: '12px',
              color: 'white',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Request Access
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer style={{
      padding: '80px 24px 40px',
      background: theme.colors.bg.secondary,
      borderTop: `1px solid ${theme.colors.border}`,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px',
          marginBottom: '60px',
        }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '20px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                background: theme.gradients.primary,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2"/>
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2"/>
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <span style={{ fontSize: '18px', fontWeight: 700, color: theme.colors.text.primary }}>ATLAS</span>
            </Link>
            <p style={{ fontSize: '14px', color: theme.colors.text.muted, lineHeight: 1.6, maxWidth: '280px' }}>
              Building the Intelligence that Builds the Future.
            </p>
          </div>

          {/* Links */}
          {[
            { title: 'Platform', links: [
              { name: 'Projects', href: '/projects' },
              { name: 'About', href: '/about' },
              { name: 'Contact', href: '/contact' },
            ]},
            { title: 'Divisions', links: [
              { name: 'ElectroAI', href: '/projects' },
              { name: 'PhotonAI', href: '/projects' },
              { name: 'BioAI', href: '/projects' },
              { name: 'NanoAI', href: '/projects' },
            ]},
            { title: 'Connect', links: [
              { name: 'GitHub', href: 'https://github.com/alovladi007', external: true },
              { name: 'LinkedIn', href: '#' },
              { name: 'Twitter', href: '#' },
            ]},
          ].map((section) => (
            <div key={section.title}>
              <h4 style={{
                fontSize: '13px',
                fontWeight: 600,
                color: theme.colors.text.muted,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '16px',
              }}>{section.title}</h4>
              {section.links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  style={{
                    display: 'block',
                    fontSize: '14px',
                    color: theme.colors.text.secondary,
                    textDecoration: 'none',
                    marginBottom: '10px',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => e.target.style.color = theme.colors.text.primary}
                  onMouseLeave={(e) => e.target.style.color = theme.colors.text.secondary}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{
          paddingTop: '24px',
          borderTop: `1px solid ${theme.colors.border}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <p style={{ fontSize: '13px', color: theme.colors.text.muted }}>
            © 2025 ATLAS - Advanced Technology Labs for Applied Sciences
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy', 'Terms', 'Security'].map((item) => (
              <a key={item} href="#" style={{ fontSize: '13px', color: theme.colors.text.muted, textDecoration: 'none' }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App
export default function ATLASWebsite() {
  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
      background: theme.colors.bg.primary,
      color: theme.colors.text.primary,
      minHeight: '100vh',
      WebkitFontSmoothing: 'antialiased',
    }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::selection { background: rgba(139, 92, 246, 0.4); }
        body { overflow-x: hidden; }
      `}</style>

      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <MarqueeSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </div>
  );
}
