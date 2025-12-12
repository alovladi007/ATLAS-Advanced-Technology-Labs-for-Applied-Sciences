import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

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

// FAQ Data
const faqs = [
  {
    q: 'What industries do you serve?',
    a: 'We serve advanced engineering sectors including semiconductor manufacturing, photonics, biomedical/pharma, materials science, defense/aerospace, and academic research institutions.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'With our AI-powered automation, most projects go from concept to deployment in 4-48 hours. Complex enterprise integrations may take 1-2 weeks.',
  },
  {
    q: 'Do you offer pilot programs?',
    a: 'Yes! We offer 30-day pilot programs for enterprise clients. This allows you to evaluate our platform with real data before full deployment.',
  },
  {
    q: 'What about data security and compliance?',
    a: 'All platforms are designed with security-first architecture. We offer HIPAA compliance for healthcare, SOC 2 Type II certification, and custom security requirements.',
  },
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
            { name: 'About', href: '/about' },
            { name: 'Contact', href: '/contact', active: true },
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

// Contact Card
function ContactCard({ icon, title, value, link, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.a
      ref={ref}
      href={link}
      target={link.startsWith('http') ? '_blank' : undefined}
      rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4, borderColor: `${theme.colors.accent.cyan}40` }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '20px 24px',
        background: theme.colors.glass,
        backdropFilter: 'blur(20px)',
        borderRadius: '16px',
        border: `1px solid ${theme.colors.border}`,
        textDecoration: 'none',
        cursor: 'pointer',
      }}
    >
      <div style={{
        width: '48px',
        height: '48px',
        background: `${theme.colors.accent.cyan}15`,
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '22px',
      }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: '13px', color: theme.colors.text.muted, marginBottom: '4px' }}>{title}</div>
        <div style={{ fontSize: '15px', color: theme.colors.text.primary, fontWeight: 600 }}>{value}</div>
      </div>
    </motion.a>
  );
}

// Input Component
function Input({ label, type = 'text', name, value, onChange, placeholder, required }) {
  const [focused, setFocused] = useState(false);

  return (
    <div>
      <label style={{
        display: 'block',
        fontSize: '13px',
        fontWeight: 600,
        color: theme.colors.text.muted,
        marginBottom: '8px',
      }}>
        {label} {required && <span style={{ color: theme.colors.accent.magenta }}>*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%',
          padding: '14px 18px',
          background: theme.colors.bg.primary,
          border: `1px solid ${focused ? theme.colors.accent.violet : theme.colors.border}`,
          borderRadius: '12px',
          color: theme.colors.text.primary,
          fontSize: '15px',
          outline: 'none',
          transition: 'border-color 0.2s, box-shadow 0.2s',
          boxShadow: focused ? `0 0 0 3px ${theme.colors.accent.violet}20` : 'none',
        }}
      />
    </div>
  );
}

// Select Component
function Select({ label, name, value, onChange, options }) {
  const [focused, setFocused] = useState(false);

  return (
    <div>
      <label style={{
        display: 'block',
        fontSize: '13px',
        fontWeight: 600,
        color: theme.colors.text.muted,
        marginBottom: '8px',
      }}>
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%',
          padding: '14px 18px',
          background: theme.colors.bg.primary,
          border: `1px solid ${focused ? theme.colors.accent.violet : theme.colors.border}`,
          borderRadius: '12px',
          color: theme.colors.text.primary,
          fontSize: '15px',
          outline: 'none',
          cursor: 'pointer',
          transition: 'border-color 0.2s',
        }}
      >
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

// Textarea Component
function Textarea({ label, name, value, onChange, placeholder, required, rows = 5 }) {
  const [focused, setFocused] = useState(false);

  return (
    <div>
      <label style={{
        display: 'block',
        fontSize: '13px',
        fontWeight: 600,
        color: theme.colors.text.muted,
        marginBottom: '8px',
      }}>
        {label} {required && <span style={{ color: theme.colors.accent.magenta }}>*</span>}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%',
          padding: '14px 18px',
          background: theme.colors.bg.primary,
          border: `1px solid ${focused ? theme.colors.accent.violet : theme.colors.border}`,
          borderRadius: '12px',
          color: theme.colors.text.primary,
          fontSize: '15px',
          outline: 'none',
          resize: 'vertical',
          minHeight: '120px',
          transition: 'border-color 0.2s, box-shadow 0.2s',
          boxShadow: focused ? `0 0 0 3px ${theme.colors.accent.violet}20` : 'none',
          fontFamily: 'inherit',
        }}
      />
    </div>
  );
}

// FAQ Item
function FAQItem({ faq, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      style={{
        padding: '24px 28px',
        background: theme.colors.glass,
        borderRadius: '16px',
        border: `1px solid ${theme.colors.border}`,
      }}
    >
      <h4 style={{
        fontSize: '16px',
        fontWeight: 700,
        color: theme.colors.accent.cyan,
        marginBottom: '12px',
      }}>{faq.q}</h4>
      <p style={{
        fontSize: '15px',
        color: theme.colors.text.secondary,
        lineHeight: 1.6,
      }}>{faq.a}</p>
    </motion.div>
  );
}

// Main Contact Page
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    interest: 'General Inquiry',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

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
        input::placeholder, textarea::placeholder { color: ${theme.colors.text.muted}; }
        select option { background: ${theme.colors.bg.primary}; color: ${theme.colors.text.primary}; }
      `}</style>

      <Navigation />

      {/* Hero */}
      <section style={{
        padding: '180px 24px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60vw',
          height: '40vw',
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
            color: theme.colors.accent.magenta,
            fontWeight: 600,
            marginBottom: '24px',
          }}>CONTACT US</span>

          <h1 style={{
            fontSize: 'clamp(40px, 8vw, 64px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            marginBottom: '20px',
          }}>
            Get in <GradientText>Touch</GradientText>
          </h1>

          <p style={{
            fontSize: '18px',
            color: theme.colors.text.secondary,
            maxWidth: '550px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Have a project in mind? We'd love to hear from you.
            Our team typically responds within 24 hours.
          </p>
        </motion.div>
      </section>

      {/* Contact Cards */}
      <section style={{
        padding: '0 24px 60px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px',
        }}>
          <ContactCard icon="📧" title="Email Us" value="contact@atlas-labs.io" link="mailto:contact@atlas-labs.io" index={0} />
          <ContactCard icon="💬" title="Schedule" value="Book a Meeting" link="#" index={1} />
          <ContactCard icon="🐙" title="GitHub" value="github.com/alovladi007" link="https://github.com/alovladi007" index={2} />
          <ContactCard icon="💼" title="LinkedIn" value="ATLAS Labs" link="#" index={3} />
        </div>
      </section>

      {/* Main Content */}
      <section style={{
        padding: '60px 24px 120px',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1.3fr',
          gap: '60px',
          alignItems: 'start',
        }}>
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{
              fontSize: '32px',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '20px',
            }}>
              Let's build something <GradientText>amazing</GradientText>
            </h2>

            <p style={{
              fontSize: '16px',
              color: theme.colors.text.secondary,
              lineHeight: 1.8,
              marginBottom: '40px',
            }}>
              Whether you're looking to integrate AI into your engineering workflows,
              partner on research initiatives, or explore investment opportunities,
              we're here to help accelerate your vision.
            </p>

            {/* Response Time */}
            <div style={{
              padding: '20px 24px',
              background: `${theme.colors.accent.emerald}10`,
              borderRadius: '16px',
              border: `1px solid ${theme.colors.accent.emerald}30`,
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '40px',
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: `${theme.colors.accent.emerald}20`,
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
              }}>⚡</div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: theme.colors.accent.emerald }}>Fast Response</div>
                <div style={{ fontSize: '13px', color: theme.colors.text.secondary }}>Average response time: 4-8 hours</div>
              </div>
            </div>

            {/* Office */}
            <div style={{
              padding: '28px',
              background: theme.colors.glass,
              borderRadius: '20px',
              border: `1px solid ${theme.colors.border}`,
            }}>
              <span style={{
                display: 'inline-block',
                padding: '4px 12px',
                background: `${theme.colors.accent.violet}20`,
                color: theme.colors.accent.violet,
                borderRadius: '100px',
                fontSize: '11px',
                fontWeight: 600,
                marginBottom: '16px',
              }}>HEADQUARTERS</span>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 700,
                color: theme.colors.text.primary,
                marginBottom: '8px',
              }}>San Francisco</h3>
              <p style={{
                fontSize: '14px',
                color: theme.colors.text.secondary,
                marginBottom: '8px',
              }}>548 Market St, Suite 35000</p>
              <p style={{
                fontSize: '13px',
                color: theme.colors.accent.cyan,
              }}>PST (UTC-8)</p>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            style={{
              padding: '40px',
              background: theme.colors.glass,
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              border: `1px solid ${theme.colors.border}`,
            }}
          >
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  padding: '16px 20px',
                  background: `${theme.colors.accent.emerald}15`,
                  borderRadius: '12px',
                  border: `1px solid ${theme.colors.accent.emerald}40`,
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <span style={{ fontSize: '20px' }}>✓</span>
                <span style={{ color: theme.colors.accent.emerald, fontWeight: 500 }}>
                  Thank you! We'll get back to you soon.
                </span>
              </motion.div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <Input
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
              <Input
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.com"
                required
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <Input
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company"
              />
              <Select
                label="Area of Interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                options={[
                  'General Inquiry',
                  'Partnership',
                  'ElectroAI - Semiconductor',
                  'PhotonAI - Photonics',
                  'BioAI - Biomedical',
                  'NanoAI - Materials',
                  'DefenseAI - Autonomous',
                  'Investment',
                  'Careers',
                ]}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <Input
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help you?"
                required
              />
            </div>

            <div style={{ marginBottom: '28px' }}>
              <Textarea
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project, requirements, or questions..."
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.01, boxShadow: `0 0 30px ${theme.colors.accent.violet}30` }}
              whileTap={{ scale: 0.99 }}
              style={{
                width: '100%',
                padding: '16px 32px',
                background: theme.gradients.primary,
                border: 'none',
                borderRadius: '14px',
                color: 'white',
                fontSize: '16px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{
        padding: '100px 24px',
        background: theme.colors.bg.secondary,
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '48px' }}
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
            }}>FAQ</span>

            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 44px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
            }}>
              Frequently asked <GradientText>questions</GradientText>
            </h2>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '100px 24px',
        background: theme.colors.bg.primary,
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
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 60%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ position: 'relative', maxWidth: '600px', margin: '0 auto' }}
        >
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 44px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '20px',
          }}>
            Ready to transform your <GradientText>workflows</GradientText>?
          </h2>

          <p style={{
            fontSize: '17px',
            color: theme.colors.text.secondary,
            marginBottom: '40px',
            lineHeight: 1.6,
          }}>
            Explore our projects and see what ATLAS can do for your research.
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
                Explore Projects
              </motion.button>
            </Link>
            <Link href="/about" style={{ textDecoration: 'none' }}>
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
                About Us
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px 24px',
        background: theme.colors.bg.secondary,
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
