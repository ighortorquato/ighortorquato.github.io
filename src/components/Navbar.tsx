'use client';

import { useState, useEffect } from 'react';
import { useLang } from '@/context/LangContext';

const sectionIds = ['about', 'skills', 'experience', 'projects', 'ai', 'education', 'contact'] as const;

export default function Navbar() {
  const { t, lang, toggle } = useLang();
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener('scroll', close, { passive: true });
    return () => window.removeEventListener('scroll', close);
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'experience', label: t.nav.experience },
    { id: 'projects', label: t.nav.projects },
    { id: 'ai', label: t.nav.ai },
    { id: 'education', label: t.nav.education },
  ];

  const segBase: React.CSSProperties = {
    padding: '12px 14px',
    border: 'none',
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.05em',
    cursor: 'pointer',
    transition: 'color .2s, background .2s',
    minHeight: 44,
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 62,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          background: 'rgba(11,11,12,0.72)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: 10, padding: '11px 0', color: 'var(--ink)', cursor: 'pointer', minHeight: 44 }}
        >
          <span
            className="font-display"
            style={{ display: 'grid', placeItems: 'center', width: 32, height: 32, border: '1px solid var(--ac-line)', borderRadius: 8, fontWeight: 800, fontSize: 15, color: 'var(--ac)', flexShrink: 0 }}
          >
            IT
          </span>
          <span className="font-mono hidden sm:inline" style={{ fontSize: 12.5, letterSpacing: '0.04em', color: '#cfcdc7' }}>
            ighor<span style={{ color: 'var(--ac)' }}>.</span>torquato
          </span>
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 6 }}>
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-mono"
              style={{
                background: active === id ? 'rgba(255,255,255,0.05)' : 'none',
                border: 'none',
                padding: '8px 13px',
                borderRadius: 8,
                fontSize: 12,
                letterSpacing: '0.04em',
                color: active === id ? 'var(--ink)' : 'var(--muted)',
                cursor: 'pointer',
                transition: 'color .25s, background .25s',
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {/* Lang toggle */}
          <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 9, overflow: 'hidden' }}>
            <button
              onClick={() => lang !== 'pt' && toggle()}
              aria-label="Português"
              style={{ ...segBase, color: lang === 'pt' ? 'var(--bg)' : 'var(--muted)', background: lang === 'pt' ? 'var(--ac)' : 'transparent' }}
            >
              PT
            </button>
            <button
              onClick={() => lang !== 'en' && toggle()}
              aria-label="English"
              style={{ ...segBase, color: lang === 'en' ? 'var(--bg)' : 'var(--muted)', background: lang === 'en' ? 'var(--ac)' : 'transparent' }}
            >
              EN
            </button>
          </div>

          {/* Contato — desktop only */}
          <button
            onClick={() => scrollTo('contact')}
            className="hidden sm:flex"
            style={{ alignItems: 'center', gap: 8, background: 'var(--ac)', color: 'var(--bg)', border: 'none', padding: '12px 17px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, whiteSpace: 'nowrap', cursor: 'pointer', minHeight: 44 }}
          >
            {t.nav.contact}
          </button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="flex md:hidden"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            style={{
              background: menuOpen ? 'rgba(255,255,255,0.07)' : 'none',
              border: '1px solid rgba(255,255,255,0.14)',
              borderRadius: 8,
              padding: '10px',
              cursor: 'pointer',
              color: 'var(--ink)',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 44,
              minWidth: 44,
              transition: 'background .2s',
            }}
          >
            {menuOpen ? (
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <>
          <div
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 98,
              background: 'rgba(0,0,0,0.55)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
            }}
          />
          <div
            className="flex md:hidden"
            style={{
              position: 'fixed',
              top: 62,
              left: 0,
              right: 0,
              zIndex: 99,
              background: 'rgba(11,11,14,0.97)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              padding: '16px 16px 24px',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="font-mono"
                style={{
                  background: active === id ? 'rgba(255,255,255,0.05)' : 'none',
                  border: 'none',
                  borderRadius: 10,
                  padding: '14px 16px',
                  fontSize: 13,
                  letterSpacing: '0.06em',
                  color: active === id ? 'var(--ink-bright)' : 'var(--muted)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'color .2s, background .2s',
                  minHeight: 48,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                {active === id && (
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--ac)', flexShrink: 0 }} />
                )}
                {label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              style={{
                marginTop: 10,
                background: 'var(--ac)',
                color: 'var(--bg)',
                border: 'none',
                borderRadius: 10,
                padding: '14px 16px',
                fontWeight: 700,
                fontSize: 14,
                cursor: 'pointer',
                minHeight: 48,
                textAlign: 'center',
              }}
            >
              {t.nav.contact}
            </button>
          </div>
        </>
      )}
    </>
  );
}
