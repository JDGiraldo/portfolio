import { Code2, Contact as ContactIcon, Mail, MessageCircle } from 'lucide-react'

export function Contact({ t }: { t: (value: string) => string }) {
  return <section id="contact" className="contact section">
    <div className="contact-status"><i /> {t('STATUS: AVAILABLE FOR OPPORTUNITIES')}</div>
    <p>08 / {t('INITIATE CONNECTION')}</p>
    <h2>{t("LET'S BUILD")}<br /><span>{t('RELIABLE SOFTWARE.')}</span></h2>
    <div className="contact-actions">
      <a className="button primary" href="https://wa.me/573104555201" target="_blank" rel="noreferrer">{t('CONTACT ME')} <MessageCircle /></a>
      <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer"><Code2 /></a>
      <a aria-label="LinkedIn" href="https://www.linkedin.com/in/jdgiraldog01" target="_blank" rel="noreferrer"><ContactIcon /></a>
      <a aria-label="WhatsApp" href="https://wa.me/573104555201" target="_blank" rel="noreferrer"><MessageCircle /></a>
      <a aria-label="Email" href="mailto:ingjdgiraldo@outlook.com"><Mail /></a>
    </div>
    <a className="contact-email" href="mailto:ingjdgiraldo@outlook.com">ingjdgiraldo@outlook.com</a>
  </section>
}
