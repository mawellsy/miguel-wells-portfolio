import type { LucideIcon } from 'lucide-react'
import { Bot, Database, FileSearch, GitBranch, LineChart, Server } from 'lucide-react'

export type Project = {
  name: string
  description: string
  href: string
  technologies: string[]
  points?: string[]
  featured?: boolean
  icon: LucideIcon
}

export const projects: Project[] = [
  {
    name: 'AI Document Extraction & Human Review Pipeline',
    description: 'A production-style document processing pipeline that extracts structured information from PDFs and images, validates results using deterministic business rules, routes uncertain cases to human review, and exports trusted data.',
    href: 'https://github.com/mawellsy/ai-document-review',
    technologies: ['Python', 'FastAPI', 'OpenAI', 'Pydantic', 'PostgreSQL', 'SQLAlchemy', 'Pytest'],
    points: ['FastAPI backend', 'Structured AI extraction', 'Deterministic validation', 'Human-review workflow', 'Alembic migrations', 'JSON / CSV export'],
    featured: true,
    icon: FileSearch,
  },
  {
    name: 'AI Lead Intake & Follow-Up Automation',
    description: 'An end-to-end lead intake workflow using AI classification, deterministic validation, deduplication, routing, scheduled follow-up, and durable workflow logging.',
    href: 'https://github.com/mawellsy/ai-lead-intake-automation',
    technologies: ['Python', 'FastAPI', 'n8n', 'OpenAI', 'SQLAlchemy', 'Webhooks', 'Pytest'],
    points: ['n8n orchestration', 'Structured LLM output', 'Duplicate prevention', 'Human-review fallback', 'Scheduled follow-up', 'Failure handling'],
    featured: true,
    icon: GitBranch,
  },
  {
    name: 'Automated KPI Reporting Dashboard',
    description: 'A multi-source reporting system that validates and consolidates operational data, calculates deterministic KPIs, detects anomalies, and generates grounded AI-assisted management summaries.',
    href: 'https://github.com/mawellsy/kpi-reporting-dashboard',
    technologies: ['Python', 'SQL', 'PostgreSQL', 'Streamlit', 'OpenAI', 'ETL'],
    points: ['ETL pipelines', 'KPI engine', 'Anomaly detection', 'Streamlit dashboard', 'Grounded summaries', 'PostgreSQL support'],
    featured: true,
    icon: LineChart,
  },
  {
    name: 'FocusG',
    description: 'A Python investment-research application combining deterministic financial calculations, valuation models, scoring rules, market data, and optional AI-generated explanations.',
    href: 'https://github.com/mawellsy/FocusG',
    technologies: ['Python', 'Streamlit', 'Financial APIs', 'Gemini'],
    icon: Database,
  },
]

export const capabilities = [
  { title: 'AI & Document Automation', description: 'Structured extraction from PDFs, images, forms, and business documents with human review and validation.', icon: Bot },
  { title: 'Workflow Automation', description: 'API and event-driven workflows using Python, FastAPI, n8n, webhooks, and external systems.', icon: GitBranch },
  { title: 'Data & Reporting', description: 'ETL pipelines, SQL, KPI calculation, dashboards, anomaly detection, and management reporting.', icon: LineChart },
  { title: 'Backend Systems', description: 'Typed APIs, persistence, validation, testing, structured outputs, and reliable failure handling.', icon: Server },
]

export const stackGroups = [
  ['Backend', 'Python', 'FastAPI', 'REST APIs', 'Pydantic'],
  ['Data', 'PostgreSQL', 'SQLite', 'SQLAlchemy', 'ETL', 'Pandas'],
  ['AI & Automation', 'OpenAI APIs', 'Structured LLM output', 'n8n', 'Webhooks', 'RAG concepts'],
  ['Frontend / Apps', 'Streamlit', 'Flutter', 'Modern web development'],
  ['Engineering', 'Git', 'GitHub', 'Pytest', 'Alembic', 'API integration'],
]

export const socialLinks = {
  github: 'https://github.com/mawellsy',
  linkedin: 'https://www.linkedin.com/in/miguel-angel-wells',
}

export const email = '[EMAIL_ADDRESS]'
