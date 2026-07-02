'use client';

import { useLang } from '@/context/LangContext';
import { education } from '@/lib/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Education() {
  const { t, lang } = useLang();

  return (
    <section id="education" style={{ position: 'relative', zIndex: 1, maxWidth: 1180, margin: '0 auto', padding: '30px 28px 130px' }}>
      <SectionHeading num="06" title={t.education.title} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
        {education.map((ed, i) => (
          <Reveal key={ed.institution} delay={Math.min(i * 0.05, 0.2)} className="panel panel-hover" style={{ padding: 26 }}>
            <div data-cursor>
              <div className="font-mono" style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ac)', marginBottom: 16 }}>
                {ed.tag[lang]}
              </div>
              <h3 className="font-display" style={{ fontWeight: 700, fontSize: '1.3rem', margin: '0 0 6px', color: 'var(--ink-bright)' }}>
                {ed.institution}
              </h3>
              <p style={{ fontSize: '0.98rem', color: '#cfcdc7', margin: '0 0 14px' }}>{ed.degree[lang]}</p>
              <div className="font-mono" style={{ fontSize: 12, color: 'var(--faint)' }}>
                {ed.period[lang]}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
