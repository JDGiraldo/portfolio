import { stack } from '../data/content'
import { SectionHeading } from '../components/SectionHeading'

export function Stack({ t }: { t: (value: string) => string }) {
  return <section id="stack" className="section">
    <SectionHeading t={t} index="06" eyebrow="SYSTEM CAPABILITIES" title="TECH STACK" copy="Tools used to build, verify and deliver digital products." />
    <div className="stack-grid">
      {Object.entries(stack).map(([group, items], i) => <article className="stack-card reveal" key={group}>
        <span>0{i + 1}</span>
        <h3>{t(group)}</h3>
        <div className="tags">{items.map(x => <b key={x}>{x}</b>)}</div>
      </article>)}
    </div>
  </section>
}
