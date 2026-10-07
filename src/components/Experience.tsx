'use client';

import { useLang } from '@/context/LangContext';
import { experience, loc } from '@/lib/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Experience() {
  const { t, lang } = useLang();

  return (
    <section id="experience" style={{ position: 'relative', zIndex: 1, maxWidth: 1180, margin: '0 auto', padding: '30px 28px 130px' }}>
      <SectionHeading num="03" title={t.experience.title} />

      <div style={{ position: 'relative', paddingLeft: 34 }}>
        <div
          style={{
            position: 'absolute',
            left: 5,
            top: 6,
            bottom: 6,
            width: 1,
            background: 'linear-gradient(to bottom,var(--ac-line),rgba(255,255,255,0.08))',
          }}
        />
        {experience.map((job, i) => (
          <Reveal key={i} delay={Math.min(i * 0.05, 0.2)} style={{ position: 'relative', marginBottom: 42 }}>
            <span
              style={{
                position: 'absolute',
                left: -34,
                top: 6,
                width: 11,
                height: 11,
                borderRadius: '50%',
                background: 'var(--ac)',
                boxShadow: '0 0 0 4px var(--bg), 0 0 14px var(--ac-glow)',
              }}
            />
            {job.period[lang] && (
              <div className="font-mono" style={{ fontSize: 12, letterSpacing: '0.08em', color: 'var(--ac)', marginBottom: 8 }}>
                {job.period[lang]}
              </div>
            )}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '6px 12px', marginBottom: 4 }}>
              <h3 className="font-display" style={{ fontWeight: 700, fontSize: '1.5rem', margin: 0, color: 'var(--ink-bright)' }}>
                {job.role[lang]}
              </h3>
              <span style={{ color: 'var(--faint)' }}>·</span>
              <span style={{ fontSize: '1.05rem', color: '#cfcdc7', fontWeight: 600 }}>{job.company}</span>
            </div>
            <div className="font-mono" style={{ fontSize: 11.5, color: 'var(--faint)', marginBottom: 14 }}>
              {job.location[lang]}
            </div>
            <ul style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--muted)', maxWidth: 760, margin: '0 0 16px', paddingLeft: 20, listStyle: 'disc', textWrap: 'pretty' }}>
              {job.bullets[lang].map((b) => (
                <li key={b} style={{ marginBottom: 6 }}>
                  {b}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
              {job.stack.map((tech) => (
                <span key={loc(tech, 'en')} className="chip">
                  {loc(tech, lang)}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
