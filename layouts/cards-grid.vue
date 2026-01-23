<script setup lang="ts">
defineProps<{
  columns?: 2 | 3
}>()
</script>

<template>
  <div class="cards-grid-layout">
    <!-- Logo -->
    <div class="logo-area">
      <img src="/esade-logo.svg" alt="ESADE" class="esade-logo" />
    </div>

    <!-- Title Area -->
    <div class="title-area">
      <slot name="title" />
    </div>

    <!-- Intro Text -->
    <div class="intro-area">
      <slot name="intro" />
    </div>

    <!-- Cards Grid -->
    <div class="cards-container" :class="{ 'three-cols': columns === 3 }">
      <div class="image-card">
        <slot name="card1" />
      </div>
      <div class="image-card">
        <slot name="card2" />
      </div>
      <div v-if="columns === 3" class="image-card">
        <slot name="card3" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.cards-grid-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem 2.5rem;
  background: var(--esade-white, #ffffff);
  position: relative;
}

.logo-area {
  position: absolute;
  top: 2rem;
  right: 2.5rem;
}

.esade-logo {
  height: 48px;
  width: auto;
}

.title-area {
  margin-bottom: 0.5rem;
  padding-right: 100px;
}

.title-area :deep(h1) {
  font-family: 'ESADE', 'Mabry Pro', sans-serif;
  font-size: 2.4rem;
  font-weight: 400;
  color: var(--esade-navy, #002E5D);
  margin: 0;
  line-height: 1.2;
}

.intro-area {
  margin-bottom: 1.5rem;
}

.intro-area :deep(p) {
  font-family: 'Mabry Pro', sans-serif;
  font-size: 1rem;
  color: #444;
  line-height: 1.5;
  margin: 0;
}

.cards-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  flex: 1;
}

.cards-container.three-cols {
  grid-template-columns: repeat(3, 1fr);
}

.image-card {
  display: flex;
  flex-direction: column;
}

.image-card :deep(.card-image) {
  position: relative;
  height: 160px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.image-card :deep(.card-image img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-card :deep(.card-image .overlay) {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 40%,
    rgba(0, 0, 0, 0.7) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  color: white;
}

.image-card :deep(.card-image .overlay .source) {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
  opacity: 0.9;
}

.image-card :deep(.card-image .overlay h4) {
  font-family: 'Mabry Pro', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
  color: white;
}

.image-card :deep(.card-image .overlay .meta) {
  font-size: 0.75rem;
  opacity: 0.85;
}

.image-card :deep(.card-content) {
  flex: 1;
}

.image-card :deep(.card-content p) {
  font-family: 'Mabry Pro', sans-serif;
  font-size: 0.9rem;
  color: #333;
  line-height: 1.55;
  margin: 0 0 0.75rem 0;
}

.image-card :deep(.card-content strong) {
  font-weight: 700;
  color: var(--esade-navy, #002E5D);
}

.image-card :deep(.card-link) {
  margin-top: auto;
}

.image-card :deep(.card-link a) {
  font-family: 'Mabry Pro', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--esade-navy, #002E5D);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.image-card :deep(.card-link a:hover) {
  color: var(--esade-electric-blue, #00A7E1);
}
</style>
