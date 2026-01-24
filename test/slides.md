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
5. **Typography & Colors**

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

# Default Layout

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

# Layout: Center

Content is centered both horizontally and vertically

Perfect for impactful statements or transitions

---
layout: two-cols
---

# Layout: Two Columns

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

<div class="mt-4">
<span class="esade-badge gold">Feature</span>
<span class="esade-badge blue">New</span>
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
---

# Layout: Cover Split

## 50/50 Image + Content

A hands-on workshop for ESADE professors on transforming teaching materials into dynamic, interactive resources.

Props: `image`, `imagePosition`

---
layout: cover-split
imagePosition: right
---

# Cover Split (Right)

## Image on Right Side

Use `imagePosition: right` to flip the layout.

The gradient placeholder appears when no `image` prop is specified.

Perfect for opening and closing slides.

---
layout: four-grid
---

::title::
# Layout: Four Grid

::q1::
### Quadrant 1
Top-left content with icon separator. Great for key considerations.

::q2::
### Quadrant 2
Top-right content. Each quadrant has its own icon circle.

::q3::
### Quadrant 3
Bottom-left content. Icons can be customized via slots.

::q4::
### Quadrant 4
Bottom-right content. Perfect for 4-point summaries.

::callout::
<div class="callout-warning">
<div><strong>Callout Area:</strong> This bottom section spans full width for important notes or warnings.</div>
</div>

---
layout: compare
leftTitle: "DO's - Best Practices"
rightTitle: "DON'Ts - Avoid These"
---

::title::
# Layout: Compare

::intro::
Side-by-side comparison layout, perfect for Do's and Don'ts or pros/cons lists.

::left::
- Use clear, concise language
- Include visual examples
- Test on multiple devices
- Follow brand guidelines

::right::
- Don't overcrowd slides
- Don't use off-brand colors
- Don't skip accessibility
- Don't forget mobile view

::takeaway::
<div class="callout-info">
<p><strong>Key takeaway:</strong> The compare layout uses color-coded icons (green checkmark, red exclamation) to visually distinguish columns.</p>
</div>

---
layout: hero-cards
heroHeight: 180px
---

::title::
# Layout: Hero Cards

::card1::
### 1. Feature One
Hero banner at top with customizable height. Cards below for key points.

::card2::
### 2. Feature Two
Three equal-width cards with light gray background and rounded corners.

::card3::
### 3. Feature Three
Great for introducing concepts or summarizing key features.

::footer::
Props: `heroImage`, `heroHeight`. The footer area spans full width for descriptions.

---
layout: cards-grid
columns: 2
---

::title::
# Layout: Cards Grid

::intro::
Grid of image cards with descriptions. Use `columns: 2` (default) or `columns: 3`.

::card1::
<div class="card-image" style="background: linear-gradient(135deg, #1a1a2e, #16213e); height: 140px; border-radius: 8px; display: flex; align-items: flex-end;">
  <div class="overlay" style="padding: 1rem; color: white; width: 100%;">
    <h4 style="margin: 0 0 0.25rem 0; font-weight: 700;">Example Card One</h4>
    <span class="meta" style="font-size: 0.75rem; opacity: 0.85;">50 sources · Jan 2025</span>
  </div>
</div>
<div class="card-content" style="padding-top: 0.75rem;">
  <p style="font-size: 0.9rem; line-height: 1.5; color: #333;">Description text with <strong>bold keywords</strong> for emphasis.</p>
</div>
<div class="card-link" style="margin-top: 0.5rem;">
  <a href="#" style="color: var(--esade-navy); font-weight: 600; text-decoration: underline;">Explore More →</a>
</div>

::card2::
<div class="card-image" style="background: linear-gradient(135deg, #0f3460, #16213e); height: 140px; border-radius: 8px; display: flex; align-items: flex-end;">
  <div class="overlay" style="padding: 1rem; color: white; width: 100%;">
    <h4 style="margin: 0 0 0.25rem 0; font-weight: 700;">Example Card Two</h4>
    <span class="meta" style="font-size: 0.75rem; opacity: 0.85;">120 sources · Feb 2025</span>
  </div>
</div>
<div class="card-content" style="padding-top: 0.75rem;">
  <p style="font-size: 0.9rem; line-height: 1.5; color: #333;">Cards support image overlays, titles, metadata, and CTAs.</p>
</div>
<div class="card-link" style="margin-top: 0.5rem;">
  <a href="#" style="color: var(--esade-navy); font-weight: 600; text-decoration: underline;">Explore More →</a>
</div>

---
layout: infographic
background: cream
---

::title::
# Layout: Infographic

::subtitle::
Full-width layout for diagrams and visual content. Background options: white, cream, light-blue, light-gray.

<div style="display: flex; align-items: center; justify-content: center; gap: 2rem; height: 100%;">
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background: var(--esade-navy); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; margin: 0 auto 0.5rem;">📄</div>
    <p style="font-size: 0.8rem; color: #444;">Sources</p>
  </div>
  <div style="font-size: 1.5rem; color: var(--esade-kumera);">→</div>
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background: var(--esade-electric-blue); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; margin: 0 auto 0.5rem;">⚙️</div>
    <p style="font-size: 0.8rem; color: #444;">Process</p>
  </div>
  <div style="font-size: 1.5rem; color: var(--esade-kumera);">→</div>
  <div style="text-align: center;">
    <div style="width: 80px; height: 80px; background: var(--esade-emerald); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; margin: 0 auto 0.5rem;">✨</div>
    <p style="font-size: 0.8rem; color: #444;">Output</p>
  </div>
</div>

---
layout: section
---

# Part 3: CSS Components

Reusable styling classes

---
layout: default
---

# Accent Boxes (esade-box)

Original theme boxes with colored left borders:

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="esade-box info">
<strong>Info Box</strong><br>
Electric blue accent for informational content.
</div>

<div class="esade-box success">
<strong>Success Box</strong><br>
Emerald accent for positive messages.
</div>

<div class="esade-box warning">
<strong>Warning Box</strong><br>
Yellow accent for cautions.
</div>

<div class="esade-box highlight">
<strong>Highlight Box</strong><br>
Kumera gold accent for emphasis.
</div>

</div>

---
layout: default
---

# Callout Boxes (CTL-Style)

New callout boxes inspired by ESADE CTL design:

<div class="callout-warning">
<div><strong>Warning Callout:</strong> Cream background with orange border. Perfect for warnings or recommendations.</div>
</div>

<div class="callout-info">
<p><strong>Info Callout:</strong> Light blue background for key takeaways.</p>
</div>

<div class="callout-tip">
<p><strong>Tip Callout:</strong> Light green background for helpful tips.</p>
</div>

<div class="callout-note">
<p><strong>Note Callout:</strong> Light purple background for additional notes.</p>
</div>

<div class="callout-secure">
<div><strong>Secure Callout:</strong> For security or privacy-related messages.</div>
</div>

---
layout: default
---

# Buttons, Badges & Step Numbers

## Buttons

<div class="flex gap-4 mt-4 mb-6">
<a class="esade-button">Primary Button</a>
<a class="esade-button secondary">Secondary Button</a>
</div>

## Badges

<div class="flex gap-2 flex-wrap mt-4 mb-6">
<span class="esade-badge">Default</span>
<span class="esade-badge gold">Gold</span>
<span class="esade-badge blue">Blue</span>
<span class="esade-badge coral">Coral</span>
</div>

## Step Numbers

<div class="flex gap-4 items-center mt-4">
<span class="step-number">1</span>
<span class="step-number">2</span>
<span class="step-number">3</span>
<span class="step-number gold">4</span>
<span class="step-number blue">5</span>
<span class="step-number small">S</span>
<span class="step-number large">L</span>
</div>

---
layout: default
---

# Feature Cards

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="feature-card">
<h3>Card Title One</h3>
<p>Feature cards have a light gray background with rounded corners.</p>
</div>

<div class="feature-card">
<h3>Card Title Two</h3>
<p>Use these for organizing content into digestible chunks.</p>
</div>

<div class="feature-card">
<h3>Card Title Three</h3>
<p>Cards scale well in grid layouts for visual balance.</p>
</div>

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

- 🎓 **Business Education** - Top-ranked MBA programs
- ⚖️ **Law School** - Excellence in legal education
- 🔬 **Innovation** - Research and thought leadership
- 🌍 **Global Impact** - Social responsibility and ethics

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

### 🎯 Excellence
Pursuing the highest standards in education and research

</div>

<div class="esade-box success">

### 🤝 Social Responsibility
Commitment to meaningful change and impact

</div>

<div class="esade-box warning">

### 💡 Innovation
Embracing new ideas and transformative thinking

</div>

<div class="esade-box highlight">

### 🌐 Global Perspective
Diverse, inclusive international community

</div>

</div>

---
layout: default
---

# Key Statistics

<div class="grid grid-cols-3 gap-8 mt-12 text-center">

<div>

## 65+
### Years of Excellence
Since 1958

</div>

<div>

## 100+
### Countries Represented
Global diversity

</div>

<div>

## #1
### In Social Impact
Leading change

</div>

</div>

<div class="mt-8 callout-info">
<p>Statistics represent ESADE's commitment to global education and leadership.</p>
</div>

---
layout: default
---

# Code Example

ESADE's approach to innovation includes embracing technology:

```typescript {all|1-3|5-7|all}
// Digital transformation at ESADE
function innovate(challenge: Challenge): Solution {
  const research = conductResearch(challenge)

  const students = engageStudents(research)
  const impact = createSocialImpact(students)

  return { solution: impact, legacy: true }
}
```

<div class="mt-4 esade-box info">
💡 ESADE combines rigorous academics with real-world impact
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

<div class="mt-4 callout-tip">
<p>Tables feature navy headers, hover effects, and clean borders for easy reading.</p>
</div>

---
layout: section
---

# Part 5: Typography & Colors

Brand elements reference

---
layout: default
---

# Typography Scale

<div class="mt-4">

# H1 Heading (2.2rem) - ESADE Font
## H2 Heading (1.6rem) - With Kumera Underline
### H3 Heading (1.3rem) - Electric Blue
#### H4 Heading (1.1rem)

Body text uses Mabry Pro at 1rem (16px) with 1.5 line height.

**Bold text** for emphasis | *Italic text* for style | `inline code` for technical terms

</div>

---
layout: default
---

# Brand Colors

<div class="grid grid-cols-3 gap-4 mt-6">

<div style="background: var(--esade-navy); color: white; padding: 1.5rem; border-radius: 8px; text-align: center;">
<strong>Navy</strong><br>
#002E5D<br>
<code style="background: rgba(255,255,255,0.2);">--esade-navy</code>
</div>

<div style="background: var(--esade-kumera); color: white; padding: 1.5rem; border-radius: 8px; text-align: center;">
<strong>Kumera</strong><br>
#83691F<br>
<code style="background: rgba(255,255,255,0.2);">--esade-kumera</code>
</div>

<div style="background: var(--esade-electric-blue); color: white; padding: 1.5rem; border-radius: 8px; text-align: center;">
<strong>Electric Blue</strong><br>
#00A7E1<br>
<code style="background: rgba(255,255,255,0.2);">--esade-electric-blue</code>
</div>

<div style="background: var(--esade-coral); color: white; padding: 1.5rem; border-radius: 8px; text-align: center;">
<strong>Coral</strong><br>
#FF6B6B<br>
<code style="background: rgba(255,255,255,0.2);">--esade-coral</code>
</div>

<div style="background: var(--esade-emerald); color: white; padding: 1.5rem; border-radius: 8px; text-align: center;">
<strong>Emerald</strong><br>
#4ECDC4<br>
<code style="background: rgba(255,255,255,0.2);">--esade-emerald</code>
</div>

<div style="background: var(--esade-yellow); color: #333; padding: 1.5rem; border-radius: 8px; text-align: center;">
<strong>Yellow</strong><br>
#FFE66D<br>
<code style="background: rgba(0,0,0,0.1);">--esade-yellow</code>
</div>

</div>

---
layout: default
---

# Get Involved

<div class="mt-8 text-center">

## Ready to create with ESADE Theme?

<div class="mt-8 flex gap-4 justify-center">
<a href="https://github.com/oriolrius/slidev-theme-esade" class="esade-button">View on GitHub</a>
<a href="#" class="esade-button secondary">Read Docs</a>
</div>

<div class="mt-8 text-gray-600">

```bash
npm install github:oriolrius/slidev-theme-esade
```

</div>

</div>

---
layout: cover-split
---

# Thank You

## Theme Reference Complete

All layouts and components documented.

**Development Commands:**
```bash
npm run dev     # Start with hot-reload
npm run build   # Build for production
npm run export  # Export to PDF
```

---
layout: center
class: text-center
---

# Thanks for your attention!

<div class="mt-8">
<span class="esade-badge gold">Oriol Rius</span>
<span class="esade-badge blue">joseporiol.rius@esade.edu</span>
</div>
