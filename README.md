# Launch Template

One repo, every coin. Each coin lives at its own subdomain
(`levels.yourdomain.com`, `allin.yourdomain.com`) served from this same template.
Adding a launch = editing one file.

## Files
- `config.js` — **the only file you edit per launch.** All copy, links, theme.
- `index.html` — the template. Renders whichever coin the subdomain points to.

## Add a new coin (the whole process)
1. Open `config.js`.
2. Copy the `levels` or `allin` block, paste it, rename the key (e.g. `moon:`).
3. Edit: `name`, `ticker`, `hook`, `sub`, `about`, links, and `theme` colors.
4. Leave `ca: ""` until you mint — the page auto-shows a "dropping at launch" state.
   Paste the contract address in after mint and push again.
5. Commit + push. Add the DNS record (one-time, see below) and it's live.

## Preview locally (no DNS needed)
In `config.js`, set `FORCE_COIN = "levels"` (or any key) and open `index.html`.
Set it back to `null` before deploying to production.

## Deploy (one-time setup)
1. Push this repo to GitHub.
2. Import it into **Vercel** or **Netlify** (free, static, instant).
3. Add your domain. In DNS, add a **wildcard**: `*.yourdomain.com` → CNAME to the host.
   That single wildcard means every future `coin.yourdomain.com` works automatically —
   no per-coin DNS setup ever again.
4. After mint, update `ca` in config and push. Live in seconds.

## What's intentionally NOT in here
No fake audit/partner badges, no fabricated holder counts, no fake countdowns.
That stuff creates rug/fraud exposure and the degens see through it anyway.
The footer carries a one-line risk note — it's what signals you're *not* promising
returns, which protects the operation. Keep it.
