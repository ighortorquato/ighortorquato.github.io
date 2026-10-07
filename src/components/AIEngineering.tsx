'use client';

import { useLang } from '@/context/LangContext';
import { aiSteps, aiTools } from '@/lib/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function AIEngineering() {
  const { t, lang } = useLang();

  return (
    <section id="ai" style={{ position: 'relative', zIndex: 1, maxWidth: 1180, margin: '0 auto', padding: '30px 28px 130px' }}>
      <SectionHeading num="05" title={t.ai.title} />

      <Reveal
        as="div"
        style={{ fontSize: 'clamp(1.05rem,1.7vw,1.4rem)', lineHeight: 1.55, color: '#d6d3cc', maxWidth: 840, margin: '0 0 54px', fontWeight: 500, textWrap: 'pretty' }}
      >
        {t.ai.intro}
      </Reveal>

      <div className="ai-grid grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12" style={{ alignItems: 'start', marginBottom: 18 }}>
        {/* Config steps */}
        <Reveal>
          <h3 className="mono-label" style={{ margin: '0 0 8px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 7, height: 7, borderRadius: 2, background: 'var(--ac)' }} />
            {t.ai.configTitle}
          </h3>
          <div>
            {aiSteps.map((step) => (
              <div key={step.n} style={{ display: 'flex', gap: 18, padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <span className="font-mono" style={{ fontSize: 12, color: 'var(--ac)', fontWeight: 600, paddingTop: 3 }}>
                  {step.n}
                </span>
                <div>
                  <h4 className="font-display" style={{ fontWeight: 700, fontSize: '1.18rem', margin: '0 0 7px', color: 'var(--ink-bright)' }}>
                    {step.title[lang]}
                  </h4>
                  <p style={{ fontSize: '0.97rem', lineHeight: 1.62, color: 'var(--muted)', margin: 0, textWrap: 'pretty' }}>{step.desc[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Editor card */}
        <Reveal delay={0.08}>
          <div
            data-cursor
            className="ai-editor"
            style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, overflow: 'hidden', background: '#0E0E10', boxShadow: '0 24px 60px rgba(0,0,0,0.4)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '13px 16px', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57' }} />
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#febc2e' }} />
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28c840' }} />
              <span className="font-mono" style={{ marginLeft: 10, fontSize: 11.5, color: '#8a877f', display: 'flex', alignItems: 'center', gap: 7 }}>
                <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="var(--ac)" strokeWidth={2}>
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <path d="M14 2v6h6" />
                </svg>
                {t.ai.ruleFile}
              </span>
              <span className="font-mono" style={{ marginLeft: 'auto', fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--faint)' }}>
                {t.ai.ruleNote}
              </span>
            </div>
            <pre className="font-mono" style={{ margin: 0, padding: '22px 20px', fontSize: 12.5, lineHeight: 1.75, color: '#cfcdc7', overflowX: 'auto', whiteSpace: 'pre' }}>
              <span style={{ color: 'var(--faint)' }}># CLAUDE.md</span>{'\n'}{'\n'}
              <span style={{ color: '#5B8DEF' }}>## Stack</span>{'\n'}
              - Turborepo · Node/Express/Prisma · RN/Expo{'\n'}{'\n'}
              <span style={{ color: '#5B8DEF' }}>## Rules</span>{'\n'}
              - shared contracts in <span style={{ color: '#3FB68B' }}>packages/types</span> — never duplicate{'\n'}
              - validate all input with <span style={{ color: 'var(--ac)' }}>Zod</span> schemas{'\n'}
              - tests for services and business rules{'\n'}
              - small PRs · <span style={{ color: 'var(--ac)' }}>Conventional Commits</span>{'\n'}{'\n'}
              <span style={{ color: '#5B8DEF' }}>## Workflow</span>{'\n'}
              - keep context lean — read only what the task needs
            </pre>
          </div>
        </Reveal>
      </div>

      {/* Tools */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16, marginTop: 40 }}>
        {aiTools.map((tool, i) => (
          <Reveal key={tool.name} delay={Math.min(i * 0.05, 0.2)} className="panel panel-hover" style={{ padding: 24 }}>
            <div data-cursor>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, marginBottom: 14 }}>
                <h4 className="font-display" style={{ fontWeight: 700, fontSize: '1.3rem', margin: 0, color: 'var(--ink-bright)' }}>
                  {tool.name}
                </h4>
                <span
                  className="font-mono"
                  style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ac)', border: '1px solid var(--ac-line)', borderRadius: 999, padding: '4px 10px', whiteSpace: 'nowrap' }}
                >
                  {tool.tag[lang]}
                </span>
              </div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--muted)', margin: 0, textWrap: 'pretty' }}>{tool.desc[lang]}</p>
            </div>
          </Reveal>
        ))}
      </div>

    </section>
  );
}
