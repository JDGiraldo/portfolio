import { useState, type PointerEvent } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'

export function ProjectCore({ t }: { t: (value: string) => string }) {
  const [active, setActive] = useState(0)
  const project = projects[active]

  const move = (event: PointerEvent<HTMLDivElement>) => {
    const box = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--core-x', `${((event.clientX - box.left) / box.width - .5) * 18}px`)
    event.currentTarget.style.setProperty('--core-y', `${((event.clientY - box.top) / box.height - .5) * 18}px`)
  }

  return <section className="project-core section" id="core">
    <div className="core-intro reveal">
      <span>00 / {t('INTERACTIVE PROJECT INDEX')}</span>
      <h2>{t('EXPLORE THE')}<br /><i>{t('PROJECT CORE')}</i></h2>
      <p>{t('Five real products. One connected engineering system.')}</p>
    </div>

    <div className="core-stage reveal" onPointerMove={move} onPointerLeave={event => {
      event.currentTarget.style.setProperty('--core-x', '0px')
      event.currentTarget.style.setProperty('--core-y', '0px')
    }}>
      <div className="core-orbit" aria-hidden="true"><i /><i /><i /></div>
      <div className="core-visual" key={project.name}>
        {[0, 1, 2, 3, 4].map(slice => <div className={`core-slice slice-${slice}`} key={slice}><img src={project.image} alt="" /></div>)}
        <span className="core-code">{project.code}</span>
      </div>
      <div className="core-info">
        <span>{String(active + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
        <h3>{project.name}</h3>
        <p>{t(project.description)}</p>
        <div className="tags">{project.tech.slice(0, 4).map(item => <b key={item}>{item}</b>)}</div>
        {project.url && <a href={project.url} target="_blank" rel="noreferrer">{t('VIEW LIVE PROJECT')} <ArrowUpRight /></a>}
      </div>
    </div>

    <div className="core-index" role="tablist" aria-label="Project selector">
      {projects.map((item, index) => <button role="tab" aria-selected={active === index} className={active === index ? 'active' : ''} onClick={() => setActive(index)} key={item.name}>
        <span>{String(index + 1).padStart(2, '0')}</span><b>{item.name}</b><i />
      </button>)}
    </div>
  </section>
}
