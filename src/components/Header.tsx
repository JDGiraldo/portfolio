import { Menu, X } from 'lucide-react'
import type { Language } from '../data/translations'

const nav: [string, string][] = [
  ['about', 'ABOUT'],
  ['experience', 'EXPERIENCE'],
  ['projects', 'PROJECTS'],
  ['lab', 'ENGINEERING LAB'],
  ['stack', 'STACK'],
  ['contact', 'CONTACT'],
]

export function Header({ menu, setMenu, active, language, changeLanguage, t }: {
  menu: boolean
  setMenu: (value: boolean) => void
  active: string
  language: Language
  changeLanguage: (next: Language) => void
  t: (value: string) => string
}) {
  return <header>
    <a href="#home" className="logo" aria-label="Home">JD<span>_</span></a>
    <nav className={menu ? 'open' : ''}>
      {nav.map(([id, label]) => <a className={active === id ? 'active' : ''} href={`#${id}`} onClick={() => setMenu(false)} key={id}>{t(label)}</a>)}
    </nav>
    <div className="header-tools">
      <div className="lang" aria-label="Language selector">
        <button className={language === 'en' ? 'selected' : ''} onClick={() => changeLanguage('en')}>EN</button>
        <span>/</span>
        <button className={language === 'es' ? 'selected' : ''} onClick={() => changeLanguage('es')}>ES</button>
      </div>
      <button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">{menu ? <X /> : <Menu />}</button>
    </div>
  </header>
}
