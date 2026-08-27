export function SectionHeading({ index, eyebrow, title, copy, t = value => value }: { index: string; eyebrow: string; title: string; copy?: string; t?: (value: string) => string }) {
  return <div className="section-heading reveal" data-index={index}><div className="section-kicker"><span>{index}</span>{t(eyebrow)}</div><h2>{t(title)}<span>_</span></h2>{copy && <p>{t(copy)}</p>}</div>
}
