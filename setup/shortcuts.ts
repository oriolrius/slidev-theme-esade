import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'
import { useNav } from '@slidev/client'

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  // Filter out default PageUp/PageDown shortcuts so we can override them
  // Keep all other shortcuts including non-string keys (like Ref<boolean>)
  const filteredBase = base.filter(s =>
    typeof s.key !== 'string' || !['PageUp', 'PageDown'].includes(s.key)
  )

  // Get navigation state for computing slide positions
  const { currentSlideNo, total, openInEditor } = useNav()

  return [
    ...filteredBase,
    // Home key - jump to first slide
    {
      key: 'Home',
      fn: () => nav.goFirst(),
      autoRepeat: false,
    },
    // End key - jump to last slide
    {
      key: 'End',
      fn: () => nav.goLast(),
      autoRepeat: false,
    },
    // Page Up - jump 10 slides backward
    {
      key: 'PageUp',
      fn: () => {
        const target = Math.max(1, currentSlideNo.value - 10)
        nav.go(target)
      },
      autoRepeat: true,
    },
    // Page Down - jump 10 slides forward
    {
      key: 'PageDown',
      fn: () => {
        const target = Math.min(total.value, currentSlideNo.value + 10)
        nav.go(target)
      },
      autoRepeat: true,
    },
    // 'e' key - open current slide in external editor (VS Code)
    {
      key: 'e',
      fn: () => {
        openInEditor()
      },
      autoRepeat: false,
    },
  ]
})
