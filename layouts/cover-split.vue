<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  image: String,
  imagePosition: String,
  imageWidth: String,
  imageFocus: String
})

const containerStyle = computed(() => ({
  '--image-width': props.imageWidth || '50%'
}))

const imageStyle = computed(() => ({
  objectPosition: props.imageFocus || 'center'
}))
</script>

<template>
  <div
    class="cover-split"
    :class="{ 'image-right': props.imagePosition === 'right' }"
    :style="containerStyle"
  >
    <!-- Image Panel -->
    <div class="image-panel">
      <img
        v-if="props.image"
        :src="props.image"
        alt=""
        class="hero-image"
        :style="imageStyle"
      />
      <div v-else class="placeholder-gradient"></div>
    </div>

    <!-- Content Panel -->
    <div class="content-panel">
      <div class="content-wrapper">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.cover-split {
  display: grid;
  grid-template-columns: var(--image-width) 1fr;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.cover-split.image-right {
  direction: rtl;
}

.cover-split.image-right > * {
  direction: ltr;
}

.image-panel {
  position: relative;
  height: 100%;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* object-position is applied via inline style from imageFocus prop */
}

.placeholder-gradient {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    #f8e1eb 0%,
    #e8b4d0 20%,
    #d4a5c9 40%,
    #b8d4e8 60%,
    #a8d8ea 80%,
    #e8f4f8 100%
  );
  position: relative;
}

.placeholder-gradient::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 30%, rgba(200, 100, 150, 0.3) 0%, transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(100, 180, 220, 0.3) 0%, transparent 40%),
    radial-gradient(circle at 50% 50%, rgba(180, 140, 200, 0.2) 0%, transparent 50%);
}

.content-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--esade-white, #ffffff);
  padding: 5rem 6rem;
  position: relative;
}

.content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.content-wrapper :deep(h1) {
  font-family: 'ESADE', 'Mabry Pro', sans-serif;
  font-size: 5.5rem;
  font-weight: 400;
  color: var(--esade-navy, #002E5D);
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.content-wrapper :deep(h2) {
  font-family: 'ESADE', 'Mabry Pro', sans-serif;
  font-size: 3rem;
  font-weight: 500;
  color: var(--esade-navy, #002E5D);
  line-height: 1.2;
  margin-bottom: 2rem;
  border-bottom: none;
  padding-bottom: 0;
}

.content-wrapper :deep(p) {
  font-family: 'Mabry Pro', sans-serif;
  font-size: 2rem;
  color: #333;
  line-height: 1.5;
  max-width: 90%;
}
</style>
