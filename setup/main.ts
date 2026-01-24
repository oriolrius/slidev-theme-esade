import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ app }) => {
  // Initialize line numbers toggle for code blocks
  if (typeof window !== 'undefined') {
    const initLineNumbersToggle = () => {
      // Find all code blocks that don't have a toggle button yet
      const codeBlocks = document.querySelectorAll('pre.shiki, pre.slidev-code')

      codeBlocks.forEach((pre) => {
        // Skip if already has a toggle button
        if (pre.querySelector('.line-numbers-toggle')) return

        // Create toggle button
        const toggle = document.createElement('button')
        toggle.className = 'line-numbers-toggle'
        toggle.title = 'Toggle line numbers'
        toggle.setAttribute('aria-label', 'Toggle line numbers')

        // Handle click
        toggle.addEventListener('click', (e) => {
          e.preventDefault()
          e.stopPropagation()

          if (pre.classList.contains('show-lines')) {
            pre.classList.remove('show-lines')
            pre.classList.add('hide-lines')
          } else if (pre.classList.contains('hide-lines')) {
            pre.classList.remove('hide-lines')
          } else {
            pre.classList.add('show-lines')
          }
        })

        // Insert button into pre element
        pre.style.position = 'relative'
        pre.appendChild(toggle)
      })
    }

    // Run on initial load and after navigation
    const observer = new MutationObserver(() => {
      initLineNumbersToggle()
    })

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        initLineNumbersToggle()
        observer.observe(document.body, { childList: true, subtree: true })
      })
    } else {
      initLineNumbersToggle()
      observer.observe(document.body, { childList: true, subtree: true })
    }
  }
})
