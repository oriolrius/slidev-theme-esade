# CLAUDE.md - ESADE Slidev Theme Development Guide

## Repository Overview

This is the **slidev-theme-esade** repository - a custom Slidev theme based on ESADE Brand Book 2025 and CTL design guidelines.

## Brand Guidelines Reference

**IMPORTANT:** Before making design changes, consult `ESADE_BRANDBOOK.md` for official brand guidelines.

Key design principles from the brand book:
- **Bold & Confident** - Strong typography, clear hierarchies
- **Professional Excellence** - High standards in all visual communications
- **Modern Heritage** - Balance traditional excellence with contemporary innovation
- **Human-Centered** - Authentic, people-focused design

### Cover/Title Slides (per brand book)
- Large title in ESADE Font (serif)
- Subtitle in Mabry Pro (sans-serif)
- Navy blue background (#002E5D) with white text
- Kumera gold (#83691F) accent (underline or bar)

### Section Dividers
- Full-bleed navy blue
- Large white text, minimal content

### Content Slides
- White or light gray background
- Navy headers, black body text
- Generous white space

## Repository Structure

```
slidev-theme-esade/
├── layouts/                 # Vue layout components
│   ├── cover-split.vue      # 50/50 image + content split
│   ├── four-grid.vue        # 2×2 quadrant with icons
│   ├── compare.vue          # Do's/Don'ts side-by-side
│   ├── hero-cards.vue       # Hero banner + 3 cards
│   ├── cards-grid.vue       # Image cards grid (2 or 3 cols)
│   └── infographic.vue      # Full-width visual/diagram
├── styles/
│   └── esade-theme.css      # All CSS: fonts, colors, components
├── public/
│   ├── fonts/               # ESADE + Mabry Pro font files (.woff2)
│   ├── esade-logo.svg
│   └── esade-logo-cropped.png
├── setup/
│   └── main.ts              # Slidev setup hooks
├── test/                    # Development/testing folder
│   ├── slides.md            # Complete theme reference
│   ├── package.json
│   └── public -> ../public  # IMPORTANT: Symlink for fonts
├── demo.md                  # Demo presentation
├── example.md               # Basic usage example
├── README.md                # User documentation
├── ESADE_BRANDBOOK.md       # Brand guidelines reference
└── package.json
```

## The `test/` Folder - Theme Development Environment

### Purpose

The `test/` folder is a **self-contained Slidev project** designed specifically for theme development. It exists because:

1. **Hot-Reload for Theme Files**: When you run slidev from `test/`, it watches the parent theme files (`../styles/`, `../layouts/`) and instantly reloads when you make changes. This is the fastest way to iterate on the theme.

2. **Complete Reference**: `test/slides.md` contains examples of ALL layouts and components, so you can see how changes affect every part of the theme at once.

3. **Isolated Testing**: You can test theme changes without affecting any real presentations that use this theme.

4. **Font Access via Symlink**: The `test/public -> ../public` symlink ensures fonts are served correctly when using the relative `theme: ../` reference.

### When to Use

- **Developing new layouts** - Create in `../layouts/`, preview instantly in test/
- **Tweaking CSS** - Edit `../styles/esade-theme.css`, see changes live
- **Testing components** - Add examples to `test/slides.md`
- **Debugging font/styling issues** - Isolated environment for troubleshooting

### NOT For

- Real presentations (use `theme: slidev-theme-esade` in your actual projects)
- Production builds (this is a dev environment only)

## Development Workflow

### Quick Start (Hot-Reload Development)

```bash
cd test/
pnpm install
pnpm dev --port 3031
```

Changes to `../styles/esade-theme.css` or `../layouts/*.vue` will hot-reload instantly.

### Critical: Font Symlink

The `test/public` symlink is **required** for fonts to work when using `theme: ../`:

```bash
cd test/
ln -sf ../public public
```

Without this symlink, fonts return HTML error pages instead of WOFF2 files.

## Available Layouts

### CSS-Only Layouts (inherited from Slidev, styled via CSS)
| Layout | Description |
|--------|-------------|
| `cover` | Navy gradient, centered content |
| `section` | Navy background section divider |
| `center` | Centered content |
| `two-cols` | Two equal columns |
| `quote` | Styled blockquote |
| `default` | Standard content slide |

### Vue Component Layouts
| Layout | Props | Description |
|--------|-------|-------------|
| `cover-split` | `image`, `imagePosition` | 50/50 split with image |
| `four-grid` | - | 2×2 quadrant with icon separators |
| `compare` | `leftTitle`, `rightTitle`, `leftColor`, `rightColor` | Do's/Don'ts comparison |
| `hero-cards` | `heroImage`, `heroHeight` | Hero banner + 3 cards |
| `cards-grid` | `columns` (2 or 3) | Image cards grid |
| `infographic` | `background` | Full-width visual layout |

## CSS Components

### Callout Boxes (CTL-Style)
```html
<div class="callout-warning">Warning with cream background</div>
<div class="callout-info">Info with light blue background</div>
<div class="callout-tip">Tip with light green background</div>
<div class="callout-note">Note with light purple background</div>
<div class="callout-secure">Security/privacy message</div>
```

### Original Accent Boxes
```html
<div class="esade-box info">Electric blue accent</div>
<div class="esade-box success">Emerald accent</div>
<div class="esade-box warning">Yellow accent</div>
<div class="esade-box highlight">Kumera gold accent</div>
```

### Other Components
- `.esade-button` / `.esade-button.secondary` - Styled buttons
- `.esade-badge` / `.gold` / `.blue` / `.coral` - Badge pills
- `.step-number` / `.small` / `.large` / `.gold` / `.blue` - Numbered circles
- `.feature-card` - Light gray card with rounded corners

## Brand Colors (CSS Variables)

```css
--esade-navy: #002E5D        /* Primary headings, backgrounds */
--esade-kumera: #83691F      /* Gold accents, h2 underlines */
--esade-electric-blue: #00A7E1  /* Links, h3 color */
--esade-coral: #FF6B6B       /* Alerts, badges */
--esade-emerald: #4ECDC4     /* Success states */
--esade-yellow: #FFE66D      /* Warnings */
```

## Fonts

- **ESADE** - Serif font for headings (h1-h6)
- **Mabry Pro** - Sans-serif for body text

Font files in `public/fonts/`:
- `esade-regular.woff2`, `esade-bold.woff2`
- `Mabry-Light-Pro.woff2`, `Mabry-Regular-Pro.woff2`, `Mabry-Medium-Pro.woff2`, `Mabry-Bold-Pro.woff2`

## Common Tasks

### Export to PDF
```bash
cd test/
pnpm exec slidev export slides.md --output slides.pdf
```

### Build Static Site
```bash
cd test/
pnpm build
```

### Test Theme from Another Project
```bash
# In your slidev project
npm install github:oriolrius/slidev-theme-esade

# In slides.md frontmatter
theme: slidev-theme-esade
```

## Troubleshooting

### Fonts Not Loading (shows sans-serif instead of ESADE serif)
1. Check browser console for "Failed to decode downloaded font" errors
2. Verify symlink exists: `ls -la test/public`
3. If missing: `cd test && ln -sf ../public public`
4. Restart slidev server

### Layout Not Found
- Ensure layout file exists in `layouts/` folder
- Check Vue component has no syntax errors
- Verify layout name in markdown matches filename (without .vue)

### CSS Changes Not Applying
- Hard refresh browser (Ctrl+Shift+R)
- Check CSS syntax errors in `styles/esade-theme.css`
- Verify CSS selector specificity

## File Modification Guidelines

### When Editing CSS (`styles/esade-theme.css`)
- Keep font-family declarations consistent
- Use CSS variables for colors
- Test on multiple layouts after changes

### When Creating New Layouts
1. Create `layouts/layout-name.vue`
2. Use `<script setup>` with `defineProps` for props
3. Use `:deep()` selector for slot content styling
4. Add documentation to README.md

### When Updating Fonts
1. Place .woff2 files in `public/fonts/`
2. Add `@font-face` declaration in CSS
3. Update font-family fallback chains

## Reference Presentations

- `test/slides.md` - Complete reference (all layouts + components)
- `demo.md` - Standalone demo
- `example.md` - Basic usage example

## Publishing Updates

```bash
git add .
git commit -m "Description of changes"
git push origin main
```

Users update via:
```bash
npm update slidev-theme-esade
# or
npm install github:oriolrius/slidev-theme-esade
```
