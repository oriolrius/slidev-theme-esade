<script setup lang="ts">
defineProps<{
  icons?: [string, string, string, string]
}>()
</script>

<template>
  <div class="four-grid-layout">
    <!-- Title Area -->
    <div class="title-area">
      <slot name="title" />
    </div>

    <!-- 2x2 Grid -->
    <div class="quadrant-grid">
      <div class="quadrant q1">
        <div class="icon-rule">
          <span class="line"></span>
          <span class="icon-circle">
            <slot name="icon1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </slot>
          </span>
          <span class="line"></span>
        </div>
        <slot name="q1" />
      </div>

      <div class="quadrant q2">
        <div class="icon-rule">
          <span class="line"></span>
          <span class="icon-circle">
            <slot name="icon2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </slot>
          </span>
          <span class="line"></span>
        </div>
        <slot name="q2" />
      </div>

      <div class="quadrant q3">
        <div class="icon-rule">
          <span class="line"></span>
          <span class="icon-circle">
            <slot name="icon3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </slot>
          </span>
          <span class="line"></span>
        </div>
        <slot name="q3" />
      </div>

      <div class="quadrant q4">
        <div class="icon-rule">
          <span class="line"></span>
          <span class="icon-circle">
            <slot name="icon4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </slot>
          </span>
          <span class="line"></span>
        </div>
        <slot name="q4" />
      </div>
    </div>

    <!-- Bottom Callout -->
    <div class="callout-area">
      <slot name="callout" />
    </div>
  </div>
</template>

<style scoped>
.four-grid-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem 2.5rem;
  background: var(--esade-white, #ffffff);
  gap: 1rem;
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

.quadrant-grid {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1.5rem 2.5rem;
}

.quadrant {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: var(--esade-text-base, 1.6rem);
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
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--esade-navy, #002E5D);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin: 0 0.5rem;
}

.icon-circle :deep(svg) {
  width: 22px;
  height: 22px;
  color: white;
}

.icon-circle :deep(img) {
  width: 22px;
  height: 22px;
  filter: brightness(0) invert(1);
}

/* Font Awesome icons */
.icon-circle :deep(i),
.icon-circle :deep(.fa),
.icon-circle :deep(.fas),
.icon-circle :deep(.far),
.icon-circle :deep(.fab) {
  font-size: var(--esade-icon-sm, 1.4rem);
  color: white;
}

.quadrant :deep(h3) {
  font-family: 'ESADE', 'Mabry Pro', sans-serif;
  font-size: var(--esade-text-lg, 1.7rem);
  font-weight: 600;
  color: var(--esade-navy, #002E5D);
  margin-bottom: 0.5rem;
}

.quadrant :deep(p) {
  font-family: 'Mabry Pro', sans-serif;
  font-size: var(--esade-text-base, 1.6rem);
  color: #444;
  line-height: 1.5;
  margin: 0;
}

.callout-area {
  flex-shrink: 0;
  margin-top: auto;
}

.callout-area :deep(.callout-warning) {
  background: #FFF8E1;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
  padding: 1rem 1.25rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.callout-area :deep(.callout-warning)::before {
  content: '\26A0';
  font-size: var(--esade-icon-md, 1.8rem);
  color: #FF9800;
  flex-shrink: 0;
}

.callout-area :deep(h4) {
  font-family: 'Mabry Pro', sans-serif;
  font-size: var(--esade-text-lg, 1.7rem);
  font-weight: 700;
  color: var(--esade-navy, #002E5D);
  margin: 0 0 0.25rem 0;
}

.callout-area :deep(p) {
  font-family: 'Mabry Pro', sans-serif;
  font-size: var(--esade-text-base, 1.6rem);
  color: #333;
  line-height: 1.5;
  margin: 0;
}
</style>
