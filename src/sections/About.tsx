import { SectionHeading } from '../components/SectionHeading'

export function About({ t }: { t: (value: string) => string }) {
  return <section id="about" className="section about">
    <SectionHeading t={t} index="01" eyebrow="ABOUT / PROFILE" title="FROM IDEA TO PRODUCTION." />
    <div className="about-layout reveal">
      <p className="about-lead">{t('I build complete web products across frontend, backend, data and delivery—with quality engineered into every layer.')}</p>
      <div className="about-copy">
        <p>{t('My experience spans custom React platforms, Node.js services, APIs, databases, ecommerce and CMS projects. A strong QA background helps me deliver software that is not only functional, but reliable and accessible.')}</p>
        <div className="metrics">
          <div><b>04</b><span>{t('Product layers')}</span></div>
          <div><b>02</b><span>{t('Engineering perspectives')}</span></div>
          <div><b>∞</b><span>{t('Curiosity to improve')}</span></div>
        </div>
      </div>
    </div>
  </section>
}
