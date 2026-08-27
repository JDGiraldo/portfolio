import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'
import { SectionHeading } from '../components/SectionHeading'

export function Projects({ t }: { t: (value: string) => string }) {
  return <section id="projects" className="section projects-section">
    <SectionHeading t={t} index="03" eyebrow="SELECTED WORK" title="FEATURED PROJECTS" copy="Real digital products, platforms and experiments built for people—not just portfolios." />
    <div className="project-grid">
      {projects.map((p, i) => <article className={`project-card reveal ${i < 2 ? 'featured' : ''}`} key={p.name}>
        <div className="project-preview">
          <img src={p.image} alt={`${p.name} website preview`} loading={i < 2 ? 'eager' : 'lazy'} />
          <div className="project-overlay" />
          <span>{p.code}</span>
          <em>{t(p.type)}</em>
        </div>
        <div className="project-content">
          <div className="project-meta"><span>{t(p.category)}</span><i className={p.status === 'LIVE' ? 'live' : ''}>{p.status}</i></div>
          <h3>{p.name}</h3>
          <p>{t(p.description)}</p>
          <div className="project-foot">
            <div className="tags">{p.tech.map(x => <span key={x}>{x}</span>)}</div>
            {p.url && <a href={p.url} target="_blank" rel="noreferrer" aria-label={`Visit ${p.name}`}><ArrowUpRight /></a>}
          </div>
        </div>
      </article>)}
    </div>
  </section>
}
