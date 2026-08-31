# setup/

Slidev setup hooks loaded automatically by the theme.

## Files

- `main.ts` -- App setup: zoomable image overlay + code block buttons (copy, line numbers toggle). Uses MutationObserver on `document.body` to handle Slidev's dynamic rendering.
- `shortcuts.ts` -- Keyboard shortcuts: Home/End, PageUp/PageDown (single slide for clickers), Shift+PageUp/Down (10 slides), `e` to open in VS Code.

## Non-obvious

- `main.ts` skips already-initialized elements via `data-zoom-init` and `.code-buttons` presence checks
- PageUp/PageDown are overridden from Slidev defaults to go 1 slide (not 1 click-step) for hardware presentation clickers
