'use client';

import { useLang } from '@/context/LangContext';

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 1,
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '32px 28px',
        maxWidth: 1180,
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
      }}
    >
      <span className="font-mono" style={{ fontSize: 12, color: 'var(--faint)' }}>
        © {year} Ighor Torquato · {t.footer.text}
      </span>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="font-mono"
        style={{
          background: 'none',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: 9,
          padding: '12px 16px',
          fontSize: 12,
          color: 'var(--muted)',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          cursor: 'pointer',
        }}
      >
        <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M12 19V5M6 11l6-6 6 6" />
        </svg>
        {t.footer.backTop}
      </button>
    </footer>
  );
}
