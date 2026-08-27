import { SectionHeading } from '../components/SectionHeading'

const entries = [
  {
    marker: '01',
    time: 'CORE EXPERIENCE',
    timeTag: 'PRODUCT ENGINEERING',
    title: 'Full Stack Development',
    detail: 'Building complete production platforms from responsive interfaces to APIs, data models, integrations and deployment workflows.',
    tags: ['React', 'TypeScript', 'Node.js', 'NestJS', 'Laravel', 'REST APIs', 'PostgreSQL', 'Docker'],
  },
  {
    marker: '02',
    time: 'PLATFORM EXPERIENCE',
    timeTag: 'CMS / COMMERCE',
    title: 'Web & CMS Development',
    detail: 'Creating content, institutional and ecommerce experiences for real organizations and audiences.',
    tags: ['WordPress', 'Joomla', 'Shopify', 'JavaScript', 'Ecommerce', 'Responsive UI'],
  },
]

export function Experience({ t }: { t: (value: string) => string }) {
  return <section id="experience" className="section">
    <SectionHeading t={t} index="02" eyebrow="CAREER.LOG" title="EXPERIENCE" copy="A multidisciplinary path across full stack development, digital platforms and software quality." />
    <div className="timeline reveal">
      {entries.map(e => <article key={e.marker}>
        <div className="timeline-marker">{e.marker}</div>
        <div className="timeline-time">{t(e.time)} <span>{t(e.timeTag)}</span></div>
        <div>
          <h3>{t(e.title)}</h3>
          <p>{t(e.detail)}</p>
          <div className="tags">{e.tags.map(x => <span key={x}>{x}</span>)}</div>
        </div>
      </article>)}
      <article>
        <div className="timeline-marker">03</div>
        <div className="timeline-time">2026 — {t('PRESENT')} <span>{t('QUALITY ENGINEERING')}</span></div>
        <div>
          <h3>{t('QA & Automation')}</h3>
          <p>{t('Applying manual testing, browser automation, API validation and accessibility to make every release more reliable.')}</p>
          <div className="tags">{['Playwright', 'Manual Testing', 'API Testing', 'Accessibility', 'Regression', 'CI/CD'].map(x => <span key={x}>{t(x)}</span>)}</div>
        </div>
      </article>
    </div>
  </section>
}
