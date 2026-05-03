# The Paladin's Revelation

A point-and-click dark-fantasy adventure in the spirit of *Shadowgate* (1987). Sir Aric, sworn dragonslayer, rides for the last wyrm — until the wyrm turns out to be his father.

Pixel art generated via [PixelLab AI](https://pixellab.ai). Original score.

## Play

Open `index.html` in a browser, or visit the live build on GitHub Pages.

## Local dev

```bash
# any static server works
python -m http.server 8000
# → http://localhost:8000
```

## Regenerating art

```bash
npm install
PIXELLAB_API_KEY=sk_... npm run generate   # streams new PixelLab assets into ./assets
npm run upscale                             # nearest-neighbor 4x/7x to ./assets/*@hd.png
```

## Editor mode

In-game, press `` ` `` to toggle hotspot/FX/sprite calibration mode. Drag boxes, press `S` to dump JSON of the current scene to console + clipboard.
