import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./project-detail.module.css";

interface ProjectFeature {
  title: string;
  desc: string;
}

interface ProjectMetric {
  value: string;
  label: string;
  desc: string;
}

interface Project {
  title: string;
  tag: string;
  image: string;
  overview: string;
  client: string;
  year: string;
  role: string;
  features: ProjectFeature[];
  challenge: string;
  solution: string;
  tech: string[];
  metrics: ProjectMetric[];
}

const projectsData: Record<string, Project> = {
  "aura-saas-platform": {
    title: "Aura SaaS Platform",
    tag: "Web App / Cloud",
    image: "/project_enterprise.png",
    overview: "A high-performance enterprise analytics interface delivering real-time logs, multi-tenant databases, and advanced user telemetry. Created to streamline enterprise operations and consolidate server infrastructure monitoring.",
    client: "Aura Analytics Inc.",
    year: "2025",
    role: "Full-Stack Development & Cloud Architecture",
    features: [
      {
        title: "Real-time Telemetry Engine",
        desc: "Aggregates million-event-per-second streams using Apache Kafka and displays them with ultra-low latency WebSockets."
      },
      {
        title: "Multi-tenant DB Architecture",
        desc: "Dynamic tenant isolation using PostgreSQL schema-based separation, ensuring strict data residency rules."
      },
      {
        title: "Advanced Log Queries",
        desc: "Full-text log search capability using Elasticsearch, returning complex query matching in under 20ms."
      }
    ],
    challenge: "The client faced critical data bottleneck issues and massive compute cost overheads when processing logs from over 5,000 active instances.",
    solution: "We implemented a customized event bus architecture filtering noise at the edge, reducing ingestion volume by 65% while introducing dynamic memory allocation for hot/cold databases.",
    tech: ["Next.js", "React", "Node.js", "PostgreSQL", "Apache Kafka", "Elasticsearch", "AWS", "Docker"],
    metrics: [
      { value: "65%", label: "Cost Reduction", desc: "Monthly AWS ingestion bill decreased" },
      { value: "<50ms", label: "Query Speed", desc: "95th percentile query latency" },
      { value: "99.99%", label: "Guaranteed SLA", desc: "High availability with zero downtime" }
    ]
  },
  "velo-mobile-finance": {
    title: "Velo Mobile Finance",
    tag: "Mobile App",
    image: "/project_mobile.png",
    overview: "A secure banking and digital ledger portfolio platform designed for high-frequency transactions, instant wire transfers, and real-time investment tracking.",
    client: "Velo Pay Ltd.",
    year: "2025",
    role: "Mobile Engineering & UI/UX Design",
    features: [
      {
        title: "Instant Ledger Sync",
        desc: "Distributed transactional ledger that guarantees immediate transfer confirmations with sub-second finality."
      },
      {
        title: "Biometric & Key Security",
        desc: "Multi-layered local encryption keys combined with FaceID/TouchID integrations meeting top banking standards."
      },
      {
        title: "Dynamic Market Charts",
        desc: "Beautiful, smooth SVG chart renderings visualizing financial trends, historical portfolios, and stock movements."
      }
    ],
    challenge: "Rendering dynamic historical charts on older mobile devices suffered from low frame rates and UI freezing during intensive network updates.",
    solution: "We created a native bridge module and optimized data feeds through a localized SQLite cache, ensuring all graph drawing calculations are performed on a secondary CPU thread.",
    tech: ["React Native", "Expo", "TypeScript", "Node.js", "GraphQL", "Redis", "PostgreSQL", "AWS"],
    metrics: [
      { value: "60 FPS", label: "Animation Speed", desc: "Silky smooth charts and transitions" },
      { value: "2.1M+", label: "Active Users", desc: "Successfully onboarded monthly users" },
      { value: "0", label: "Security Breaches", desc: "External security audit certified" }
    ]
  },
  "apex-agentic-ai": {
    title: "Apex Agentic AI",
    tag: "AI / Workflows",
    image: "/project_ai.png",
    overview: "A visual customer support automation workflow builder powered by fine-tuned on-device models, LLM pipelines, and secure API integration interfaces.",
    client: "Apex Support Automations",
    year: "2026",
    role: "AI Integration & Workflow Orchestration",
    features: [
      {
        title: "Drag-and-Drop Canvas",
        desc: "Interactive node-based builder allowing teams to wire up support triggers, action hooks, and AI model inputs."
      },
      {
        title: "Local Model Execution",
        desc: "On-device inference options using light, quantized models for extreme data privacy and offline compliance."
      },
      {
        title: "Multi-Model Router",
        desc: "Dynamic router switching tasks between local models and heavy API models based on cost and accuracy metrics."
      }
    ],
    challenge: "High latency and API costs associated with sending every support query to large commercial models.",
    solution: "We engineered a lightweight semantic router running local embeddings that catches 80% of routine questions, routing only complex/high-value support cases to external LLMs.",
    tech: ["Next.js", "React Flow", "Python", "PyTorch", "LangChain", "FastAPI", "Qdrant", "Docker"],
    metrics: [
      { value: "80%", label: "Routine Automation", desc: "Auto-resolved support tickets" },
      { value: "70%", label: "API Cost Savings", desc: "Reduced monthly external expenses" },
      { value: "<1s", label: "Response Time", desc: "Instant answers to end users" }
    ]
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData[slug];
  
  if (!project) {
    return {
      title: "Project Not Found | Kawaii Advance Technology & Solution Limited",
      description: "The requested project case study could not be found.",
    };
  }

  return {
    title: `${project.title} - Case Study | Kawaii Advance Technology & Solution Limited`,
    description: project.overview,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    return (
      <>
        <Header />
        <main className={styles.notFound}>
          <div className="container">
            <h1 className={styles.notFoundTitle}>Project Not Found</h1>
            <p className={styles.notFoundText}>
              The case study you are looking for does not exist or has been moved.
            </p>
            <Link href="/" className={styles.ctaBtn}>
              Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <div className={styles.detailPage}>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <Link href="/work" className={styles.backLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Back to Projects
            </Link>
            
            <span className={styles.tag}>{project.tag}</span>
            <h1 className={styles.title}>{project.title}</h1>
            
            <div className={styles.metaGrid}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Client</span>
                <span className={styles.metaValue}>{project.client}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Year</span>
                <span className={styles.metaValue}>{project.year}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Role</span>
                <span className={styles.metaValue}>{project.role}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Duration</span>
                <span className={styles.metaValue}>3 Months</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className={styles.mainContent}>
          <div className="container">
            <div className={styles.contentGrid}>
              
              {/* Left Column: Details */}
              <div>
                <div className={styles.imageWrapper}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={450}
                    priority
                    className={styles.image}
                  />
                </div>
                
                <h2 className={styles.sectionTitle}>Project Overview</h2>
                <p className={styles.overviewText}>{project.overview}</p>
                
                <div className={styles.featuresSection}>
                  <h2 className={styles.sectionTitle}>Key Features Engineered</h2>
                  <ul className={styles.featureList}>
                    {project.features.map((feature, idx) => (
                      <li key={idx} className={styles.featureItem}>
                        <svg className={styles.featureIcon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <div>
                          <h4 className={styles.featureTitle}>{feature.title}</h4>
                          <p className={styles.featureText}>{feature.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.challengeBox}>
                  <h3 className={styles.challengeTitle}>
                    <svg className={styles.challengeIcon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    The Challenge
                  </h3>
                  <p className={styles.challengeText}>{project.challenge}</p>
                </div>
                
                <div className={styles.solutionBox}>
                  <h3 className={styles.solutionTitle}>Our Engineering Solution</h3>
                  <p className={styles.solutionText}>{project.solution}</p>
                </div>
              </div>

              {/* Right Column: Tech & Metrics */}
              <div className={styles.sidebar}>
                {/* Tech Stack Widget */}
                <div className={styles.sidebarWidget}>
                  <h3 className={styles.widgetTitle}>Technologies Used</h3>
                  <div className={styles.techGrid}>
                    {project.tech.map((techItem, idx) => (
                      <span key={idx} className={styles.techBadge}>
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics Widget */}
                <div className={styles.sidebarWidget}>
                  <h3 className={styles.widgetTitle}>Key Outcomes</h3>
                  <div className={styles.metricsGrid}>
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className={styles.metricCard}>
                        <div className={styles.metricValue}>{metric.value}</div>
                        <div className={styles.metricLabel}>{metric.label}</div>
                        <div className={styles.metricDesc}>{metric.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container">
            <h2 className={styles.ctaTitle}>Ready to build something scalable?</h2>
            <p className={styles.ctaDesc}>
              Let's partner up to construct your next enterprise application, mobile suite, or custom AI agent system.
            </p>
            <Link href="/contact" className={styles.ctaBtn}>
              Let's Connect
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
