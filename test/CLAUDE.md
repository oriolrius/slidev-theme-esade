# test/

Self-contained Slidev project for theme development. NOT for real presentations.

## Commands

```bash
pnpm dev --port 3031    # hot-reload dev server
pnpm build              # static build
pnpm exec slidev export slides.md --output slides.pdf
```

## Critical

- `public` is a **symlink** to `../public` -- fonts break without it. Fix: `ln -sf ../public public`
- `slides.md` is the complete theme reference -- add examples here when creating new layouts/components
- Uses `theme: ../` in frontmatter to reference the parent theme directory
