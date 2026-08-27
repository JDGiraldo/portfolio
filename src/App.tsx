import { useEffect, useRef, useState } from 'react'
import { translate, type Language } from './data/translations'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Projects } from './sections/Projects'
import { Lab } from './sections/Lab'
import { Cases } from './sections/Cases'
import { Stack } from './sections/Stack'
import { OpenSource } from './sections/OpenSource'
import { Contact } from './sections/Contact'
import { ProjectCore } from './sections/ProjectCore'

const progress = ['home', 'core', 'about', 'experience', 'projects', 'lab', 'cases', 'stack', 'contact']

function App() {
  const cursorRing = useRef<HTMLDivElement>(null)
  const [menu, setMenu] = useState(false)
  const [active, setActive] = useState('home')
  const [language, setLanguage] = useState<Language>(() => (localStorage.getItem('portfolio-language') as Language) || 'en')
  const t = (value: string) => translate(value, language)
  const changeLanguage = (next: Language) => { setLanguage(next); localStorage.setItem('portfolio-language', next); document.documentElement.lang = next }

  useEffect(() => {
    document.documentElement.lang = language
    const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id)
    }), { rootMargin: '-35% 0px -55%', threshold: 0 })
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        revealObserver.unobserve(entry.target)
      }
    }), { rootMargin: '0px 0px -6%', threshold: .04 })
    document.querySelectorAll('section[id]').forEach(el => sectionObserver.observe(el))
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el))
    return () => { sectionObserver.disconnect(); revealObserver.disconnect() }
  }, [language])

  useEffect(() => {
    let frame = 0
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--mx', `${e.clientX}px`)
        document.documentElement.style.setProperty('--my', `${e.clientY}px`)
      })
    }
    window.addEventListener('pointermove', onMove)
    return () => { window.removeEventListener('pointermove', onMove); cancelAnimationFrame(frame) }
  }, [])

  useEffect(() => {
    const interactive = 'a, button, .project-card, .lab-card, .case-card, .stack-card'
    const onOver = (e: PointerEvent) => { if ((e.target as HTMLElement).closest(interactive)) cursorRing.current?.classList.add('cursor-hover') }
    const onOut = (e: PointerEvent) => { if ((e.target as HTMLElement).closest(interactive)) cursorRing.current?.classList.remove('cursor-hover') }
    document.addEventListener('pointerover', onOver)
    document.addEventListener('pointerout', onOut)
    return () => { document.removeEventListener('pointerover', onOver); document.removeEventListener('pointerout', onOut) }
  }, [])

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>('.button, .icon-button, .contact-actions a:not(.button)'))
    const cleanups = targets.map(el => {
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect()
        const x = (e.clientX - r.left - r.width / 2) * .3
        const y = (e.clientY - r.top - r.height / 2) * .3
        el.style.transform = `translate(${x}px, ${y}px)`
      }
      const onLeave = () => { el.style.transform = '' }
      el.addEventListener('mousemove', onMove)
      el.addEventListener('mouseleave', onLeave)
      return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave) }
    })
    return () => cleanups.forEach(fn => fn())
  }, [])

  return <>
    <div className="aurora" aria-hidden="true"><i /><i /><i /></div>
    <div className="spotlight" aria-hidden="true" />
    <div className="cursor-dot" aria-hidden="true" />
    <div className="cursor-ring" ref={cursorRing} aria-hidden="true" />
    <aside className="progress-rail" aria-label="Page progress">
      {progress.map((id, index) => <a className={active === id ? 'active' : ''} href={`#${id}`} key={id}><span>{String(index + 1).padStart(2, '0')}</span><i /></a>)}
    </aside>
    <Header menu={menu} setMenu={setMenu} active={active} language={language} changeLanguage={changeLanguage} t={t} />
    <main>
      <Hero t={t} />
      <ProjectCore t={t} />
      <About t={t} />
      <Experience t={t} />
      <Projects t={t} />
      <Lab t={t} />
      <Cases t={t} />
      <Stack t={t} />
      <OpenSource t={t} />
      <Contact t={t} />
    </main>
    <Footer t={t} />
  </>
}

export default App
