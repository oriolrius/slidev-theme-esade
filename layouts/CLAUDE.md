# layouts/

Vue component layouts for complex slide types. CSS-only layouts (cover, section, etc.) are styled in `styles/esade-theme.css`, not here.

## Conventions

- Use `<script setup>` with `defineProps` for all props
- Style slot content with `:deep()` selector
- Named slots for content regions (e.g., `q1`-`q4` in four-grid, `icon1`/`concept1` in concepts)
- Color props accept ESADE color names ("navy", "kumera") or hex values -- use `getColor()` helper pattern from `image.vue`
- Keep layout padding/spacing consistent with `esade-theme.css` base (`4rem 5rem 5rem 5rem`)

## Non-obvious

- `cover-split.vue` uses `direction: rtl` trick for image-right positioning
- `concepts.vue` dynamically scales icon/text sizes based on `cols * rows` count
- `cards.vue` supports per-card background/border overrides via `card1Bg`-`card6Bg` props
