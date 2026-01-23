---
theme: ./
colorSchema: light
aspectRatio: 16/9
canvasWidth: 980
title: "ESADE Theme Demo - All Layouts & Features"
info: |
  ## ESADE Slidev Theme Reference
  Complete showcase of all available layouts and components
transition: slide-left
mdc: true
drawings:
  persist: false
css: unocss
---

---
layout: cover-split
---

# ESADE Slidev Theme

## Complete Reference Guide

A comprehensive showcase of all layouts, components, and styling options available in the slidev-theme-esade package.

---

# Table of Contents

<div class="grid grid-cols-2 gap-8">
<div>

## Layouts
1. Cover (CSS)
2. Cover Split (Vue)
3. Section (CSS)
4. Center (CSS)
5. Two Columns (CSS)
6. Quote (CSS)
7. Four Grid (Vue)
8. Compare (Vue)
9. Hero Cards (Vue)
10. Cards Grid (Vue)
11. Infographic (Vue)

</div>
<div>

## Components
- Accent Boxes (esade-box)
- Callout Boxes (CTL-style)
- Buttons
- Badges
- Step Numbers
- Feature Cards
- Image Cards
- Typography
- Brand Colors

</div>
</div>

---
layout: section
---

# Basic Layouts

CSS-styled layouts inherited from Slidev

---
layout: cover
---

# Layout: Cover

## Navy Gradient Background

Classic centered title slide with ESADE branding

<div class="abs-br m-6 text-sm opacity-80">
Your Name | Date
</div>

---

# Layout: Default

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

# Advanced Layouts

Vue component layouts with enhanced features

---
layout: cover-split
---

# Layout: Cover Split

## 50/50 Image + Content

A hands-on workshop for ESADE professors on transforming teaching materials into dynamic, interactive resources.

---
layout: cover-split
imagePosition: right
---

# Cover Split (Right)

## Image on Right Side

Use `imagePosition: right` to flip the layout. The gradient placeholder appears when no image is specified.

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
The footer area spans full width for additional context or descriptions.

---
layout: cards-grid
columns: 2
---

::title::
# Layout: Cards Grid

::intro::
Grid of image cards with descriptions. Use `columns: 2` or `columns: 3`.

::card1::
<div class="card-image" style="background: linear-gradient(135deg, #1a1a2e, #16213e); height: 140px; border-radius: 8px; display: flex; align-items: flex-end;">
  <div class="overlay" style="padding: 1rem; color: white; width: 100%;">
    <h4 style="margin: 0 0 0.25rem 0; font-weight: 700;">Example Card One</h4>
    <span class="meta" style="font-size: 0.75rem; opacity: 0.85;">50 sources · Jan 2025</span>
  </div>
</div>
<div class="card-content" style="padding-top: 0.75rem;">
  <p style="font-size: 0.9rem; line-height: 1.5; color: #333;">Description text with <strong>bold keywords</strong> for emphasis. Great for showcasing examples or use cases.</p>
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
  <p style="font-size: 0.9rem; line-height: 1.5; color: #333;">Cards support images with dark gradient overlays, titles, metadata, and call-to-action links.</p>
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
Full-width layout for diagrams, charts, and visual content. Background options: white, cream, light-blue, light-gray.

<div style="display: flex; align-items: center; justify-content: center; gap: 2rem; height: 100%;">
  <div style="text-align: center;">
    <div style="width: 100px; height: 100px; background: var(--esade-navy); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem; margin: 0 auto 0.5rem;">📄</div>
    <p style="font-size: 0.85rem; color: #444;">Sources</p>
  </div>
  <div style="font-size: 2rem; color: var(--esade-kumera);">→</div>
  <div style="text-align: center;">
    <div style="width: 100px; height: 100px; background: var(--esade-electric-blue); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem; margin: 0 auto 0.5rem;">⚙️</div>
    <p style="font-size: 0.85rem; color: #444;">Process</p>
  </div>
  <div style="font-size: 2rem; color: var(--esade-kumera);">→</div>
  <div style="text-align: center;">
    <div style="width: 100px; height: 100px; background: var(--esade-emerald); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem; margin: 0 auto 0.5rem;">✨</div>
    <p style="font-size: 0.85rem; color: #444;">Output</p>
  </div>
</div>

---
layout: section
---

# CSS Components

Reusable styling classes

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

# Callout Boxes (CTL-Style)

New callout boxes inspired by CTL design:

<div class="callout-warning">
<div><strong>Warning Callout:</strong> Cream background with orange border. Perfect for important warnings or recommendations.</div>
</div>

<div class="callout-info">
<p><strong>Info Callout:</strong> Light blue background for key takeaways and important information.</p>
</div>

<div class="callout-tip">
<p><strong>Tip Callout:</strong> Light green background for helpful tips and suggestions.</p>
</div>

<div class="callout-note">
<p><strong>Note Callout:</strong> Light purple background for additional notes and references.</p>
</div>

<div class="callout-secure">
<div><strong>Secure Callout:</strong> For security, privacy, or compliance-related messages.</div>
</div>

---

# Buttons & Badges

## Buttons

<div class="flex gap-4 mt-4 mb-8">
<a class="esade-button">Primary Button</a>
<a class="esade-button secondary">Secondary Button</a>
</div>

## Badges

<div class="flex gap-2 flex-wrap mt-4 mb-8">
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

# Feature Cards

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="feature-card">
<h3>Card Title One</h3>
<p>Feature cards have a light gray background with rounded corners. Perfect for listing features or benefits.</p>
</div>

<div class="feature-card">
<h3>Card Title Two</h3>
<p>Use these for organizing content into digestible chunks with consistent styling.</p>
</div>

<div class="feature-card">
<h3>Card Title Three</h3>
<p>Cards scale well and work great in grid layouts for visual balance.</p>
</div>

</div>

---

# Typography Scale

<div class="mt-4">

# H1 Heading (2.2rem) - ESADE Font
## H2 Heading (1.6rem) - With Kumera Underline
### H3 Heading (1.3rem) - Electric Blue
#### H4 Heading (1.1rem)

Body text uses Mabry Pro at 1rem (16px) with 1.5 line height. This ensures readability across all devices and projection scenarios.

**Bold text** for emphasis | *Italic text* for style | `inline code` for technical terms

</div>

---

# Brand Colors

<div class="grid grid-cols-3 gap-4 mt-6">

<div style="background: var(--esade-navy); color: white; padding: 1.5rem; border-radius: 8px; text-align: center;">
<strong>Navy</strong><br>
#002E5D<br>
<code>--esade-navy</code>
</div>

<div style="background: var(--esade-kumera); color: white; padding: 1.5rem; border-radius: 8px; text-align: center;">
<strong>Kumera</strong><br>
#83691F<br>
<code>--esade-kumera</code>
</div>

<div style="background: var(--esade-electric-blue); color: white; padding: 1.5rem; border-radius: 8px; text-align: center;">
<strong>Electric Blue</strong><br>
#00A7E1<br>
<code>--esade-electric-blue</code>
</div>

<div style="background: var(--esade-coral); color: white; padding: 1.5rem; border-radius: 8px; text-align: center;">
<strong>Coral</strong><br>
#FF6B6B<br>
<code>--esade-coral</code>
</div>

<div style="background: var(--esade-emerald); color: white; padding: 1.5rem; border-radius: 8px; text-align: center;">
<strong>Emerald</strong><br>
#4ECDC4<br>
<code>--esade-emerald</code>
</div>

<div style="background: var(--esade-yellow); color: #333; padding: 1.5rem; border-radius: 8px; text-align: center;">
<strong>Yellow</strong><br>
#FFE66D<br>
<code>--esade-yellow</code>
</div>

</div>

---

# Code Blocks

Syntax highlighted code with dark theme:

```typescript {all|1-3|5-8|all}
// TypeScript example with line highlighting
interface Student {
  name: string
  program: 'MBA' | 'MIBA' | 'Law'
}

function greet(student: Student): string {
  return `Welcome to ESADE, ${student.name}!`
}

const newStudent: Student = {
  name: 'Maria',
  program: 'MBA'
}

console.log(greet(newStudent))
```

<div class="mt-4 text-sm text-gray-600">
Click through to see line highlighting in action (steps: 1-3, 5-8, all)
</div>

---

# Tables

| Program | Duration | Format | Location |
|---------|----------|--------|----------|
| Full-time MBA | 12-18 months | On-campus | Barcelona |
| Executive MBA | 18 months | Hybrid | Barcelona/Madrid |
| MIBA | 12 months | On-campus | Barcelona |
| MiM | 10 months | On-campus | Barcelona |

<div class="mt-6 callout-info">
<p>Tables feature navy headers, hover effects, and clean borders for easy reading.</p>
</div>

---
layout: cover-split
---

# Thank You

## ESADE Theme Reference Complete

All layouts and components documented for your presentations.

**Resources:**
- README.md for documentation
- example.md for basic usage
- This demo.md for complete reference

---
layout: center
class: text-center
---

# Do Good. Do Better.

<div class="mt-8 text-gray-600">
ESADE Business School<br>
Barcelona | Madrid | Munich
</div>

<div class="mt-8">
<span class="esade-badge gold">slidev-theme-esade</span>
</div>
