# styles/

`index.ts` is the Slidev entry point -- just re-exports `esade-theme.css`.

## esade-theme.css structure (top to bottom)

1. Font Awesome CDN import + `@font-face` declarations
2. `:root` CSS variables (colors, typography scale, code block colors)
3. Global `.slidev-layout` base styles
4. Typography (h1-h4, p, li, links)
5. Code blocks (dark theme, shiki overrides, line numbers toggle, highlight/dimming)
6. Lists, blockquotes, tables
7. Layout-specific styles (cover, section, center, two-cols, quote)
8. Components (esade-box, buttons, badges, step-numbers, feature-cards, image-cards)
9. Zoomable images
10. Callout boxes (warning, info, tip, note, secure)
11. Icon-rule separator, step numbers
12. Interactive polls (slidev-component-poll overrides, end of file)

## Rules

- Always use `--esade-*` variables for colors
- Minimum font size: 1.4rem (enforced via `--esade-text-xs`)
- `!important` is used heavily to override Slidev defaults -- avoid adding more unless necessary
- When adding a new CSS-only layout style, target `.slidev-layout.<layoutname>`
