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

export const metadata: Metadata = {
  metadataBase: new URL('https://ighortorquato.vercel.app'),
  title: 'Ighor Torquato — Full Stack Developer',
  description:
    'Full Stack Developer especializado em React, React Native, TypeScript, Node.js e Go. Plataformas web e mobile escaláveis com engenharia assistida por IA — do código ao cloud.',
  keywords: ['Full Stack Developer', 'React', 'React Native', 'TypeScript', 'Node.js', 'Go', 'Python', 'Azure', 'Docker', 'AI', 'Cursor', 'Copilot'],
  authors: [{ name: 'Ighor Torquato dos Santos' }],
  openGraph: {
    title: 'Ighor Torquato — Full Stack Developer',
    description: 'Full Stack Developer · React · React Native · TypeScript · Node.js · Go · do código ao cloud',
    type: 'website',
    images: [{ url: '/Ighor_perfil.jpeg', width: 400, height: 400, alt: 'Ighor Torquato' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt"
      className={`${bricolage.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className={spaceGrotesk.className}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
