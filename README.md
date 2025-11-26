# slidev-theme-esade

ESADE branded theme for [Slidev](https://sli.dev) presentations, based on the ESADE Brand Book 2025.

## Features

- ESADE brand colors (Navy, Kumera gold, Electric Blue, etc.)
- Custom ESADE and Mabry Pro fonts
- Styled layouts: cover, section, center, two-cols, quote
- Custom CSS classes for boxes, buttons, and badges
- Responsive design with print support
- Gradient progress bar and branded footer

## Installation

### From GitHub (private or public repo)

Add the theme to your Slidev project:

```bash
npm install github:oriolrius/slidev-theme-esade
```

Or with a specific version/tag:

```bash
npm install github:oriolrius/slidev-theme-esade#v1.0.0
```

### From local path

If you have the theme locally:

```bash
npm install ../path/to/slidev-theme-esade
```

## Usage

In your slides markdown file, set the theme in the frontmatter:

```yaml
---
theme: slidev-theme-esade
title: My ESADE Presentation
---
```

## Available Layouts

### Cover

```md
---
layout: cover
---

# Presentation Title

## Subtitle

Your Name
```

### Section

```md
---
layout: section
---

# Section Title
```

### Two Columns

```md
---
layout: two-cols
---

# Left Column

Content here

::right::

# Right Column

Content here
```

### Center

```md
---
layout: center
---

# Centered Content
```

## Custom CSS Classes

### Accent Boxes

```html
<div class="esade-box info">Info box content</div>
<div class="esade-box success">Success box content</div>
<div class="esade-box warning">Warning box content</div>
<div class="esade-box highlight">Highlight box content</div>
```

### Buttons

```html
<a class="esade-button">Primary Button</a>
<a class="esade-button secondary">Secondary Button</a>
```

### Badges

```html
<span class="esade-badge">Default</span>
<span class="esade-badge gold">Gold</span>
<span class="esade-badge blue">Blue</span>
<span class="esade-badge coral">Coral</span>
```

## Brand Colors

The theme includes these CSS variables:

| Variable | Color | Hex |
|----------|-------|-----|
| `--esade-navy` | Navy Blue | #002E5D |
| `--esade-kumera` | Kumera Gold | #83691F |
| `--esade-electric-blue` | Electric Blue | #00A7E1 |
| `--esade-coral` | Coral | #FF6B6B |
| `--esade-emerald` | Emerald | #4ECDC4 |
| `--esade-yellow` | Yellow | #FFE66D |

Use them in custom styles:

```css
.my-element {
  color: var(--esade-navy);
  background: var(--esade-kumera);
}
```

## Fonts

- **ESADE** - Used for headings (Regular 400, Bold 700)
- **Mabry Pro** - Used for body text (Light 300, Regular 400, Medium 500, Bold 700)

## Example

Create a new Slidev project and use this theme:

```bash
npm init slidev@latest my-presentation
cd my-presentation
npm install github:oriolrius/slidev-theme-esade
```

Edit `slides.md`:

```yaml
---
theme: slidev-theme-esade
title: Cloud Computing Introduction
---

# Cloud Computing

## MIBA Program - ESADE

**Oriol Rius**

---

# Agenda

- What is Cloud Computing?
- Benefits and Challenges
- Major Cloud Providers

---
layout: section
---

# Questions?
```

Run the presentation:

```bash
npm run dev
```

## License

MIT

## Author

Oriol Rius
