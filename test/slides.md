---
theme: ../
layout: cover-split
image: /images/cover-image.jpg
colorSchema: light
aspectRatio: 16/9
canvasWidth: 1920
title: "ESADE Theme - Complete Reference & Examples"
info: |
  ## ESADE Slidev Theme
  Complete showcase of all layouts, components, and practical examples

  "Do Good. Do Better."
transition: slide-left
mdc: true
drawings:
  persist: false
css: unocss
---

# esade Slidev Theme

## Complete Reference Guide

A comprehensive showcase of all layouts, components, and practical usage examples for the slidev-theme-esade package.

---
layout: default
---

# Default Layout (layout: default)

<div class="grid grid-cols-2 gap-16">
<div>

## Theme Development

This test folder enables **hot-reload** for theme development:

```bash
cd test/
npm install
npm run dev
```

Changes to theme files (layouts, CSS, components) automatically refresh the preview.

</div>
<div>

## Contents

1. **Basic Layouts** (CSS-styled)
2. **Advanced Layouts** (Vue components)
3. **CSS Components**
4. **Practical Examples**
5. **Typography, Colors & Icons**

</div>
</div>

<div class="mt-6 callout-tip">
<p>Edit <code>../styles/esade-theme.css</code> or <code>../layouts/*.vue</code> and see changes instantly!</p>
</div>

---
layout: default
---

# UnoCSS Utility Classes (1/2)

<div class="grid grid-cols-2 gap-16">
<div>

## Grid Layout

| Class | Description |
|-------|-------------|
| `grid` | Enable CSS grid |
| `grid-cols-2` | 2 equal columns |
| `grid-cols-3` | 3 equal columns |
| `gap-4` | 1rem space between items |
| `gap-8` | 2rem space between items |
| `gap-16` | 4rem space between items |

</div>
<div>

## Flexbox

| Class | Description |
|-------|-------------|
| `flex` | Enable flexbox |
| `flex-col` | Column direction |
| `justify-center` | Center main axis |
| `items-center` | Center cross axis |

</div>
</div>

---
layout: default
---

# UnoCSS Utility Classes (2/2)

<div class="grid grid-cols-3 gap-12">
<div>

## Spacing

| Class | Description |
|-------|-------------|
| `mt-4` | Margin top 1rem |
| `mb-8` | Margin bottom 2rem |
| `p-4` | Padding 1rem |
| `px-8` | Padding x-axis 2rem |

</div>
<div>

## Sizing

| Class | Description |
|-------|-------------|
| `w-full` | Width 100% |
| `h-full` | Height 100% |
| `max-w-xl` | Max-width limit |

</div>
<div>

## Text

| Class | Description |
|-------|-------------|
| `text-center` | Center text |
| `text-2xl` | Font size 1.5rem |
| `font-bold` | Bold weight |

</div>
</div>


---
layout: section
---

# Part 1: Basic Layouts (layout: section)

CSS-styled layouts inherited from Slidev

---
layout: cover-split
image: /images/esade-campus.webp
---

# Layout: Cover Split

## ESADE Campus

Classic title slide with the beautiful ESADE campus image

<div class="abs-br m-6 text-sm opacity-80">
Your Name | Date
</div>

---
layout: default
---

# layout: default

This is the default layout for content slides.

## Features

- Clean white background
- Navy headings with ESADE font
- Mabry Pro body text
- Kumera gold accents on h2 underlines

### Bullet Points

- First level bullet with kumera markers
- Second point demonstrating the style
- Third point for reference

> Blockquotes are styled with electric blue border and light gray background

---
layout: center
---

# layout: center

Content is centered both horizontally and vertically

Perfect for impactful statements or transitions

---
layout: two-cols
---

# layout: two-cols

## Left Column

This layout splits the slide into two equal columns.

- Great for comparisons
- Side-by-side content
- Before/after examples

Use `::right::` to separate columns.

::right::

## Right Column

The right side content goes here.

```typescript
// Code blocks work too
function demo() {
  return "Hello ESADE!"
}
```

Badges:

<div class="mt-4">
<span class="esade-badge gold">Gold</span>
<span class="esade-badge blue">Blue</span>
<span class="esade-badge red">Red</span>
<span class="esade-badge dark-blue">Dark Blue</span>
<span class="esade-badge green">Green</span>
</div>

---
layout: quote
---

> "Do Good. Do Better."
>
> — ESADE Motto

---
layout: section
---

# Part 2: Advanced Layouts

Vue component layouts with enhanced features

---
layout: cover-split
image: /images/man-working-computer.jpg
imageFocus: 70%
---

# Layout: Cover Split

## 50/50 Image + Content

Split your slide between an image and content.

**Props:**

- `image` - path to image file
- `imagePosition` - `left` or `right` (which side the image appears)
- `imageWidth` - e.g., `40%`, `60%` (space for image)
- `imageFocus` - controls visible area:
  - `left`, `center`, `right` - horizontal alignment
  - `75%` - 75% from left (shows more right side)
  - `25% 0%` - 25% from left, top edge

---
layout: four-grid
---

::title::
# layout: four-grid

::icon1::
<i class="fas fa-lightbulb"></i>

::icon2::
<i class="fas fa-users"></i>

::icon3::
<i class="fas fa-code"></i>

::icon4::
<i class="fas fa-rocket"></i>

::q1::
### Custom Icons
Use `::icon1::` to `::icon4::` slots to override defaults.

Supports **Font Awesome**!

::q2::
### Font Awesome
```html
::icon2::
<i class="fas fa-users"></i>
```

::q3::
### SVG Icons
```html
::icon3::
<svg viewBox="0 0 24 24">...</svg>
```

::q4::
### Emoji Icons
```html
::icon4::
🚀
```

::callout::
<div class="callout-tip">
<p><strong>Tip:</strong> If no icon slot is provided, default SVG icons are used. Browse icons at <a href="https://fontawesome.com/icons" target="_blank">fontawesome.com/icons</a></p>
</div>

---
layout: compare
leftTitle: "Cross title"
rightTitle: "Check title"
leftColor: red
rightColor: green
---

::title::
# layout: compare

::intro::
Side-by-side comparison for Do's/Don'ts or pros/cons. Customize via props and icon slots.

::leftIcon::
<i class="fas fa-xmark"></i>

::rightIcon::
<i class="fas fa-check"></i>

::left::
### Frontmatter Props
```yaml
layout: compare
leftTitle: "DON'Ts"
rightTitle: "DO's"
leftColor: red     # or orange
rightColor: green  # or blue
```

::right::
### Icon Slots
```html
::leftIcon::
<i class="fas fa-xmark"></i>

::rightIcon::
<i class="fas fa-check"></i>
```

::takeaway::
<div class="callout-info">
<p><strong>Defaults:</strong> leftColor=red, rightColor=green. Icons: ✗ cross (left), ✓ checkmark (right)</p>
</div>

---
layout: cards
rows: 2
card1Bg: "#E3EAF6"
card1Border: "#002E5D"
card2Bg: "#FFF8E1"
card2Border: "#FF9800"
card4Bg: "#E8F5E9"
card4Border: "#4CAF50"
card5Bg: "#FFEBEE"
card5Border: "#E53935"
---

::title::
# layout: cards

::icon1::
<i class="fas fa-palette"></i>

::icon2::
<i class="fas fa-border-all"></i>

::card1::
### Per-Card Background
```yaml
card1Bg: "#E3EAF6"
card2Bg: "#FFF8E1"
```

::card2::
### Per-Card Border
```yaml
card1Border: "#002E5D"
card2Border: "#FF9800"
```

::card3::
### Default Style
No `card3Bg` or `card3Border` = default gray background.

::icon4::
<i class="fas fa-layer-group"></i>

::card4::
### Global Defaults
```yaml
cardBg: white
cardBorder: "#002E5D"
```
Apply to all cards.

::card5::
### Override Global
Per-card props override global defaults.

::card6::
### Props Summary
`heroImage`, `heroHeight`, `rows`, `cardBg`, `cardBorder`, `card1Bg`...`card6Bg`, `card1Border`...`card6Border`

::footer::
**Global:** `cardBg`, `cardBorder` | **Per-card:** `card1Bg`...`card6Bg`, `card1Border`...`card6Border` | **Icons:** `::icon1::`...`::icon6::`

---
layout: cards
rows: 2
card1Bg: white
card1Border: "#002E5D"
card2Bg: white
card2Border: "#002E5D"
card3Bg: white
card3Border: "#002E5D"
card4Bg: white
card4Border: "#002E5D"
card5Bg: white
card5Border: "#002E5D"
card6Bg: white
card6Border: "#002E5D"
---

::title::
# layout: image (properties)

::icon1::
<i class="fas fa-bullseye"></i>

::icon2::
<i class="fas fa-palette"></i>

::icon3::
<i class="fas fa-image"></i>

::icon4::
<i class="fas fa-crop-alt"></i>

::icon5::
<i class="fas fa-adjust"></i>

::icon6::
<i class="fas fa-layer-group"></i>

::card1::
### Purpose
Full screen with titles on the top of the image. Clean layout for visual content. Diagrams, infographics, screenshots, or full-bleed photography.

::card2::
### background
```yaml
background: cream
```
Options: `white`, `cream`, `light-blue`, `light-gray`

::card3::
### image
```yaml
image: /images/photo.jpg
```
Full-screen background image (1920×1080 recommended).

::card4::
### imageFocus
```yaml
imageFocus: "50% 30%"
```
Crop position: `center`, `top`, `bottom`, or `X% Y%` values.

::card5::
### imageOverlay
```yaml
imageOverlay: "0.4"
```
Dark overlay (0-1) for text readability.

::card6::
### imageSize (zoom)
```yaml
imageSize: "150%"
```
**Zoom:** `150%`, `200%` (zoom in). Use with `imageFocus` to pan. Default: `cover`.

::footer::
**Slots:** `::title::`, `::subtitle::`, `default`, `::brand::` | **Next slide:** 4K image demo with crop and resize

---
layout: image
image: /images/barcelona-cityscape-4k.jpg
imageFocus: "30% 60%"
imageSize: "150%"
imageOverlay: "0.35"
---

::title::
# 4K Image Demo: Zoom + Pan

::subtitle::
`imageSize: "150%"` zooms in 1.5× — `imageFocus: "30% 60%"` pans to left-center of the zoomed image

---
layout: concepts
cols: 3
---

::title::
# layout: concepts (3 columns)

::icon1::
<i class="fas fa-lightbulb"></i>

::concept1::
### Innovation

Embrace creative thinking and challenge conventional approaches to drive breakthrough solutions.

::icon2::
<i class="fas fa-users"></i>

::concept2::
### Collaboration

Build diverse teams and foster inclusive environments where every voice contributes to success.

::icon3::
<i class="fas fa-chart-line"></i>

::concept3::
### Growth

Pursue continuous improvement through learning, adaptation, and measured progress.

---
layout: concepts
cols: 2
---

::title::
# layout: concepts (2 columns)

::icon1::
<i class="fas fa-shield-alt"></i>

::concept1::
### Security First

Protect your data with enterprise-grade encryption and compliance standards.

::icon2::
<i class="fas fa-rocket"></i>

::concept2::
### Fast Deployment

Ship features quickly with automated CI/CD pipelines and zero-downtime releases.

---
layout: concepts
cols: 3
rows: 2
---

::title::
# layout: concepts (3×2 grid)

::icon1::
<i class="fas fa-code"></i>

::concept1::
### Clean Code

::icon2::
<i class="fas fa-database"></i>

::concept2::
### Data Driven

::icon3::
<i class="fas fa-cloud"></i>

::concept3::
### Cloud Native

::icon4::
<i class="fas fa-lock"></i>

::concept4::
### Secure by Default

::icon5::
<i class="fas fa-sync"></i>

::concept5::
### Continuous Delivery

::icon6::
<i class="fas fa-cogs"></i>

::concept6::
### Automation First

---
layout: concepts
cols: 4
---

::title::
# layout: concepts (4 columns, titles only)

::icon1::
<i class="fas fa-graduation-cap"></i>

::concept1::
### Education

::icon2::
<i class="fas fa-briefcase"></i>

::concept2::
### Business

::icon3::
<i class="fas fa-globe"></i>

::concept3::
### Global Reach

::icon4::
<i class="fas fa-handshake"></i>

::concept4::
### Partnership

---
layout: section
---

# Part 3: CSS Components

Reusable styling classes

---
layout: default
---

# Text Size Utilities (UnoCSS)

<div class="grid grid-cols-2 gap-8">
<div>

## Usage
```html
<p class="text-sm">Small text</p>
<p class="text-base">Base text (default)</p>
<p class="text-lg">Large text</p>
<p class="text-xl">Extra large</p>
<p class="text-2xl">2x large</p>
```

## Available Classes
| Class | Size | Use Case |
|-------|------|----------|
| `text-xs` | 0.75rem | Fine print |
| `text-sm` | 0.875rem | Secondary info |
| `text-base` | 1rem | Body text |
| `text-lg` | 1.125rem | Emphasis |
| `text-xl` | 1.25rem | Subheadings |
| `text-2xl` | 1.5rem | Large text |
| `text-3xl` | 1.875rem | Headlines |

</div>
<div>

## Live Examples

<p class="text-xs mb-1">text-xs: Fine print and disclaimers</p>
<p class="text-sm mb-1">text-sm: Secondary information</p>
<p class="text-base mb-1">text-base: Default body text size</p>
<p class="text-lg mb-1">text-lg: Slightly larger for emphasis</p>
<p class="text-xl mb-1">text-xl: Subheadings or key points</p>
<p class="text-2xl mb-1">text-2xl: Section highlights</p>
<p class="text-3xl">text-3xl: Major headlines</p>

<div class="callout-tip mt-4">
<p>Combine with <code>font-bold</code> or <code>text-gray-500</code> for more control.</p>
</div>

</div>
</div>

---
layout: default
---

# CSS Component: esade-box

<div class="grid grid-cols-2 gap-8">
<div>

## Usage
```html
<div class="esade-box info">
  Content here...
</div>
```

## Variants
| Class | Color | Use Case |
|-------|-------|----------|
| `info` | Electric Blue | Information |
| `success` | Emerald | Positive |
| `warning` | Yellow | Caution |
| `highlight` | Kumera Gold | Emphasis |

</div>
<div>

## Live Examples

<div class="esade-box info mb-2">
<strong>info:</strong> Electric blue accent
</div>

<div class="esade-box success mb-2">
<strong>success:</strong> Emerald accent
</div>

<div class="esade-box warning mb-2">
<strong>warning:</strong> Yellow accent
</div>

<div class="esade-box highlight">
<strong>highlight:</strong> Kumera gold accent
</div>

</div>
</div>

---
layout: default
---

# CSS Component: callout-*

<div class="grid grid-cols-2 gap-8">
<div>

## Usage
```html
<div class="callout-warning">
  <p>Your message here</p>
</div>
```

## Variants
| Class | Background | Icon |
|-------|------------|------|
| `callout-warning` | Cream | `fa-triangle-exclamation` |
| `callout-info` | Light Blue | `fa-circle-info` |
| `callout-tip` | Light Green | `fa-lightbulb` |
| `callout-note` | Light Purple | `fa-i-cursor` |
| `callout-secure` | Light Gray | `fa-lock` |

</div>
<div>

## Live Examples

<div class="callout-warning mb-2">
<p><strong>warning:</strong> Cream + orange border</p>
</div>

<div class="callout-info mb-2">
<p><strong>info:</strong> Light blue background</p>
</div>

<div class="callout-tip mb-2">
<p><strong>tip:</strong> Light green background</p>
</div>

<div class="callout-note mb-2">
<p><strong>note:</strong> Light purple background</p>
</div>

<div class="callout-secure">
<p><strong>secure:</strong> Security messages</p>
</div>

</div>
</div>

---
layout: default
---

# CSS Components: Buttons, Badges, Steps

<div class="grid grid-cols-3 gap-6">
<div>

## esade-button
```html
<a class="esade-button">
  Primary
</a>
<a class="esade-button secondary">
  Secondary
</a>
```

<div class="flex gap-2 mt-4">
<a class="esade-button">Primary</a>
<a class="esade-button secondary">Secondary</a>
</div>

</div>
<div>

## esade-badge
```html
<span class="esade-badge">Default</span>
<span class="esade-badge gold">Gold</span>
<span class="esade-badge blue">Blue</span>
<span class="esade-badge coral">Coral</span>
```

<div class="flex gap-2 flex-wrap mt-4">
<span class="esade-badge">Default</span>
<span class="esade-badge gold">Gold</span>
<span class="esade-badge blue">Blue</span>
<span class="esade-badge coral">Coral</span>
</div>

</div>
<div>

## step-number
```html
<span class="step-number">1</span>
<span class="step-number gold">2</span>
<span class="step-number blue">3</span>
<span class="step-number small">S</span>
<span class="step-number large">L</span>
```

<div class="flex gap-2 items-center mt-4">
<span class="step-number">1</span>
<span class="step-number gold">2</span>
<span class="step-number blue">3</span>
<span class="step-number small">S</span>
<span class="step-number large">L</span>
</div>

</div>
</div>

---
layout: default
---

# CSS Component: feature-card

<div class="grid grid-cols-2 gap-8">
<div>

## Usage
```html
<div class="feature-card">
  <h3>Card Title</h3>
  <p>Content here...</p>
</div>
```

## Styling
- Light gray background (`#F8F9FA`)
- Rounded corners (`8px`) / Padding: `1.5rem`

</div>
<div>

## Live Examples

<div class="grid grid-cols-1 gap-3">

<div class="feature-card">
<h3>Feature Card</h3>
<p>Light gray background with rounded corners.</p>
</div>

<div class="feature-card">
<h3>Multiple Cards</h3>
<p>Use with UnoCSS: <code>grid grid-cols-2 gap-4</code></p>
</div>

<div class="grid grid-cols-2 gap-3">
<div class="feature-card">
<h3>Card 1</h3>
<p>First card in grid.</p>
</div>
<div class="feature-card">
<h3>Card 2</h3>
<p>Second card in grid.</p>
</div>
</div>

<div class="feature-card mt-3">
<h3>Flexible Content</h3>
<p>Cards can contain any HTML content.</p>
</div>

</div>

</div>
</div>

---
layout: default
---

# Code Block Example

Veritically and horizontally centered code block with 50% width and 2XL text size:

<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 text-2xl">

```typescript {all|1-3|5-7}
// Digital transformation at ESADE
function innovate(challenge: Challenge): Solution {
  const research = conductResearch(challenge)
  const students = engageStudents(research)
  const impact = createSocialImpact(students)

  return { solution: impact, legacy: true }
}
```

</div>


<div class="esade-box info absolute bottom-4 left-8 right-8">
<i class="fas fa-lightbulb"></i> Amazing customizations, and don't forget to check the line numbers!
</div>

---
layout: default
---

# Code Block Styling

<div class="grid grid-cols-2 gap-8">
<div>

## Line Numbers
Hover any code block to show toggle button, or wrap in a div:

`<div class="line-numbers">` + code block + `</div>`

## Width Control
Wrap code in div with UnoCSS width classes:
- `w-1/2` → 50% | `w-2/3` → 66% | `w-3/4` → 75% | `w-full` → 100%

## Alignment
- `mx-auto` → Center | `ml-auto` → Right | `mr-auto` → Left

</div>
<div>

## Live Examples

<div class="w-3/4 mx-auto line-numbers mb-2">

```typescript
// Centered (mx-auto), 75% width, with line numbers
const centered = true
```

</div>

<div class="w-1/2 ml-auto mb-2">

```typescript
// Right aligned (ml-auto), 50% width
const right = "aligned"
```

</div>

<div class="w-1/2">

```typescript
// Left (default), 50% width
const left = "side"
```

</div>

</div>
</div>

<div class="callout-tip no-icon absolute bottom-4 left-8 right-8">
<p class="text-lg"><i class="fas fa-code mr-2"></i>Wrap code blocks in a div with classes to control width and position.</p>
</div>

---
layout: section
---

# Part 4: Practical Examples

Real-world usage patterns

---
layout: default
---

# What is ESADE?

<div class="esade-box highlight">

**ESADE Business School** - Founded in 1958 in Barcelona, Spain

</div>

A leading global institution for:

- <i class="fas fa-graduation-cap"></i> **Business Education** - Top-ranked MBA programs
- <i class="fas fa-scale-balanced"></i> **Law School** - Excellence in legal education
- <i class="fas fa-flask"></i> **Innovation** - Research and thought leadership
- <i class="fas fa-earth-americas"></i> **Global Impact** - Social responsibility and ethics

<div class="mt-8">
<span class="esade-badge gold">Top 10 European B-School</span>
<span class="esade-badge blue">Global Network</span>
<span class="esade-badge coral">Innovation Leader</span>
</div>

---
layout: default
---

# Our Values

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="esade-box info">

### <i class="fas fa-bullseye"></i> Excellence
Pursuing the highest standards in education and research

</div>

<div class="esade-box success">

### <i class="fas fa-handshake"></i> Social Responsibility
Commitment to meaningful change and impact

</div>

<div class="esade-box warning">

### <i class="fas fa-lightbulb"></i> Innovation
Embracing new ideas and transformative thinking

</div>

<div class="esade-box highlight">

### <i class="fas fa-globe"></i> Global Perspective
Diverse, inclusive international community

</div>

</div>

---
layout: default
---

# Key Statistics

<div class="grid grid-cols-3 gap-8 mt-12 text-center">

<div>

## <i class="fas fa-history"></i> 65+
### Years of Excellence
Since 1958

</div>

<div>

## <i class="fas fa-globe"></i> 100+
### Countries Represented
Global diversity

</div>

<div>

## <i class="fas fa-trophy"></i> #1
### In Social Impact
Leading change

</div>

</div>

<div class="callout-info no-icon abs-b w-full left-0 mx-8 mb-4">
<p class="text-lg"><i class="fas fa-graduation-cap mr-2"></i>Statistics represent ESADE's commitment to global education and leadership.</p>
</div>

---
layout: default
---

# Tables

| Program | Duration | Format | Location |
|---------|----------|--------|----------|
| Full-time MBA | 12-18 months | On-campus | Barcelona |
| Executive MBA | 18 months | Hybrid | Barcelona/Madrid |
| MIBA | 12 months | On-campus | Barcelona |
| MiM | 10 months | On-campus | Barcelona |

<div class="mt-4 callout-tip absolute bottom-4 left-8 right-8 w-3/4 mx-auto">
<p>Tables feature navy headers, hover effects, and clean borders for easy reading.</p>
</div>

---
layout: section
---

# Part 5: Typography, Colors & Icons

Brand elements reference

---
layout: default
---

# Typography Scale

<div class="grid grid-cols-2 gap-8">
<div>

## Markdown Syntax

| Element | Syntax |
|---------|--------|
| H1 | `# Heading` |
| H2 | `## Heading` |
| H3 | `### Heading` |
| H4 | `#### Heading` |
| Bold | `**text**` |
| Italic | `*text*` |
| Code | `` `code` `` |

</div>
<div>

## Rendered Result

# H1 - ESADE Font
## H2 - Kumera Underline
### H3 - Electric Blue
#### H4 - Navy

**Bold** | *Italic* | `inline code`

</div>
</div>

---
layout: default
---

# Brand Colors

<div class="grid grid-cols-3 gap-4 grid-rows-2" style="height: 70vh; grid-template-rows: 1fr 1fr;">

<div class="flex flex-col items-center justify-center" style="background: var(--esade-navy); color: white; border-radius: 8px; font-size: 1.3rem;">
<strong class="text-8xl">Navy</strong>
<span class="my-2">#002E5D</span>
<code style="background: rgba(255,255,255,0.2); padding: 0.3rem 0.6rem; border-radius: 4px;">--esade-navy</code>
</div>

<div class="flex flex-col items-center justify-center" style="background: var(--esade-kumera); color: white; border-radius: 8px; font-size: 1.3rem;">
<strong class="text-8xl">Kumera</strong>
<span class="my-2">#83691F</span>
<code style="background: rgba(255,255,255,0.2); padding: 0.3rem 0.6rem; border-radius: 4px;">--esade-kumera</code>
</div>

<div class="flex flex-col items-center justify-center" style="background: var(--esade-electric-blue); color: white; border-radius: 8px; font-size: 1.3rem;">
<strong class="text-7xl">Electric Blue</strong>
<span class="my-2">#00A7E1</span>
<code style="background: rgba(255,255,255,0.2); padding: 0.3rem 0.6rem; border-radius: 4px;">--esade-electric-blue</code>
</div>

<div class="flex flex-col items-center justify-center" style="background: var(--esade-coral); color: white; border-radius: 8px; font-size: 1.3rem;">
<strong class="text-8xl">Coral</strong>
<span class="my-2">#FF6B6B</span>
<code style="background: rgba(255,255,255,0.2); padding: 0.3rem 0.6rem; border-radius: 4px;">--esade-coral</code>
</div>

<div class="flex flex-col items-center justify-center" style="background: var(--esade-emerald); color: white; border-radius: 8px; font-size: 1.3rem;">
<strong class="text-8xl">Emerald</strong>
<span class="my-2">#4ECDC4</span>
<code style="background: rgba(255,255,255,0.2); padding: 0.3rem 0.6rem; border-radius: 4px;">--esade-emerald</code>
</div>

<div class="flex flex-col items-center justify-center" style="background: var(--esade-yellow); color: #333; border-radius: 8px; font-size: 1.3rem;">
<strong class="text-8xl">Yellow</strong>
<span class="my-2">#FFE66D</span>
<code style="background: rgba(0,0,0,0.1); padding: 0.3rem 0.6rem; border-radius: 4px;">--esade-yellow</code>
</div>

</div>

<div class="mt-16 mx-auto right-8 text-2xl">
<strong>Usage:</strong> <code>style="color: var(--esade-navy)"</code> | <code>style="background: var(--esade-kumera)"</code> | <code>border-color: var(--esade-coral);</code>
</div>

---
layout: default
---

# Icons: Emojis

<div class="grid grid-cols-2 gap-8">
<div>

## Usage

Emojis work natively in Slidev markdown:

```markdown
# My Slide Title 🚀

- Point one ✅
- Point two ❌
- Important! ⚠️
```

## Pros & Cons

| Pros | Cons |
|------|------|
| No setup required | Limited styling |
| Universal support | Can't change color |
| Copy-paste easy | Platform-dependent |

</div>
<div>

## Live Examples

<div class="text-4xl mb-4">
🎓 📚 💡 🎯 📊 🏆 🌍 🤝 🔬 📈
</div>

<div class="grid grid-cols-2 gap-4">

<div class="feature-card text-center">
<div class="text-6xl mb-2">🚀</div>
<p>Innovation</p>
</div>

<div class="feature-card text-center">
<div class="text-6xl mb-2">🎓</div>
<p>Education</p>
</div>

<div class="feature-card text-center">
<div class="text-6xl mb-2">🌍</div>
<p>Global</p>
</div>

<div class="feature-card text-center">
<div class="text-6xl mb-2">💡</div>
<p>Ideas</p>
</div>

</div>

</div>
</div>

---
layout: default
---

# Icons: SVG

<div class="grid grid-cols-2 gap-8">
<div>

## Inline SVG Usage

```html
<svg viewBox="0 0 24 24" width="48" height="48"
     fill="var(--esade-navy)">
  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
</svg>
```

## Pros & Cons

| Pros | Cons |
|------|------|
| Fully customizable | Verbose syntax |
| CSS color control | Requires icon code |
| Scalable quality | Larger file size |

</div>
<div>

## Live Examples

<div class="flex gap-8 items-center mb-6">

<svg viewBox="0 0 24 24" width="64" height="64" fill="var(--esade-navy)">
  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
</svg>

<svg viewBox="0 0 24 24" width="64" height="64" fill="var(--esade-kumera)">
  <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/>
</svg>

<svg viewBox="0 0 24 24" width="64" height="64" fill="var(--esade-electric-blue)">
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
</svg>

<svg viewBox="0 0 24 24" width="64" height="64" fill="var(--esade-coral)">
  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
</svg>

</div>

<div class="callout-tip">
<p><strong>Tip:</strong> Use <code>fill="var(--esade-navy)"</code> to apply brand colors to SVG icons.</p>
</div>

</div>
</div>

---
layout: default
---

# Icons: Font Awesome

<div class="grid grid-cols-2 gap-8">
<div>

## Usage

Font Awesome is pre-loaded in this theme:

```html
<i class="fas fa-icon-name"></i>
<i class="far fa-icon-name"></i>
<i class="fab fa-icon-name"></i>
```

## Icon Styles

| Prefix | Style | Example |
|--------|-------|---------|
| `fas` | Solid | <i class="fas fa-star"></i> `fa-star` |
| `far` | Regular | <i class="far fa-star"></i> `fa-star` |
| `fab` | Brands | <i class="fab fa-github"></i> `fa-github` |

</div>
<div>

## Sizing

```html
<i class="fas fa-star text-2xl"></i>
<i class="fas fa-star text-4xl"></i>
<i class="fas fa-star text-6xl"></i>
```

## Live Examples

<div class="flex gap-4 items-end mb-6">
<i class="fas fa-graduation-cap text-2xl" style="color: var(--esade-navy);"></i>
<i class="fas fa-graduation-cap text-4xl" style="color: var(--esade-kumera);"></i>
<i class="fas fa-graduation-cap text-6xl" style="color: var(--esade-electric-blue);"></i>
<i class="fas fa-graduation-cap text-8xl" style="color: var(--esade-coral);"></i>
</div>

## Color Styling

```html
<i class="fas fa-star"
   style="color: var(--esade-kumera);"></i>
```

<div class="flex gap-6 text-4xl mt-4">
<i class="fas fa-star" style="color: var(--esade-navy);"></i>
<i class="fas fa-star" style="color: var(--esade-kumera);"></i>
<i class="fas fa-star" style="color: var(--esade-electric-blue);"></i>
<i class="fas fa-star" style="color: var(--esade-coral);"></i>
<i class="fas fa-star" style="color: var(--esade-emerald);"></i>
</div>

<div class="callout-info mt-4">
<p>Browse all icons at <a href="https://fontawesome.com/icons" target="_blank">fontawesome.com/icons</a></p>
</div>

</div>
</div>

---
layout: default
---

# Common Icons Reference

<div class="grid grid-cols-3 gap-4 text-xs">
<div>

## General

| Icon | Code | Usage |
|------|------|-------|
| <i class="fas fa-check text-lg" style="color: var(--esade-emerald);"></i> | `fa-check` | Success |
| <i class="fas fa-xmark text-lg" style="color: var(--esade-coral);"></i> | `fa-xmark` | Error/Close |
| <i class="fas fa-info-circle text-lg" style="color: var(--esade-electric-blue);"></i> | `fa-info-circle` | Information |
| <i class="fas fa-exclamation-triangle text-lg" style="color: var(--esade-yellow);"></i> | `fa-exclamation-triangle` | Warning |
| <i class="fas fa-question-circle text-lg" style="color: var(--esade-kumera);"></i> | `fa-question-circle` | Help |
| <i class="fas fa-lightbulb text-lg" style="color: var(--esade-kumera);"></i> | `fa-lightbulb` | Tip/Idea |
| <i class="fas fa-search text-lg" style="color: var(--esade-navy);"></i> | `fa-search` | Search |
| <i class="fas fa-cog text-lg" style="color: var(--esade-navy);"></i> | `fa-cog` | Settings |
| <i class="fas fa-edit text-lg" style="color: var(--esade-electric-blue);"></i> | `fa-edit` | Edit |
| <i class="fas fa-trash text-lg" style="color: var(--esade-coral);"></i> | `fa-trash` | Delete |
| <i class="fas fa-plus text-lg" style="color: var(--esade-emerald);"></i> | `fa-plus` | Add |
| <i class="fas fa-minus text-lg" style="color: var(--esade-coral);"></i> | `fa-minus` | Remove |
| <i class="fas fa-arrow-right text-lg" style="color: var(--esade-navy);"></i> | `fa-arrow-right` | Next |
| <i class="fas fa-arrow-left text-lg" style="color: var(--esade-navy);"></i> | `fa-arrow-left` | Previous |
| <i class="fas fa-download text-lg" style="color: var(--esade-electric-blue);"></i> | `fa-download` | Download |
| <i class="fas fa-upload text-lg" style="color: var(--esade-kumera);"></i> | `fa-upload` | Upload |

</div>
<div>

## Education

| Icon | Code | Usage |
|------|------|-------|
| <i class="fas fa-graduation-cap text-lg" style="color: var(--esade-navy);"></i> | `fa-graduation-cap` | Graduation |
| <i class="fas fa-book text-lg" style="color: var(--esade-kumera);"></i> | `fa-book` | Books |
| <i class="fas fa-chalkboard-teacher text-lg" style="color: var(--esade-navy);"></i> | `fa-chalkboard-teacher` | Teaching |
| <i class="fas fa-users text-lg" style="color: var(--esade-electric-blue);"></i> | `fa-users` | Team/Group |
| <i class="fas fa-trophy text-lg" style="color: var(--esade-kumera);"></i> | `fa-trophy` | Achievement |
| <i class="fas fa-chart-line text-lg" style="color: var(--esade-emerald);"></i> | `fa-chart-line` | Growth |
| <i class="fas fa-globe text-lg" style="color: var(--esade-electric-blue);"></i> | `fa-globe` | Global |
| <i class="fas fa-university text-lg" style="color: var(--esade-navy);"></i> | `fa-university` | Institution |
| <i class="fas fa-book-open text-lg" style="color: var(--esade-kumera);"></i> | `fa-book-open` | Reading |
| <i class="fas fa-pen text-lg" style="color: var(--esade-navy);"></i> | `fa-pen` | Writing |
| <i class="fas fa-calendar text-lg" style="color: var(--esade-electric-blue);"></i> | `fa-calendar` | Schedule |
| <i class="fas fa-clock text-lg" style="color: var(--esade-kumera);"></i> | `fa-clock` | Time |
| <i class="fas fa-certificate text-lg" style="color: var(--esade-kumera);"></i> | `fa-certificate` | Certificate |
| <i class="fas fa-medal text-lg" style="color: var(--esade-kumera);"></i> | `fa-medal` | Award |
| <i class="fas fa-star text-lg" style="color: var(--esade-kumera);"></i> | `fa-star` | Rating |
| <i class="fas fa-comments text-lg" style="color: var(--esade-electric-blue);"></i> | `fa-comments` | Discussion |

</div>
<div>

## Tech & Business

| Icon | Code | Usage |
|------|------|-------|
| <i class="fas fa-code text-lg" style="color: var(--esade-navy);"></i> | `fa-code` | Development |
| <i class="fas fa-database text-lg" style="color: var(--esade-electric-blue);"></i> | `fa-database` | Data |
| <i class="fas fa-cloud text-lg" style="color: var(--esade-electric-blue);"></i> | `fa-cloud` | Cloud |
| <i class="fas fa-rocket text-lg" style="color: var(--esade-coral);"></i> | `fa-rocket` | Launch |
| <i class="fas fa-briefcase text-lg" style="color: var(--esade-kumera);"></i> | `fa-briefcase` | Business |
| <i class="fas fa-handshake text-lg" style="color: var(--esade-emerald);"></i> | `fa-handshake` | Partnership |
| <i class="fab fa-github text-lg" style="color: var(--esade-navy);"></i> | `fa-github` | GitHub |
| <i class="fab fa-linkedin text-lg" style="color: var(--esade-electric-blue);"></i> | `fa-linkedin` | LinkedIn |
| <i class="fas fa-laptop text-lg" style="color: var(--esade-navy);"></i> | `fa-laptop` | Computer |
| <i class="fas fa-server text-lg" style="color: var(--esade-navy);"></i> | `fa-server` | Server |
| <i class="fas fa-lock text-lg" style="color: var(--esade-emerald);"></i> | `fa-lock` | Security |
| <i class="fas fa-chart-bar text-lg" style="color: var(--esade-electric-blue);"></i> | `fa-chart-bar` | Analytics |
| <i class="fas fa-money-bill text-lg" style="color: var(--esade-emerald);"></i> | `fa-money-bill` | Finance |
| <i class="fas fa-building text-lg" style="color: var(--esade-navy);"></i> | `fa-building` | Company |
| <i class="fab fa-twitter text-lg" style="color: var(--esade-electric-blue);"></i> | `fa-twitter` | Twitter |
| <i class="fab fa-slack text-lg" style="color: var(--esade-coral);"></i> | `fa-slack` | Slack |

</div>
</div>

---
layout: center
class: text-center
---

<i class="fas fa-thumbs-up text-9xl mb-8" style="color: var(--esade-kumera);"></i>

# Thanks for your attention!

<div class="mt-8">
<span class="esade-badge gold">Oriol Rius</span>
<span class="esade-badge blue">joseporiol.rius@esade.edu</span>
</div>
