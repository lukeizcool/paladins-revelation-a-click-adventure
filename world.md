# The World — *The Paladin's Revelation* (game canon)

> **The novel bible is the real canon.** This document covers only the slice
> of the continent **Aethon** that the game lets the player walk through. For
> anything beyond what is on screen — the wider world, the Hallowed Order's
> formal structure, vampires, angels, the relic-curse mechanism, Edmund
> Aldric's full history — see `world-bible.md`. Where these two disagree,
> the bible wins.

The realm is told in three regions. They are unequal: the Greylock Marches
are green and proud, the Salt Marches are old and forgotten, and the Cinder
Throne is the place where everyone ends up sooner or later, willing or not.

---

## REGION 01 — The Greylock Marches

Vast green plains and forests.

Stone keeps and a thousand-year peace, sworn upon the **Ninth Order's
chapel** and held by the lives of every paladin since.

## REGION 02 — The Salt Marches

Swamps and steppes.

Where the **dragon-blooded houses** kept their old contracts. **Vermil.
Vasi. Ourovan.** Names the chronicles were ordered to forget.

## REGION 03 — The Cinder Throne

Mountainous and perilous. The Cinder Throne is the part of the **Spine of
Aethon** known to the realm of Dunhelm, and **Mount Khaer'gul** is its
highest peak — the bald grey crown where the wyrm lairs.

A capital built on a kiln. The crown here is forged anew at every
coronation, and it has been forged a great many times.

---

## How the existing scenes fit

*(working assumption — overwrite if wrong)*

| Scene        | Region              | Note                                                   |
|--------------|---------------------|--------------------------------------------------------|
| `chapel`     | Greylock Marches    | The Ninth Order's chapel. Aric kneels here at dawn.    |
| `courtyard`  | Greylock Marches    | Brittlewatch — Aric's keep, where Mirren waits.        |
| `wood`       | Greylock → border   | The Ashen Wood; the road forks east toward the Throne. |
| `hollow`     | Salt Marches edge   | Ysolde keeps an old contract. She is older than 9.     |
| `lair`       | Cinder Throne       | Mount Khaer'gul, the kiln itself. The wyrm sleeps in it.     |

## Lineages and houses

The dragon-blooded are not all the same kind of dragon-blooded. Three
houses survived the burning of the chronicles, and each kept a different
inheritance.

- **Vermil** — eldest of the three. Said to have signed the first contract
  in their own blood. Their gift is *memory*: they remember every oath the
  realm has broken. They do not change shape.
- **Vasi** — kept the white flame. Their gift is *sight*: glass and flame
  show them what is and what could be. Ysolde answers to this name when no
  one else is listening. They do not change shape.
- **Ourovan** — the only line that produced **wyrm-shapes**. And only when
  the **relics** are gathered. Without the relics, an Ourovan child lives
  and dies as a man, and the second shape sleeps unawakened in the blood.
  Edmund's mother was Ourovan; Aric does not know it.

### The relics

The change requires four objects, kept across generations and never
gathered in one hand by accident:

1. A **blade** of the bloodline (Dawnbreaker bears the dragon-and-sun
   sigil for a reason).
2. A **scale** shed by the previous wyrm — warm to a kinsman's palm.
3. A **letter** in the wyrm's own hand, sealing the inheritance.
4. A **signet** of office — proof that the realm itself once acknowledged
   the line.

Hold all four. Climb the kiln. The change comes whether the bearer wills
it or not. This is why the gate to Mount Khaer'gul in the game requires the
full set: not because the wyrm needs slaying, but because Aric is being
quietly prepared for what his father became.

## The Ninth Order

So called because there were eight before it, and each was burned. The
Greylock paladins do not speak of the previous eight.

The Order's chapel sits on the highest stone in the Greylock Marches. Its
oath: *"That the peace endure, and the wyrm sleep, and the kiln cool."*

In Valen's hand, the same oath becomes a writ to climb the mountain and
finish the wyrm.

## The Cinder Throne, in plainer words

The kiln at the throne's heart is older than the realm. Long before there
were kings of Dunhelm, **ancient men were crowned upon this same stone** —
chieftains of the first peoples, then warlords, then the line that became
the present house. The kiln remembers all of them. Their melted crowns are
still in the metal of the current one, somewhere.

Coronations there are short. The crown is poured from the previous king's
regalia and cooled fast enough to wear before the next claimant arrives.
Some kings have been crowned posthumously — the crown was already warm.

That a wyrm sleeps in the same mountain is not coincidence. The kiln and
the wyrm share heat. The Accord of Ash was, in its first form, a covenant
between the dragon-blooded and the men who borrowed the kiln's fire to
forge their crowns: *we let you crown yourselves here, and you let the
wyrm sleep above*. Valen's writ to slay the wyrm breaks that covenant on
both sides.

---

## Rough layout

```
            ┌─────────────────────────┐
            │   THE CINDER THRONE     │
            │       ▲▲▲ Mount Khaer'gul     │
            │   (mountainous capital, │
            │    kiln-forged crown)   │
            └────────────┬────────────┘
                         │
                         │  King's Road
                         │
            ┌────────────┴────────────┐
            │     THE ASHEN WOOD      │
            │  (border country, the   │
            │   road forks here)      │
            │                         │
            │   ◯ The Hollow ─────────┼──→  to Salt Marches
            └────────────┬────────────┘
                         │
            ┌────────────┴────────────┐
            │   THE GREYLOCK MARCHES  │
            │                         │
            │   ✠  Ninth Order chapel │
            │   ◇  Brittlewatch Keep  │
            │       (Aric's home)     │
            │   green plains, stone   │
            │   keeps, the peace      │
            └─────────────────────────┘

      ╭──────────────────────────────────────╮
      │           THE SALT MARCHES           │
      │  swamps, steppes, the forgotten      │
      │  houses: Vermil · Vasi · Ourovan     │
      ╰──────────────────────────────────────╯
                  (east of the wood,
                   below the maps)
```

---

## Naming reconciliation (with the novel bible)

Earlier drafts of the game used names that no longer match the bible.
For anyone reading old notes, art prompts, or git history:

| Retired name | Canonical name | Notes |
|---|---|---|
| Skar'Vael | **Mount Khaer'gul** | The peak in the Spine of Aethon. Skar'Vael survives only as a legacy asset filename. |
| Dawncleaver | **Dawnbreaker** | Edmund Aldric's relic blade. |
| (the dragon, named) | **the Wyrm** in-game | Bible name *Vaeltharion* is **never spoken on screen**. |
| Cael | **Edmund** (Aldric) | "Cael" survives only in the asset key `dragon_cael.png`. |

Other deliberate ambiguities (game alludes; bible explains in full):

- **The Order.** In-game text uses "Order of Dawn" — treat that as the
  paladins' colloquial chapter name within the bible's **Hallowed Order**.
  "The Ninth Order" in this doc is the historical sequence number; the bible
  treats it as the latest of the burned-and-rebuilt Hallowed Orders.
- **What dragons are.** The bible's truth is *cursed humans*; the curse
  runs in specific bloodlines. "Ourovan-only wyrm-shape with relics" in
  this doc is the in-realm folk understanding of how the curse is
  *triggered*, not a contradiction of the bible.
- **Vampires.** Not on screen. Valen reads as a corrupt human chancellor
  in the game; the bible's deeper truth (he is a vampire, the Light is
  dragon-fire mythologized, ravens are bound demons) is reserved for
  future work.
