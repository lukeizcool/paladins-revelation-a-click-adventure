# PixelLab asset pipeline — The Paladin's Revelation

## Asset count: **19 assets**

| Group       | Count | PixelLab call             | Notes                                                |
|-------------|-------|---------------------------|------------------------------------------------------|
| Scenes      | 7     | `create_object` (1-dir, side, 256px) | chapel, courtyard, wood, hollow, lair, ending_dark, ending_light |
| Item icons  | 4     | `create_object` (1-dir, 64px)        | sword, parchment, signet, scale                      |
| Characters  | 7     | `create_character` (4-dir standard, 8-dir pro for dragon) | sir_aric, mirren, ranger, ysolde, valen, crossbowman, dragon_cael |
| Crow sprite | 1     | `create_object` (1-dir, 32px)        | shared crow/raven                                    |

Estimated PixelLab credit cost: **~6 generations × 7 chars + ~30 (dragon pro) + 11 objects ≈ 80–100 credits.**

## Two ways to run the pipeline

### A. Local Node script (batch/headless)
```bash
export PIXELLAB_API_KEY=sk_...
node pipeline/generate.mjs            # everything missing
node pipeline/generate.mjs scenes     # one group
node pipeline/generate.mjs --keys=chapel,sword
node pipeline/generate.mjs --force    # regenerate
```
The script:
1. queues every asset against the PixelLab REST API in parallel,
2. polls every 8s,
3. downloads each PNG into `assets/<key>.png` the moment it completes,
4. rewrites `pipeline/status.json` and `assets/manifest.js` after every state change (resumable).

### B. Live MCP streaming (interactive, via Claude Code)
Tell me e.g. *"stream all scene assets"* and I'll call the local `pixellab` MCP directly:
- `mcp__pixellab__create_object` / `create_character` for each manifest entry,
- `mcp__pixellab__get_object` / `get_character` to poll,
- save each PNG into `assets/` and update `assets/manifest.js` as they land.

## Browser integration
- `index.html` loads `assets/manifest.js` first (defines `window.PIXELLAB_ASSETS`).
- `game.js` `renderScene` and inventory code check that list — if a key is present it renders `<img src="assets/{key}.png">` (with `image-rendering:pixelated` and `onerror` fallback to the original SVG). Until a PNG ships, the SVG art is used, so the game is always playable.

## Files
- `pipeline/manifest.json` — asset definitions + prompts
- `pipeline/generate.mjs` — streaming generator
- `pipeline/status.json` — per-asset state (resume across runs)
- `assets/` — output PNGs + browser manifest
