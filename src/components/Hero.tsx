'use client';

import { useState } from 'react';
import { useLang } from '@/context/LangContext';
import { GithubIcon, LinkedinIcon, ArrowRight, DownloadIcon } from './icons';

const anim = (delay: number): React.CSSProperties => ({
  opacity: 0,
  animation: 'heroIn .9s cubic-bezier(.16,1,.3,1) forwards',
  animationDelay: `${delay}s`,
});

export default function Hero() {
  const { t, lang } = useLang();
  const [generatingCV, setGeneratingCV] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' });
  };

  const downloadCV = async () => {
    if (generatingCV) return;
    setGeneratingCV(true);
    try {
      const filename = lang === 'pt' ? 'Curriculo_Ighor_Torquato.pdf' : 'Resume_Ighor_Torquato.pdf';
      // Serve a hand-made PDF when /cv-en.pdf or /cv-pt.pdf exists in public/; otherwise generate it from site data.
      let blob: Blob | null = null;
      try {
        const res = await fetch(`/cv-${lang}.pdf`, { cache: 'no-cache' });
        if (res.ok && (res.headers.get('content-type') ?? '').includes('pdf')) blob = await res.blob();
      } catch {
        /* fall back to the generated PDF */
      }
      if (!blob) {
        const [{ pdf }, { default: ResumeDocument }] = await Promise.all([import('@react-pdf/renderer'), import('./ResumeDocument')]);
        blob = await pdf(<ResumeDocument lang={lang} />).toBlob();
      }
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } finally {
      setGeneratingCV(false);
    }
  };

  const socialBtn: React.CSSProperties = {
    display: 'grid',
    placeItems: 'center',
    width: 52,
    height: 52,
    border: '1px solid rgba(255,255,255,0.14)',
    borderRadius: 11,
    color: 'var(--muted)',
    transition: 'color .25s, border-color .25s, background .25s',
  };

  return (
    <header
      id="top"
      style={{
        position: 'relative',
        zIndex: 1,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: 1180,
        margin: '0 auto',
        padding: '120px 28px 60px',
      }}
    >
      <div style={{ ...anim(0.05), display: 'flex', alignItems: 'center', gap: 12, marginBottom: 30 }}>
        <span style={{ position: 'relative', display: 'flex', width: 9, height: 9 }}>
          <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#5FBF7A', animation: 'pulseDot 2.4s ease-in-out infinite' }} />
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#5FBF7A' }} />
        </span>
        <span className="font-mono" style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)' }}>
          {t.hero.status}
        </span>
      </div>

      <div className="font-mono" style={{ ...anim(0.12), fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ac)', marginBottom: 18 }}>
        {t.hero.kicker}
      </div>

      <h1
        className="font-display"
        style={{
          ...anim(0.2),
          fontWeight: 800,
          fontSize: 'clamp(2.7rem,8.6vw,7.4rem)',
          lineHeight: 0.92,
          letterSpacing: '-0.035em',
          margin: 0,
          color: 'var(--ink-bright)',
          textWrap: 'balance',
        }}
      >
        {t.hero.title1}
        <br />
        <span style={{ color: 'var(--ac)' }}>{t.hero.title2}</span>
      </h1>

      <p style={{ ...anim(0.32), maxWidth: 560, margin: '32px 0 0', fontSize: 'clamp(1rem,1.5vw,1.18rem)', lineHeight: 1.65, color: '#b6b3ac' }}>
        {t.hero.desc}
      </p>
      <div className="font-mono" style={{ ...anim(0.36), marginTop: 16, fontSize: 13, letterSpacing: '0.08em', color: 'var(--faint)' }}>
        {t.hero.stackLine}
      </div>

      <div style={{ ...anim(0.42), display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 40 }}>
        <button data-cursor className="btn-primary" onClick={() => scrollTo('projects')}>
          {t.hero.cta1}
          <ArrowRight />
        </button>
        <button data-cursor className="btn-outline" onClick={() => scrollTo('contact')}>
          {t.hero.cta2}
        </button>
        <button data-cursor className="btn-outline" onClick={downloadCV} disabled={generatingCV}>
          {generatingCV ? t.hero.cta3Loading : t.hero.cta3}
          <DownloadIcon />
        </button>
        <div style={{ display: 'flex', gap: 10 }}>
          <a href="https://github.com/ighortorquato" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={socialBtn}>
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/ighor-torquato-dos-santos-87050b13b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={socialBtn}
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>

      <div
        style={{
          ...anim(0.55),
          display: 'grid',
          gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
          gap: 1,
          marginTop: 64,
          maxWidth: 660,
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 14,
          overflow: 'hidden',
        }}
      >
        {[
          { l: t.hero.statCurrentL, v: '4Zoom · Nestlé' },
          { l: t.hero.statBaseL, v: t.hero.statBaseV },
          { l: t.hero.statStackL, v: t.hero.statStackV },
        ].map((s) => (
          <div key={s.l} style={{ background: 'var(--bg)', padding: '18px 20px' }}>
            <div className="font-mono" style={{ fontSize: 10.5, letterSpacing: '0.18em', color: 'var(--faint)', textTransform: 'uppercase' }}>
              {s.l}
            </div>
            <div className="font-display" style={{ fontWeight: 700, fontSize: 17, marginTop: 6 }}>
              {s.v}
            </div>
          </div>
        ))}
      </div>

      <div
        className="font-mono"
        style={{ position: 'absolute', bottom: 26, left: 28, display: 'flex', alignItems: 'center', gap: 10, color: '#4f4d47', fontSize: 11, letterSpacing: '0.1em' }}
      >
        <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{ animation: 'bobble 2s ease-in-out infinite' }}>
          <path d="M12 5v14M6 13l6 6 6-6" />
        </svg>
        SCROLL
      </div>
    </header>
  );
}
