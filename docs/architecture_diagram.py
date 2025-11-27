#!/usr/bin/env python3
"""
ATLAS - Advanced Technology Labs for Applied Sciences
System Architecture Diagram
"Building the Intelligence that Builds the Future"
"""

import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from matplotlib.patches import FancyBboxPatch, FancyArrowPatch, Circle, Rectangle
import numpy as np

# ATLAS Brand Colors
COLORS = {
    'deep_space': '#0a0f1a',
    'aurora_cyan': '#00d4ff',
    'aurora_violet': '#7c3aed',
    'aurora_magenta': '#ec4899',
    'silver': '#94a3b8',
    'white': '#ffffff',
    'dark_surface': '#1e293b',
    'mid_surface': '#334155',
    'accent_green': '#10b981',
    'accent_orange': '#f59e0b',
    'accent_red': '#ef4444',
}

def create_architecture_diagram():
    fig, ax = plt.subplots(1, 1, figsize=(20, 14), facecolor=COLORS['deep_space'])
    ax.set_facecolor(COLORS['deep_space'])
    ax.set_xlim(0, 100)
    ax.set_ylim(0, 100)
    ax.axis('off')
    
    # Title
    ax.text(50, 97, 'ATLAS - ADVANCED TECHNOLOGY LABS', fontsize=28, fontweight='bold',
            color=COLORS['aurora_cyan'], ha='center', va='center',
            fontfamily='sans-serif')
    ax.text(50, 94, 'Building the Intelligence that Builds the Future',
            fontsize=12, color=COLORS['silver'], ha='center', va='center',
            fontfamily='sans-serif', style='italic')
    
    # Helper function to draw boxes
    def draw_box(x, y, w, h, label, sublabels=None, color=COLORS['dark_surface'], 
                 border_color=COLORS['aurora_cyan'], text_color=COLORS['white']):
        box = FancyBboxPatch((x, y), w, h, boxstyle="round,pad=0.02,rounding_size=0.5",
                             facecolor=color, edgecolor=border_color, linewidth=2)
        ax.add_patch(box)
        ax.text(x + w/2, y + h - 1.5, label, fontsize=10, fontweight='bold',
                color=text_color, ha='center', va='top', fontfamily='sans-serif')
        if sublabels:
            for i, sub in enumerate(sublabels):
                ax.text(x + w/2, y + h - 3 - i*1.3, f"• {sub}", fontsize=7,
                        color=COLORS['silver'], ha='center', va='top', fontfamily='sans-serif')
    
    # Helper for arrows
    def draw_arrow(start, end, color=COLORS['aurora_cyan'], style='->'):
        arrow = FancyArrowPatch(start, end, arrowstyle=style, color=color,
                                mutation_scale=15, linewidth=1.5,
                                connectionstyle="arc3,rad=0.1")
        ax.add_patch(arrow)
    
    # ═══════════════════════════════════════════════════════════════
    # LAYER 1: Prompt & Input Layer (Top)
    # ═══════════════════════════════════════════════════════════════
    draw_box(5, 85, 25, 7, 'PROMPT & PRODUCT BUILDER UI',
             ['Natural Language Input', 'Domain Templates', 'Visual Configurator'],
             border_color=COLORS['aurora_cyan'])
    
    draw_box(37, 85, 26, 7, 'PROMPT ORCHESTRATOR',
             ['AI Architect Agent', 'AI Coder Agent', 'QA Agent', 'DevOps Agent'],
             border_color=COLORS['aurora_violet'])
    
    draw_box(70, 85, 25, 7, 'DOMAIN INTELLIGENCE GRAPH',
             ['Vector DB (pgvector)', 'Ontologies & RAG', 'Context Engine'],
             border_color=COLORS['aurora_magenta'])
    
    # ═══════════════════════════════════════════════════════════════
    # LAYER 2: AI Worker Divisions (Domain Agents)
    # ═══════════════════════════════════════════════════════════════
    ax.text(50, 79, '─── AI WORKER DIVISIONS ───', fontsize=10, 
            color=COLORS['silver'], ha='center', va='center')
    
    # BioAI Division
    draw_box(5, 66, 28, 11, 'BioAI DIVISION',
             ['Biomedical Engineering', 'EEG/ECG/HRV Analysis', 'DICOM & PACS Integration',
              'HIPAA Compliance', 'PHI Governance'],
             border_color=COLORS['accent_green'])
    
    # PhotonAI Division
    draw_box(36, 66, 28, 11, 'PhotonAI DIVISION',
             ['Photonics & Optoelectronics', 'FDTD/COMSOL/Lumerical', 'Band-gap Optimization',
              'Inverse Design', 'Waveguide Synthesis'],
             border_color=COLORS['aurora_cyan'])
    
    # ElectroAI Division
    draw_box(67, 66, 28, 11, 'ElectroAI DIVISION',
             ['Electronics & Semiconductor', 'Yield/SPC/FDC Analytics', 'CMP/Etch/Litho',
              'Predictive Maintenance', 'Tool Fault Detection'],
             border_color=COLORS['aurora_violet'])
    
    # ═══════════════════════════════════════════════════════════════
    # LAYER 3: Shared Platform Services
    # ═══════════════════════════════════════════════════════════════
    ax.text(50, 62, '─── SHARED PLATFORM SERVICES ───', fontsize=10, 
            color=COLORS['silver'], ha='center', va='center')
    
    draw_box(5, 49, 28, 11, 'SIMULATION & MODELING HUB',
             ['Python APIs: COMSOL, Lumerical', 'ANSYS, MATLAB Integration',
              'Batch Parameter Sweeps', 'HIL Hooks'],
             border_color=COLORS['accent_orange'])
    
    draw_box(36, 49, 28, 11, 'DataOps & ML-Ops CORE',
             ['Feature Store', 'MLflow Model Registry', 'Triton Inference Server',
              'Auto-Train/Eval Pipelines'],
             border_color=COLORS['aurora_magenta'])
    
    draw_box(67, 49, 28, 11, 'COMPLIANCE & GOVERNANCE',
             ['HIPAA / ISO 13485 / ISO 9001', 'Audit Trails & PIAs',
              'Model Cards', 'Data Lineage'],
             border_color=COLORS['accent_red'])
    
    # ═══════════════════════════════════════════════════════════════
    # LAYER 4: SaaS Assembly & Frontend
    # ═══════════════════════════════════════════════════════════════
    ax.text(50, 45, '─── SaaS ASSEMBLY LINE ───', fontsize=10, 
            color=COLORS['silver'], ha='center', va='center')
    
    draw_box(5, 32, 43, 11, 'SAAS ASSEMBLY LINE',
             ['Code Generation → Testing → CI/CD', 'Docker/Kubernetes Orchestration',
              'GitHub Actions Pipelines', 'Infrastructure as Code (Terraform)'],
             border_color=COLORS['aurora_cyan'])
    
    draw_box(52, 32, 43, 11, 'FRONTEND AUTOMATION LAYER',
             ['Next.js 15 / React / TypeScript', 'React Three Fiber (3D)', 'D3.js Dashboards',
              'Multi-tenant UI System', 'White-label Builder'],
             border_color=COLORS['aurora_violet'])
    
    # ═══════════════════════════════════════════════════════════════
    # LAYER 5: Deployment & Monitoring
    # ═══════════════════════════════════════════════════════════════
    ax.text(50, 28, '─── DEPLOYMENT & OBSERVABILITY ───', fontsize=10, 
            color=COLORS['silver'], ha='center', va='center')
    
    draw_box(5, 15, 43, 11, 'DEPLOYMENT CLOUD',
             ['Vercel / Render / AWS / GCP / Azure', 'Multi-tenant Routing',
              'Billing Integration (Stripe)', 'SSO & Auth (OIDC)'],
             border_color=COLORS['accent_green'])
    
    draw_box(52, 15, 43, 11, 'MONITORING & FEEDBACK LOOP',
             ['OpenTelemetry → Prometheus/Grafana', 'A/B Evaluation & Canary Deploys',
              'Auto-rollback Mechanisms', 'Continual Learning with DIG'],
             border_color=COLORS['accent_orange'])
    
    # ═══════════════════════════════════════════════════════════════
    # Technology Stack Legend
    # ═══════════════════════════════════════════════════════════════
    ax.text(50, 10, '─── CORE TECHNOLOGY STACK ───', fontsize=10, 
            color=COLORS['silver'], ha='center', va='center')
    
    tech_stack = [
        ('AI Core', 'Claude, GPT, LangGraph, CrewAI'),
        ('Backend', 'NestJS, PostgreSQL, Redis, NATS'),
        ('Frontend', 'Next.js, React, TailwindCSS'),
        ('DevOps', 'Docker, K8s, Terraform, GitHub Actions'),
        ('ML', 'PyTorch, MLflow, Triton'),
    ]
    
    for i, (cat, tech) in enumerate(tech_stack):
        x_pos = 8 + i * 18
        ax.text(x_pos, 6, cat, fontsize=8, fontweight='bold',
                color=COLORS['aurora_cyan'], ha='center')
        ax.text(x_pos, 4, tech, fontsize=6, color=COLORS['silver'], ha='center')
    
    # ═══════════════════════════════════════════════════════════════
    # Connecting Arrows (Flow)
    # ═══════════════════════════════════════════════════════════════
    # Layer 1 connections
    draw_arrow((30, 88), (37, 88), COLORS['aurora_cyan'])
    draw_arrow((63, 88), (70, 88), COLORS['aurora_cyan'])
    
    # Orchestrator to all divisions
    draw_arrow((50, 85), (19, 77), COLORS['aurora_violet'])
    draw_arrow((50, 85), (50, 77), COLORS['aurora_violet'])
    draw_arrow((50, 85), (81, 77), COLORS['aurora_violet'])
    
    # Divisions to platform services
    draw_arrow((19, 66), (19, 60), COLORS['silver'])
    draw_arrow((50, 66), (50, 60), COLORS['silver'])
    draw_arrow((81, 66), (81, 60), COLORS['silver'])
    
    # Platform services to assembly
    draw_arrow((19, 49), (26, 43), COLORS['silver'])
    draw_arrow((50, 49), (50, 43), COLORS['silver'])
    draw_arrow((81, 49), (74, 43), COLORS['silver'])
    
    # Assembly to deployment
    draw_arrow((26, 32), (26, 26), COLORS['silver'])
    draw_arrow((74, 32), (74, 26), COLORS['silver'])
    
    # Feedback loop arrow (curved back up)
    ax.annotate('', xy=(95, 60), xytext=(95, 20),
                arrowprops=dict(arrowstyle='->', color=COLORS['accent_orange'],
                               connectionstyle='arc3,rad=-0.3', lw=2))
    ax.text(97, 40, 'Feedback\nLoop', fontsize=7, color=COLORS['accent_orange'],
            ha='center', va='center', rotation=90)
    
    # Copyright
    ax.text(50, 1, '© 2025 ATLAS - Advanced Technology Labs for Applied Sciences',
            fontsize=8, color=COLORS['silver'], ha='center', style='italic')
    
    plt.tight_layout()
    return fig

if __name__ == '__main__':
    fig = create_architecture_diagram()
    fig.savefig('assets/atlas_architecture.png',
                dpi=300, bbox_inches='tight', facecolor='#0a0f1a')
    fig.savefig('assets/atlas_architecture.svg',
                format='svg', bbox_inches='tight', facecolor='#0a0f1a')
    print("ATLAS Architecture diagram saved!")
