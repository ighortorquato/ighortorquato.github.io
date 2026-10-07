'use client';

const TECH = [
  'TypeScript', 'React', 'Next.js', 'Node.js', 'React Native', 'Expo', 'Express', 'Prisma',
  'PostgreSQL', 'Redis', 'Socket.io', 'SQL Server', 'Azure', 'Docker', 'Tailwind', 'Go', 'Python',
];

function Row({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 0 }} aria-hidden={ariaHidden}>
      {TECH.map((tech, i) => (
        <span key={i} style={{ display: 'flex', alignItems: 'center' }}>
          <span className="font-display" style={{ fontWeight: 600, fontSize: 19, color: '#7a776f', padding: '0 22px' }}>
            {tech}
          </span>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--ac)' }} />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div
      style={{
        position: 'relative',
        zIndex: 1,
        borderTop: '1px solid rgba(255,255,255,0.08)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        overflow: 'hidden',
        maxWidth: '100vw',
        padding: '18px 0',
        background: 'rgba(17,17,20,0.5)',
      }}
    >
      <div style={{ display: 'flex', width: 'max-content', animation: 'marquee 38s linear infinite' }}>
        <Row />
        <Row ariaHidden />
      </div>
    </div>
  );
}
