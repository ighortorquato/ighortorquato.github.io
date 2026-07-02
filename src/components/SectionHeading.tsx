import Reveal from './Reveal';

/** Numbered section heading: "01 — Title ─────" */
export default function SectionHeading({ num, title }: { num: string; title: string }) {
  return (
    <Reveal
      style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: 18,
        marginBottom: 54,
      }}
    >
      <span className="font-mono" style={{ fontSize: 13, color: 'var(--ac)', fontWeight: 500 }}>
        {num}
      </span>
      <h2
        className="font-display"
        style={{
          fontWeight: 700,
          fontSize: 'clamp(2rem,4.2vw,3.1rem)',
          letterSpacing: '-0.02em',
          lineHeight: 1,
          margin: 0,
        }}
      >
        {title}
      </h2>
      <span style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.1)' }} />
    </Reveal>
  );
}
