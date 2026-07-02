'use client';

import { CSSProperties, ReactNode } from 'react';

export default function Reveal({
  children,
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  as?: 'div' | 'section' | 'li';
}) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
