export function Footer({ t }: { t: (value: string) => string }) {
  return <footer>
    <a href="#home" className="logo">JD<span>_</span></a>
    <p>JUAN DIEGO GIRALDO © 2026</p>
    <span>{t('SYSTEM ONLINE')} · BOGOTÁ, CO</span>
  </footer>
}
