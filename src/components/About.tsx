'use client';

import Image from 'next/image';
import { useLang } from '@/context/LangContext';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function About() {
  const { t } = useLang();

  const chip = (icon: React.ReactNode, label: string) => (
    <span
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: 10,
        padding: '10px 16px',
        fontSize: 13.5,
        color: '#cfcdc7',
      }}
    >
      {icon}
      {label}
    </span>
  );

  return (
    <section id="about" style={{ position: 'relative', zIndex: 1, maxWidth: 1180, margin: '0 auto', padding: '130px 28px' }}>
      <SectionHeading num="01" title={t.about.title} />

      <div className="flex-1 gap-8 md:gap-14" style={{ alignItems: 'start' }}>
        {/* <Reveal>
          <div
            data-cursor
            style={{ position: 'relative', width: '100%', aspectRatio: '1', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 18, overflow: 'hidden' }}
          >
            <Image
              src="/Ighor_perfil.jpeg"
              alt="Ighor Torquato dos Santos"
              fill
              sizes="300px"
              className="about-photo"
              style={{ objectFit: 'cover', filter: 'grayscale(1) contrast(1.04)', transition: 'filter .55s ease' }}
            />
          </div>
          <div
            className="font-mono"
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 14, fontSize: 11, color: 'var(--faint)', letterSpacing: '0.05em' }}
          >
            <span>IGHOR_T.JPG</span>
            <span style={{ color: 'var(--ac)' }}>●</span>
          </div>
        </Reveal> */}

        <Reveal delay={0.08}>
          <p style={{ fontSize: 'clamp(1.05rem,1.6vw,1.35rem)', lineHeight: 1.62, color: '#d6d3cc', margin: '0 0 22px', fontWeight: 500, textWrap: 'pretty' }}>
            {t.about.p1a}
            <span style={{ color: 'var(--ac)' }}>{t.about.p1hi}</span>
            {t.about.p1b}
          </p>
          <p style={{ fontSize: '1.02rem', lineHeight: 1.72, color: 'var(--muted)', margin: '0 0 18px', textWrap: 'pretty' }}>{t.about.p2}</p>
          <p style={{ fontSize: '1.02rem', lineHeight: 1.72, color: 'var(--muted)', margin: 0, textWrap: 'pretty' }}>{t.about.p3}</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 32 }}>
            {chip(
              <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="var(--ac)" strokeWidth={2}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>,
              t.about.chipLoc
            )}
            {chip(
              <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="var(--ac)" strokeWidth={2}>
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
              </svg>,
              t.about.chipWork
            )}
            {/* {chip(
              <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="var(--ac)" strokeWidth={2}>
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>,
              t.about.chipEdu
            )} */}
          </div>
        </Reveal>
      </div>

    </section>
  );
}
