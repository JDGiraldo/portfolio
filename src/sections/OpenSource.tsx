import { ArrowUpRight } from 'lucide-react'
import { repositories } from '../data/content'
import { SectionHeading } from '../components/SectionHeading'

export function OpenSource({ t }: { t: (value: string) => string }) {
  return <section id="opensource" className="section">
    <SectionHeading t={t} index="07" eyebrow="OPEN SOURCE / LABS" title="REPOSITORY FEED" />
    <div className="repo-list reveal">
      {repositories.map(([name, description, tag], i) => <a href="https://github.com/" target="_blank" rel="noreferrer" key={name}>
        <span>LAB.0{i + 1}</span>
        <div><h3>{name}</h3><p>{t(description)}</p></div>
        <b>{tag}</b>
        <ArrowUpRight />
      </a>)}
    </div>
  </section>
}
