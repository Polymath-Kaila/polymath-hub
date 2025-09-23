# Polymath Kaila — Mega Portfolio

An immersive, data-driven, **Next.js + Tailwind** portfolio with a terminal-style landing,
3D hero, and JSON-powered content (projects, testimonials, experience, achievements).
No paid backend required. Update content by editing files in `/data` and pushing to Git.

## ✨ Features
- **Terminal Landing**: type `help`, `visit`, or hidden eggs like `sudo inspire`.
- **Three.js (react-three-fiber)** 3D hero element.
- **Framer Motion** animations and clean UI.
- **Data-driven**: projects/testimonials/experience/achievements from JSON.
- **Contact form** via Formspree (no backend hosting).

## 📁 Structure
```
/data               # Edit these to update the site
/components         # Reusable UI
/pages              # Next.js routes (terminal at /, site at /home)
/public/images      # Put your photos/screenshots here
/styles             # Tailwind setup
```
Colors are configured in `tailwind.config.js` (dark futuristic palette).

## 🥚 Egg File
Hidden commands are configured in `/data/eggs.json`. Add more keys:
```json
{
  "sudo inspire": ["line 1", "line 2"],
  "sudo secret": ["you found me!"]
}
```

## 🚀 Getting Started

### 1) Install
```bash
npm install
```

### 2) Run Dev Server
```bash
npm run dev
# open http://localhost:3000
```

### 3) Build & Start
```bash
npm run build
npm start
```

## ☁️ Deploy (Free)
### Vercel (recommended)
- Push to GitHub
- Import the repo into Vercel
- Build command: `next build` (default)
- Output: Next.js app (works with static assets).

### Netlify
- Build command: `npm run build`
- Publish directory: `.next`
- Check "Use Next.js Runtime" (or Netlify adapter).

## 🧑‍💻 Update Content
- Edit `/data/projects.json` for projects (title, tagline, tech, images, links).
- Add images to `/public/images/...` and reference them by path.
- Add testimonials in `/data/testimonials.json` with optional images/contacts.
- Update work history in `/data/experience.json`.
- Achievements in `/data/achievements.json`.

## 📬 Contact Form
- Replace the `action` URL in `components/ContactSection.jsx` with your Formspree endpoint.
- Or use EmailJS (client-side) if you prefer.

## 🔧 Optional: Decap (Netlify) CMS
You can add `/admin` with Decap CMS to edit JSON/Markdown in a visual dashboard using Git as storage. This keeps hosting **free**.

## 🛡️ Notes
- Images in `public/` are placeholders. Replace with real screenshots/photos.
- Keep Node >= 18 for best results.
- If using Netlify and images fail, you can disable Next Image optimization or keep `images.unoptimized = true` (already set).

## 🧭 CLI Commands in Terminal Landing
- `help`, `about`, `projects`, `teach`, `experience`, `achievements`, `contact`, `visit`, `clear`
- Easter eggs loaded from `/data/eggs.json`

---

Made with ❤️ by Polymath Kaila.
