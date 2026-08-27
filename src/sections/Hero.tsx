import { ArrowDownRight, Code2 } from 'lucide-react'

const signals = ['REACT', 'TYPESCRIPT', 'NODE.JS', 'APIs', 'DATABASES', 'QUALITY']

export function Hero({ t }: { t: (value: string) => string }) {
  return <section className="hero" id="home">
    <div className="hero-grid">
      <div className="hero-copy">
        <div className="eyebrow"><i /> {t('ENGINEERING SYSTEM ONLINE')} <span>BUILD 2026.01</span></div>
        <h1><span>JUAN DIEGO</span><br />GIRALDO</h1>
        <div className="role"><span>{t('FULL STACK DEVELOPER')}</span><b>{t('SOFTWARE + QUALITY ENGINEERING')}</b></div>
        <p className="lede">{t('Building complete digital products—from interface and APIs to data, deployment and quality.')}</p>
        <div className="actions"><a className="button primary" href="#projects">{t('VIEW PROJECTS')} <ArrowDownRight /></a><a className="button" href="#lab">{t('ENGINEERING LAB')}</a><a className="icon-button" aria-label="GitHub profile" href="https://github.com/" target="_blank" rel="noreferrer"><Code2 /></a></div>
      </div>
      <div className="terminal-panel" aria-label="System status terminal">
        <div className="terminal-bar"><span><i /><i /><i /></span><b>JD@QA-LAB:~</b><em>SYS.01</em></div>
        <div className="terminal-body"><p><b>›</b> {t('initializing portfolio...')}</p><p><b>›</b> {t('loading engineering environment...')}</p><p><b>›</b> frontend: <span>{t('ready')}</span></p><p><b>›</b> backend: <span>{t('ready')}</span></p><p><b>›</b> quality: <span>{t('ready')}</span></p><p><b>›</b> {t('status:')} <span>{t('available')}</span><i className="cursor" /></p></div>
        <div className="scan-line" />
      </div>
    </div>
    <div className="signal-strip">{signals.map((item, i) => <span key={item}><b>0{i + 1}</b>{item}</span>)}</div>
    <a href="#about" className="scroll-cue">{t('SCROLL TO EXPLORE')} <ArrowDownRight /></a>
  </section>
}
