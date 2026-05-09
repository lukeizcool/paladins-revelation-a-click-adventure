// ===== Item icons (SVG) =====
const ITEM_ICONS = {
  sword: `<svg viewBox="0 0 40 40" shape-rendering="crispEdges"><rect x="19" y="4" width="2" height="24" fill="#d4d0c4"/><polygon points="19,4 21,4 20,2" fill="#e8e0c8"/><rect x="13" y="26" width="14" height="2.5" fill="#8a6020"/><rect x="19" y="28" width="2" height="6" fill="#3a2810"/><circle cx="20" cy="36" r="2" fill="#c9a24a"/></svg>`,
  parchment: `<svg viewBox="0 0 40 40" shape-rendering="crispEdges"><rect x="8" y="8" width="24" height="26" fill="#d4c49a"/><rect x="8" y="8" width="24" height="26" fill="none" stroke="#8a6a38" stroke-width="0.5"/><line x1="11" y1="14" x2="29" y2="14" stroke="#5a3818" stroke-width="0.5"/><line x1="11" y1="18" x2="29" y2="18" stroke="#5a3818" stroke-width="0.5"/><line x1="11" y1="22" x2="26" y2="22" stroke="#5a3818" stroke-width="0.5"/><line x1="11" y1="26" x2="29" y2="26" stroke="#5a3818" stroke-width="0.5"/><circle cx="20" cy="32" r="2.5" fill="#8a1818"/></svg>`,
  signet: `<svg viewBox="0 0 40 40" shape-rendering="crispEdges"><circle cx="20" cy="20" r="10" fill="#c9a24a"/><circle cx="20" cy="20" r="10" fill="none" stroke="#8a6020" stroke-width="1"/><circle cx="20" cy="20" r="6" fill="#8a1818"/><text x="20" y="24" text-anchor="middle" font-family="serif" font-size="8" fill="#c9a24a" font-weight="bold">V</text></svg>`,
  scale: `<svg viewBox="0 0 40 40" shape-rendering="crispEdges"><ellipse cx="20" cy="22" rx="12" ry="9" fill="#8a2818"/><ellipse cx="20" cy="21" rx="10" ry="7" fill="#c94828"/><ellipse cx="18" cy="19" rx="4" ry="2" fill="#ffaa40"/></svg>`
};

const ITEM_NAMES = {
  sword: "Dawncleaver",
  parchment: "Letter",
  signet: "Signet",
  scale: "Scale"
};

// ===== Hotspots on illustrations (x%, y%, w%, h%, objectKey) =====
const HOTSPOTS = {
  chapel: [
    { x: 40,   y: 45, w: 22,   h: 40, obj: "altar" },
    { x: 41.5, y: 51, w: 15.5, h: 10, obj: "sword" },
    { x: 40,   y:  5, w: 20,   h: 40, obj: "window" },
    { x: 26.5, y: 58, w: 12,   h: 25, obj: "tome" },
    { x: 62,   y: 27, w: 13.5, h: 36, obj: "door" }
  ],
  courtyard: [
    { x: 30.5, y: 57,   w: 20, h: 35, obj: "well" },
    { x: 53,   y: 66,   w: 10, h: 25, obj: "stablehand" },
    { x: 35.5, y: 35.5, w: 10, h: 20, obj: "post" },
    { x: 49,   y: 19.5, w: 21, h: 37, obj: "portcullis" },
    { x: 55.5, y:  8.5, w:  7,   h:  8,   obj: "crow" },
    { x: 23.5, y: 34,   w: 11.5, h: 31.5, obj: "back" }
  ],
  wood: [
    { x: 31.5, y: 54,   w: 20,   h: 20,   obj: "man" },
    { x: 50.5, y:  5,   w: 25,   h: 30,   obj: "mountain" },
    { x: 45,   y: 45.5, w: 18.5, h: 52.5, obj: "path" },
    { x: 65,   y: 40,   w: 10,   h: 12,   obj: "raven" },
    { x: 59,   y: 56.5, w: 16.5, h: 13.5, obj: "hollow" },
    { x: 30.5, y: 79,   w: 14,   h: 18,   obj: "back" }
  ],
  hollow: [
    { x: 34,   y: 25.5, w: 16,  h: 40,  obj: "woman" },
    { x: 59,   y: 47,   w: 14,  h: 25,  obj: "fire" },
    { x: 43.5, y: 56.5, w:  5.5,h:  9.5,obj: "cup" },
    { x: 49.5, y: 58.5, w:  5,  h:  6,  obj: "scale" },
    { x: 54,   y: 51,   w:  4,  h:  9.5,obj: "mirror" },
    { x: 50.5, y: 12,   w: 18,  h: 30,  obj: "back" }
  ],
  lair: [
    { x: 42.5, y: 29.5, w: 30, h: 25, obj: "dragon" },
    { x: 48.5, y: 47,   w:  6, h:  8, obj: "scar" },
    { x: 71,   y:  7.5, w:  5, h: 14, obj: "valen" },
    { x: 18,   y: 23,   w: 26, h: 71, obj: "crossbowmen" },
    { x: 68.5, y: 59,   w: 11, h: 20, obj: "sword_here" }
  ],
  ending_dark: [],
  ending_light: []
};

// ===== Game state =====
const state = {
  scene: "chapel",
  inventory: [],
  verb: null,
  verbObject: null, // when USE needs a target
  usedItems: new Set(),
  flags: {},
  ended: false,
  editMode: false
};

// ===== Portraits + ambient FX =====
const PORTRAIT_MAP = {
  stablehand: "mirren", man: "ranger", woman: "ysolde",
  valen: "valen", dragon: "dragon_cael", crossbowmen: "crossbowman"
};
const PORTRAIT_NAMES = {
  mirren: "Old Mirren", ranger: "The Ranger", ysolde: "Ysolde",
  valen: "Chancellor Valen", dragon_cael: "The Wyrm", crossbowman: "Royal Guard",
  sir_aric: "Sir Aric"
};
// Per-scene sprite overlays (PixelLab object PNGs composited over scene art)
const SCENE_SPRITES = {
  courtyard: [{ key: "crow", x:56.5, y:8, w:6, h:9, anim: "bob" }]
};
// per-scene CSS overlay layers — fullbleed effects use full:true, others use {x,y,w,h} percent
const SCENE_FX = {
  chapel:       [{ cls: "fx-candle",       x:55.5, y:43, w:4,  h:7  }],
  courtyard:    [{ cls: "fx-moon",         x:53,   y: 3, w:11, h:18 },
                 { cls: "fx-blink",        x:21,   y:69, w: 3, h: 3 }],
  wood:         [{ cls: "fx-firelight",    x:64.5, y:58,   w: 6.5,h:12 },
                 { cls: "fx-smoke",        x:55,   y:11.5, w:14,  h: 8 }],
  hollow:       [{ cls: "fx-whiteflame",   x:61,   y:53.5,w:10,h:14 }],
  lair:         [{ cls: "fx-heat",         full:true },
                 { cls: "fx-smoke",        x:50.5, y: 6.5,w:12,h:10 }],
  ending_dark:  [{ cls: "fx-vignette-red", full:true }],
  ending_light: [{ cls: "fx-sunrays",      full:true }]
};

function showPortrait(charKey, label) {
  const have = (window.PIXELLAB_ASSETS || []).includes(charKey);
  if (!have) return; // silently skip until the sprite exists
  const p = document.getElementById("portrait");
  p.innerHTML = `<img src="assets/${charKey}.png" alt="" class="portrait-img"><div class="portrait-name">${PORTRAIT_NAMES[charKey] || label.toUpperCase()}</div>`;
  p.classList.remove("gone"); p.classList.add("speaking");
  clearTimeout(showPortrait._t);
  showPortrait._t = setTimeout(() => p.classList.add("gone"), 6000);
}

function applySceneFx(sceneKey) {
  const layer = document.getElementById("scene-fx");
  layer.innerHTML = "";
  (SCENE_FX[sceneKey] || []).forEach((fx, i) => {
    const d = document.createElement("div");
    d.className = "fx " + fx.cls;
    d.style.cssText = "position:absolute;" + (fx.full
      ? "inset:0;"
      : `left:${fx.x}%;top:${fx.y}%;width:${fx.w}%;height:${fx.h}%;`);
    if (!fx.full) d.dataset.editTarget = `SCENE_FX.${sceneKey}.${i}`;
    layer.appendChild(d);
  });
  // CSS mask fallback for chapel — only used if chapel_empty.png hasn't shipped yet
  if (sceneKey === "chapel" && state.flags.tookSword && !(window.PIXELLAB_ASSETS || []).includes("chapel_empty")) {
    const m = document.createElement("div");
    m.style.cssText = "position:absolute;left:36%;top:53%;width:23%;height:5%;background:#c8b58a;";
    layer.appendChild(m);
  }
  // Sprite overlays (PixelLab character/object PNGs composited over the scene)
  (SCENE_SPRITES[sceneKey] || []).forEach((sp, i) => {
    if (!(window.PIXELLAB_ASSETS || []).includes(sp.key)) return;
    const img = document.createElement("img");
    img.src = `assets/${sp.key}.png`;
    img.className = "scene-sprite" + (sp.anim ? " anim-" + sp.anim : "");
    img.style.cssText = `position:absolute;image-rendering:pixelated;pointer-events:none;left:${sp.x}%;top:${sp.y}%;width:${sp.w}%;height:${sp.h}%;`;
    img.dataset.editTarget = `SCENE_SPRITES.${sceneKey}.${i}`;
    layer.appendChild(img);
  });
  // Floating motes / fireflies — spawn whenever the scene has firelit FX
  const firelit = (SCENE_FX[sceneKey] || []).some(fx => /fx-(candle|firelight|whiteflame)/.test(fx.cls));
  if (firelit) {
    for (let i = 0; i < 6; i++) {
      const m = document.createElement("div");
      m.className = "fx-mote";
      const left = 10 + Math.random() * 80;
      const bottom = 10 + Math.random() * 50;
      const drift = (Math.random() - 0.5) * 24;
      const dur = 7 + Math.random() * 5;
      const delay = -Math.random() * dur;
      m.style.cssText = `left:${left}%;bottom:${bottom}%;--mx:${drift}px;animation-duration:${dur}s;animation-delay:${delay}s;`;
      layer.appendChild(m);
    }
  }
  if (state.editMode) refreshEditor();
}

// ===== DOM =====
const $verbs = document.getElementById("verbs");
const $sceneArt = document.getElementById("scene-art");
const $sceneFrame = document.getElementById("scene-frame");
const $sceneTitle = document.getElementById("scene-title");
const $invGrid = document.getElementById("inv-grid");
const $text = document.getElementById("text-frame");
const $statusLeft = document.getElementById("status-left");
const $statusRight = document.getElementById("status-right");
const $cursorHint = document.getElementById("cursor-hint");
const $titleOverlay = document.getElementById("title-overlay");

// ===== Narrate helpers =====
const _typeQueue = [];
let _typing = false;
let _skipCurrent = false;

// Subtle typewriter click: short noise burst through a bandpass filter, routed
// through the master music gain so the volume slider applies to it too.
// (Typewriter SFX removed — typewriter is silent.)

// Reveal HTML char-by-char. Tag tokens are emitted whole so <b>...</b> isn't half-rendered.
function typewrite(p, html, speed) {
  return new Promise((resolve) => {
    const tokens = [];
    for (let i = 0; i < html.length;) {
      if (html[i] === "<") {
        const j = html.indexOf(">", i);
        tokens.push(html.slice(i, j + 1));
        i = j + 1;
      } else { tokens.push(html[i]); i++; }
    }
    let out = "";
    let k = 0;
    function step() {
      if (_skipCurrent) { p.innerHTML = html; resolve(); return; }
      if (k >= tokens.length) { resolve(); return; }
      // emit one visible char (skipping through any tag tokens that come with it)
      while (k < tokens.length && tokens[k].startsWith("<")) { out += tokens[k++]; }
      if (k < tokens.length) {
        const ch = tokens[k++];
        out += ch;
        p.innerHTML = out;
        // Keep the typing edge in view so the latest character is always visible.
        $text.scrollTop = $text.scrollHeight;
      }
      if (k < tokens.length) setTimeout(step, speed);
      else resolve();
    }
    step();
  });
}

function drainTypeQueue() {
  if (_typing) return;
  const job = _typeQueue.shift();
  if (!job) return;
  _typing = true;
  _skipCurrent = false;
  // Commands and system feedback render instantly; story prose types in.
  const instant = /\b(command|system)\b/.test(job.cls || "");
  const speed = instant ? 0 : 14;
  const run = instant
    ? Promise.resolve().then(() => {
        job.p.innerHTML = job.html;
        // Pin to bottom AFTER the content has been laid out so the scrollHeight
        // reflects the now-populated paragraph.
        $text.scrollTop = $text.scrollHeight;
      })
    : typewrite(job.p, job.html, speed);
  run.then(() => { _typing = false; drainTypeQueue(); });
}

function narrate(text, cls = "") {
  const p = document.createElement("p");
  p.className = "narrate" + (cls ? " " + cls : "");
  $text.appendChild(p);
  // Always pin to the bottom on append so the freshest text is in view.
  $text.scrollTop = $text.scrollHeight;
  // Auto-embolden ALL-CAPS WORDS (Shadowgate convention)
  const html = text.replace(/\b([A-Z][A-Z'’]{2,}(?:\s+[A-Z][A-Z'’]{2,})*)\b/g, '<b>$1</b>');
  _typeQueue.push({ p, html, cls });
  drainTypeQueue();
}

// Tap inside the story frame to skip the current typewriter line.
document.getElementById("text-frame").addEventListener("click", () => {
  if (_typing) _skipCurrent = true;
});

// Custom always-visible scroll thumb for #text-frame. iOS Safari refuses to
// keep native scrollbars on screen, so we render our own gold bar that tracks
// scroll position whenever the story can be scrolled.
const $scrollThumb = document.getElementById("text-scroll-thumb");
function updateScrollThumb() {
  const r = $text.getBoundingClientRect();
  const ratio = $text.clientHeight / Math.max($text.scrollHeight, 1);
  if (ratio >= 0.999) { $scrollThumb.classList.add("hidden"); return; }
  $scrollThumb.classList.remove("hidden");
  const pad = 6;
  const trackH = Math.max(0, r.height - pad * 2);
  const thumbH = Math.max(20, trackH * ratio);
  const maxScroll = $text.scrollHeight - $text.clientHeight;
  const offset = maxScroll > 0 ? ($text.scrollTop / maxScroll) * (trackH - thumbH) : 0;
  $scrollThumb.style.left = (r.right - 8) + "px";
  $scrollThumb.style.top = (r.top + pad + offset) + "px";
  $scrollThumb.style.height = thumbH + "px";
}
$text.addEventListener("scroll", updateScrollThumb, { passive: true });
window.addEventListener("resize", updateScrollThumb, { passive: true });
window.addEventListener("scroll", updateScrollThumb, { passive: true });
// Re-measure when narration appends new paragraphs (or typewriter reveals chars).
new MutationObserver(updateScrollThumb).observe($text, { childList: true, subtree: true, characterData: true });
requestAnimationFrame(updateScrollThumb);

// Idle hint — after ~18s without input, hotspots gently pulse so the player
// notices what's interactable. Any tap clears it instantly.
const IDLE_MS = 18000;
let _idleTimer = null;
function resetIdle() {
  $sceneFrame.classList.remove("idle-hint");
  clearTimeout(_idleTimer);
  _idleTimer = setTimeout(() => $sceneFrame.classList.add("idle-hint"), IDLE_MS);
}
["pointerdown", "keydown"].forEach(ev => window.addEventListener(ev, resetIdle, { passive: true }));
resetIdle();

function cmdLine(verb, obj) {
  narrate(`> ${verb}${obj ? " " + obj.toUpperCase() : ""}`, "command");
}

// ===== Verb bar =====
function renderVerbs() {
  $verbs.innerHTML = "";
  window.VERBS.forEach(v => {
    const b = document.createElement("div");
    b.className = "verb" + (state.verb === v ? " active" : "");
    b.textContent = v;
    b.style.touchAction = "manipulation";
    b.addEventListener("pointerup", (e) => { e.preventDefault(); selectVerb(v); });
    b.addEventListener("click", (e) => e.preventDefault());
    $verbs.appendChild(b);
  });
}

function selectVerb(v) {
  state.verb = state.verb === v ? null : v;
  state.verbObject = null;
  // SELF is immediate
  if (state.verb === "SELF") {
    handleSelf();
    state.verb = null;
  }
  renderVerbs();
  updateStatus();
}

function updateStatus() {
  $sceneFrame.classList.toggle("verb-active", !!state.verb);
  if (state.ended) {
    $statusRight.textContent = "The tale is ended. Refresh to play anew.";
    $statusRight.className = "right";
    return;
  }
  if (state.verb) {
    $statusRight.textContent = `${state.verb} what?`;
    $statusRight.className = "right prompt";
  } else {
    $statusRight.textContent = "Choose a verb, then an object";
    $statusRight.className = "right";
  }
}

// ===== Scene rendering =====
function renderScene() {
  hideHint(); // hotspot mouseleave never fires if the element is removed mid-hover
  // A scene change always cancels any armed verb so marching ants don't persist.
  state.verb = null;
  state.verbObject = null;
  $sceneFrame.classList.remove("verb-active");
  const s = window.SCENES[state.scene];
  $sceneTitle.textContent = s.title;
  $statusLeft.textContent = s.title;
  // Variant selection — swap in *_empty.png when the corresponding scene has been "looted"
  let artKey = s.art;
  if (s.art === "chapel" && state.flags.tookSword && (window.PIXELLAB_ASSETS || []).includes("chapel_empty")) artKey = "chapel_empty";
  if (s.art === "hollow" && state.flags.tookScale && (window.PIXELLAB_ASSETS || []).includes("hollow_empty")) artKey = "hollow_empty";
  const have = (window.PIXELLAB_ASSETS || []).includes(artKey);
  const hd   = (window.PIXELLAB_HD || []).includes(artKey);
  const src  = hd ? `assets/${artKey}@hd.png` : `assets/${artKey}.png`;
  $sceneArt.innerHTML = "";
  if (have) {
    const img = document.createElement("img");
    img.className = "scene-png";
    img.src = src;
    img.alt = "";
    img.style.cssText = "width:100%;height:100%;object-fit:cover;image-rendering:pixelated;display:block;";
    img.onerror = () => { $sceneArt.innerHTML = window.ART[s.art](); applySceneFx(s.art); };
    $sceneArt.appendChild(img);
  } else {
    $sceneArt.innerHTML = window.ART[s.art]();
  }
  applySceneFx(s.art);
  // hotspots
  (HOTSPOTS[s.art] || []).forEach((h, i) => {
    const el = document.createElement("div");
    el.className = "hotspot";
    el.style.left = h.x + "%";
    el.style.top = h.y + "%";
    el.style.width = h.w + "%";
    el.style.height = h.h + "%";
    el.dataset.obj = h.obj;
    el.dataset.editTarget = `HOTSPOTS.${s.art}.${i}`;
    el.onclick = (e) => { e.stopPropagation(); handleObject(h.obj); };
    el.onmouseenter = () => showHint(h.obj);
    el.onmouseleave = hideHint;
    el.onmousemove = moveHint;
    const lbl = document.createElement("div");
    lbl.className = "hotspot-label";
    lbl.textContent = h.obj.replace(/_.*/, "");
    el.appendChild(lbl);
    $sceneArt.appendChild(el);
  });
  if (state.editMode) refreshEditor();
}

function showHint(name) {
  $cursorHint.textContent = name.replace(/_.*/, "");
  $cursorHint.style.display = "block";
}
function hideHint() { $cursorHint.style.display = "none"; }
function moveHint(e) {
  $cursorHint.style.left = e.clientX + "px";
  $cursorHint.style.top = e.clientY + "px";
}

// ===== Inventory =====
function renderInventory() {
  $invGrid.innerHTML = "";
  const slots = 4;
  for (let i = 0; i < slots; i++) {
    const item = state.inventory[i];
    const slot = document.createElement("div");
    if (!item) {
      slot.className = "inv-slot empty";
      slot.style.touchAction = "manipulation";
      slot.onclick = () => {};
    } else {
      // "spent" === player has absorbed all the info this item carries:
      // either LOOKed at it once, or opened the letter.
      const spent = (state.flags.examined && state.flags.examined[item])
        || (item === "parchment" && state.flags.readLetter);
      slot.className = "inv-slot"
        + (state.verbObject === item ? " active" : "")
        + (spent ? " spent" : "");
      const havePng = (window.PIXELLAB_ASSETS || []).includes(item);
      slot.innerHTML = `<div class="icon"></div><div class="name">${ITEM_NAMES[item] || item}</div>`;
      const iconBox = slot.querySelector(".icon");
      if (havePng) {
        const img = document.createElement("img");
        img.src = `assets/${item}.png`;
        img.alt = "";
        img.style.cssText = "width:100%;height:100%;object-fit:contain;image-rendering:pixelated;";
        img.onerror = () => { iconBox.innerHTML = ITEM_ICONS[item] || ""; };
        iconBox.appendChild(img);
      } else {
        iconBox.innerHTML = ITEM_ICONS[item] || "";
      }
      slot.querySelector(".icon").classList.add("fx-shimmer");
      slot.onclick = () => handleItemClick(item);
      slot.onmouseenter = () => showHint(ITEM_NAMES[item] || item);
      slot.onmouseleave = hideHint;
      slot.onmousemove = moveHint;
    }
    $invGrid.appendChild(slot);
  }
}

function addItem(id) {
  if (!state.inventory.includes(id)) {
    state.inventory.push(id);
    renderInventory();
  }
}

// ===== Command resolution =====
function handleObject(objKey) {
  if (state.ended) return;
  if (state.editMode) return;
  const scene = window.SCENES[state.scene];
  const obj = scene.objects && scene.objects[objKey];
  if (!state.verb) {
    narrate("Choose a verb first — LOOK, TAKE, USE, SPEAK, and so forth.", "system");
    return;
  }
  const pretty = objKey.replace(/_.*/, "");
  cmdLine(state.verb, pretty);

  switch (state.verb) {
    case "LOOK":
      if (obj && obj.look) narrate(obj.look);
      else narrate("Thou seest nothing of import there.", "system");
      break;
    case "TAKE":
      if (state.scene === "hollow" && objKey === "cup") {
        doDeath("Thou takest the cup, and thirst overrides reason. The wine is sweet, then heavy as iron. Ysolde hath warned thee — DRINK and forget. Thou hast drunk. Thy quest, thy father, thy name — all unraveled in a single swallow.");
        return;
      }
      if (state.scene === "hollow" && objKey === "mirror") {
        doDeath("Thou liftest the mirror from its stone. Ysolde's warning was no riddle. The visions thou sawest do not depart — they multiply. Every face becomes a dragon's face, every dawn a killing dawn. Thou wanderest the Ashen Wood for years, talking to glass, until at last thy own reflection raises a sword and strikes. The mirror falls. Thou fallest beside it.");
        return;
      }
      if (obj && obj.take) {
        addItem(objKey);
        narrate(`Thou takest up the ${pretty.toUpperCase()}.`);
        if (state.scene === "chapel" && objKey === "sword") {
          state.flags.tookSword = true;
          renderScene();
        }
        if (state.scene === "hollow" && objKey === "scale") {
          state.flags.tookScale = true;
          renderScene();
        }
      } else {
        narrate("It resisteth thy grasp, or is not a thing to be borne.", "system");
      }
      break;
    case "OPEN":
      if (objKey === "door" || objKey === "portcullis") {
        tryMove(objKey);
      } else if (objKey === "tome") {
        narrate(scene.objects.tome.look);
      } else {
        narrate("It will not open.", "system");
      }
      break;
    case "MOVE":
      if (state.scene === "courtyard" && objKey === "well") {
        doDeath("Thou leanest over the well's mouth to peer below. The rotten windlass groans — the frayed rope snaps — and thou tumblest into the black. The fall is long. The water at the bottom is shallow, and the stones beneath are sharp. Thy quest endeth in cold dark.");
        return;
      }
      if (state.scene === "wood" && objKey === "path") {
        doDeath("Thou steppest off the fork and into the trees, thinking to cut a swifter path. The Ashen Wood is older than thy order; it does not love trespassers. The trail loops, then forks, then fails. Hours become days. Thy water gone, thy compass spinning, thou liest down beneath a black branch — and the wood closes quietly above thee.");
        return;
      }
      if (scene.exits && scene.exits[objKey]) {
        tryMove(objKey);
      } else {
        narrate("It will not be moved.", "system");
      }
      break;
    case "HIT":
      handleHit(objKey);
      break;
    case "SPEAK":
      if (scene.speak && scene.speak[objKey]) {
        narrate(scene.speak[objKey]);
        const extra = scene.speak[objKey + "_items"];
        if (extra) extra.forEach(addItem);
        const portraitChar = PORTRAIT_MAP[objKey];
        if (portraitChar) showPortrait(portraitChar, objKey);
      } else {
        narrate("It returneth thee only silence.", "system");
      }
      break;
    case "USE":
      if (!state.verbObject) {
        if (state.scene === "hollow" && objKey === "cup") {
          doDeath("Thou liftest the cup and drinkest. The wine is sweet, then heavy as iron. Ysolde hath warned thee — DRINK and forget. Thou hast drunk. Thy quest, thy father, thy name — all unraveled in a single swallow.");
          return;
        }
        // if no inventory item chosen, treat scene objects with 'use' actions (hollow: mirror, fire)
        if (scene.use && scene.use[objKey]) {
          narrate(scene.use[objKey]);
          if (objKey === "mirror") state.flags.sawMirror = true;
          if (objKey === "scale") { addItem("scale"); state.flags.tookScale = true; }
          if (objKey === "cup") { doDeath("Thou drinkest. A sweet numbness taketh thee. When thou wakest, thou rememberest nothing — not thy quest, not thy father, not thine own name. THOU ART LOST."); return; }
        } else {
          narrate("Choose an item from thy burden first, then the thing thou wouldst use it upon.", "system");
        }
      } else {
        handleUseItemOn(state.verbObject, objKey);
        state.verbObject = null;
        renderInventory();
      }
      break;
  }
  state.verb = null;
  renderVerbs();
  updateStatus();
}

function handleItemClick(item) {
  if (state.ended) return;
  if (state.verb === "LOOK") {
    cmdLine("LOOK", ITEM_NAMES[item] || item);
    narrate(describeItem(item));
    // Mark this item as examined — visually we mute its shimmer/glow so the
    // player knows they've already wrung the info out of it.
    state.flags.examined = state.flags.examined || {};
    state.flags.examined[item] = true;
    state.verb = null;
    renderInventory();
    renderVerbs(); updateStatus();
    return;
  }
  if (state.verb === "OPEN" && item === "parchment") {
    cmdLine("OPEN", "PARCHMENT");
    if (!state.flags.readLetter) {
      state.flags.readLetter = true;
      narrate("Thou breakest thy father's seal at last. The wax cracks like winter ice. The hand within is older and more tremulous than thou rememberest, yet unmistakably thine own father's —");
      narrate("'Aric — if thou readest this, I have been called back to the mountain. I am not myself. I fear I will not return'");
      narrate("'The ORDER OF DAWN is not what they told thee. Thy brothers obey CHANCELLOR VALEN, not the King. Trust no tabard. Trust no command issued in his name. — Your Father, Edmund.'");
      narrate("Thy hands shake. The letter sits heavy as a stone in thy thought.", "system");
      renderInventory(); // refresh slot styling for the now-opened letter
    } else {
      narrate("Thou unfoldest the letter again. Thy father's last words — and his warning against the ORDER — sit heavy still.");
    }
    state.verb = null;
    renderVerbs(); updateStatus();
    return;
  }
  if (state.verb === "USE") {
    state.verbObject = state.verbObject === item ? null : item;
    renderInventory();
    if (state.verbObject) {
      $statusRight.textContent = `USE ${ITEM_NAMES[item].toUpperCase()} on what?`;
      $statusRight.className = "right prompt";
    }
    return;
  }
  // Default: quick look
  narrate(describeItem(item));
}

function describeItem(item) {
  switch (item) {
    case "sword": return "DAWNCLEAVER — thy father's blade. The dragon-and-sun sigil upon its pommel hath always puzzled thee.";
    case "parchment": return state.flags.readLetter
      ? "Thy father's letter, broken open. The seal lies shattered. His warning against the ORDER OF DAWN sitteth heavy in thy thought."
      : "A folded letter, sealed in thy father's own wax. Thou hast not yet broken it.";
    case "signet": return "The Chancellor's SIGNET, crusted with the ranger's blood. Proof of orders that should not exist.";
    case "scale": return "A warm scale, red as banked embers. It thrums faintly against thy palm — as though it knew thy heartbeat.";
  }
  return "";
}

// ===== USE ITEM ON TARGET =====
function handleUseItemOn(item, target) {
  const scene = window.SCENES[state.scene];
  // Scene-specific USE-on-target reactions, from scene.use keyed by item
  if (scene.use && scene.use[item]) {
    narrate(scene.use[item]);
    if (item === "parchment") state.flags.readLetter = true;
    if (item === "signet") state.flags.showedSignet = true;
    return;
  }
  // Lair: USE sword
  if (state.scene === "lair") {
    if (item === "sword" && target === "dragon") {
      doDeath("Thou drive Dawncleaver at the dragon's flank. The blade rings against crimson scale — and SHATTERS. The wyrm's eye opens, slow and pitying. A single breath, hot as a forge's heart, and thou art ash upon the gold. The tome warned thee: only the moon-mark upon the brow may be pierced. Thy father's body is unbroken. Thou art the one who burned.");
      return;
    }
    if (item === "sword" && target === "scar") {
      doEndingStrike();
      return;
    }
    if (item === "sword" && (target === "valen" || target === "crossbowmen")) {
      doEndingTruth();
      return;
    }
    if (item === "scale" && target === "dragon") {
      narrate("Thou pressest the scale against the dragon's vast side. A tremor runs through the beast — then a single tear, hot as molten gold, rolls down its cheek. It knoweth thee. It hath always known thee.");
      state.flags.touchedScale = true;
      return;
    }
    if (item === "parchment" && target === "dragon") {
      narrate("Thou holdest thy father's letter before the dragon's eye. The great pupil widens. A rumble — half sob, half laughter. 'Thou hast read it at last, my son.'");
      state.flags.sharedLetter = true;
      return;
    }
    if (item === "signet" && (target === "valen" || target === "crossbowmen")) {
      narrate("Thou holdest aloft the blood-crusted signet. 'BEHOLD,' thou criest, 'the hand that signed the lies!' The crossbowmen waver. One lowers his weapon. Another. The Chancellor's smile curdles.");
      state.flags.exposedValen = true;
      return;
    }
  }
  narrate("Nothing cometh of it.", "system");
}

// ===== MOVEMENT =====
function tryMove(exitKey) {
  const scene = window.SCENES[state.scene];
  const dest = scene.exits[exitKey];
  if (!dest) { narrate("Thou canst not go that way.", "system"); return; }
  // requirements (skip for wood→lair: handled by the OR-check below)
  const skipRequired = state.scene === "wood" && dest === "lair";
  if (!skipRequired && scene.requiredItems && scene.requiredItems[dest]) {
    const req = scene.requiredItems[dest];
    if (!state.inventory.includes(req)) {
      narrate(scene.requiredMessage || "Thou art not yet ready.", "system");
      return;
    }
  }
  // Wood → lair requires ALL FOUR relics: sword, letter, scale, signet.
  if (state.scene === "wood" && dest === "lair") {
    const required = ["sword", "parchment", "scale", "signet"];
    const missing = required.filter(it => !state.inventory.includes(it));
    if (missing.length > 0) {
      const names = { sword: "thy father's BLADE", parchment: "his sealed LETTER", scale: "the warm SCALE", signet: "the bloodied SIGNET" };
      const lacking = missing.map(k => names[k] || k).join(", ");
      narrate(`A shadow crosseth thy heart. Thou art not yet whole — thou lackest ${lacking}. Return when all is in thy keeping.`, "system");
      return;
    }
  }
  state.scene = dest;
  if (dest === "hollow") state.flags.visitedHollow = true;
  renderScene();
  narrate(window.SCENES[dest].description);
  if (window.SCENES[dest].finalScene) {
    setTimeout(() => {
      narrate("Valen's voice slides down from the ledge: 'STRIKE, paladin. Or I shall have thee struck.'", "system");
    }, 600);
  }
}

// ===== HIT =====
function handleHit(objKey) {
  if (state.scene === "wood" && objKey === "raven") {
    doDeath("Thou strikest at the raven. With a single black-feathered shriek it bursts skyward, faster than any bird hath right to be. The wood falls silent. Within the hour, hooded riders in the livery of thine own ORDER ride down upon thee — sworn brethren who knew thee as a boy — and they do their duty. The last face thou seest is one thou trusted.");
    return;
  }
  if (state.scene === "lair") {
    if (objKey === "dragon") {
      doDeath("Thou strike at the dragon's flank with the full weight of Dawncleaver. The blade rings against crimson scale — and SHATTERS. The wyrm's eye opens, slow and pitying. A single breath, hot as a forge's heart, and thou art ash upon the gold. The tome warned thee: only the moon-mark upon the brow may be pierced. Thy father's body is unbroken. Thou art the one who burned.");
      return;
    }
    if (objKey === "scar") {
      doEndingStrike();
      return;
    }
    if (objKey === "valen" || objKey === "crossbowmen") {
      doEndingTruth();
      return;
    }
  }
  narrate("Thou art a paladin, not a brawler. Save thy blows for worthy foes.", "system");
}

// ===== ENDINGS =====
function doDeath(msg) {
  try {
    state.ended = true;
    narrate(msg);
    narrate("THOU ART LOST", "death");
    updateStatus();
    showGameOver(msg);
  } catch (e) { console.error("doDeath failed:", e); narrate("[error: " + e.message + "]", "system"); }
}

function showGameOver(msg) {
  let ov = document.getElementById("gameover-overlay");
  if (!ov) {
    ov = document.createElement("div");
    ov.id = "gameover-overlay";
    ov.innerHTML = `<div id="gameover-text"><div class="go-title">GAME OVER</div><div class="go-msg"></div><a class="donate-btn" href="https://donate.stripe.com/14AfZi2Dxcrs0wT8La0VO02" target="_blank" rel="noopener noreferrer">SUPPORT THE BARD</a><div class="go-hint">(refresh to play anew)</div></div>`;
    document.body.appendChild(ov);
  }
  ov.querySelector(".go-msg").textContent = msg;
  requestAnimationFrame(() => ov.classList.add("shown"));
}

function doEndingStrike() {
  try {
    state.scene = "ending_strike";
    state.ended = true;
    $sceneFrame.classList.add("flash-red");
    renderScene();
    narrate(window.SCENES.ending_strike.description);
    narrate("THOU ART DEAD", "death");
    narrate("— Thou strucketh without seeing. The Accord of Ash is broken, and the Chancellor taketh the throne. Perhaps, upon another telling, thou shalt look before thou leapest.", "system");
    updateStatus();
    showEndingCoda();
  } catch (e) { console.error("doEndingStrike failed:", e); narrate("[error: " + e.message + "]", "system"); }
}

function doEndingTruth() {
  try {
    state.scene = "ending_truth";
    state.ended = true;
    $sceneFrame.classList.add("flash-gold");
    renderScene();
    narrate(window.SCENES.ending_truth.description);
    narrate("THE ACCORD IS RENEWED", "victory");
    narrate("— Thou art no longer only a paladin. Thou art thy father's son, and the realm hath need of both.", "system");
    updateStatus();
    showEndingCoda();
  } catch (e) { console.error("doEndingTruth failed:", e); narrate("[error: " + e.message + "]", "system"); }
}

// Lightweight donate + restart panel for the in-scene endings (truth/strike).
// doDeath already pops the full-screen gameover overlay which has its own donate.
function showEndingCoda() {
  let ov = document.getElementById("ending-coda");
  if (!ov) {
    ov = document.createElement("div");
    ov.id = "ending-coda";
    ov.innerHTML = `<a class="donate-btn" href="https://donate.stripe.com/14AfZi2Dxcrs0wT8La0VO02" target="_blank" rel="noopener noreferrer">SUPPORT THE BARD</a><div class="coda-hint">(refresh to play anew)</div>`;
    document.body.appendChild(ov);
  }
  // Delay slightly so the ending text can land first.
  setTimeout(() => ov.classList.add("shown"), 1400);
}

// ===== SELF =====
function handleSelf() {
  cmdLine("SELF");
  const parts = [
    "Thou art SIR ARIC of the Order of Dawn, sworn dragonslayer.",
    state.inventory.length ? `Thou bearest: ${state.inventory.map(i => ITEM_NAMES[i] || i).join(", ")}.` : "Thy hands are empty.",
    state.flags.sawMirror ? "Thou hast seen what the mirror showed. It cannot be unseen." : "",
    state.flags.readLetter ? "Thy father's letter sits heavy in thy thought." : "",
    state.flags.tookScale ? "The scale hums faintly wherever thou goest." : ""
  ].filter(Boolean).join(" ");
  narrate(parts);
  showPortrait("sir_aric", "self");
}

// ===== Init =====
function init() {
  renderVerbs();
  renderInventory();
  renderScene();
  narrate(window.SCENES.chapel.description);
  narrate("~ Thou art Sir Aric, sworn of the Order of Dawn. The King hath commanded: slay the last dragon. Thou shalt obey. Or shalt thou? ~", "system");
  updateStatus();
}

// Two-stage title: first click starts title music + relabels the button;
// second click enters the world.
let _titlePrimed = false;
$titleOverlay.addEventListener("click", () => {
  if (!_titlePrimed) {
    _titlePrimed = true;
    playTrack("title");
    const btn = document.getElementById("title-enter");
    if (btn) btn.textContent = "CLICK TO ENTER";
    return;
  }
  $titleOverlay.classList.add("gone");
  init();
});

// ===== Hotspot/FX/Sprite editor (toggle with `~`, dump with `S`, click to log coords) =====
function resolveTarget(path) {
  const [bag, scene, idx] = path.split(".");
  const map = { HOTSPOTS, SCENE_FX, SCENE_SPRITES }[bag];
  return map[scene][+idx];
}

function refreshEditor() {
  const frame = document.getElementById("scene-frame");
  frame.classList.toggle("edit-mode", state.editMode);
  // attach drag handlers + resize handles to every editable box still on screen
  frame.querySelectorAll("[data-edit-target]").forEach(el => {
    if (el._editWired) return;
    el._editWired = true;

    const startDrag = (e) => {
      if (!state.editMode) return;
      e.preventDefault(); e.stopPropagation();
      const target = resolveTarget(el.dataset.editTarget);
      const rect = frame.getBoundingClientRect();
      const isResize = e.target.classList.contains("edit-resize");
      const startX = e.clientX, startY = e.clientY;
      const startV = { x: target.x, y: target.y, w: target.w, h: target.h };
      const onMove = (ev) => {
        const dxPct = (ev.clientX - startX) / rect.width  * 100;
        const dyPct = (ev.clientY - startY) / rect.height * 100;
        if (isResize) {
          target.w = Math.max(0.5, Math.round((startV.w + dxPct) * 2) / 2);
          target.h = Math.max(0.5, Math.round((startV.h + dyPct) * 2) / 2);
          el.style.width  = target.w + "%";
          el.style.height = target.h + "%";
        } else {
          target.x = Math.round((startV.x + dxPct) * 2) / 2;
          target.y = Math.round((startV.y + dyPct) * 2) / 2;
          el.style.left = target.x + "%";
          el.style.top  = target.y + "%";
        }
        showEditReadout(el, target);
      };
      const onUp = () => {
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
        // suppress the click that would otherwise fire the verb action
        const swallow = (ev) => { ev.stopPropagation(); ev.preventDefault(); };
        el.addEventListener("click", swallow, { capture: true, once: true });
      };
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
    };
    el.addEventListener("mousedown", startDrag);

    // resize handle
    const handle = document.createElement("div");
    handle.className = "edit-resize";
    el.appendChild(handle);
    // label
    const tag = document.createElement("div");
    tag.className = "edit-tag";
    tag.textContent = el.dataset.obj || el.dataset.editTarget.split(".").slice(0,2).join(".") + "[" + el.dataset.editTarget.split(".")[2] + "]";
    el.appendChild(tag);
  });
}

function showEditReadout(el, t) {
  let r = document.getElementById("edit-readout");
  if (!r) { r = document.createElement("div"); r.id = "edit-readout"; document.body.appendChild(r); }
  r.textContent = `${el.dataset.editTarget}  x:${t.x}  y:${t.y}  w:${t.w}  h:${t.h}`;
}

function dumpSceneEdits() {
  const sceneKey = window.SCENES[state.scene]?.art;
  if (!sceneKey) return;
  const out = {
    HOTSPOTS:      HOTSPOTS[sceneKey]      || [],
    SCENE_FX:      SCENE_FX[sceneKey]      || [],
    SCENE_SPRITES: SCENE_SPRITES[sceneKey] || []
  };
  const json = JSON.stringify(out, null, 2);
  console.log(`=== ${sceneKey} ===\n${json}`);
  navigator.clipboard?.writeText(json).then(() => narrate(`[edit] ${sceneKey} dumped to console + clipboard`, "system"));
}

// Edit mode is opt-in for development only — gate it behind ?edit=1 (or
// localStorage flag) so the ~ key doesn't fire in production.
const EDIT_ENABLED = /[?&]edit=1\b/.test(location.search) || localStorage.getItem("paladin.edit") === "1";
if (EDIT_ENABLED) {
  document.addEventListener("keydown", (e) => {
    if (e.key === "`" || e.key === "~") {
      state.editMode = !state.editMode;
      renderScene();
      narrate(state.editMode ? "[edit mode ON] drag boxes to move, drag corner to resize, S to dump JSON, click empty area to log coords" : "[edit mode OFF]", "system");
    } else if (state.editMode && (e.key === "s" || e.key === "S")) {
      dumpSceneEdits();
    }
  });
}

document.getElementById("scene-art").addEventListener("click", (e) => {
  if (!state.editMode) return;
  if (e.target.closest("[data-edit-target]")) return;
  const rect = e.currentTarget.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1);
  const y = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1);
  console.log(`click @ x:${x} y:${y}`);
  narrate(`[edit] x:${x}% y:${y}%`, "system");
});

// ===== Music =====
const TRACKS = {
  title:     "assets/audio/title.mp3",
  adventure: "assets/audio/adventure.mp3",
  courtyard: "assets/audio/courtyard.mp3",
  showdown:  "assets/audio/showdown.mp3",
  ending:    "assets/audio/ending.mp3"
};
const SCENE_TRACK = {
  chapel: "adventure", hollow: "adventure",
  courtyard: "courtyard", wood: "courtyard",
  lair: "showdown",
  ending_strike: "ending", ending_truth: "ending"
};
const audio = {
  current: null, key: null,
  target: parseFloat(localStorage.getItem("paladin.vol") ?? "0.55"),
  muted:  localStorage.getItem("paladin.mute") === "1"
};

function effectiveVol() { return audio.muted ? 0 : audio.target; }

// iOS Safari ignores HTMLMediaElement.volume — route through Web Audio GainNodes instead.
// Master gain = volume slider; per-track gain = crossfade.
let _ctx, _masterGain;
function getCtx() {
  if (_ctx) return _ctx;
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return null;
  _ctx = new Ctx();
  _masterGain = _ctx.createGain();
  _masterGain.gain.value = effectiveVol();
  _masterGain.connect(_ctx.destination);
  return _ctx;
}
function resumeCtx() { if (_ctx && _ctx.state === "suspended") _ctx.resume().catch(() => {}); }
function attachTrack(el) {
  const ctx = getCtx();
  if (!ctx) return null;
  try {
    const src = ctx.createMediaElementSource(el);
    const g = ctx.createGain(); g.gain.value = 0;
    src.connect(g); g.connect(_masterGain);
    return g;
  } catch { return null; }
}
// Resume audio context on first user gesture (iOS requirement)
["click", "touchend", "keydown"].forEach(ev =>
  window.addEventListener(ev, resumeCtx, { once: false, passive: true })
);

let _activeFade = null;
function playTrack(key) {
  if (!key || audio.key === key) return;
  if (_activeFade) {
    _activeFade.cancelled = true;
    if (_activeFade.prev) { try { _activeFade.prev.pause(); _activeFade.prev.src = ""; } catch {} }
  }
  const next = new Audio(TRACKS[key]);
  next.loop = true;
  next._gain = attachTrack(next);
  // Fallback: if Web Audio unavailable, drive element volume directly.
  if (!next._gain) next.volume = 0;
  resumeCtx();
  next.play().catch(() => {});
  const prev = audio.current;
  audio.current = next; audio.key = key;
  const fade = { prev, cancelled: false };
  _activeFade = fade;
  const start = performance.now(), DUR = 1200;
  const startVol = prev ? (prev._gain ? prev._gain.gain.value : prev.volume) : 0;
  const setVol = (el, v) => {
    if (el._gain) el._gain.gain.value = v;
    else el.volume = v;
  };
  const tick = (t) => {
    if (fade.cancelled) return;
    const k = Math.min(1, (t - start) / DUR);
    // Master gain handles muted/volume; track gain only handles fade ratio when using Web Audio.
    if (next._gain) setVol(next, k);
    else setVol(next, effectiveVol() * k);
    if (prev) {
      if (prev._gain) setVol(prev, startVol * (1 - k));
      else setVol(prev, Math.max(0, startVol * (1 - k)));
    }
    if (k < 1) requestAnimationFrame(tick);
    else {
      if (prev) { try { prev.pause(); prev.src = ""; } catch {} }
      if (_activeFade === fade) _activeFade = null;
    }
  };
  requestAnimationFrame(tick);
}

function applyAudioSettings() {
  if (_masterGain) _masterGain.gain.value = effectiveVol();
  else if (audio.current) audio.current.volume = effectiveVol();
  const btn = document.getElementById("music-toggle");
  if (btn) btn.classList.toggle("muted", audio.muted);
}

function stopMusic() {
  if (audio.current) { audio.current.pause(); audio.current.src = ""; audio.current = null; audio.key = null; }
}

// Preload all PixelLab assets so scene swaps (e.g. chapel -> chapel_empty)
// are instant and don't show a blank frame where the title text appears to flash.
(window.PIXELLAB_ASSETS || []).forEach(k => {
  new Image().src = `assets/${k}.png`;
  if ((window.PIXELLAB_HD || []).includes(k)) new Image().src = `assets/${k}@hd.png`;
});

// Hook into existing game flow without rewiring callers.
let _lastRenderedScene = null;
const _origRenderScene = renderScene;
renderScene = function () {
  const newKey = state.scene;
  const sceneChanged = _lastRenderedScene && _lastRenderedScene !== newKey;
  _origRenderScene();
  _lastRenderedScene = newKey;
  // Brief fade-through-dark wipe whenever the scene KEY changes (skipped on
  // same-scene refreshes like sword-pickup art swaps so we don't flash needlessly).
  if (sceneChanged) {
    $sceneFrame.classList.remove("scene-wipe");
    void $sceneFrame.offsetWidth; // force reflow so the animation restarts
    $sceneFrame.classList.add("scene-wipe");
  }
  const trackKey = SCENE_TRACK[newKey];
  if (trackKey) playTrack(trackKey);
};

// Two-stage title flow:
//   first click anywhere -> start title music, change hint
//   click on title overlay -> dismiss + start adventure (replaces the overlay's existing init handler? no, that runs too)
// We just rely on:
//   - first user gesture starts title music
//   - title overlay click triggers init() (already wired) -> renderScene -> playTrack("adventure")
// The crossfade handles the transition; title may only get a moment if user clicks fast, that's fine.
// Title music is opt-in via the ♪ button on the title overlay.

// Game-over overlay should also use ending music.
const _origShowGameOver = showGameOver;
showGameOver = function (msg) { _origShowGameOver(msg); playTrack("ending"); };

// Music control wiring + persistence
const $musicToggle = document.getElementById("music-toggle");
const $musicVolume = document.getElementById("music-volume");
$musicVolume.value = Math.round(audio.target * 100);
$musicToggle.classList.toggle("muted", audio.muted);
$musicToggle.addEventListener("click", () => {
  audio.muted = !audio.muted;
  localStorage.setItem("paladin.mute", audio.muted ? "1" : "0");
  applyAudioSettings();
});
$musicVolume.addEventListener("input", () => {
  audio.target = +$musicVolume.value / 100;
  audio.muted = false;
  localStorage.setItem("paladin.vol", audio.target);
  localStorage.setItem("paladin.mute", "0");
  applyAudioSettings();
});

// Text size slider — drives a global --text-scale CSS var so every UI text
// element scales uniformly (story, verbs, status, inventory names, etc.).
const $textSize = document.getElementById("text-size");
const _savedTextScale = parseInt(localStorage.getItem("paladin.textScale") || "100", 10);
$textSize.value = _savedTextScale;
document.documentElement.style.setProperty("--text-scale", (_savedTextScale / 100).toString());
$textSize.addEventListener("input", () => {
  const pct = +$textSize.value;
  document.documentElement.style.setProperty("--text-scale", (pct / 100).toString());
  localStorage.setItem("paladin.textScale", String(pct));
});
