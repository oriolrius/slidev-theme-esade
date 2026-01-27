<script setup lang="ts">
const props = defineProps<{
  background?: 'white' | 'cream' | 'light-blue' | 'light-gray'
  // Full-screen image props
  image?: string
  imageFocus?: string  // e.g., 'center', 'top', '50% 30%'
  imageOverlay?: string  // e.g., '0.3' for dark overlay opacity
  imageSize?: string  // e.g., 'cover', 'contain', '120%', 'auto'
  // Title color - ESADE colors or hex codes
  titleColor?: string  // e.g., 'navy', 'kumera', 'electric-blue', 'coral', 'emerald', 'yellow', 'white', 'black' or '#FF0000'
}>()

// Map ESADE color names to CSS values
const getColor = (color: string | undefined): string | undefined => {
  if (!color) return undefined
  const colorMap: Record<string, string> = {
    'navy': 'var(--esade-navy, #002E5D)',
    'kumera': 'var(--esade-kumera, #83691F)',
    'gold': 'var(--esade-kumera, #83691F)',
    'electric-blue': 'var(--esade-electric-blue, #00A7E1)',
    'blue': 'var(--esade-electric-blue, #00A7E1)',
    'coral': 'var(--esade-coral, #FF6B6B)',
    'red': 'var(--esade-coral, #FF6B6B)',
    'emerald': 'var(--esade-emerald, #4ECDC4)',
    'green': 'var(--esade-emerald, #4ECDC4)',
    'yellow': 'var(--esade-yellow, #FFE66D)',
    'white': '#FFFFFF',
    'black': '#000000',
  }
  return colorMap[color.toLowerCase()] || color  // Return as-is if hex code
}

const titleColorValue = getColor(props.titleColor)
</script>

<template>
  <div class="image-layout" :class="[!image && (background || 'cream'), { 'has-bg-image': image }]">
    <!-- Full-screen background image -->
    <div v-if="image" class="bg-image-container">
      <div
        class="bg-image"
        :style="{
          backgroundImage: `url(${image})`,
          backgroundPosition: imageFocus || 'center',
          backgroundSize: imageSize || 'cover'
        }"
      ></div>
      <div v-if="imageOverlay" class="bg-overlay" :style="{ opacity: imageOverlay }"></div>
    </div>

    <!-- Title Area -->
    <div class="title-area" :class="{ 'on-image': image && !titleColor }" :style="titleColorValue ? { '--title-color': titleColorValue } : {}">
      <slot name="title" />
    </div>

    <!-- Subtitle/Description -->
    <div class="subtitle-area" :class="{ 'on-image': image }">
      <slot name="subtitle" />
    </div>

    <!-- Main Content Area -->
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

/* Full-screen background image */
.bg-image-container {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.bg-image {
  position: absolute;
  inset: 0;
  background-repeat: no-repeat;
}

.bg-overlay {
  position: absolute;
  inset: 0;
  background: #000;
}

.image-layout.has-bg-image {
  background: transparent;
}

.image-layout.has-bg-image .title-area,
.image-layout.has-bg-image .subtitle-area,
.image-layout.has-bg-image .image-content,
.image-layout.has-bg-image .brand-area {
  position: relative;
  z-index: 1;
}

/* Text styling when on image */
.title-area.on-image :deep(h1) {
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.subtitle-area.on-image :deep(p) {
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
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

.title-area {
  margin-bottom: 0.25rem;
}

.title-area :deep(h1) {
  font-family: 'ESADE', 'Mabry Pro', sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--title-color, var(--esade-navy, #002E5D));
  margin: 0;
  line-height: 1.2;
}

.subtitle-area {
  margin-bottom: 1rem;
}

.subtitle-area :deep(p) {
  font-family: 'Mabry Pro', sans-serif;
  font-size: var(--esade-text-base, 1.6rem);
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
  font-size: var(--esade-text-base, 1.6rem);
  font-weight: 700;
  color: var(--esade-navy, #002E5D);
  margin: 0 0 0.25rem 0;
}

.image-content :deep(.info-item p) {
  font-family: 'Mabry Pro', sans-serif;
  font-size: var(--esade-text-base, 1.6rem);
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
  font-size: var(--esade-text-sm, 1.5rem);
  color: #666;
}
</style>
