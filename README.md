# slidev-theme-esade

ESADE branded theme for [Slidev](https://sli.dev) presentations, based on the ESADE Brand Book 2025 and CTL design guidelines.

## Features

- ESADE brand colors (Navy, Kumera gold, Electric Blue, etc.)
- Custom ESADE and Mabry Pro fonts
- 11 styled layouts for various presentation needs
- Custom CSS classes for boxes, buttons, badges, and callouts
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

### Basic Layouts

#### Cover (CSS-styled)

Navy gradient background, centered content.

```md
---
layout: cover
---

# Presentation Title

## Subtitle

Your Name
```

#### Section (CSS-styled)

Navy background section divider.

```md
---
layout: section
---

# Section Title
```

#### Two Columns (CSS-styled)

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

#### Center (CSS-styled)

```md
---
layout: center
---

# Centered Content
```

#### Quote (CSS-styled)

```md
---
layout: quote
---

> "Your inspiring quote here."
```

---

### Advanced Layouts (Vue Components)

#### Cover Split

50/50 split with image on one side and content on the other. Perfect for title slides.

```md
---
layout: cover-split
image: /path/to/image.jpg
imagePosition: left
---

# Main Title

## Subtitle

A hands-on workshop description text goes here.
```

Props:
- `image`: Path to hero image (optional, shows gradient if not provided)
- `imagePosition`: `'left'` (default) or `'right'`

#### Four Grid

2×2 quadrant layout with icon separators. Great for "Key Considerations" slides.

```md
---
layout: four-grid
---

::title::
# Key Considerations for This Workshop

::q1::
### Part of AI Literacy Strategy
This session is part of the commitment to AI literacy.

::q2::
### Responding to Student Practices
Students already use these tools.

::q3::
### Learning by Experimentation
The aim is exploration, not mastery.

::q4::
### Responsible Use
Careful and responsible use is essential.

::callout::
<div class="callout-warning">
<strong>Our Recommendation:</strong> Work only with open-access materials.
</div>
```

Slots: `title`, `q1`, `q2`, `q3`, `q4`, `callout`, `icon1`-`icon4`

#### Compare

Side-by-side comparison layout, perfect for Do's/Don'ts.

```md
---
layout: compare
leftTitle: "DO's - Practical uses"
rightTitle: "DON'Ts - Mistakes to avoid"
leftColor: green
rightColor: red
---

::title::
# Do's & Don'ts

::intro::
Used well, this supports learning materials.

::left::
- Discussion questions and prompts
- Teaching cases and extensions
- Concept maps and tables
- Flashcards and quizzes

::right::
- Don't upload proprietary materials
- Don't use for grading
- Don't replace discussion
- Don't assume critical usage

::takeaway::
<div class="callout-info">
<strong>Key takeaway:</strong> This supports preparation—judgment remains human.
</div>
```

Props:
- `leftTitle`, `rightTitle`: Column headers
- `leftColor`: `'green'` (default) or `'blue'`
- `rightColor`: `'red'` (default) or `'orange'`

#### Hero Cards

Full-width hero banner with 3 feature cards below.

```md
---
layout: hero-cards
heroImage: /path/to/hero.jpg
heroHeight: 200px
---

::title::
# NotebookLM

::card1::
### 1. Source-grounded learning
Build AI-generated resources strictly from materials.

::card2::
### 2. Visual Impact
Turn static documents into study guides, podcasts, summaries.

::card3::
### 3. Teaching-centered AI support
Use AI as a pedagogical assistant.

::footer::
This represents a new approach to teaching with AI.
```

Props:
- `heroImage`: Path to hero image
- `heroHeight`: Height of hero banner (default: `'200px'`)

#### Cards Grid

Grid of image cards with descriptions. Great for use cases/examples.

```md
---
layout: cards-grid
columns: 2
---

::title::
# Example Use Cases

::intro::
Browse featured notebooks to review concrete examples.

::card1::
<div class="card-image">
  <img src="/example1.jpg" />
  <div class="overlay">
    <span class="source">The Economist</span>
    <h4>The World Ahead 2025</h4>
    <span class="meta">70 sources · Jul 7, 2025</span>
  </div>
</div>
<div class="card-content">
  <p>Tracking new developments in markets, science, technology...</p>
</div>
<div class="card-link">
  <a href="#">Open the Notebook and Explore</a>
</div>

::card2::
<div class="card-image">
  <img src="/example2.jpg" />
  <div class="overlay">
    <h4>Earnings Reports</h4>
    <span class="meta">267 sources</span>
  </div>
</div>
<div class="card-content">
  <p>Dive deep into the <strong>state of the global economy</strong>.</p>
</div>
<div class="card-link">
  <a href="#">Open the Notebook and Explore</a>
</div>
```

Props:
- `columns`: `2` (default) or `3`

#### Infographic

Full-width layout for diagrams and infographics.

```md
---
layout: infographic
background: cream
---

::title::
# NotebookLM Studio: Transform Your Sources

::subtitle::
Studio offers features that transform your documents into various formats.

<img src="/infographic.png" />

::brand::
<span>NotebookLM</span>
```

Props:
- `background`: `'white'`, `'cream'` (default), `'light-blue'`, `'light-gray'`

---

## Custom CSS Classes

### Accent Boxes (Original)

```html
<div class="esade-box info">Info box content</div>
<div class="esade-box success">Success box content</div>
<div class="esade-box warning">Warning box content</div>
<div class="esade-box highlight">Highlight box content</div>
```

### Callout Boxes (CTL-Style)

```html
<!-- Warning - Cream/beige with orange border -->
<div class="callout-warning">
  <strong>Warning Title:</strong> Your warning message here.
</div>

<!-- Info - Light blue background -->
<div class="callout-info">
  <strong>Key takeaway:</strong> Important information here.
</div>

<!-- Tip - Light green background -->
<div class="callout-tip">
  <p>Helpful tip or suggestion here.</p>
</div>

<!-- Note - Light purple background -->
<div class="callout-note">
  <p>Additional note or reference.</p>
</div>

<!-- Secure/Lock - For security-related content -->
<div class="callout-secure">
  <strong>Closing note:</strong> Security or privacy message.
</div>
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

### Step Numbers

```html
<span class="step-number">1</span>
<span class="step-number small">2</span>
<span class="step-number large gold">3</span>
<span class="step-number blue">4</span>
```

### Feature Cards

```html
<div class="feature-card">
  <h3>Card Title</h3>
  <p>Card description text.</p>
</div>
```

### Image Cards

```html
<div class="image-card">
  <div class="image-container">
    <img src="/image.jpg" />
    <div class="overlay">
      <h4>Card Title</h4>
      <span class="meta">Additional info</span>
    </div>
  </div>
  <div class="content">
    <p>Description text.</p>
    <a href="#">Link text</a>
  </div>
</div>
```

---

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

## Brand Guidelines

See [ESADE_BRANDBOOK.md](./ESADE_BRANDBOOK.md) for the complete ESADE brand guidelines including:

- Brand colors with hex values
- Typography specifications
- Logo usage guidelines
- Design principles
- Accessibility requirements

## Demo

Check [example.md](./example.md) for a complete presentation demonstrating all theme features.

## License

MIT

## Author

Oriol Rius
