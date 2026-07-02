# Portfolio — Ighor Torquato

## Stack
- **Framework**: Next.js 16 (App Router) + TypeScript
- **Styling**: Tailwind CSS v4 + CSS custom properties (globals.css)
- **Animations**: Framer Motion
- **Deploy**: Vercel (git push to main → auto-deploy)

## Structure
```
src/
├── app/
│   ├── layout.tsx          ← metadata, fonts (Inter + Poppins), LangProvider wrapper
│   ├── page.tsx            ← assembles all sections
│   ├── globals.css         ← design system: CSS vars, .glass-card, .gradient-text, animations
│   └── api/contact/route.ts ← POST endpoint for contact form
├── components/             ← one file per section (all 'use client')
├── context/
│   └── LangContext.tsx     ← PT/EN toggle, persists in localStorage
└── lib/
    ├── translations.ts     ← all text content in both languages
    └── data.ts             ← typed arrays: projects, experience, skillGroups, education
public/
└── Ighor_perfil.jpeg
```

## Commands
```bash
npm run dev     # dev server at http://localhost:3000
npm run build   # production build
npm run lint    # ESLint
```

## Updating content
- **Text/translations**: edit `src/lib/translations.ts`
- **Projects**: edit `src/lib/data.ts` → `projects[]`
- **Experience**: edit `src/lib/data.ts` → `experience[]`
- **Skills**: edit `src/lib/data.ts` → `skillGroups[]`
- **Colors/design**: edit `src/app/globals.css` → `:root` CSS variables

## Design system
- Background: animated gradient `-45deg` between `#0f0c29 → #302b63 → #24243e`
- Accent 1 (roxo): `#a78bfa` / Accent 2 (azul): `#60a5fa`
- Glass cards: `.glass-card` or `.glass-card-hover` CSS classes
- Gradient text: `.gradient-text` CSS class
- Featured project border: `.gradient-border` wrapper

## i18n
All text lives in `translations.ts`. Components read it via `const { t, lang } = useLang()`.
Language toggle is in the Navbar — persists to `localStorage`.

## Contact form
Currently logs to console and returns 200. To enable email sending:
1. Create account at resend.com
2. Add `RESEND_API_KEY` to Vercel environment variables
3. Uncomment the Resend code in `src/app/api/contact/route.ts`
