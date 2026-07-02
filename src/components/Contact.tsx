'use client';

import { useLang } from '@/context/LangContext';
import Reveal from './Reveal';
import { MailIcon, LinkedinIcon } from './icons';

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" style={{ position: 'relative', zIndex: 1, maxWidth: 1180, margin: '0 auto', padding: '30px 28px 90px' }}>
      <Reveal
        style={{
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 24,
          padding: 'clamp(40px,6vw,80px)',
          background: 'linear-gradient(135deg,rgba(255,92,53,0.05),rgba(17,17,20,0.55))',
          textAlign: 'center',
        }}
      >
        <div className="font-mono" style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ac)', marginBottom: 22 }}>
          07 — {t.contact.label}
        </div>
        <h2
          className="font-display"
          style={{ fontWeight: 800, fontSize: 'clamp(2.4rem,7vw,5.5rem)', letterSpacing: '-0.03em', lineHeight: 0.95, margin: '0 0 22px', color: 'var(--ink-bright)' }}
        >
          {t.contact.title1}
          <br />
          {t.contact.title2}
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--muted)', maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.6 }}>{t.contact.subtitle}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 14 }}>
          <a
            href="mailto:ighortorquato@gmail.com"
            data-cursor
            style={{ display: 'flex', alignItems: 'center', gap: 11, background: 'var(--ac)', color: 'var(--bg)', borderRadius: 13, padding: '17px 30px', fontWeight: 700, fontSize: 16 }}
          >
            <MailIcon />
            ighortorquato@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/ighor-torquato-dos-santos-87050b13b/"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor
            style={{ display: 'flex', alignItems: 'center', gap: 11, border: '1px solid rgba(255,255,255,0.18)', borderRadius: 13, padding: '17px 26px', fontWeight: 600, fontSize: 16, color: 'var(--ink)' }}
          >
            <LinkedinIcon width={18} height={18} />
            LinkedIn
          </a>
        </div>
      </Reveal>
    </section>
  );
}
