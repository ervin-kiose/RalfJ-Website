# RalfJay Website — CLAUDE.md

## Project Overview
Ralf Jay's professional DJ & music producer website. Multi-page static site.
Designed by Ervin Kiose. Deployed on Vercel with auto-deploy on push.

## Tech Stack
- Pure HTML/CSS/JavaScript — no framework, no build step
- Shared stylesheet: `styles.css`
- Shared script: `script.js`
- Icons: Lucide (loaded via CDN `https://unpkg.com/lucide@latest`)
- Fonts: Google Fonts — `Bebas Neue` (headings), `Outfit` (body)
- Contact form: FormSubmit.co (no backend needed)submits to formsubmit.co/Ralfjaymusic@gmail.com with honeypot spam protection and redirect back to contact.html
- Vercel Web Analytics included on all pages
- Social links in footer on every page — Instagram, TikTok, Spotify, SoundCloud, Beatport, Apple Music, Traxsource

## Pages
| File | Title | Description |
|------|-------|-------------|
| `index.html` | Home | Full-screen video hero background, footer with social links |
| `biography.html` | Biography | Bio text with multi-language switcher (flag buttons), stats |
| `spotify.html` | Spotify | Spotify embeds |
| `events.html` | Events | Event cards with images, date, location, status badges |
| `contact.html` | Contact | Contact form + social media icons grid |

## Design System
- **Colors:**
  - `--primary-color: #FF0080` (hot pink)
  - `--secondary-color: #00F0FF` (cyan)
  - `--dark-bg: #0A0A0A`
  - `--darker-bg: #050505`
  - `--text-light: #FFFFFF`
  - `--text-gray: #B0B0B0`
  - `--accent-glow: rgba(255, 0, 128, 0.3)`
- **Fonts:** `Bebas Neue` for all titles/headings, `Outfit` for body text
- **Gradient:** `linear-gradient(135deg, #FF0080, #00F0FF)` used on nav links, buttons, section title underlines
- **Responsive breakpoints:** 1024px, 768px, 480px
- Nav stays horizontal on all screen sizes (no hamburger menu)

## Transparency & Background
- **Navbar:** transparent (`rgba(0,0,0,0.15)`) with `backdrop-filter: blur(10px)`, slightly darker when scrolled (`rgba(0,0,0,0.3)`)
- **Navbar logo:** uses `mix-blend-mode: screen` to make the JPG's black background transparent
- **Footer:** fully transparent on all pages (`background: transparent`)
- **Body gradient:** `linear-gradient(135deg, #0a0a0a 0%, #1a0a14 50%, #0a1419 100%)` with `background-attachment: fixed`
- **Mobile gradient fix:** `background-attachment: fixed` doesn't work on mobile browsers — uses `body::before` pseudo-element with fixed position instead (in 768px media query)
- **Logo watermark:** `fulllogo_transparent_nobuffer.png` shown as absolute-positioned background on spotify, events, contact, and biography pages (`.page-section > .bio-logo`)
- **Contact watermark:** lower opacity (0.15 vs 0.25)

## Hero (index.html)
- Full-screen video background (`hero-video.mp4`)
- Video: autoplay, muted, loop, playsinline
- Pink/cyan gradient overlay on video (`mix-blend-mode: multiply`)
- Hero logo/subtitle currently commented out
- Home page navbar: `position: absolute` to overlay the video
- Home page footer: `position: absolute; bottom: 0` to overlay the video

## Mobile-Specific (768px breakpoint)
- **Home page:** video uses `object-fit: contain` with `transform: scale(1.5) translateY(-5%)` for controlled zoom; footer is `position: fixed` at bottom
- **Spotify page:** footer is `position: fixed` at bottom; section uses `flex: none` to prevent stretching; Spotify embed uses dark theme (`&theme=0`)
- **Contact page:** reduced font sizes, input padding, textarea min-height (80px), form gaps (8px); footer is `position: fixed` at bottom
- **All pages:** nav stays horizontal (no hamburger), responsive font/padding reductions at 768px and 480px

## Images & Assets (images/ folder)
- `Logo1-Jpeg-02.jpg` — nav logo (served from GitHub raw URL)
- `fulllogo_transparent_nobuffer.png` — hero logo (commented out) + background watermark on content pages
- `grayscale_transparent.png` — grayscale version of logo (available but not currently used)
- `InstagramTransparent.png`, `TikTokTransparent.png`, `SpotifyTransparent.png`, `SoundcloudTransparent.png`, `BeatportTransparent.png`, `AppleTransparent.png`, `TraxsourceTransparent.png` — footer social icons
- `hero-video.mp4` — hero background video
- `Video 6-7-23, 23 35 09.mov` — original video file
- Favicons: `favicon-32x32.png`, `favicon-16x16.png`, `apple-touch-icon.png`

## Artist Info 
-Name: Ralf Jay
-Based: Athens, Greece (originally from Ioannina)
-Genre: Afro House, Melodic House & Techno, Tech House
-Active since: 2009
-Stats: 150+ venues, 8+ countries, 15+ years
-Key venues: Dybuk Athens, Juan Rodriguez, Cavo Paradiso (Mykonos), Tropicana Mykonos, Spilia, Party Villas
-International: Italy, Albania, Moscow, Turkey, French Alps, Germany, Bulgaria
-Contact email: Ralfjaymusic@gmail.com

## Social Links (footer on all pages)
- Instagram: https://www.instagram.com/ralf_jay/
- TikTok: https://www.tiktok.com/@ralf_jay
- Spotify: https://open.spotify.com/artist/0VPjoHRGyaRZboop09IXBq
- SoundCloud: https://soundcloud.com/ralfjay
- Beatport: https://www.beatport.com/artist/ralf-jay/905437
- Apple Music: https://music.apple.com/gr/artist/ralf-jay/1525718659

## script.js Key Features
- Language switcher on biography page (flag buttons, saves to `localStorage`)
- Navbar scroll effect: adds `.scrolled` class after 50px scroll
- Scroll animations via IntersectionObserver on `.event-card`, `.bio-content`, `.spotify-content`
- Lucide icons initialized on load

## Deployment
```bash
git add .
git commit -m "your message"
git push
```
Vercel auto-deploys on push to main.
