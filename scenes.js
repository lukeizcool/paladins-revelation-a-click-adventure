// Scene graph for "The Paladin's Revelation"
// Each scene: id, title, art (SVG render fn name), description, exits, objects, onEnter

window.SCENES = {
  chapel: {
    title: "The Chapel of Dawn",
    art: "chapel",
    description: "Thou standest within the CHAPEL OF DAWN, where thy vows were first spoken. Dust motes drift in the slanted light. Upon the ALTAR rests thy father's sword, sheathed these twenty years. A stained WINDOW depicts a saint driving his lance through a dragon's heart. A great oaken DOOR leads east to the courtyard. A dusty TOME lies open upon a lectern.",
    objects: {
      altar: { name: "altar", look: "Carved of white stone, worn smooth by centuries of kneeling knights. Thy father's SWORD rests upon it, awaiting a worthy hand." },
      sword: { name: "sword", look: "The blade is called DAWNCLEAVER. Its pommel bears a sigil: a dragon cradling a sun. Strange heraldry for a dragonslayer.", take: true },
      window: { name: "window", look: "St. Orien the Pure, lance buried in a wyrm's breast — no, look closer. The lance-tip strikes not the heart, but a pale crescent on the dragon's BROW. The saint knew where to aim. Thou hast gazed upon this glass since boyhood. Something in the dragon's painted eye seems to plead." },
      tome: { name: "tome", look: "The page speaks of the Accord of Ash — a pact between men and dragons, struck ere the Sundering. The ink is faded, but one line stands bold: 'Let no son raise steel against his own blood.' Below, in the margin, a dragonslayer's hand hath scratched: 'The wyrm-scale is mailed against any blade, save where the MOON-MARK doth scar the brow. Strike there, or strike not at all.'" },
      door: { name: "door", look: "Oak bound in iron. Beyond it waits thy quest — and the road to the Wyrm of Skar'Vael." }
    },
    exits: {
      door: "courtyard"
    },
    requiredItems: { courtyard: "sword" },
    requiredMessage: "Thou wouldst not go forth unarmed. Take up thy father's SWORD."
  },

  courtyard: {
    title: "The Courtyard",
    art: "courtyard",
    description: "The COURTYARD lies beneath a bruised dusk sky. A lone crow watches from the WELL. An old STABLEHAND stands beside thy saddled steed, her eyes rimmed red, as though she had wept. The PORTCULLIS stands open to the road west. Pinned to a POST is a proclamation bearing the royal seal.",
    objects: {
      well: { name: "well", look: "The stones weep moss. The shaft yawns black and bottomless — the rope is FRAYED to a single thread, the windlass rotted through. Lean too far, and thou wilt not lean back. Below, only silence." },
      stablehand: { name: "stablehand", look: "Old Mirren. She nursed thee as a babe. Speak to her, if thou wouldst." },
      post: { name: "post", look: "The proclamation reads: BY ORDER OF CHANCELLOR VALEN — the last dragon, SKAR'VAEL, must be slain ere the new moon. The realm's salvation depends upon it. The seal is fresh. The ink still smells of iron." },
      portcullis: { name: "portcullis", look: "The road west leads through the Ashen Wood, and thence to the mountain." },
      crow: { name: "crow", look: "It tilts its head at thee. Its eye is uncommonly bright — almost knowing." }
    },
    exits: {
      portcullis: "wood",
      west: "wood",
      chapel: "chapel",
      back: "chapel"
    },
    speak: {
      stablehand: "Mirren clutches thy gauntlet. 'Sir Aric — thy father did not DIE in the last war. He vanished. He left me a letter, sealed, to give thee ere thou rode against any dragon. I have carried it thirty years.' She presses a folded PARCHMENT into thy hand.",
      stablehand_items: ["parchment"]
    }
  },

  wood: {
    title: "The Ashen Wood",
    art: "wood",
    description: "Black branches claw at a blood-orange sky. The PATH forks: one way climbs north toward the MOUNTAIN, the other descends to a HOLLOW where firelight flickers. A WOUNDED MAN lies against a stump, his cloak dark with blood. A RAVEN — or is it the same crow? — perches upon a low branch.",
    objects: {
      path: { name: "path", look: "The northern path is steep and strewn with bones picked clean. The southern hollow smells of woodsmoke and roasting meat." },
      mountain: { name: "mountain", look: "Skar'Vael's peak. Smoke wreathes its crown. Thy destiny, if thou still believest in such things." },
      man: { name: "man", look: "A ranger, by his garb. His wound is deep — a crossbow bolt, snapped off. Royal fletching. He was shot by the Chancellor's men." },
      raven: { name: "raven", look: "It watches thee with the same bright eye as before. Art thou being followed?" },
      hollow: { name: "hollow", look: "The firelight is warm. Thou canst hear a woman humming." }
    },
    exits: {
      mountain: "lair",
      north: "lair",
      hollow: "hollow",
      south: "hollow",
      courtyard: "courtyard",
      back: "courtyard"
    },
    speak: {
      man: "The ranger coughs blood. 'Paladin... the Chancellor lies. The dragons never burned the villages — his OWN MEN did. I saw it. I was to bring proof to the King.' He presses a bloodied SIGNET into thy palm. 'Valen's seal. On the orders. Do not... slay the wyrm...' His head falls.",
      man_items: ["signet"]
    },
    requiredItems: { lair: "parchment", lair_alt: "signet" },
    requiredMessage: "A shadow crosses thy heart. Thou art not yet ready to face what waits above. Seek counsel first."
  },

  hollow: {
    title: "The Hollow",
    art: "hollow",
    description: "A WOMAN sits by a fire of white flame that gives no smoke. Her eyes are the gold of old coin. Upon a flat stone she has laid three offerings: a CUP of dark wine, a DRAGON SCALE, and a small MIRROR. 'Sit, Sir Aric,' she says, before thou hast spoken thy name. 'Thou art late, and early, and exactly on time.'",
    objects: {
      woman: { name: "woman", look: "Her skin shimmers faintly where the firelight catches it — like oil upon water, or the inside of a shell. She is not what she seems." },
      fire: { name: "fire", look: "The flames are white as bone and cold to the touch. Dragonfire, tamed." },
      cup: { name: "cup", look: "The wine is black and smells of iron. 'Drink,' she says, 'and thou shalt forget. Many knights have chosen the cup.'" },
      scale: { name: "scale", look: "A single scale the size of thy palm, the color of banked embers. 'Touch it,' she says, 'and thou shalt remember.'", take: true },
      mirror: { name: "mirror", look: "The glass darkens, then flickers with three visions. — In the first, thou raisest thy blade and the dragon dies in silence; the Chancellor smiles, and arrows take thee in the back. — In the second, thou turnest steel upon the archers, and the wyrm rises behind thee, wing folded over thy shoulder; the realm endures, and the ACCORD is renewed. — In the third, dimmer still: thou pressest the SCALE to the wyrm's flank, or layest thy father's LETTER before his eye, and a deeper bond is rekindled ere the killing hour. Three paths, paladin — and the choosing is thine. Ysolde watches: 'TAKE the mirror, and the visions shall not leave thee — they shall devour thee.'" },
      path_back: { name: "path", look: "The path winds back up to the wood." }
    },
    exits: {
      path: "wood",
      back: "wood"
    },
    use: {
      mirror: "Thou liftest the mirror. The glass darkens, then flickers with three visions. — In the first, thou raisest thy blade and the dragon dies in silence; the Chancellor smiles, and arrows take thee in the back. — In the second, thou turnest steel upon the archers, and the wyrm rises behind thee, wing folded over thy shoulder; the realm endures, and the ACCORD is renewed. — In the third, dimmer still: thou pressest the SCALE to the wyrm's flank, or layest thy father's LETTER before his eye, and a deeper bond is rekindled ere the killing hour. Three paths, paladin — and the choosing is thine.",
      scale: "Thou takest up the scale. It is warm. A voice, deep as a cathedral bell, speaks inside thy skull: 'My son. Forgive me. I could not tell thee what I was.' Thou knowest the voice. Thou hast not heard it in thirty years.",
      parchment: "Thou breakest thy father's seal at last. The hand within is older, tremulous: 'Aric — I have been called back to the mountain. I am not what I seemed. Do not raise steel against the Wyrm of SKAR'VAEL. The wyrm is thy father. (Mark also the SCAR upon his brow — a foolish nick thou gave me when thou wert four, swinging mine own gauntlet at thy father's head. We laughed an hour. I bear it still, in my second shape.) The ORDER OF DAWN is not what they told thee. Thy brothers obey CHANCELLOR VALEN, not the King. Trust no tabard issued in his name. — Cael.'",
      signet: "The woman takes the signet, turns it in the white flame. 'Chancellor Valen,' she murmurs. 'He hunts us to the last. If the wyrm dies, the Accord breaks, and he takes the throne in the chaos. Thou art the final blade he needs — a paladin's hand, to make the killing clean.'"
    },
    speak: {
      woman: "'I am Ysolde. I am OLDER than thy order, paladin. I knew thy father when the world was younger. Thou mayest DRINK and forget. Thou mayest LOOK and see. Thou mayest TAKE the scale and remember. But mark me well — the MIRROR is mine, and not for mortal hands. To gaze is granted. To carry is to break. Take it from this stone, and the visions shall not leave thee — they shall devour thee.'"
    }
  },

  lair: {
    title: "The Wyrm's Lair",
    art: "lair",
    description: "Thou standest upon the threshold of a vast CAVERN. Heat rolls out in waves. Within, curled upon a bed of cold gold, lies the DRAGON — vast, red, breathing slow as a sleeping sea. Upon its brow is a crescent SCAR. In the cavern's shadow, crossbowmen in ROYAL TABARDS have taken position, their bolts trained not upon the dragon — but upon thee, should thou hesitate. CHANCELLOR VALEN watches from a high ledge.",
    objects: {
      dragon: { name: "dragon", look: "Its eyes open. They are thy father's eyes. Gold flecked with grey, the left one always half-lidded from an old jest-wound. It does not rise. It waits. Its scales gleam like layered shields — no blade thou ownest could pierce them, save at the one pale CRESCENT SCAR upon its brow." },
      scar: { name: "scar", look: "A crescent moon, pale against red scale. Thy father bore its twin upon his own brow. Thou hast kissed that scar goodnight as a child." },
      valen: { name: "valen", look: "The Chancellor smiles down at thee. 'Strike, paladin. One clean blow, and the realm is saved. Hesitate, and my men will save it without thee — and for thy trouble, they will save thy village too.'" },
      crossbowmen: { name: "crossbowmen", look: "Six of them. Bolts drawn. They do not meet thine eyes — they have done this before." },
      sword_here: { name: "sword", look: "Dawncleaver hums in thy grip. The dragon-and-sun sigil upon its pommel glows faintly, as though the blade itself now understands what it is." }
    },
    exits: {},
    finalScene: true
  },

  ending_strike: {
    title: "The Killing Blow",
    art: "ending_dark",
    description: "Thou raisest Dawncleaver. The dragon does not move. It closes its eyes. Thou bringest the blade down. The beast sighs, and in the sigh is a single word: 'Aric.' The body shudders, shrinks, and upon the gold there lies at last a man — grey-bearded, crescent-scarred, smiling faintly. Chancellor Valen claps, slow and even. 'Well done, paladin. Now — loose ends.' The crossbows turn toward thee. THOU ART DEAD. The realm is his.",
    objects: {},
    exits: {},
    ending: true
  },

  ending_truth: {
    title: "The Revelation",
    art: "ending_light",
    description: "Thou lowerest Dawncleaver and turnest the blade upon Valen's archers. The dragon rises behind thee — vast, and terrible, and thine. Together, father and son, ye break the Chancellor's ambush. The Accord of Ash is renewed, signed in Valen's own ink. Thy father lays a clawed hand — gentle as any human father's — upon thy shoulder. 'I should have told thee,' he rumbles. 'I know,' thou sayest. 'Tell me now.' THOU HAST WON. But thou art no longer only a paladin.",
    objects: {},
    exits: {},
    ending: true
  }
};

window.VERBS = ["LOOK", "OPEN", "TAKE", "USE", "HIT", "MOVE", "SPEAK", "SELF"];
