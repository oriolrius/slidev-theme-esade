# CLAUDE.md - ESADE Slidev Theme

Custom Slidev theme implementing ESADE Brand Book 2025. Consult `ESADE_BRANDBOOK.md` before design changes.

## Quick Start

```bash
npm install   # once, at repo root -- Slidev 52 resolves @slidev/types|client from the theme root when using theme: ../
cd test/ && pnpm install && pnpm stack   # mprocs dev stack on port 3037 -- see ORCA.md
```

CSS/layout changes hot-reload. Export: `cd test/ && pnpm exec slidev export slides.md --output slides.pdf`

## Key Conventions

- **Fonts**: ESADE (serif, headings) + Mabry Pro (sans-serif, body) as woff2 in `public/fonts/`
- **Colors**: always use `--esade-*` CSS variables, never hardcode brand hex values
- **Min font size**: 1.4rem everywhere (projector readability)
- **Layouts**: CSS-only (cover, section, center, two-cols, quote, default) styled in `esade-theme.css`; complex ones are Vue components in `layouts/`
- **Icons**: Font Awesome 6 via CDN import in CSS

## Dev environment (Orca)

Panes/tabs, ports and the mprocs dev stack: see `ORCA.md`. Short version: the
`esade-theme-dev` tab runs `mprocs` from `test/` (port 3037); view the deck at
the WSL NAT IP, not `localhost`.

## Gotchas

- `test/public` is a **symlink** to `../public` -- required for fonts. If broken: `cd test && ln -sf ../public public`
- `package.json` `files` array declares what gets published to npm -- keep it in sync
- `global-bottom.vue` renders page numbers; hidden on cover layouts and last slide
- `styles/index.ts` is just `import './esade-theme.css'` -- Slidev requires this entry point

## New Layout Checklist

1. Create `layouts/<name>.vue` with `<script setup>` + `defineProps`
2. Use `:deep()` for slot content styling
3. Add example slide to `test/slides.md`
4. Document in `README.md`
