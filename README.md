# Redesign — instalação no seu portfólio

Redesign "editorial técnico" (dark ember `#FF5C35`, tipografia statement, dot-grid
interativo, cursor custom, reveals no scroll, seção **Engenharia com IA**).
Mesma stack do seu repo: **Next 16 · TypeScript · Tailwind v4 · framer-motion · LangContext**.

## Como aplicar

Copie a pasta `src/` deste pacote por cima da `src/` do seu projeto
(`ighortorquato.github.io/src/`). Os arquivos são drop-in e mantêm os mesmos
caminhos/`@/` imports.

```
src/
├── app/
│   ├── globals.css          ← SUBSTITUI  (novo design system: vars --ac, painéis, botões)
│   ├── layout.tsx           ← SUBSTITUI  (fontes: Bricolage Grotesque + Space Grotesk + JetBrains Mono)
│   └── page.tsx             ← SUBSTITUI  (monta Background + nova ordem de seções)
├── lib/
│   ├── translations.ts      ← SUBSTITUI  (textos PT/EN reescritos + bloco `ai`)
│   └── data.ts              ← SUBSTITUI  (location/tag/degree/period agora {pt,en}; + aiSteps/aiTools)
└── components/
    ├── Background.tsx       ← NOVO  (dot-grid canvas + cursor custom)
    ├── Reveal.tsx           ← NOVO  (wrapper framer-motion p/ reveal no scroll)
    ├── SectionHeading.tsx   ← NOVO  (cabeçalho numerado "01 — Título")
    ├── icons.tsx            ← NOVO  (GitHub, LinkedIn, setas, lock, mail)
    ├── Marquee.tsx          ← NOVO  (ticker de tecnologias)
    ├── AIEngineering.tsx    ← NOVO  (seção 05 — configuração de agentes + card editor)
    ├── Navbar.tsx           ← SUBSTITUI  (toggle segmentado PT|EN, link "Engenharia com IA")
    ├── Hero.tsx             ← SUBSTITUI
    ├── About.tsx            ← SUBSTITUI
    ├── Skills.tsx           ← SUBSTITUI
    ├── Experience.tsx       ← SUBSTITUI
    ├── Projects.tsx         ← SUBSTITUI
    ├── Education.tsx        ← SUBSTITUI
    ├── Contact.tsx          ← SUBSTITUI
    └── Footer.tsx           ← SUBSTITUI
```

Depois:

```bash
npm run dev      # confira em http://localhost:3000
npm run build    # valida o build de produção
```

Sem dependências novas — tudo usa o que já está no seu `package.json`.

## Re-tematizar (1 valor)

Toda a cor de acento vem de `--ac` em `globals.css` (`:root`). Troque essa linha
(e os 3 `--ac-*` logo abaixo) e o site inteiro muda — o dot-grid lê `--ac` em runtime.

## ⚠️ Confira antes de publicar

1. **Conteúdo da seção IA** (`data.ts` → `aiSteps`/`aiTools` e o card `.mdc` em
   `AIEngineering.tsx`): escrevi uma configuração realista (regras `.cursor/rules`,
   indexação, agent mode, MCP Prisma/GitHub). **Ajuste para refletir exatamente o
   seu setup real** no ItapoFood.
2. **Formulário de contato**: o redesign usa CTAs diretos (e-mail + LinkedIn), como
   no mock que você aprovou — não tem mais o `<form>`. Seu `app/api/contact/route.ts`
   fica intacto, só deixa de ser usado. Se quiser o form de volta, me avise que
   reintegro no novo visual.
3. `metadata.metadataBase` em `layout.tsx` continua apontando p/ `ighortorquato.vercel.app`.
