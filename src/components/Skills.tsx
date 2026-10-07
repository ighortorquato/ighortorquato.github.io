'use client';

import { useLang } from '@/context/LangContext';
import { skillGroups, loc } from '@/lib/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Skills() {
  const { t, lang } = useLang();
  const groupNames = t.skills.groups as Record<string, string>;

  return (
    <section id="skills" style={{ position: 'relative', zIndex: 1, maxWidth: 1180, margin: '0 auto', padding: '30px 28px 130px' }}>
      <SectionHeading num="02" title={t.skills.title} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(330px,1fr))', gap: 16 }}>
        {skillGroups.map((group, i) => (
          <Reveal key={group.key} delay={Math.min(i * 0.04, 0.2)} className="panel panel-hover" style={{ padding: 24 }}>
            <div data-cursor>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                <span style={{ width: 7, height: 7, borderRadius: 2, background: 'var(--ac)' }} />
                <h3 className="mono-label" style={{ margin: 0 }}>
                  {groupNames[group.key] ?? group.key}
                </h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {group.skills.map((s) => (
                  <span
                    key={loc(s, 'en')}
                    style={{
                      fontSize: 13.5,
                      color: '#cfcdc7',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 8,
                      padding: '6px 12px',
                      background: 'rgba(255,255,255,0.02)',
                    }}
                  >
                    {loc(s, lang)}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
