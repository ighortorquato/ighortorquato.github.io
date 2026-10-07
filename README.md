# Portfolio — Ighor Torquato

Site-portfólio/CV online, bilíngue (EN padrão · PT), focado em vagas remotas de
Full-Stack / Product Engineer. Publicado em https://ighortorquato.github.io/.

**Stack:** Next 16 (App Router, `output: 'export'`) · TypeScript · Tailwind v4 · Framer Motion · `@react-pdf/renderer`.

## Comandos

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build    # export estático em ./out
```

## Onde editar o conteúdo

| O quê | Arquivo |
| --- | --- |
| Textos (hero, about, nav, contato, seção de IA), EN e PT | `src/lib/translations.ts` |
| Projetos, experiência, skills, formação, cards da seção de IA | `src/lib/data.ts` |
| Metadados, canonical, OG/Twitter | `src/app/layout.tsx` |
| Cores / design system (`--ac` e variáveis em `:root`) | `src/app/globals.css` |
| Ticker de tecnologias | `src/components/Marquee.tsx` |

Todo texto existe em `{ pt, en }`. O idioma padrão é EN; a escolha do toggle fica
em `localStorage` (`portfolio-lang`) — ver `src/context/LangContext.tsx`.

Pendências de conteúdo estão marcadas no código como `TODO(ighor)`:

```bash
grep -rn "TODO(ighor)" src
```

## Currículo (PDF)

O botão "Download CV" gera o PDF no navegador a partir do conteúdo do site
(`src/components/ResumeDocument.tsx`), no idioma ativo. Para usar um PDF feito à
mão, coloque `public/cv-en.pdf` e/ou `public/cv-pt.pdf`: se existirem, eles são
servidos no lugar do PDF gerado.

## Deploy

Push na `main` dispara `.github/workflows/deploy.yml`, que faz o build e publica
`./out` no **GitHub Pages**. O `metadataBase` e o canonical apontam para
`https://ighortorquato.github.io`.
