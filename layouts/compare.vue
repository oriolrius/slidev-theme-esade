<script setup lang="ts">
defineProps<{
  leftTitle?: string
  rightTitle?: string
  leftColor?: 'red' | 'orange'
  rightColor?: 'green' | 'blue'
}>()
</script>

<template>
  <div class="compare-layout">
    <!-- Title Area -->
    <div class="title-area">
      <slot name="title" />
    </div>

    <!-- Subtitle/Intro -->
    <div class="intro-area">
      <slot name="intro" />
    </div>

    <!-- Comparison Columns -->
    <div class="compare-grid">
      <!-- Left Column (DON'Ts / Negative) -->
      <div class="compare-column left" :class="leftColor || 'red'">
        <div class="icon-rule">
          <span class="line"></span>
          <span class="icon-circle">
            <slot name="leftIcon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </slot>
          </span>
          <span class="line"></span>
        </div>
        <h3 class="column-title">{{ leftTitle || "DON'Ts - Common mistakes to avoid" }}</h3>
        <div class="column-content">
          <slot name="left" />
        </div>
      </div>

      <!-- Right Column (DO's / Positive) -->
      <div class="compare-column right" :class="rightColor || 'green'">
        <div class="icon-rule">
          <span class="line"></span>
          <span class="icon-circle">
            <slot name="rightIcon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </slot>
          </span>
          <span class="line"></span>
        </div>
        <h3 class="column-title">{{ rightTitle || "DO's - Practical uses that add value" }}</h3>
        <div class="column-content">
          <slot name="right" />
        </div>
      </div>
    </div>

    <!-- Bottom Takeaway -->
    <div class="takeaway-area">
      <slot name="takeaway" />
    </div>
  </div>
</template>

<style scoped>
.compare-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem 2.5rem;
  background: var(--esade-white, #ffffff);
  gap: 1rem;
}

.title-area :deep(h1) {
  font-family: 'ESADE', 'Mabry Pro', sans-serif;
  font-size: 2.4rem;
  font-weight: 400;
  color: var(--esade-navy, #002E5D);
  margin: 0;
  line-height: 1.2;
}

.intro-area :deep(p) {
  font-family: 'Mabry Pro', sans-serif;
  font-size: 1rem;
  color: #444;
  margin: 0;
}

.compare-grid {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 0.5rem;
}

.compare-column {
  display: flex;
  flex-direction: column;
}

.icon-rule {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.icon-rule .line {
  flex: 1;
  height: 3px;
}

.compare-column.green .icon-rule .line {
  background: #4CAF50;
}

.compare-column.blue .icon-rule .line {
  background: var(--esade-electric-blue, #00A7E1);
}

.compare-column.red .icon-rule .line {
  background: #E53935;
}

.compare-column.orange .icon-rule .line {
  background: #FF9800;
}

.icon-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin: 0 0.5rem;
}

.compare-column.green .icon-circle {
  background: #4CAF50;
}

.compare-column.blue .icon-circle {
  background: var(--esade-electric-blue, #00A7E1);
}

.compare-column.red .icon-circle {
  background: #E53935;
}

.compare-column.orange .icon-circle {
  background: #FF9800;
}

.icon-circle svg {
  width: 24px;
  height: 24px;
  color: white;
}

/* Font Awesome icons */
.icon-circle :deep(i),
.icon-circle :deep(.fa),
.icon-circle :deep(.fas),
.icon-circle :deep(.far),
.icon-circle :deep(.fab) {
  font-size: 1.4rem;
  color: white;
}

.column-title {
  font-family: 'ESADE', 'Mabry Pro', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--esade-navy, #002E5D);
  margin: 0 0 1rem 0;
}

.column-content :deep(ul) {
  list-style: disc;
  margin: 0;
  padding-left: 1.5rem;
}

.column-content :deep(li) {
  font-family: 'Mabry Pro', sans-serif;
  font-size: 1rem;
  color: #333;
  line-height: 1.5;
  margin-bottom: 0.6rem;
}

.column-content :deep(li)::marker {
  color: var(--esade-navy, #002E5D);
}

.takeaway-area {
  flex-shrink: 0;
  margin-top: auto;
}

.takeaway-area :deep(.callout-info) {
  background: #E3EAF6;
  border-radius: 4px;
  padding: 1rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.takeaway-area :deep(.callout-info)::before {
  content: '\f05a';
  font-family: 'Font Awesome 6 Free';
  font-weight: 900;
  font-size: 1.25rem;
  flex-shrink: 0;
  color: var(--esade-electric-blue, #00A7E1);
}

.takeaway-area :deep(p) {
  font-family: 'Mabry Pro', sans-serif;
  font-size: 0.95rem;
  color: #333;
  line-height: 1.5;
  margin: 0;
}

.takeaway-area :deep(strong) {
  font-weight: 700;
  color: var(--esade-navy, #002E5D);
}
</style>
