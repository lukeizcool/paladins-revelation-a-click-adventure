// SVG illustrations — pixel-art-inspired, painted in the dark fantasy style
// of 1987 Mac/Amiga adventure games. Limited palette, heavy blacks.

window.ART = {
  chapel: () => `
    <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
      <defs>
        <linearGradient id="chapelLight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#c9a24a"/>
          <stop offset="1" stop-color="#5a3a12"/>
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill="#0a0806"/>
      <!-- arched window with stained glass -->
      <path d="M130 20 Q160 -5 190 20 L190 90 L130 90 Z" fill="#1a1410"/>
      <path d="M134 24 Q160 2 186 24 L186 86 L134 86 Z" fill="url(#chapelLight)"/>
      <!-- stained glass dragon + lance -->
      <path d="M145 45 Q160 35 175 45 Q180 55 170 62 L158 58 Q150 55 145 45 Z" fill="#a12828"/>
      <line x1="140" y1="30" x2="178" y2="78" stroke="#3a3020" stroke-width="2"/>
      <line x1="160" y1="18" x2="160" y2="86" stroke="#2a241a" stroke-width="1"/>
      <line x1="134" y1="54" x2="186" y2="54" stroke="#2a241a" stroke-width="1"/>
      <!-- light shafts -->
      <polygon points="134,86 186,86 230,200 90,200" fill="#6a4a1a" opacity="0.18"/>
      <!-- floor stones -->
      <rect y="170" width="320" height="30" fill="#1a1612"/>
      <line x1="0" y1="170" x2="320" y2="170" stroke="#3a2e22" stroke-width="1"/>
      <line x1="40" y1="170" x2="20" y2="200" stroke="#2a2218" stroke-width="1"/>
      <line x1="120" y1="170" x2="100" y2="200" stroke="#2a2218" stroke-width="1"/>
      <line x1="200" y1="170" x2="220" y2="200" stroke="#2a2218" stroke-width="1"/>
      <line x1="280" y1="170" x2="300" y2="200" stroke="#2a2218" stroke-width="1"/>
      <!-- altar -->
      <rect x="130" y="130" width="60" height="45" fill="#2a241c"/>
      <rect x="126" y="125" width="68" height="8" fill="#3a3428"/>
      <rect x="126" y="170" width="68" height="6" fill="#3a3428"/>
      <!-- sword on altar -->
      <rect x="155" y="108" width="10" height="4" fill="#6a6860"/>
      <rect x="158" y="112" width="4" height="18" fill="#3a3830"/>
      <rect x="157" y="115" width="6" height="2" fill="#5a4a20"/>
      <polygon points="159,95 161,95 162,110 158,110" fill="#b8b4a8"/>
      <!-- door frame -->
      <rect x="250" y="90" width="50" height="90" fill="#1a1410"/>
      <rect x="255" y="95" width="40" height="85" fill="#3a2a1a"/>
      <rect x="255" y="95" width="40" height="85" fill="none" stroke="#6a4a20" stroke-width="1"/>
      <circle cx="288" cy="140" r="2" fill="#c9a24a"/>
      <!-- lectern with tome -->
      <polygon points="40,180 60,180 58,150 42,150" fill="#2a1e10"/>
      <polygon points="38,148 62,148 58,142 42,142" fill="#5a3a1a"/>
      <rect x="44" y="143" width="6" height="4" fill="#d4c080"/>
      <rect x="50" y="143" width="6" height="4" fill="#b8a060"/>
      <!-- candle -->
      <rect x="200" y="118" width="3" height="10" fill="#e8dcb0"/>
      <polygon points="201,114 203,114 202,118" fill="#ffcc33"/>
      <circle cx="201.5" cy="114" r="6" fill="#ffcc33" opacity="0.15"/>
    </svg>`,

  courtyard: () => `
    <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
      <!-- bruised dusk sky -->
      <defs>
        <linearGradient id="dusk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#3a2040"/>
          <stop offset="0.6" stop-color="#8a3a28"/>
          <stop offset="1" stop-color="#2a1a14"/>
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill="url(#dusk)"/>
      <!-- castle walls silhouette -->
      <polygon points="0,110 0,80 30,80 30,70 50,70 50,80 80,80 80,70 100,70 100,85 320,85 320,200 0,200" fill="#0f0a08"/>
      <!-- portcullis -->
      <rect x="210" y="95" width="60" height="70" fill="#1a0f08"/>
      <line x1="218" y1="95" x2="218" y2="165" stroke="#3a2a1a" stroke-width="1"/>
      <line x1="228" y1="95" x2="228" y2="165" stroke="#3a2a1a" stroke-width="1"/>
      <line x1="238" y1="95" x2="238" y2="165" stroke="#3a2a1a" stroke-width="1"/>
      <line x1="248" y1="95" x2="248" y2="165" stroke="#3a2a1a" stroke-width="1"/>
      <line x1="258" y1="95" x2="258" y2="165" stroke="#3a2a1a" stroke-width="1"/>
      <line x1="210" y1="110" x2="270" y2="110" stroke="#3a2a1a" stroke-width="1"/>
      <line x1="210" y1="130" x2="270" y2="130" stroke="#3a2a1a" stroke-width="1"/>
      <line x1="210" y1="150" x2="270" y2="150" stroke="#3a2a1a" stroke-width="1"/>
      <!-- distant road through portcullis -->
      <polygon points="210,165 270,165 260,200 220,200" fill="#4a3828"/>
      <!-- ground -->
      <rect y="165" width="320" height="35" fill="#1a120c"/>
      <rect y="165" width="320" height="2" fill="#2a1e14"/>
      <!-- well -->
      <ellipse cx="70" cy="165" rx="22" ry="6" fill="#0a0604"/>
      <path d="M48 165 L52 148 L88 148 L92 165 Z" fill="#2a2018"/>
      <rect x="52" y="145" width="36" height="5" fill="#3a2e22"/>
      <!-- well roof posts -->
      <rect x="50" y="118" width="3" height="30" fill="#2a1e12"/>
      <rect x="87" y="118" width="3" height="30" fill="#2a1e12"/>
      <polygon points="44,122 96,122 70,105" fill="#3a2818"/>
      <!-- crow on well -->
      <ellipse cx="70" cy="144" rx="5" ry="3" fill="#050402"/>
      <circle cx="73" cy="142" r="2" fill="#050402"/>
      <circle cx="74" cy="141.5" r="0.5" fill="#ffcc33"/>
      <polygon points="75,142 78,141 75,143" fill="#3a2810"/>
      <!-- stablehand figure -->
      <ellipse cx="160" cy="175" rx="8" ry="2" fill="#050402" opacity="0.5"/>
      <rect x="156" y="150" width="8" height="25" fill="#3a2a1a"/>
      <rect x="154" y="148" width="12" height="6" fill="#4a3828"/>
      <circle cx="160" cy="142" r="5" fill="#c9a680"/>
      <path d="M155 140 Q160 136 165 140 L165 144 Q160 146 155 144 Z" fill="#8a7a5a"/>
      <!-- horse silhouette -->
      <rect x="175" y="145" width="30" height="22" fill="#2a1810"/>
      <rect x="200" y="140" width="8" height="10" fill="#2a1810"/>
      <rect x="175" y="167" width="3" height="10" fill="#2a1810"/>
      <rect x="182" y="167" width="3" height="10" fill="#2a1810"/>
      <rect x="196" y="167" width="3" height="10" fill="#2a1810"/>
      <rect x="202" y="167" width="3" height="10" fill="#2a1810"/>
      <!-- post with proclamation -->
      <rect x="112" y="130" width="3" height="40" fill="#2a1e12"/>
      <rect x="100" y="130" width="25" height="18" fill="#d4c49a"/>
      <line x1="103" y1="135" x2="122" y2="135" stroke="#3a2818" stroke-width="0.5"/>
      <line x1="103" y1="138" x2="122" y2="138" stroke="#3a2818" stroke-width="0.5"/>
      <line x1="103" y1="141" x2="118" y2="141" stroke="#3a2818" stroke-width="0.5"/>
      <circle cx="113" cy="145" r="2" fill="#8a1818"/>
      <!-- moon -->
      <circle cx="260" cy="40" r="14" fill="#e8d4a0"/>
      <circle cx="264" cy="38" r="12" fill="url(#dusk)"/>
    </svg>`,

  wood: () => `
    <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
      <defs>
        <linearGradient id="woodsky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#2a1410"/>
          <stop offset="0.5" stop-color="#a04020"/>
          <stop offset="1" stop-color="#3a1e14"/>
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill="url(#woodsky)"/>
      <!-- distant mountain -->
      <polygon points="0,90 60,45 100,70 140,30 200,85 320,60 320,130 0,130" fill="#1a1014"/>
      <polygon points="130,35 145,15 160,35" fill="#0a0608"/>
      <!-- smoke from mountain -->
      <ellipse cx="148" cy="18" rx="10" ry="4" fill="#2a2028" opacity="0.6"/>
      <ellipse cx="155" cy="10" rx="14" ry="5" fill="#2a2028" opacity="0.4"/>
      <!-- ground -->
      <rect y="130" width="320" height="70" fill="#0f0806"/>
      <!-- path forking -->
      <polygon points="140,200 180,200 170,150 150,150" fill="#3a2a1e"/>
      <polygon points="150,150 170,150 175,130 155,130" fill="#2a1e14"/>
      <polygon points="155,130 175,130 200,115 185,115" fill="#3a2a1e" opacity="0.6"/>
      <!-- black trees -->
      <g fill="#050302">
        <rect x="20" y="70" width="6" height="130"/>
        <path d="M23 70 L10 100 L18 95 L8 130 L20 120 L14 150 Z"/>
        <path d="M23 70 L36 100 L28 95 L38 130 L26 120 L32 150 Z"/>
        <rect x="55" y="90" width="5" height="110"/>
        <path d="M57 90 L48 110 L54 108 L46 130 L56 125"/>
        <path d="M57 90 L66 110 L60 108 L68 130 L58 125"/>
        <rect x="265" y="60" width="8" height="140"/>
        <path d="M269 60 L252 95 L265 90 L248 130 L266 120 L254 160 L268 145"/>
        <path d="M269 60 L286 95 L273 90 L290 130 L272 120 L284 160 L270 145"/>
        <rect x="220" y="85" width="5" height="115"/>
        <path d="M222 85 L212 110 L222 105"/>
        <path d="M222 85 L232 110 L222 105"/>
      </g>
      <!-- wounded man at stump -->
      <ellipse cx="100" cy="170" rx="14" ry="4" fill="#050302"/>
      <rect x="88" y="155" width="24" height="8" fill="#2a1e14"/>
      <rect x="85" y="150" width="30" height="8" fill="#3a2820"/>
      <!-- body slumped -->
      <ellipse cx="100" cy="158" rx="16" ry="7" fill="#2a1014"/>
      <circle cx="112" cy="152" r="4" fill="#8a7058"/>
      <rect x="100" y="157" width="18" height="3" fill="#6a1010"/>
      <polygon points="115,156 118,154 120,158" fill="#3a2820"/>
      <!-- raven on branch -->
      <ellipse cx="250" cy="68" rx="4" ry="2.5" fill="#050302"/>
      <circle cx="252" cy="66.5" r="1.5" fill="#050302"/>
      <circle cx="252.5" cy="66" r="0.4" fill="#ffcc33"/>
      <!-- firelight from hollow -->
      <circle cx="240" cy="175" r="14" fill="#ff8030" opacity="0.25"/>
      <circle cx="240" cy="175" r="6" fill="#ffcc40" opacity="0.4"/>
      <polygon points="238,175 242,175 243,170 240,165 237,170" fill="#ffaa20"/>
    </svg>`,

  hollow: () => `
    <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
      <rect width="320" height="200" fill="#0a0812"/>
      <!-- cave/hollow walls -->
      <path d="M0 0 L0 200 L40 180 L60 140 L50 100 L80 60 L120 40 L200 35 L240 55 L270 100 L260 140 L280 180 L320 200 L320 0 Z" fill="#0a0812"/>
      <path d="M0 0 L0 200 L40 180 L60 140 L50 100 L80 60 L120 40 L200 35 L240 55 L270 100 L260 140 L280 180 L320 200 L320 0 Z" fill="none" stroke="#1a1824" stroke-width="1"/>
      <!-- back glow -->
      <ellipse cx="160" cy="140" rx="100" ry="50" fill="#4a6080" opacity="0.15"/>
      <!-- white flame -->
      <ellipse cx="160" cy="175" rx="22" ry="5" fill="#aabfd4" opacity="0.3"/>
      <polygon points="150,175 170,175 172,160 165,150 160,140 155,150 148,160" fill="#ffffff"/>
      <polygon points="155,175 165,175 167,165 160,150 153,165" fill="#b4d4f0"/>
      <!-- offering stone -->
      <ellipse cx="100" cy="170" rx="28" ry="6" fill="#1a1820"/>
      <rect x="75" y="160" width="50" height="10" fill="#2a2830"/>
      <!-- cup -->
      <polygon points="82,160 92,160 90,148 84,148" fill="#2a1a30"/>
      <ellipse cx="87" cy="148" rx="3" ry="1" fill="#0a0408"/>
      <!-- scale -->
      <ellipse cx="100" cy="158" rx="6" ry="4" fill="#8a2818"/>
      <ellipse cx="100" cy="157" rx="5" ry="3" fill="#c94828"/>
      <ellipse cx="99" cy="156" rx="2" ry="1" fill="#ffaa40"/>
      <!-- mirror -->
      <rect x="113" y="150" width="10" height="12" fill="#3a2818"/>
      <rect x="115" y="152" width="6" height="8" fill="#0a0a0a"/>
      <!-- Ysolde -->
      <g>
        <ellipse cx="220" cy="180" rx="18" ry="4" fill="#050408" opacity="0.6"/>
        <!-- robe -->
        <polygon points="205,180 235,180 232,140 208,140" fill="#2a1830"/>
        <polygon points="208,140 232,140 228,130 212,130" fill="#3a2040"/>
        <!-- head -->
        <circle cx="220" cy="122" r="6" fill="#d4b890"/>
        <!-- hair -->
        <path d="M213 119 Q220 108 227 119 L228 128 Q220 124 212 128 Z" fill="#4a2818"/>
        <!-- golden eyes -->
        <circle cx="218" cy="122" r="0.8" fill="#ffcc40"/>
        <circle cx="222" cy="122" r="0.8" fill="#ffcc40"/>
      </g>
      <!-- flame glow on her face -->
      <ellipse cx="180" cy="160" rx="60" ry="30" fill="#aac8e8" opacity="0.08"/>
    </svg>`,

  lair: () => `
    <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
      <defs>
        <radialGradient id="lairHeat" cx="0.5" cy="0.6">
          <stop offset="0" stop-color="#ff6018"/>
          <stop offset="0.4" stop-color="#8a2010"/>
          <stop offset="1" stop-color="#0a0402"/>
        </radialGradient>
      </defs>
      <rect width="320" height="200" fill="url(#lairHeat)"/>
      <!-- cavern vault -->
      <path d="M0 0 L0 200 L20 160 L40 100 L80 50 L160 30 L240 50 L280 100 L300 160 L320 200 L320 0 Z" fill="#0a0402"/>
      <!-- gold pile -->
      <ellipse cx="180" cy="175" rx="120" ry="22" fill="#3a2808"/>
      <ellipse cx="180" cy="172" rx="110" ry="16" fill="#8a6818"/>
      <ellipse cx="180" cy="168" rx="90" ry="10" fill="#c9a240"/>
      <!-- gold coins speckle -->
      <g fill="#ffcc40">
        <circle cx="120" cy="172" r="1.5"/>
        <circle cx="140" cy="168" r="1.5"/>
        <circle cx="160" cy="174" r="1.5"/>
        <circle cx="190" cy="170" r="1.5"/>
        <circle cx="210" cy="173" r="1.5"/>
        <circle cx="230" cy="169" r="1.5"/>
        <circle cx="145" cy="176" r="1.5"/>
        <circle cx="195" cy="175" r="1.5"/>
        <circle cx="225" cy="176" r="1.5"/>
      </g>
      <!-- DRAGON curled -->
      <g>
        <!-- body coil -->
        <ellipse cx="180" cy="150" rx="100" ry="22" fill="#6a1818"/>
        <ellipse cx="180" cy="145" rx="95" ry="18" fill="#8a2018"/>
        <ellipse cx="180" cy="142" rx="80" ry="12" fill="#a82820"/>
        <!-- scale texture -->
        <g fill="#6a1010" opacity="0.6">
          <circle cx="120" cy="140" r="3"/>
          <circle cx="135" cy="138" r="3"/>
          <circle cx="150" cy="140" r="3"/>
          <circle cx="165" cy="138" r="3"/>
          <circle cx="195" cy="138" r="3"/>
          <circle cx="210" cy="140" r="3"/>
          <circle cx="225" cy="138" r="3"/>
        </g>
        <!-- tail -->
        <path d="M260 148 Q290 145 285 135 Q275 128 268 138" fill="#6a1818"/>
        <!-- head, resting -->
        <ellipse cx="100" cy="135" rx="28" ry="14" fill="#8a2018"/>
        <ellipse cx="95" cy="132" rx="26" ry="11" fill="#a82820"/>
        <!-- snout -->
        <polygon points="75,135 95,128 95,142" fill="#6a1818"/>
        <!-- horns -->
        <polygon points="108,122 112,110 116,122" fill="#3a1808"/>
        <polygon points="100,124 102,112 106,124" fill="#3a1808"/>
        <!-- eye -->
        <ellipse cx="95" cy="130" rx="3" ry="2" fill="#ffcc40"/>
        <ellipse cx="94" cy="130" rx="1.5" ry="1.8" fill="#1a0a02"/>
        <!-- scar on brow, crescent -->
        <path d="M100 120 Q104 118 108 121" fill="none" stroke="#f0e0c0" stroke-width="1.2"/>
        <!-- nostril smoke -->
        <ellipse cx="78" cy="132" rx="4" ry="1.5" fill="#3a2a28" opacity="0.6"/>
        <ellipse cx="72" cy="128" rx="6" ry="2" fill="#3a2a28" opacity="0.3"/>
      </g>
      <!-- ledge with Valen -->
      <rect x="240" y="40" width="80" height="50" fill="#0a0402"/>
      <rect x="240" y="40" width="80" height="4" fill="#2a1812"/>
      <g>
        <!-- robe -->
        <polygon points="270,75 290,75 288,50 272,50" fill="#2a0818"/>
        <polygon points="272,50 288,50 285,44 275,44" fill="#3a1020"/>
        <circle cx="280" cy="40" r="4" fill="#d4b890"/>
        <!-- thin crown/circlet -->
        <rect x="276" y="36" width="8" height="1.5" fill="#ffcc40"/>
      </g>
      <!-- crossbowmen silhouettes -->
      <g fill="#1a0a08">
        <polygon points="30,175 40,175 38,155 32,155"/>
        <circle cx="35" cy="150" r="3"/>
        <rect x="38" y="160" width="10" height="1.5" fill="#3a2a1a"/>
        <polygon points="50,175 60,175 58,157 52,157"/>
        <circle cx="55" cy="152" r="3"/>
        <rect x="58" y="162" width="10" height="1.5" fill="#3a2a1a"/>
      </g>
      <!-- paladin silhouette foreground right -->
      <g>
        <polygon points="200,195 220,195 218,170 202,170" fill="#2a2830"/>
        <circle cx="210" cy="165" r="5" fill="#6a6860"/>
        <rect x="207" y="162" width="6" height="2" fill="#3a3830"/>
        <!-- sword raised -->
        <rect x="224" y="130" width="2.5" height="40" fill="#d4d0c4"/>
        <rect x="221" y="168" width="8" height="2" fill="#6a5020"/>
      </g>
    </svg>`,

  ending_dark: () => `
    <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
      <rect width="320" height="200" fill="#050202"/>
      <ellipse cx="160" cy="120" rx="180" ry="80" fill="#2a0a08" opacity="0.8"/>
      <!-- body of man on gold -->
      <ellipse cx="160" cy="150" rx="80" ry="10" fill="#3a2808"/>
      <ellipse cx="160" cy="148" rx="70" ry="7" fill="#8a6818"/>
      <g fill="#c9a240">
        <circle cx="110" cy="150" r="1"/>
        <circle cx="130" cy="148" r="1"/>
        <circle cx="200" cy="149" r="1"/>
        <circle cx="220" cy="148" r="1"/>
      </g>
      <!-- figure lying -->
      <ellipse cx="160" cy="140" rx="50" ry="6" fill="#2a1812"/>
      <circle cx="115" cy="138" r="5" fill="#8a7058"/>
      <path d="M110 135 Q115 132 120 135" fill="none" stroke="#e8d8b0" stroke-width="0.8"/>
      <path d="M110 140 Q115 143 120 140" fill="none" stroke="#5a4030" stroke-width="1"/>
      <!-- blood -->
      <ellipse cx="140" cy="142" rx="12" ry="2" fill="#6a0808"/>
      <!-- paladin standing -->
      <polygon points="180,180 200,180 198,140 182,140" fill="#1a1820"/>
      <circle cx="190" cy="134" r="5" fill="#5a5850"/>
      <!-- crossbow bolts flying toward him -->
      <line x1="250" y1="130" x2="210" y2="135" stroke="#d4c49a" stroke-width="1.5"/>
      <polygon points="210,135 215,132 215,138" fill="#d4c49a"/>
      <line x1="60" y1="150" x2="180" y2="148" stroke="#d4c49a" stroke-width="1.5"/>
      <polygon points="180,148 175,145 175,151" fill="#d4c49a"/>
      <!-- THOU ART DEAD text halo -->
      <text x="160" y="30" text-anchor="middle" fill="#8a1010" font-family="serif" font-size="18" font-weight="bold" letter-spacing="3">THOU ART DEAD</text>
    </svg>`,

  ending_light: () => `
    <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
      <defs>
        <radialGradient id="dawnGlow" cx="0.5" cy="0.5">
          <stop offset="0" stop-color="#ffd060"/>
          <stop offset="0.5" stop-color="#c06830"/>
          <stop offset="1" stop-color="#2a1410"/>
        </radialGradient>
      </defs>
      <rect width="320" height="200" fill="url(#dawnGlow)"/>
      <!-- mountain silhouette -->
      <polygon points="0,130 80,70 140,110 200,50 280,90 320,130 320,200 0,200" fill="#1a0a08"/>
      <!-- sun rising -->
      <circle cx="200" cy="80" r="22" fill="#ffe088" opacity="0.8"/>
      <circle cx="200" cy="80" r="14" fill="#ffffff"/>
      <!-- dragon wing silhouette, protective -->
      <path d="M40 160 Q80 80 180 100 Q140 130 100 150 Z" fill="#4a1812" opacity="0.9"/>
      <path d="M40 160 Q80 80 180 100" fill="none" stroke="#8a2820" stroke-width="1"/>
      <!-- dragon head -->
      <ellipse cx="60" cy="155" rx="22" ry="10" fill="#6a1818"/>
      <polygon points="42,155 62,150 62,160" fill="#4a1010"/>
      <ellipse cx="58" cy="153" rx="2" ry="1.5" fill="#ffcc40"/>
      <path d="M62 146 Q66 144 70 147" fill="none" stroke="#f0e0c0" stroke-width="1"/>
      <!-- paladin with sword raised, standing before dragon -->
      <polygon points="158,185 178,185 176,148 160,148" fill="#2a2830"/>
      <circle cx="168" cy="142" r="5" fill="#6a6860"/>
      <rect x="165" y="140" width="6" height="2" fill="#3a3830"/>
      <rect x="181" y="105" width="2" height="45" fill="#e8e0c8"/>
      <rect x="178" y="147" width="8" height="2" fill="#8a6020"/>
      <!-- claw on shoulder -->
      <path d="M158 150 Q150 148 146 152 Q148 156 156 155" fill="#6a1818"/>
      <!-- fallen chancellor in background -->
      <ellipse cx="260" cy="175" rx="14" ry="3" fill="#1a0808"/>
      <rect x="250" y="170" width="20" height="6" fill="#2a0818"/>
      <!-- bolts scattered -->
      <line x1="230" y1="180" x2="240" y2="178" stroke="#d4c49a" stroke-width="1"/>
      <line x1="245" y1="182" x2="255" y2="180" stroke="#d4c49a" stroke-width="1"/>
      <text x="160" y="28" text-anchor="middle" fill="#ffe088" font-family="serif" font-size="16" font-weight="bold" letter-spacing="2">THE ACCORD RENEWED</text>
    </svg>`
};
