# Cluenex Blog — Quick Start Guide

## Overview

This is a **zero-cost, automated blog system** for publishing high-quality, LLM-optimized content in under 10 minutes per post.

**Tech Stack:**
- **11ty (Eleventy)** — Static site generator (free)
- **GitHub Pages** — Hosting (free)
- **GitHub Actions** — CI/CD automation (free)
- **Markdown** — Content format (simple, version-controllable)

**Workflow:**
```
Write markdown → Git push → GitHub Actions auto-builds → Live on GitHub Pages
```

---

## Setup (One-Time, 15 Minutes)

### 1. Install Node.js
Download and install Node.js 18+ from https://nodejs.org

### 2. Install Dependencies
```bash
npm install
```

### 3. Test Locally
```bash
npm run dev
```
Open http://localhost:8080 in your browser. You'll see the site with the example RSI post.

### 4. Set Up GitHub Repository
1. Create a new GitHub repository (e.g., `cluenex-blog`)
2. Push this code to `main` branch
3. Go to **Settings → Pages** → select "GitHub Actions" as source
4. (Optional) Add custom domain in **Settings → Pages → Custom domain**

### 5. GitHub Actions Will Handle Deployment
Every time you push to `main`:
- ✅ Automatically runs `npm run build`
- ✅ Generates HTML from markdown
- ✅ Deploys to GitHub Pages
- ✅ Site goes live in 2-3 minutes

---

## Adding a New Post (<10 Minutes)

### Step 1: Create Markdown File (2 minutes)

Copy the example file to use as a template:
```bash
cp src/content/rsi-explained.md src/content/your-topic.md
```

### Step 2: Fill Out Frontmatter (3 minutes)

Edit the YAML at the top of your markdown file:

```yaml
---
title: "Your Headline Here"
description: "One-line summary for SEO (150–160 chars)"
excerpt: "Longer description for article lead (2–3 sentences)"
keywords:
  - keyword1
  - keyword2
  - keyword3
category: "Technical Analysis"  # or "Glossary", "Blog", "Comparison"
breadcrumbs:
  - "Technical Analysis"
  - "technical-analysis"        # slug version for URL
author: "Cluenex"
date: 2024-05-20                # YYYY-MM-DD format
dateModified: 2024-05-20
readingTime: 8                   # estimated minutes
keyTakeaways:
  - "Key insight 1"
  - "Key insight 2"
  - "Key insight 3"
layout: base.njk
permalink: /learn/technical-analysis/your-topic/
---
```

### Step 3: Write Content in Markdown (bulk of time)

The content you write is standard Markdown with semantic HTML elements. No HTML required.

**Available components:**

#### Definition Box
```html
<div class="def-box">
<p class="definition-text">
<dfn><strong>Term Name</strong></dfn> is the definition...
</p>
<div class="def-source">Source citation</div>
</div>
```

#### Formula Block
````
```
RSI = 100 − [100 ÷ (1 + RS)]
RS  = Average Gain / Average Loss
```
````

#### Threshold Grid
```html
<div class="threshold-grid">
<div class="tc tc-1">
<div class="tc-range">0–20</div>
<div class="tc-label">Extreme Oversold</div>
</div>
<!-- ... more cards ... -->
</div>
```

#### Data Table
```html
<div class="tbl-wrap">
<table class="dtbl">
<thead>
<tr><th>Column 1</th><th>Column 2</th></tr>
</thead>
<tbody>
<tr><td>Data</td><td>Data</td></tr>
</tbody>
</table>
</div>
```

#### Callout Box
```html
<div class="callout callout-teal">
<div class="callout-label">Tip</div>
<p class="callout-text">Your insight here</p>
</div>
```

Use `callout-red` for warnings, `callout-teal` for tips.

#### Trade Log (Special Table)
```html
<div class="trade-log">
<div class="tl-header">
<span class="tl-title">Trade Log — Signal Type</span>
<span class="tl-ticker">TICKER · Daily · Indicator</span>
</div>
<table>
<!-- same structure as data table -->
</table>
</div>
```

### Step 4: Commit and Push (1 minute)

```bash
git add src/content/your-topic.md
git commit -m "Add: Your Topic"
git push
```

### Step 5: Done!

GitHub Actions automatically:
1. ✅ Builds your post
2. ✅ Adds schema.org JSON-LD
3. ✅ Generates citation metadata
4. ✅ Deploys to your domain
5. ✅ Live in 2-3 minutes

Visit your post at:
```
https://your-domain.com/learn/technical-analysis/your-topic/
```

---

## Content Templates

### Learn Guide (Default)
**When to use:** Comprehensive educational topics (RSI, MACD, Options, etc.)
**Structure:** Definition → Mechanics → Reference → How-to → Examples → FAQ

**File:** `src/content/your-topic.md`
**Frontmatter category:** "Technical Analysis" (or your category)
**Output:** Full-length article with TOC, citations, related articles

### Blog Post
**When to use:** Timely, news-tied, trend-driven topics
**Structure:** Hook → Context → Impact → Action → Related

**Frontmatter category:** "Blog" or specific category

### Glossary Entry
**When to use:** Short term definitions (50–300 words)
**Structure:** Definition → Formula (if applicable) → Example → Related terms

### Comparison Page
**When to use:** "X vs Y" topics (RSI vs MACD, Stocks vs Crypto, etc.)
**Structure:** Overview → Feature table → Pros/cons → When to use each

---

## File Structure

```
cluenex-blog/
├── src/
│   ├── _layouts/
│   │   └── base.njk              (Master template — ALL posts use this)
│   ├── _includes/                (Reusable template partials)
│   ├── content/
│   │   ├── rsi-explained.md      (Example post)
│   │   ├── your-topic.md         (Your new posts)
│   │   └── ...
│   ├── assets/
│   │   ├── css/
│   │   │   └── base.css          (All styling)
│   │   └── js/
│   │       └── main.js           (Interactive features)
│   └── index.html                (Homepage)
├── dist/                         (Generated HTML — don't edit)
├── .github/
│   └── workflows/
│       └── build-and-deploy.yml  (GitHub Actions automation)
├── .eleventy.js                  (11ty config)
├── package.json                  (Dependencies)
└── README.md                      (This file)
```

---

## Commands

```bash
# Local development with live reload
npm run dev

# Build only (no serve)
npm run build

# Watch for changes (no serve)
npm run watch

# Clean generated files
npm run clean
```

---

## SEO & LLM Optimization (Built-In)

Every post automatically includes:

✅ **Meta tags** — og:title, og:description, Twitter Card, canonical  
✅ **Schema.org JSON-LD** — Article, BreadcrumbList, FAQPage  
✅ **Semantic HTML** — proper heading hierarchy, `<article>`, `<section>`  
✅ **Data attributes** — `<data value="X">` for numeric extraction  
✅ **Speakable markup** — for voice search and LLM citation  
✅ **Breadcrumb navigation** — for crawlability  
✅ **Related articles** — for internal linking  

**No manual work needed** — frontmatter data auto-generates schema.

---

## Costs

| Component | Cost |
|-----------|------|
| GitHub | FREE (public repo) |
| GitHub Pages hosting | FREE |
| GitHub Actions CI/CD | FREE (10,000 minutes/month) |
| Domain name | $10–15/year (optional; cluenex.com) |
| **Total** | **$0 (or $10–15 for custom domain)** |

---

## Troubleshooting

### "npm: command not found"
→ Install Node.js: https://nodejs.org

### Site doesn't update after pushing
→ Check GitHub Actions logs: **Settings → Actions → Latest workflow**
→ Ensure `.eleventy.js` and `package.json` are in root

### Post doesn't show up
→ Confirm frontmatter has `layout: base.njk`
→ Check filename is in `src/content/` folder
→ Run `npm run build` locally to test

### Custom domain not working
→ Add `CNAME` file to `src/` folder with domain name
→ Update `.github/workflows/build-and-deploy.yml` cname field

---

## Pro Tips

### 1. Use Markdown Correctly
Write clean markdown; let CSS handle styling. Don't worry about HTML.

### 2. Add `<data>` Attributes for Numbers
```html
<data value="70">seventy</data>  <!-- helps LLMs extract values -->
```

### 3. Use Semantic HTML for Tables
```html
<div class="tbl-wrap">
<table class="dtbl">  <!-- class handles styling -->
<!-- data goes here -->
</table>
</div>
```

### 4. Images (Optional)
```markdown
![Alt text](path/to/image.jpg)
```
Store images in `src/assets/images/` and reference as `/assets/images/name.jpg`

### 5. Link to Other Posts
```markdown
[Link text](/learn/technical-analysis/other-topic/)
```

---

## Next Steps

1. ✅ Run `npm run dev` and preview locally
2. ✅ Create a GitHub repository
3. ✅ Push code to `main` branch
4. ✅ Set up GitHub Pages in repository settings
5. ✅ Create your first new post (`src/content/your-topic.md`)
6. ✅ Push and watch it go live automatically

---

## Questions?

Refer to:
- **11ty docs:** https://www.11ty.dev/docs/
- **Markdown guide:** https://www.markdownguide.org/
- **GitHub Pages:** https://pages.github.com/
- **Schema.org:** https://schema.org/

---

**Happy publishing!** 🚀
