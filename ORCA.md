# ORCA.md - Dev environment layout for this theme

How to set up the Orca panes/tabs used to develop `slidev-theme-esade`.
Generic Orca/WSL2 rules live in `~/.claude/ORCA.md`; this file is only the
project-specific setup.

## The layout

Two tabs in the `slidev-theme-esade` worktree:

| Tab | Pane title | Contents |
|-----|-----------|----------|
| 1 | *(agent session)* | Claude Code / your shell -- editing `styles/`, `layouts/` |
| 2 | `esade-theme-dev` | `mprocs` running the dev stack, always visible |

The point of tab 2 is that **slidev's log stays on screen**. Never launch the
dev server from a throwaway shell (see the orphaned-pty gotcha below).

## Creating the dev tab

```bash
orca terminal create \
  --title "esade-theme-dev" \
  --command "cd /home/oriol/esade/slidev-theme-esade/test && mprocs" \
  --focus
```

`mprocs` reads `test/mprocs.yaml`. `pnpm stack` is the same thing.

```
┏Processes━━━━━━━━━━━┓
┃•slidev         UP  ┃  autostart, port 3037
┃ build        DOWN  ┃  slidev build slides.md
┃ export       DOWN  ┃  slidev export -> slides.pdf
┃ shell        DOWN  ┃  scratch bash in test/
┗━━━━━━━━━━━━━━━━━━━━┛
```

Keys: `j`/`k` select - `s` start - `x` stop - `r` restart - `z` zoom log -
`Ctrl-a` toggle focus - `q` quit.

## Ports

**3037 is this project's port.** Other decks run in the same runtime, so never
assume a free default:

| Port | Owner |
|------|-------|
| 3037 | `slidev-theme-esade/test` (this repo) |
| 3031 | `esade/dbai_devops` (course deck) |
| 3030, 3032 | other Slidev projects |

Check an unknown port's owner before touching it:

```bash
pid=$(ss -ltnp | grep ':3037' | grep -oP 'pid=\K[0-9]+' | head -1)
readlink /proc/$pid/cwd
```

## Viewing the slides

Use the **WSL NAT IP**, not `localhost` -- Windows did not forward newly-bound
ports in this setup even with an IPv4 bind:

```bash
ip route get 1.1.1.1 | grep -oP 'src \K[0-9.]+'   # e.g. 172.22.136.219
orca goto --url http://172.22.136.219:3037/
```

`mprocs.yaml` already passes `--remote --bind 0.0.0.0`; a bare `--host` binds
IPv6 only and is invisible from Windows.

## Verifying changes headlessly

`orca screenshot` fails with *"tab not visible/focused"* unless the browser tab
is focused. `orca eval` is the reliable ground truth for CSS work:

```bash
orca eval --expression 'JSON.stringify({
  total: window.__slidev__.nav.total,
  color: getComputedStyle(document.querySelector(".poll-title")).color
})'
```

Write JS as an *expression* (no `return`), and note that hidden neighbouring
slides are in the DOM too -- filter by visible rect or by text when a selector
could match more than one slide.

## Gotchas

- **Orphaned pty**: a dev server started in a pane that is later closed keeps
  running with nowhere to log (`ps -o tty` shows a pts nobody is watching). It
  still holds port 3037. Kill it and restart under mprocs.
- **Pane title reverts**: `orca terminal rename` reports success but Orca
  re-derives the title from the shell prompt. Setting it while mprocs owns the
  pty sticks: `printf '\033]2;esade-theme-dev\007' > /proc/$(pgrep -f '^mprocs$')/fd/1`
- **Poll demos** need `pollSettings: anonymous: true` in the deck frontmatter,
  otherwise the addon shows a name-login gate instead of the voting UI.
- CSS/layout edits hot-reload; adding a Slidev **addon** requires restarting
  the `slidev` process (`r` in mprocs).
