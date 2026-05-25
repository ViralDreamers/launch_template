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
const FORCE_COIN = null;

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

  /* ----------------------------- $JUICED ------------------------------ */
  juiced: {
    name: "JUICED COIN",
    ticker: "$JUICED",
    hook: "Natty? Never heard of her.",
    sub: "Hit the gym bro.",

    telegram: "https://t.me/c/3986563001/488/645",
    showTelegram: true,
    twitter: "https://x.com/JUICEDCOIN",
    pumpfun: "https://pump.fun/",

    ca: "",

    about: [
      "Everyone in the comments swears they're natural. The bar says otherwise.",
      "$JUICED is for the lifters who add another plate when the coach says stop. No roadmap, no PCT, no promises — just blue 20s and bad decisions. It's a memecoin, not a supplement. Don't put it in your body or your retirement account.",
    ],

    steps: [
      ["Get a wallet", "Install Phantom or any Solana wallet."],
      ["Fund it", "Send some SOL to your wallet."],
      ["Swap on pump.fun", "Paste the contract, swap SOL for the token."],
      ["You're seated", "Hold, post, and hit a PR with the gym."],
    ],

    theme: {
      mode: "dark",
      bg: "#0a1420",
      bg2: "#0f1d2e",
      surface: "#16263a",
      text: "#eaf2fb",
      muted: "#7d93ad",
      accent: "#1d6fb8",
      accent2: "#3fa9f5",
      glow: "rgba(29,111,184,0.4)",
      font_display: "'Anton', sans-serif",
      font_body: "'Inter', sans-serif",
      pattern: "grid",
    },
  },

/* ----------------------------- $CARTEL ------------------------------ */
  cartel: {
    name: "CARTEL",
    ticker: "$CARTEL",
    hook: "Earn your spot.",
    sub: "The community eats together.",

    telegram: "https://t.me/yourtelegram",
    showTelegram: true,
    twitter: "https://x.com/yourx",
    pumpfun: "https://pump.fun/",

    ca: "",

    about: [
      "Every empire starts in the shadows. This one starts on the chart.",
      "$CARTEL is a narco-noir memecoin — all the swagger, none of the substance. Treat it like a chip in a high-stakes game.",
    ],

    steps: [
      ["Get a wallet", "Install Phantom or any Solana wallet."],
      ["Fund it", "Send some SOL to your wallet."],
      ["Swap on pump.fun", "Paste the contract, swap SOL for the token."],
      ["You're in", "Hold, post, and ride with the family."],
    ],

    theme: {
      mode: "dark",
      bg: "#16091f",         // deep aubergine-black
      bg2: "#1f0d2b",        // lifted purple panel
      surface: "#2a1339",    // cards / boxes
      text: "#f3e9d2",       // warm parchment text
      muted: "#a98fc0",      // muted lavender
      accent: "#e8b54a",     // gold — the headline/CTA color
      accent2: "#7c4dbe",    // royal purple highlight
      glow: "rgba(232,181,74,0.35)",  // gold glow
      font_display: "'Anton', sans-serif",
      font_body: "'Inter', sans-serif",
      pattern: "felt",       // soft glow texture suits the noir look
    },
  },
};
         
/* ---- resolver: subdomain -> coin (with local override) ---- */
function resolveCoin() {
  if (FORCE_COIN && COINS[FORCE_COIN]) return COINS[FORCE_COIN];
  const host = window.location.hostname;
  const sub = host.split(".")[0].toLowerCase();
  return COINS[sub] || COINS.default;
}

