'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Check, Circle, FileText, GitBranch, Menu, Moon, Network, ShieldCheck, Sun, X } from 'lucide-react'
import { capabilities, email, projects, socialLinks, stackGroups } from '@/lib/portfolio-data'

function TechBadge({ children }: { children: React.ReactNode }) {
  return <span className="tech-badge">{children}</span>
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>
}

function FlowNode({ label, detail, active = false }: { label: string; detail?: string; active?: boolean }) {
  return <div className={`flow-node ${active ? 'active' : ''}`}><span className="flow-dot" /><div><strong>{label}</strong>{detail && <small>{detail}</small>}</div></div>
}

function WorkflowVisual() {
  return <div className="workflow-visual" aria-label="Workflow from input to trusted output">
    <div className="workflow-topline"><span>WORKFLOW / 01</span><span className="live-dot"><i /> LIVE MODEL</span></div>
    <div className="flow-stack">
      <FlowNode label="Input" detail="PDF, email, image" />
      <div className="flow-line" /><FlowNode label="Validation" detail="Rules + schemas" />
      <div className="flow-line" /><FlowNode label="AI processing" detail="Interpretation layer" active />
      <div className="flow-line" /><FlowNode label="Human review" detail="Confidence threshold" />
      <div className="flow-line" /><FlowNode label="Trusted output" detail="Structured + auditable" />
    </div>
    <div className="workflow-footer"><span><Circle size={8} fill="currentColor" /> Deterministic core</span><span>v0.1.0</span></div>
  </div>
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const Icon = project.icon
  return <article className={`project-card ${project.featured ? 'featured' : ''}`}>
    <div className="project-card-top"><div className="project-icon"><Icon size={19} /></div><a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}><ArrowUpRight size={18} /></a></div>
    <h3>{project.name}</h3><p>{project.description}</p>
    {project.points && <ul className="project-points">{project.points.slice(0, 4).map(point => <li key={point}><Check size={14} />{point}</li>)}</ul>}
    <div className="tech-list">{project.technologies.map(tech => <TechBadge key={tech}>{tech}</TechBadge>)}</div>
    <a className="text-link" href={project.href} target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight size={14} /></a>
  </article>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(true)
  useEffect(() => { document.documentElement.classList.toggle('dark', dark) }, [dark])
  const closeMenu = () => setMenuOpen(false)

  return <main>
    <nav className="navbar"><div className="nav-inner"><a href="#top" className="brand" onClick={closeMenu}><span className="brand-mark">MW</span><span>Miguel Wells</span></a><div className={`nav-links ${menuOpen ? 'open' : ''}`}><a href="#work" onClick={closeMenu}>Work</a><a href="#experience" onClick={closeMenu}>Experience</a><a href="#about" onClick={closeMenu}>About</a><a href="#contact" onClick={closeMenu}>Contact</a></div><div className="nav-actions"><a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitBranch size={17} /></a><a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Network size={17} /></a><button className="icon-button" onClick={() => setDark(!dark)} aria-label="Toggle color theme">{dark ? <Sun size={17} /> : <Moon size={17} />}</button><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></div></div></nav>

    <section id="top" className="hero shell"><div className="hero-copy"><div className="status-pill"><span /> Building practical AI automation systems</div><p className="hero-kicker">AI AUTOMATION <span>/</span> SOFTWARE DEVELOPMENT</p><h1>Miguel <em>Wells</em></h1><p className="hero-lede">I build reliable software and AI automation systems that turn repetitive business workflows into structured, auditable processes.</p><p className="hero-support">Computer Science student in Taiwan with hands-on experience in Python, backend development, workflow automation, AI-assisted document processing, data pipelines, and manufacturing operations.</p><div className="hero-actions"><a className="button primary" href="#work">View my work <ArrowDown size={16} /></a><a className="button secondary" href={socialLinks.github} target="_blank" rel="noreferrer"><GitBranch size={16} /> GitHub</a></div></div><WorkflowVisual /></section>

    <section className="shell section" id="capabilities"><SectionHeading eyebrow="CAPABILITIES" title="Software that removes repetitive work" description="I focus on systems where AI assists with interpretation while deterministic software handles validation, workflow state, data integrity, and business rules." /><div className="capability-grid">{capabilities.map(({ title, description, icon: Icon }, index) => <article className="capability-card" key={title}><span className="card-index">0{index + 1}</span><Icon size={21} /><h3>{title}</h3><p>{description}</p></article>)}</div></section>

    <section className="shell section focus-section"><div className="focus-header"><div><span className="eyebrow">CURRENT FOCUS</span><h2>Manufacturing RFQ<br /><em>Intake Assistant</em></h2></div><span className="status-badge"><span /> In development</span></div><div className="focus-grid"><div className="focus-copy"><p>A manufacturing-focused workflow for turning customer emails, specifications, PDFs, and drawings into structured RFQ information before sales or engineering review.</p><div className="rfq-flow"><span>Customer Email / PDF / Drawing</span><ArrowDown /><span>Requirement Extraction</span><ArrowDown /><span>Structured RFQ</span><ArrowDown /><span>Missing Information Detection</span><ArrowDown /><span>Human Review</span><ArrowDown /><span>Engineering / Sales Handoff</span></div><p className="principle"><ShieldCheck size={18} /> Designed around a human-in-the-loop principle: AI organizes information, while technical and commercial decisions remain with the team.</p></div><div className="data-panel"><div className="panel-title"><FileText size={16} /> extracted_rfq.json <span>●</span></div><div className="data-rows"><div><span>Company</span><strong>Example Industrial Ltd.</strong></div><div><span>Product</span><strong>Custom Cable Assembly</strong></div><div><span>Quantity</span><strong>2,000 pcs</strong></div><div><span>Compliance</span><strong>RoHS</strong></div><div><span>Drawing</span><strong>Attached <Check size={14} /></strong></div></div><div className="missing"><span>Missing information</span><p><i /> Wire gauge</p><p><i /> Required delivery date</p><p><i /> Packaging requirements</p></div><small>Demo uses synthetic data.</small></div></div><div className="focus-actions"><span className="muted-note">Demo coming soon</span><a className="button secondary" href="#contact">Discuss a workflow <ArrowUpRight size={16} /></a></div></section>

    <section className="shell section" id="work"><SectionHeading eyebrow="SELECTED WORK" title="Systems built to be useful" description="Portfolio projects exploring practical patterns for business automation. These are independent projects, not client deployments." /><div className="projects-grid">{projects.map(project => <ProjectCard key={project.name} project={project} />)}</div></section>

    <section className="shell section" id="experience"><SectionHeading eyebrow="BACKGROUND" title="Experience" /><div className="timeline"><div className="timeline-item"><div className="timeline-marker" /><div className="timeline-date">2026 <span>CHINA</span></div><div className="timeline-content"><span className="eyebrow">Sundiro Honda / Honda SDH</span><h3>AI & Software Automation Internship</h3><p>Worked on internal AI agents, business workflow automation, operational dashboards, and data collection tools within a manufacturing environment.</p><ul><li>Built and configured internal AI agents for finance, HR, project support, and knowledge workflows.</li><li>Worked on operational / EHS reporting and dashboard workflows.</li><li>Developed Python-based web data collection and processing pipelines.</li><li>Worked with business requirements rather than purely academic examples.</li></ul></div></div><div className="timeline-item education"><div className="timeline-marker" /><div className="timeline-date">ONGOING <span>TAIWAN</span></div><div className="timeline-content"><span className="eyebrow">Tamkang University</span><h3>BSc Computer Science</h3><p>Building a foundation in software engineering, systems thinking, and applied computing.</p></div></div></div></section>

    <section className="principles-section"><div className="shell"><SectionHeading eyebrow="ENGINEERING PHILOSOPHY" title="AI should assist decisions, not quietly become the decision-maker." description="I prefer architectures where probabilistic AI handles interpretation and language, while ordinary software handles validation, calculations, workflow state, permissions, and other rules that should remain deterministic." /><div className="principle-flow">{['Unstructured Input', 'AI Interpretation', 'Typed Data', 'Deterministic Validation', 'Human Review When Needed', 'Trusted Output'].map((item, index) => <div className="principle-step" key={item}><span>0{index + 1}</span><strong>{item}</strong>{index < 5 && <ArrowDown />}</div>)}</div></div></section>

    <section className="shell section" id="about"><div className="about-grid"><SectionHeading eyebrow="ABOUT ME" title="Curious about the work behind the workflow." /><div className="about-copy"><p>I&apos;m a Computer Science student based in Taiwan interested in the point where software engineering, AI, and real business operations meet.</p><p>My focus is not on adding AI to everything. I enjoy identifying repetitive workflows, separating the parts that require judgment from the parts that can be automated, and building systems that make the process faster and more reliable.</p><p>My recent work has focused on document processing, workflow automation, reporting systems, data pipelines, and manufacturing-related business processes.</p><div className="fact-list"><span>Based in Taiwan</span><span>Computer Science</span><span>English / Spanish</span><span>Learning Mandarin Chinese</span></div></div></div></section>
    <section className="shell stack-section"><SectionHeading eyebrow="TOOLKIT" title="Tools I work with" /><div className="stack-grid">{stackGroups.map(group => <div className="stack-group" key={group[0]}><span className="eyebrow">{group[0]}</span><div>{group.slice(1).map(item => <TechBadge key={item}>{item}</TechBadge>)}</div></div>)}</div></section>

    <section className="shell contact-section" id="contact"><div><span className="eyebrow">GET IN TOUCH</span><h2>Have a repetitive workflow<br /><em>worth automating?</em></h2><p>If your team spends significant time manually reviewing documents, moving information between systems, preparing reports, or organizing incoming requests, I&apos;d be interested in understanding the workflow.</p></div><div className="contact-actions"><a className="button primary" href="mailto:mawellsy3048@gmail.com">Email me <ArrowUpRight size={16} /></a><a className="button secondary" href={socialLinks.linkedin} target="_blank" rel="noreferrer"><Network size={16} /> LinkedIn</a><a className="button ghost" href={socialLinks.github} target="_blank" rel="noreferrer"><GitBranch size={16} /> GitHub</a><a className="text-link" href="mailto:mawellsy3048@gmail.com">mawellsy3048@gmail.com</a></div></section>

    <footer className="footer shell"><div><strong>Miguel Wells</strong><span>AI Automation & Software Development</span></div><div className="footer-links"><a href={socialLinks.github}>GitHub</a><a href={socialLinks.linkedin}>LinkedIn</a><span>Built with Next.js.</span></div></footer>
  </main>
}
