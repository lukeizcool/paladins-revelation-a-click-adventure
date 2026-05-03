// Shared single-asset upscaler. Used by upscale.mjs (batch) and generate.mjs (per-download).
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

export const SCENE_KEYS = new Set([
  "chapel","courtyard","wood","hollow","lair","ending_dark","ending_light",
  "chapel_empty","hollow_empty"
]);
const HD_W = 1920, HD_H = 1080;
const SPRITE_SCALE = 7;
const SCENE_SCALE  = 4; // 256*4=1024 fits inside 1080 height

export async function upscaleOne(key, srcPath) {
  const dst  = path.join(path.dirname(srcPath), `${key}@hd.png`);
  const meta = await sharp(srcPath).metadata();
  const isScene = SCENE_KEYS.has(key);
  const scale   = isScene ? SCENE_SCALE : SPRITE_SCALE;
  const big = await sharp(srcPath)
    .resize({ width: meta.width * scale, height: meta.height * scale, kernel: sharp.kernel.nearest })
    .png()
    .toBuffer();
  if (isScene) {
    await sharp({ create: { width: HD_W, height: HD_H, channels: 4, background: { r:0,g:0,b:0,alpha:1 } } })
      .composite([{ input: big, gravity: "center" }])
      .png()
      .toFile(dst);
  } else {
    await fs.writeFile(dst, big);
  }
  return dst;
}
