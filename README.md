# Modular Synthesis Field Guide

A Next.js web app containing tutorials, patch diagrams, and techniques for a personal Eurorack modular synthesis system. Designed for continuous deployment via GitHub + Vercel.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Global CSS with CSS variables (no Tailwind, no CSS-in-JS)
- **Deployment**: Vercel (auto-deploys on every push to `main`)
- **Version control**: GitHub

---

## 🚀 Getting Started (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open http://localhost:3000
```

---

## 📦 Deploying to Vercel via GitHub

Follow these steps **once** to connect the repo to Vercel. After that, every push to `main` automatically triggers a new build and deployment.

### Step 1: Create a GitHub Repository

```bash
# In the project root:
git init
git add .
git commit -m "Initial commit: Modular Synthesis Field Guide"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (use "Continue with GitHub")
2. Click **"Add New Project"**
3. Import your GitHub repository from the list
4. Vercel will auto-detect **Next.js** — no configuration needed
5. Click **"Deploy"**

That's it. Vercel will:
- Build the project using `npm run build`
- Deploy it to a `.vercel.app` URL
- Set up a webhook so every future push to `main` triggers a new deployment

### Step 3: Verify Auto-Deploy is Working

Make a small change (e.g. edit the subtitle in `src/app/page.js`), commit, and push:

```bash
git add .
git commit -m "Test auto-deploy"
git push
```

Check your Vercel dashboard — a new build should appear within seconds.

---

## 📁 Project Structure

```
modular-synthesis-guide/
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout with metadata
│   │   └── page.js            # Main page (assembles all sections)
│   ├── components/
│   │   ├── Nav.js             # Sticky navigation with scroll tracking
│   │   ├── SystemSection.js   # Your system rack + Erebus/Play/Digitakt
│   │   ├── ConceptsSection.js # Core synthesis concepts
│   │   ├── PatchesSection.js  # Tabbed patch ideas (6 categories)
│   │   ├── TechniquesSection.js # Collapsible technique guides
│   │   ├── GrandmotherSection.js # Moog Grandmother deep dive
│   │   └── ReferenceSection.js # Module reference cards
│   └── styles/
│       └── globals.css        # All styles, CSS variables, animations
├── public/                    # Static assets
├── next.config.js
├── vercel.json                # Vercel deployment config
├── package.json
└── .gitignore
```

---

## ✏️ Making Changes

### Adding a New Patch

Open `src/components/PatchesSection.js` and add to the relevant array (e.g. `AMBIENT_PATCHES`):

```js
{
  title: 'My New Patch',
  subtitle: 'A brief description',
  tags: ['ambient', 'beginner'],
  desc: 'Longer description of the patch and what it achieves.',
  steps: [
    'First step with <span class="module-ref">Module Name</span> reference.',
    'Second step...',
  ],
  tip: 'Optional tip text shown in the yellow box.',
}
```

### Adding a New Module to Reference

Open `src/components/ReferenceSection.js` and add to the relevant category array in `MODULES`:

```js
{
  id: 'ref-mymodule',          // must be unique, used for anchor links
  name: 'Module Name',
  vendor: 'Manufacturer · Xhp',
  body: 'Description of what it does and how it fits your system.',
  badge: { label: 'CATEGORY', color: 'var(--accent)' },
}
```

### Styling

All visual tokens are CSS variables in `src/styles/globals.css`:

```css
--accent: #e8ff40;    /* Yellow highlight */
--accent2: #ff6b35;   /* Orange / audio */
--accent3: #40d9ff;   /* Cyan / CV */
--accent4: #b040ff;   /* Purple / mod */
```

---

## 🔄 Git Workflow

```bash
# Feature branch (optional but recommended)
git checkout -b feature/new-patch-ideas
# ... make changes ...
git add .
git commit -m "Add three new ambient patches"
git push origin feature/new-patch-ideas
# Open a PR on GitHub → merge to main → Vercel auto-deploys
```

---

## 📝 License

Personal use. All synthesis content is specific to the system described.
