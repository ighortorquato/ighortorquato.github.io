import type { Metadata } from 'next';
import { Bricolage_Grotesque, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { LangProvider } from '@/context/LangContext';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-bricolage',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono-jb',
  display: 'swap',
});

const SITE_URL = 'https://ighortorquato.github.io';
const TITLE = 'Ighor Torquato — Full-Stack Engineer';
const DESCRIPTION =
  'Full-stack engineer building web and mobile products end-to-end with TypeScript, React, React Native and Node.js. Founder of ItapoFood. Open to remote roles.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['Full-Stack Engineer', 'Product Engineer', 'TypeScript', 'React', 'React Native', 'Node.js', 'PostgreSQL', 'Remote'],
  authors: [{ name: 'Ighor Torquato dos Santos' }],
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    url: `${SITE_URL}/`,
    images: [{ url: '/Ighor_perfil.jpeg', width: 400, height: 400, alt: 'Ighor Torquato' }],
  },
  twitter: {
    card: 'summary',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/Ighor_perfil.jpeg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className={spaceGrotesk.className}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
