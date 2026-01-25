<script setup lang="ts">
const props = defineProps<{
  heroImage?: string
  heroHeight?: string
  rows?: number
  // Global defaults
  cardBg?: string
  cardBorder?: string
  // Per-card overrides
  card1Bg?: string
  card1Border?: string
  card2Bg?: string
  card2Border?: string
  card3Bg?: string
  card3Border?: string
  card4Bg?: string
  card4Border?: string
  card5Bg?: string
  card5Border?: string
  card6Bg?: string
  card6Border?: string
}>()

// Helper to get card styles
const getCardStyle = (n: number) => ({
  background: props[`card${n}Bg` as keyof typeof props] || props.cardBg,
  borderColor: props[`card${n}Border` as keyof typeof props] || props.cardBorder
})

const hasCardBorder = (n: number) =>
  props[`card${n}Border` as keyof typeof props] || props.cardBorder
</script>

<template>
  <div class="hero-cards-layout">
    <!-- Hero Banner (only shown when heroImage is set) -->
    <div v-if="heroImage" class="hero-banner" :style="{ height: heroHeight || '200px' }">
      <img :src="heroImage" alt="" class="hero-image" />
      <div class="hero-overlay">
        <slot name="hero-content" />
      </div>
    </div>

    <!-- Title Section -->
    <div class="title-section">
      <slot name="title" />
    </div>

    <!-- Row 1 -->
    <div class="cards-grid">
      <div class="feature-card" :style="getCardStyle(1)" :class="{ 'has-border': hasCardBorder(1) }">
        <div v-if="$slots.icon1" class="icon-rule">
          <span class="line"></span>
          <span class="icon-circle">
            <slot name="icon1" />
          </span>
          <span class="line"></span>
        </div>
        <slot name="card1" />
      </div>
      <div class="feature-card" :style="getCardStyle(2)" :class="{ 'has-border': hasCardBorder(2) }">
        <div v-if="$slots.icon2" class="icon-rule">
          <span class="line"></span>
          <span class="icon-circle">
            <slot name="icon2" />
          </span>
          <span class="line"></span>
        </div>
        <slot name="card2" />
      </div>
      <div class="feature-card" :style="getCardStyle(3)" :class="{ 'has-border': hasCardBorder(3) }">
        <div v-if="$slots.icon3" class="icon-rule">
          <span class="line"></span>
          <span class="icon-circle">
            <slot name="icon3" />
          </span>
          <span class="line"></span>
        </div>
        <slot name="card3" />
      </div>
    </div>

    <!-- Row 2 (only when rows === 2) -->
    <div v-if="rows === 2" class="cards-grid">
      <div class="feature-card" :style="getCardStyle(4)" :class="{ 'has-border': hasCardBorder(4) }">
        <div v-if="$slots.icon4" class="icon-rule">
          <span class="line"></span>
          <span class="icon-circle">
            <slot name="icon4" />
          </span>
          <span class="line"></span>
        </div>
        <slot name="card4" />
      </div>
      <div class="feature-card" :style="getCardStyle(5)" :class="{ 'has-border': hasCardBorder(5) }">
        <div v-if="$slots.icon5" class="icon-rule">
          <span class="line"></span>
          <span class="icon-circle">
            <slot name="icon5" />
          </span>
          <span class="line"></span>
        </div>
        <slot name="card5" />
      </div>
      <div class="feature-card" :style="getCardStyle(6)" :class="{ 'has-border': hasCardBorder(6) }">
        <div v-if="$slots.icon6" class="icon-rule">
          <span class="line"></span>
          <span class="icon-circle">
            <slot name="icon6" />
          </span>
          <span class="line"></span>
        </div>
        <slot name="card6" />
      </div>
    </div>

    <!-- Bottom Text -->
    <div class="bottom-text">
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped>
.hero-cards-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--esade-white, #ffffff);
  overflow: hidden;
}

.hero-banner {
  position: relative;
  width: 100%;
  flex-shrink: 0;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-placeholder {
  width: 100%;
  height: 100%;
  background: var(--esade-navy, #002E5D);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.hero-overlay :deep(h2) {
  font-family: 'ESADE', 'Mabry Pro', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.title-section {
  padding: 1.5rem 2.5rem 0.5rem;
  flex-shrink: 0;
}

.title-section :deep(h1) {
  font-family: 'ESADE', 'Mabry Pro', sans-serif;
  font-size: 2.2rem;
  font-weight: 400;
  color: var(--esade-navy, #002E5D);
  margin: 0;
  line-height: 1.2;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  gap: 1.5rem;
  padding: 1rem 2.5rem 0.5rem;
  flex: 1;
  align-items: stretch;
}

.cards-grid.simple-row {
  padding-top: 0.5rem;
}

.feature-card {
  background: var(--esade-light-gray, #F5F5F5);
  border-radius: 8px;
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.feature-card.has-border {
  border: 2px solid;
}

.icon-rule {
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
}

.icon-rule .line {
  flex: 1;
  height: 2px;
  background: var(--esade-navy, #002E5D);
}

.icon-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--esade-navy, #002E5D);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin: 0 0.5rem;
}

.icon-circle :deep(svg) {
  width: 20px;
  height: 20px;
  color: white;
}

/* Font Awesome icons */
.icon-circle :deep(i),
.icon-circle :deep(.fa),
.icon-circle :deep(.fas),
.icon-circle :deep(.far),
.icon-circle :deep(.fab) {
  font-size: 1.1rem;
  color: white;
}

.feature-card :deep(h3) {
  font-family: 'ESADE', 'Mabry Pro', sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--esade-navy, #002E5D);
  margin: 0 0 0.6rem 0;
  line-height: 1.3;
}

.feature-card :deep(p) {
  font-family: 'Mabry Pro', sans-serif;
  font-size: 1.4rem;
  color: #444;
  line-height: 1.5;
  margin: 0;
}

.bottom-text {
  padding: 0.75rem 2.5rem 1.5rem;
  flex-shrink: 0;
}

.bottom-text :deep(p) {
  font-family: 'Mabry Pro', sans-serif;
  font-size: 0.95rem;
  color: #333;
  line-height: 1.6;
  margin: 0;
}
</style>
