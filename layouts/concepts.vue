<script setup lang="ts">
const props = defineProps<{
  cols?: number
  rows?: number
}>()

const columns = props.cols || 3
const rows = props.rows || 1
const totalItems = columns * rows

// Calculate sizes based on grid dimensions
const getIconSize = () => {
  const total = columns * rows
  if (total <= 2) return '12rem'
  if (total <= 3) return '10rem'
  if (total <= 4) return '9rem'
  if (total <= 6) return '7rem'
  return '6rem'
}

const getTitleSize = () => {
  const total = columns * rows
  if (total <= 3) return '1.6rem'
  if (total <= 6) return '1.4rem'
  return '1.2rem'
}

const getDescSize = () => {
  const total = columns * rows
  if (total <= 3) return '1.2rem'
  if (total <= 6) return '1.05rem'
  return '0.95rem'
}
</script>

<template>
  <div class="concepts-layout">
    <!-- Title Area -->
    <div class="title-area">
      <slot name="title" />
    </div>

    <!-- Concepts Grid -->
    <div
      class="concepts-grid"
      :style="{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`
      }"
    >
      <!-- Concept 1 -->
      <div v-if="$slots.icon1 || $slots.concept1" class="concept-item" :style="{ '--icon-size': getIconSize(), '--title-size': getTitleSize(), '--desc-size': getDescSize() }">
        <div class="concept-icon">
          <slot name="icon1" />
        </div>
        <div class="concept-content">
          <slot name="concept1" />
        </div>
      </div>

      <!-- Concept 2 -->
      <div v-if="$slots.icon2 || $slots.concept2" class="concept-item" :style="{ '--icon-size': getIconSize(), '--title-size': getTitleSize(), '--desc-size': getDescSize() }">
        <div class="concept-icon">
          <slot name="icon2" />
        </div>
        <div class="concept-content">
          <slot name="concept2" />
        </div>
      </div>

      <!-- Concept 3 -->
      <div v-if="$slots.icon3 || $slots.concept3" class="concept-item" :style="{ '--icon-size': getIconSize(), '--title-size': getTitleSize(), '--desc-size': getDescSize() }">
        <div class="concept-icon">
          <slot name="icon3" />
        </div>
        <div class="concept-content">
          <slot name="concept3" />
        </div>
      </div>

      <!-- Concept 4 -->
      <div v-if="$slots.icon4 || $slots.concept4" class="concept-item" :style="{ '--icon-size': getIconSize(), '--title-size': getTitleSize(), '--desc-size': getDescSize() }">
        <div class="concept-icon">
          <slot name="icon4" />
        </div>
        <div class="concept-content">
          <slot name="concept4" />
        </div>
      </div>

      <!-- Concept 5 -->
      <div v-if="$slots.icon5 || $slots.concept5" class="concept-item" :style="{ '--icon-size': getIconSize(), '--title-size': getTitleSize(), '--desc-size': getDescSize() }">
        <div class="concept-icon">
          <slot name="icon5" />
        </div>
        <div class="concept-content">
          <slot name="concept5" />
        </div>
      </div>

      <!-- Concept 6 -->
      <div v-if="$slots.icon6 || $slots.concept6" class="concept-item" :style="{ '--icon-size': getIconSize(), '--title-size': getTitleSize(), '--desc-size': getDescSize() }">
        <div class="concept-icon">
          <slot name="icon6" />
        </div>
        <div class="concept-content">
          <slot name="concept6" />
        </div>
      </div>

      <!-- Concept 7 -->
      <div v-if="$slots.icon7 || $slots.concept7" class="concept-item" :style="{ '--icon-size': getIconSize(), '--title-size': getTitleSize(), '--desc-size': getDescSize() }">
        <div class="concept-icon">
          <slot name="icon7" />
        </div>
        <div class="concept-content">
          <slot name="concept7" />
        </div>
      </div>

      <!-- Concept 8 -->
      <div v-if="$slots.icon8 || $slots.concept8" class="concept-item" :style="{ '--icon-size': getIconSize(), '--title-size': getTitleSize(), '--desc-size': getDescSize() }">
        <div class="concept-icon">
          <slot name="icon8" />
        </div>
        <div class="concept-content">
          <slot name="concept8" />
        </div>
      </div>

      <!-- Concept 9 -->
      <div v-if="$slots.icon9 || $slots.concept9" class="concept-item" :style="{ '--icon-size': getIconSize(), '--title-size': getTitleSize(), '--desc-size': getDescSize() }">
        <div class="concept-icon">
          <slot name="icon9" />
        </div>
        <div class="concept-content">
          <slot name="concept9" />
        </div>
      </div>
    </div>

    <!-- Footer Area -->
    <div v-if="$slots.footer" class="footer-area">
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped>
.concepts-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem 2.5rem;
  background: var(--esade-white, #ffffff);
  gap: 1.5rem;
}

.title-area {
  flex-shrink: 0;
}

.title-area :deep(h1) {
  font-family: 'ESADE', 'Mabry Pro', sans-serif;
  font-size: 2.4rem;
  font-weight: 400;
  color: var(--esade-navy, #002E5D);
  margin: 0;
  line-height: 1.2;
}

.title-area :deep(h2) {
  font-family: 'ESADE', 'Mabry Pro', sans-serif;
  font-size: 1.8rem;
  font-weight: 400;
  color: var(--esade-navy, #002E5D);
  margin: 0;
  border-bottom: none;
  padding-bottom: 0;
}

.concepts-grid {
  flex: 1;
  display: grid;
  gap: 2rem;
  align-items: center;
  align-content: center;
  justify-items: center;
}

.concept-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  justify-content: center;
  padding: 1rem;
}

.concept-icon {
  color: var(--esade-navy, #002E5D);
  margin-bottom: 1.5rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--icon-size, 8rem);
}

/* Font Awesome icons - use CSS variable for size */
.concept-icon :deep(i),
.concept-icon :deep(.fa),
.concept-icon :deep(.fas),
.concept-icon :deep(.far),
.concept-icon :deep(.fab),
.concept-icon :deep([class*="fa-"]) {
  font-size: var(--icon-size, 8rem) !important;
  color: var(--esade-navy, #002E5D) !important;
  line-height: 1 !important;
}

/* SVG icons */
.concept-icon :deep(svg) {
  width: var(--icon-size, 8rem);
  height: var(--icon-size, 8rem);
  color: var(--esade-navy, #002E5D);
}

.concept-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.concept-content :deep(h3),
.concept-content :deep(strong) {
  font-family: 'ESADE', 'Mabry Pro', sans-serif;
  font-size: var(--title-size, 1.4rem);
  font-weight: 600;
  color: var(--esade-navy, #002E5D);
  margin: 0;
  line-height: 1.3;
}

.concept-content :deep(p) {
  font-family: 'Mabry Pro', sans-serif;
  font-size: var(--desc-size, 1.1rem);
  color: #555;
  line-height: 1.5;
  margin: 0;
  max-width: 90%;
}

.footer-area {
  flex-shrink: 0;
  margin-top: auto;
}

.footer-area :deep(p) {
  font-family: 'Mabry Pro', sans-serif;
  font-size: 0.95rem;
  color: #666;
  margin: 0;
  text-align: center;
}
</style>
