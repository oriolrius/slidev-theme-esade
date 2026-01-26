import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ app }) => {
  if (typeof window !== 'undefined') {
    // ================================
    // ZOOMABLE IMAGES
    // ================================
    const initZoomableImages = () => {
      // Create overlay element if it doesn't exist
      let overlay = document.querySelector('.zoom-overlay') as HTMLElement
      if (!overlay) {
        overlay = document.createElement('div')
        overlay.className = 'zoom-overlay'
        overlay.innerHTML = '<img src="" alt="Zoomed image" />'
        document.body.appendChild(overlay)

        // Close on overlay click
        overlay.addEventListener('click', () => {
          overlay.classList.remove('active')
        })

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && overlay.classList.contains('active')) {
            overlay.classList.remove('active')
          }
        })
      }

      const overlayImg = overlay.querySelector('img') as HTMLImageElement

      // Add click handlers to zoomable images
      document.querySelectorAll('img.zoomable').forEach((img) => {
        if ((img as HTMLElement).dataset.zoomInit) return
        ;(img as HTMLElement).dataset.zoomInit = 'true'

        img.addEventListener('click', (e) => {
          e.preventDefault()
          e.stopPropagation()
          overlayImg.src = (img as HTMLImageElement).src
          overlay.classList.add('active')
        })
      })
    }

    // ================================
    // LINE NUMBERS TOGGLE
    // ================================
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
      initZoomableImages()
    })

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        initLineNumbersToggle()
        initZoomableImages()
        observer.observe(document.body, { childList: true, subtree: true })
      })
    } else {
      initLineNumbersToggle()
      initZoomableImages()
      observer.observe(document.body, { childList: true, subtree: true })
    }
  }
})
