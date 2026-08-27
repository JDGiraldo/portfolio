import { useEffect, useState } from 'react'
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

function App() {
  const [menu, setMenu] = useState(false)
  const [active, setActive] = useState('home')
  const [language, setLanguage] = useState<Language>(() => (localStorage.getItem('portfolio-language') as Language) || 'en')
  const t = (value: string) => translate(value, language)
  const changeLanguage = (next: Language) => { setLanguage(next); localStorage.setItem('portfolio-language', next); document.documentElement.lang = next }

  useEffect(() => {
    document.documentElement.lang = language
    const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { setActive(e.target.id); e.target.classList.add('visible') } }), { rootMargin: '-35% 0px -55%', threshold: 0 })
    document.querySelectorAll('section[id], .reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
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

  return <>
    <div className="aurora" aria-hidden="true"><i /><i /><i /></div>
    <div className="spotlight" aria-hidden="true" />
    <Header menu={menu} setMenu={setMenu} active={active} language={language} changeLanguage={changeLanguage} t={t} />
    <main>
      <Hero t={t} />
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
