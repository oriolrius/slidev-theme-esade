<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'

const { currentSlideNo, total, currentLayout } = useNav()

const isHidden = computed(() => {
  const layout = currentLayout.value || ''
  // Hide on cover layouts and last slide
  const isCover = layout === 'cover' || layout === 'cover-split'
  const isLastSlide = currentSlideNo.value === total.value
  return isCover || isLastSlide
})
</script>

<template>
  <div v-if="!isHidden" class="page-number">
    {{ currentSlideNo }}/{{ total }}
  </div>
</template>

<style scoped>
.page-number {
  position: absolute;
  bottom: 1.5rem;
  right: 2rem;
  font-family: 'Mabry Pro', sans-serif;
  font-size: 1rem;
  color: #999;
  z-index: 10;
}
</style>
