import { Check } from 'lucide-react'
import { cases } from '../data/content'
import { SectionHeading } from '../components/SectionHeading'

export function Cases({ t }: { t: (value: string) => string }) {
  return <section id="cases" className="section">
    <SectionHeading t={t} index="05" eyebrow="QUALITY ENGINEERING" title="QA CAPABILITIES" copy="A practical overview of how I help teams prevent defects, automate confidence and deliver reliable, accessible software." />
    <div className="case-grid">
      {cases.map((c, i) => <article className="case-card reveal" key={c.title}>
        <div className="case-top"><span>CAPABILITY.0{i + 1}</span><b>{t('READY')}</b></div>
        <h3>{t(c.title)}</h3>
        <div className="case-type">{t(c.type)}</div>
        <div className="case-narrative">
          <div><label>{t('WHAT I DO')}</label><p>{t(c.challenge)}</p></div>
          <div><label>{t('HOW I WORK')}</label><p>{t(c.approach)}</p></div>
        </div>
        <label>{t('CORE COVERAGE')}</label>
        <ul>{c.testing.map(x => <li key={x}><Check />{t(x)}</li>)}</ul>
        <div className="case-result"><label>{t('VALUE TO THE TEAM')}</label><p>{t(c.outcome)}</p></div>
        <div className="case-tools"><span>{t('TOOLS')}</span><b>{t(c.tools)}</b></div>
      </article>)}
    </div>
    <div className="bug reveal">
      <div><span>BUG_ARCHIVE / 001</span><b>{t('FIXED')}</b></div>
      <h3>{t('Keyboard interaction failure')}</h3>
      <dl>
        <div><dt>{t('CATEGORY')}</dt><dd>Accessibility</dd></div>
        <div><dt>{t('SEVERITY')}</dt><dd>{t('Medium')}</dd></div>
        <div><dt>{t('DETECTED')}</dt><dd>Manual Testing</dd></div>
        <div><dt>{t('VALIDATED')}</dt><dd>Automated Regression</dd></div>
      </dl>
    </div>
  </section>
}
