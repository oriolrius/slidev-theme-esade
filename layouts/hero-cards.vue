<script setup lang="ts">
defineProps<{
  heroImage?: string
  heroHeight?: string
}>()
</script>

<template>
  <div class="hero-cards-layout">
    <!-- Hero Banner -->
    <div class="hero-banner" :style="{ height: heroHeight || '200px' }">
      <img v-if="heroImage" :src="heroImage" alt="" class="hero-image" />
      <div v-else class="hero-placeholder">
        <slot name="hero" />
      </div>
      <div class="hero-overlay">
        <slot name="hero-content" />
      </div>
    </div>

    <!-- Title Section -->
    <div class="title-section">
      <slot name="title" />
    </div>

    <!-- Three Cards -->
    <div class="cards-grid">
      <div class="feature-card">
        <slot name="card1" />
      </div>
      <div class="feature-card">
        <slot name="card2" />
      </div>
      <div class="feature-card">
        <slot name="card3" />
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
  background: linear-gradient(
    135deg,
    #1a1a2e 0%,
    #16213e 50%,
    #0f3460 100%
  );
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
  gap: 1.5rem;
  padding: 1rem 2.5rem;
  flex: 1;
}

.feature-card {
  background: var(--esade-light-gray, #F5F5F5);
  border-radius: 8px;
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
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
  font-size: 0.9rem;
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
