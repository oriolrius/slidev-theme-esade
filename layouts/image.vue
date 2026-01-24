<script setup lang="ts">
defineProps<{
  background?: 'white' | 'cream' | 'light-blue' | 'light-gray'
}>()
</script>

<template>
  <div class="image-layout" :class="background || 'cream'">
    <!-- Logo -->
    <div class="logo-area">
      <img src="/esade-logo.svg" alt="ESADE" class="esade-logo" />
    </div>

    <!-- Title Area -->
    <div class="title-area">
      <slot name="title" />
    </div>

    <!-- Subtitle/Description -->
    <div class="subtitle-area">
      <slot name="subtitle" />
    </div>

    <!-- Main Infographic Area -->
    <div class="image-content">
      <slot />
    </div>

    <!-- Optional Brand/Credit -->
    <div class="brand-area">
      <slot name="brand" />
    </div>
  </div>
</template>

<style scoped>
.image-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.5rem 2.5rem;
  position: relative;
}

.image-layout.white {
  background: #ffffff;
}

.image-layout.cream {
  background: #F8F9FA;
}

.image-layout.light-blue {
  background: #E8F4F8;
}

.image-layout.light-gray {
  background: var(--esade-light-gray, #F5F5F5);
}

.logo-area {
  position: absolute;
  top: 1.5rem;
  right: 2.5rem;
}

.esade-logo {
  height: 48px;
  width: auto;
}

.title-area {
  padding-right: 100px;
  margin-bottom: 0.25rem;
}

.title-area :deep(h1) {
  font-family: 'ESADE', 'Mabry Pro', sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--esade-navy, #002E5D);
  margin: 0;
  line-height: 1.2;
}

.subtitle-area {
  margin-bottom: 1rem;
}

.subtitle-area :deep(p) {
  font-family: 'Mabry Pro', sans-serif;
  font-size: 0.95rem;
  color: #444;
  line-height: 1.5;
  margin: 0;
  max-width: 90%;
}

.image-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* Default slot styling for image content */
.image-content :deep(img) {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.image-content :deep(svg) {
  max-width: 100%;
  max-height: 100%;
}

/* For custom image layouts with flex children */
.image-content :deep(.info-grid) {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  width: 100%;
  height: 100%;
  align-items: center;
}

.image-content :deep(.info-left) {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.image-content :deep(.info-right) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
  height: 100%;
}

.image-content :deep(.info-item) {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0.75rem;
}

.image-content :deep(.info-item .icon) {
  width: 60px;
  height: 60px;
  margin-bottom: 0.5rem;
}

.image-content :deep(.info-item h4) {
  font-family: 'Mabry Pro', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--esade-navy, #002E5D);
  margin: 0 0 0.25rem 0;
}

.image-content :deep(.info-item p) {
  font-family: 'Mabry Pro', sans-serif;
  font-size: 0.75rem;
  color: #555;
  line-height: 1.4;
  margin: 0;
}

.brand-area {
  position: absolute;
  bottom: 1.5rem;
  right: 2.5rem;
}

.brand-area :deep(img) {
  height: 24px;
  opacity: 0.7;
}

.brand-area :deep(span) {
  font-family: 'Mabry Pro', sans-serif;
  font-size: 0.75rem;
  color: #666;
}
</style>
