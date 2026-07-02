'use client';

import { useLang } from '@/context/LangContext';
import { projects } from '@/lib/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { GithubIcon, ExternalLink, LockIcon } from './icons';

export default function Projects() {
  const { t, lang } = useLang();
  const featured = projects.find((p) => p.isFeatured)!;
  const others = projects.filter((p) => !p.isFeatured);

  return (
    <section id="projects" style={{ position: 'relative', zIndex: 1, maxWidth: 1180, margin: '0 auto', padding: '30px 28px 130px' }}>
      <SectionHeading num="04" title={t.projects.title} />

      {/* Featured */}
      <Reveal
        style={{
          position: 'relative',
          border: '1px solid var(--ac-line)',
          borderRadius: 20,
          padding: 'clamp(28px,4vw,46px)',
          marginBottom: 18,
          background: 'linear-gradient(135deg,rgba(255,92,53,0.06),rgba(17,17,20,0.6))',
          overflow: 'hidden',
        }}
      >
        <div data-cursor>
          <span
            className="font-display"
            style={{ position: 'absolute', top: -30, right: 10, fontWeight: 800, fontSize: 200, color: 'rgba(255,255,255,0.025)', lineHeight: 1, pointerEvents: 'none' }}
          >
            01
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10, marginBottom: 18 }}>
            <span
              className="font-mono"
              style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ac)', border: '1px solid var(--ac-line)', borderRadius: 999, padding: '5px 12px' }}
            >
              {t.projects.featured}
            </span>
            {featured.isPrivate && (
              <span
                className="font-mono"
                style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--faint)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 999, padding: '5px 11px' }}
              >
                <LockIcon />
                {t.projects.private}
              </span>
            )}
            <span className="font-mono" style={{ display: 'flex', alignItems: 'center', gap: 7, marginLeft: 'auto', fontSize: 12, color: 'var(--muted)' }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: featured.languageColor }} />
              {featured.language}
            </span>
          </div>
          <h3 className="font-display" style={{ fontWeight: 800, fontSize: 'clamp(2rem,4vw,2.9rem)', letterSpacing: '-0.02em', margin: '0 0 14px', color: 'var(--ink-bright)' }}>
            {featured.name}
          </h3>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#b6b3ac', maxWidth: 780, margin: '0 0 26px', textWrap: 'pretty' }}>
            {featured.description[lang]}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 30 }}>
            {featured.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono"
                style={{ fontSize: 12, color: 'var(--ac)', background: 'var(--ac-soft)', border: '1px solid var(--ac-line)', borderRadius: 7, padding: '5px 10px', whiteSpace: 'nowrap' }}
              >
                {tech}
              </span>
            ))}
          </div>
          {featured.demo && (
            <a
              href={featured.demo}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor
              style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: 'var(--ac)', color: 'var(--bg)', borderRadius: 11, padding: '13px 24px', fontWeight: 700, fontSize: 14.5, whiteSpace: 'nowrap' }}
            >
              {t.projects.viewDemo}
              <ExternalLink width={15} height={15} strokeWidth={2.4} />
            </a>
          )}
        </div>
      </Reveal>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(330px,1fr))', gap: 18 }}>
        {others.map((p, i) => {
          const shown = p.stack.slice(0, 4);
          const more = p.stack.length - shown.length;
          return (
            <Reveal
              key={p.id}
              delay={Math.min(i * 0.04, 0.2)}
              className="panel panel-hover"
              style={{ display: 'flex', flexDirection: 'column', padding: 24 }}
            >
              <div data-cursor style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                  <span className="font-mono" style={{ fontSize: 12, color: '#4f4d47', fontWeight: 500 }}>
                    {String(i + 2).padStart(2, '0')}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    {p.isPrivate && (
                      <span
                        className="font-mono"
                        style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 10, color: 'var(--faint)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 999, padding: '3px 9px' }}
                      >
                        <LockIcon />
                        {t.projects.private}
                      </span>
                    )}
                    <span className="font-mono" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#8a877f' }}>
                      <span style={{ width: 9, height: 9, borderRadius: '50%', background: p.languageColor }} />
                      {p.language}
                    </span>
                  </div>
                </div>
                <h3 className="font-display" style={{ fontWeight: 700, fontSize: '1.35rem', margin: '0 0 10px', color: 'var(--ink-bright)' }}>
                  {p.name}
                </h3>
                <p style={{ fontSize: '0.94rem', lineHeight: 1.6, color: 'var(--muted)', margin: '0 0 18px', flex: 1, textWrap: 'pretty' }}>
                  {p.description[lang]}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
                  {shown.map((tech) => (
                    <span key={tech} className="font-mono" style={{ fontSize: 12, color: '#8a877f', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 6, padding: '3px 8px', whiteSpace: 'nowrap' }}>
                      {tech}
                    </span>
                  ))}
                  {more > 0 && (
                    <span className="font-mono" style={{ fontSize: 12, color: '#4f4d47', padding: '3px 4px' }}>
                      +{more}
                    </span>
                  )}
                </div>
                <div style={{ display: 'flex', gap: 9, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 12.5, color: 'var(--muted)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, padding: '12px 13px', minHeight: 44 }}
                    >
                      <GithubIcon width={14} height={14} />
                      {t.projects.viewGithub}
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 12.5, color: 'var(--ac)', background: 'var(--ac-soft)', border: '1px solid var(--ac-line)', borderRadius: 8, padding: '12px 13px', minHeight: 44 }}
                    >
                      <ExternalLink width={13} height={13} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
        <a
          href="https://github.com/ighortorquato"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor
          className="btn-outline"
        >
          <GithubIcon width={17} height={17} />
          {t.projects.viewAll}
        </a>
      </Reveal>
    </section>
  );
}
