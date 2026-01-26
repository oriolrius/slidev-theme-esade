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
    // CODE BLOCK BUTTONS (Copy + Line Numbers)
    // ================================
    const initCodeBlockButtons = () => {
      // Find all code blocks that don't have buttons yet
      const codeBlocks = document.querySelectorAll('pre.shiki, pre.slidev-code')

      codeBlocks.forEach((pre) => {
        // Skip if already has buttons
        if (pre.querySelector('.code-buttons')) return

        // Create buttons container
        const buttonsContainer = document.createElement('div')
        buttonsContainer.className = 'code-buttons'

        // Create copy button
        const copyBtn = document.createElement('button')
        copyBtn.className = 'code-copy-btn'
        copyBtn.title = 'Copy code'
        copyBtn.setAttribute('aria-label', 'Copy code to clipboard')

        // Handle copy click
        copyBtn.addEventListener('click', async (e) => {
          e.preventDefault()
          e.stopPropagation()

          // Get code text (exclude line numbers if visible)
          const codeElement = pre.querySelector('code')
          let codeText = ''

          if (codeElement) {
            // Get text from each line, excluding the line number pseudo-element
            const lines = codeElement.querySelectorAll('.line')
            if (lines.length > 0) {
              codeText = Array.from(lines).map(line => line.textContent || '').join('\n')
            } else {
              codeText = codeElement.textContent || ''
            }
          } else {
            codeText = pre.textContent || ''
          }

          try {
            await navigator.clipboard.writeText(codeText)
            copyBtn.classList.add('copied')
            setTimeout(() => copyBtn.classList.remove('copied'), 2000)
          } catch (err) {
            console.error('Failed to copy code:', err)
          }
        })

        // Create line numbers toggle button
        const toggle = document.createElement('button')
        toggle.className = 'line-numbers-toggle'
        toggle.title = 'Toggle line numbers'
        toggle.setAttribute('aria-label', 'Toggle line numbers')

        // Handle toggle click
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

        // Add buttons to container (copy first, then line numbers)
        buttonsContainer.appendChild(copyBtn)
        buttonsContainer.appendChild(toggle)

        // Insert container into pre element
        pre.style.position = 'relative'
        pre.appendChild(buttonsContainer)
      })
    }

    // Run on initial load and after navigation
    const observer = new MutationObserver(() => {
      initCodeBlockButtons()
      initZoomableImages()
    })

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        initCodeBlockButtons()
        initZoomableImages()
        observer.observe(document.body, { childList: true, subtree: true })
      })
    } else {
      initCodeBlockButtons()
      initZoomableImages()
      observer.observe(document.body, { childList: true, subtree: true })
    }
  }
})
