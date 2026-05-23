/* =====================================================================
   LAUNCH TEMPLATE — CONFIG
   ---------------------------------------------------------------------
   This is the ONLY file you edit per launch.
   Each key in COINS is one coin. The site reads the subdomain
   (levels.yourdomain.com -> "levels") and loads the matching entry.
   To add coin #3: copy a block, change the values, push. Done.

   Local testing: set FORCE_COIN below to preview a coin without DNS.
   ===================================================================== */

// Set to a coin key (e.g. "levels" or "allin") to force-preview locally.
// Leave as null in production so the subdomain decides.
const FORCE_COIN = "null";

const COINS = {
  /* ----------------------------- $LEVELS ----------------------------- */
  levels: {
    name: "LEVELS",
    ticker: "$LEVELS",
    hook: "There's levels to this game.",
    sub: "A tiered launch. Climb or get left behind.",

    // Links — fill these in per launch
    telegram: "https://t.me/yourtelegram",
    showTelegram: false,
    twitter: "https://x.com/yourx",
    pumpfun: "https://pump.fun/",      // paste the coin URL once minted

    // Contract address. Leave "" until mint — the UI shows a "soon" state.
    ca: "",

    // The narrative blurb (the part you rewrite most)
    about: [
      "Everyone starts at the bottom. The chart is a ladder.",
      "LEVELS is a tiered run — each level cleared, the next unlocks. No promises, no roadmap. Just the climb.",
    ],

    // "How to buy" steps — usually identical across coins, edit if needed
    steps: [
      ["Get a wallet", "Install Phantom or any Solana wallet."],
      ["Fund it", "Send some SOL to your wallet."],
      ["Swap on pump.fun", "Paste the contract, swap SOL for the token."],
      ["You're in", "Hold, post, and climb the levels with us."],
    ],

    // Theme — drives the CSS variables
    theme: {
      mode: "dark",
      bg: "#0a0e14",
      bg2: "#10161f",
      surface: "#151d29",
      text: "#e8eef5",
      muted: "#7c8a9e",
      accent: "#3ddc97",       // sleek green — "level up"
      accent2: "#2563eb",      // electric blue
      glow: "rgba(61,220,151,0.35)",
      font_display: "'Chakra Petch', sans-serif",
      font_body: "'Inter', sans-serif",
      pattern: "grid",         // sleek tech grid background
    },
  },

  /* ----------------------------- $ALLIN ------------------------------ */
  allin: {
    name: "ALL IN",
    ticker: "$ALLIN",
    hook: "Bull run's back. We're all in.",
    sub: "Push your stack to the center. No half measures.",

    telegram: "https://t.me/yourtelegram",
    showTelegram: false,
    twitter: "https://x.com/yourx",
    pumpfun: "https://pump.fun/",

    ca: "",

    about: [
      "The cards are dealt. The run is back. There's no folding from here.",
      "ALLIN is a crypto-casino-themed send. Shove the stack, ride the variance. Not financial advice — it's a memecoin, treat it like a chip on the felt.",
    ],

    steps: [
      ["Get a wallet", "Install Phantom or any Solana wallet."],
      ["Fund it", "Send some SOL to your wallet."],
      ["Swap on pump.fun", "Paste the contract, swap SOL for the token."],
      ["You're seated", "Hold, post, and shove with the table."],
    ],

    theme: {
      mode: "dark",
      bg: "#120308",
      bg2: "#1c0610",
      surface: "#250a16",
      text: "#fceef0",
      muted: "#b08a92",
      accent: "#e6123d",       // casino red
      accent2: "#f5c542",      // gold chip
      glow: "rgba(230,18,61,0.4)",
      font_display: "'Anton', sans-serif",
      font_body: "'Inter', sans-serif",
      pattern: "felt",         // casino felt + suit motif
    },
  },

  /* --------------------------- DEFAULT ------------------------------- */
  // Fallback if the subdomain doesn't match any coin (e.g. apex domain).
  default: {
    name: "LAUNCHPAD",
    ticker: "",
    hook: "Pick your play.",
    sub: "Live launches below.",
    telegram: "https://t.me/yourtelegram",
    showTelegram: false,
    twitter: "https://x.com/yourx",
    pumpfun: "",
    ca: "",
    about: ["This domain hosts our active launches. Head to a live coin's page."],
    steps: [],
    theme: {
      mode: "dark", bg: "#0a0a0a", bg2: "#111", surface: "#161616",
      text: "#eee", muted: "#888", accent: "#fff", accent2: "#888",
      glow: "rgba(255,255,255,0.15)",
      font_display: "'Anton', sans-serif", font_body: "'Inter', sans-serif",
      pattern: "grid",
    },
  },
};

/* ---- resolver: subdomain -> coin (with local override) ---- */
function resolveCoin() {
  if (FORCE_COIN && COINS[FORCE_COIN]) return COINS[FORCE_COIN];
  const host = window.location.hostname;          // e.g. levels.yourdomain.com
  const sub = host.split(".")[0].toLowerCase();   // -> "levels"
  return COINS[sub] || COINS.default;
}
