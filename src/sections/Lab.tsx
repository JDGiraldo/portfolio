import { labs } from '../data/content'
import { SectionHeading } from '../components/SectionHeading'

const configuration: [string, string][] = [
  ['Frontend', 'React + TypeScript'],
  ['Backend', 'Node.js + NestJS'],
  ['Data', 'PostgreSQL'],
  ['Quality', 'Playwright'],
  ['CI/CD', 'GitHub Actions'],
  ['Status', 'ACTIVE'],
]

export function Lab({ t }: { t: (value: string) => string }) {
  return <section id="lab" className="section lab-section">
    <SectionHeading t={t} index="04" eyebrow="PRODUCT SYSTEMS" title="ENGINEERING LAB" copy="The technical layers used to design, build, validate and deliver complete digital products." />
    <div className="lab-grid">
      {labs.map(l => <article className="lab-card reveal" key={l.id}>
        <div><span>{l.id} / MODULE</span><i>● {l.status}</i></div>
        <h3>{t(l.title)}</h3>
        <p>{t(l.detail)}</p>
        <div className="meter"><i /></div>
      </article>)}
    </div>
    <div className="lab-detail reveal">
      <div className="lab-title">
        <span>{t('ACTIVE CONFIGURATION')}</span>
        <h3>{t('FULL STACK DELIVERY')}</h3>
        <p>{t('A complete workflow connecting modern interfaces, typed services, persistent data and automated quality checks.')}</p>
      </div>
      <dl>
        {configuration.map(([a, b]) => <div key={a}><dt>{t(a)}</dt><dd>{b}{a === 'Status' && <i />}</dd></div>)}
      </dl>
    </div>
  </section>
}
