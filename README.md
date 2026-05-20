# Cluenex Blog Platform

**A zero-cost, LLM-optimized blog system for publishing high-quality educational content in <10 minutes per post.**

![Architecture](https://img.shields.io/badge/Cost-$0-brightgreen) ![Build](https://img.shields.io/badge/Build-Automated-blue) ![Speed](https://img.shields.io/badge/Publish%20Speed-%3C10%20min-orange)

---

## Features

### ✨ For Content Creators
- **Markdown-based** — Write in simple Markdown, no HTML
- **Beautiful template** — Professional design (dark theme, responsive)
- **YAML frontmatter** — Easy metadata (title, keywords, category, etc.)
- **< 10 minutes per post** — Minimal overhead, maximum focus on writing
- **Automatic builds** — Push to Git, GitHub Actions handles the rest
- **Schema.org JSON-LD** — SEO optimization baked-in, no manual work

### ✨ For LLMs
- **Semantic HTML** — Proper heading hierarchy, `<article>`, `<section>` tags
- **Structured data** — JSON-LD schema for Article, FAQ, BreadcrumbList
- **Data attributes** — `<data value="X">` for number extraction
- **Speakable markup** — Voice search optimization
- **Clean tables** — Proper `<table>`, `<th>`, `<td>` structure
- **Citation box** — APA, MLA, Chicago formats built-in

### ✨ For Your Wallet
- **$0 hosting** — GitHub Pages
- **$0 CI/CD** — GitHub Actions (10,000 min/month free)
- **$0 build tool** — 11ty (open-source)
- **~$10-15/year** — Custom domain (optional; cluenex.com)

---

## Quick Start

### 1. Install (1 minute)
```bash
npm install
```

### 2. Run Locally (1 minute)
```bash
npm run dev
# Open http://localhost:8080
```

### 3. Create Your First Post (10 minutes)
```bash
cp src/content/rsi-explained.md src/content/your-topic.md
# Edit frontmatter + write Markdown
```

### 4. Publish (1 minute)
```bash
git push
# Automatically builds & deploys to GitHub Pages
```

**That's it.** For detailed setup, see [QUICK_START.md](./QUICK_START.md).

---

## Architecture

```
┌─────────────────┐
│   You write     │
│   Markdown +    │
│   YAML front    │
│   matter        │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Git push to   │
│   main branch   │
└────────┬────────┘
         │
         ▼
┌─────────────────────────────────────┐
│ GitHub Actions (Automated)          │
│ 1. npm install                      │
│ 2. npm run build (11ty)             │
│ 3. Generate HTML + schema.org JSON  │
│ 4. Deploy to GitHub Pages           │
└────────┬────────────────────────────┘
         │
         ▼
┌──────────────────────────┐
│ Live on your domain      │
│ (github.com or custom)   │
└──────────────────────────┘
```

### Why This Stack?

| Component | Why? |
|-----------|------|
| **11ty** | Fast, flexible, zero config for blogs, pure Markdown support |
| **Nunjucks templates** | Reusable, condition-ready, perfect for schema.org |
| **GitHub Pages** | Free hosting, custom domain support, HTTPS |
| **GitHub Actions** | Free CI/CD, no 3rd-party services, instant deploys |
| **Markdown** | Version-controllable, human-readable, no vendor lock-in |

---

## File Structure

```
cluenex-blog/
├── src/
│   ├── _layouts/
│   │   └── base.njk                (Master template — all posts use this)
│   │
│   ├── content/
│   │   ├── rsi-explained.md        (Example post)
│   │   ├── your-topic.md           (← Add new posts here)
│   │   └── ...
│   │
│   ├── assets/
│   │   ├── css/base.css            (All styling, 800+ lines)
│   │   ├── js/main.js              (Reading progress, TOC highlight)
│   │   └── images/                 (Optional)
│   │
│   └── index.html                  (Homepage — placeholder)
│
├── dist/                           (⚠️ Don't edit — auto-generated)
│   ├── index.html
│   ├── learn/technical-analysis/
│   │   ├── rsi-explained/index.html
│   │   ├── your-topic/index.html
│   │   └── ...
│   └── assets/
│
├── .github/
│   └── workflows/
│       └── build-and-deploy.yml    (GitHub Actions config)
│
├── .eleventy.js                    (11ty configuration)
├── package.json                    (Dependencies + scripts)
├── QUICK_START.md                  (← Read this first)
└── README.md                        (This file)
```

---

## How to Add a Post

### Step 1: Create File
```bash
cp src/content/rsi-explained.md src/content/your-new-topic.md
```

### Step 2: Edit Frontmatter
```yaml
---
title: "Your Headline"
description: "Short description (150 chars)"
keywords: [keyword1, keyword2, keyword3]
category: "Technical Analysis"
breadcrumbs: ["Technical Analysis", "technical-analysis"]
date: 2024-05-20
readingTime: 8
keyTakeaways:
  - "Key insight 1"
  - "Key insight 2"
---
```

### Step 3: Write Markdown Content
```markdown
## Definition

Your content here.

## How It Works

More content.
```

### Step 4: Push to GitHub
```bash
git add src/content/your-new-topic.md
git commit -m "Add: Your New Topic"
git push
```

**✅ Live in 2–3 minutes.**

---

## Template Components

The `base.njk` template provides these reusable, styled components:

### Definition Box
```html
<div class="def-box">
  <p class="definition-text"><strong>Term</strong> is...</p>
  <div class="def-source">Source citation</div>
</div>
```

### Formula Block
````markdown
```
RSI = 100 − [100 ÷ (1 + RS)]
```
````

### Threshold Grid
```html
<div class="threshold-grid">
  <div class="tc"><div class="tc-range">0–20</div><div class="tc-label">Oversold</div></div>
  <!-- ... -->
</div>
```

### Data Table
```html
<div class="tbl-wrap">
  <table class="dtbl">
    <thead><tr><th>Column</th></tr></thead>
    <tbody><tr><td>Data</td></tr></tbody>
  </table>
</div>
```

### Callout Boxes
```html
<div class="callout callout-teal">
  <div class="callout-label">Tip</div>
  <p class="callout-text">Your insight</p>
</div>
```
Use `callout-teal` for tips, `callout-red` for warnings.

### Trade Log
```html
<div class="trade-log">
  <div class="tl-header">
    <span class="tl-title">Trade Log</span>
    <span class="tl-ticker">NVDA · Daily</span>
  </div>
  <table><!-- ... --></table>
</div>
```

---

## SEO & LLM Optimization

Every post **automatically** gets:

✅ **Meta tags** → og:title, og:description, Twitter Card, canonical  
✅ **Schema.org JSON-LD** → Article, BreadcrumbList, FAQPage  
✅ **Semantic HTML** → `<article>`, `<section>`, proper heading hierarchy  
✅ **Data attributes** → `<data value="X">` for LLM extraction  
✅ **Speakable markup** → Voice search optimization  
✅ **Breadcrumbs** → Navigation structure  
✅ **Reading progress** → Sticky progress bar  
✅ **Table of contents** → Auto-generated, sticky sidebar  
✅ **Citation formats** → APA, MLA, Chicago built-in  

**No manual work required.** Frontmatter data automatically generates schema.

---

## Deployment

### Option 1: GitHub Pages (Default)
```bash
git push  # Automatic deploy via GitHub Actions
```

### Option 2: Custom Domain
1. Update `.github/workflows/build-and-deploy.yml`:
   ```yaml
   cname: cluenex.com
   ```

2. Add `CNAME` file to `src/`:
   ```
   cluenex.com
   ```

3. Point your domain's DNS to GitHub Pages

---

## Performance

- **Build time:** < 30 seconds (11ty is fast)
- **First Contentful Paint:** < 1s (static HTML)
- **Lighthouse:** 95+ across the board
- **Deploy time:** 2–3 minutes (GitHub Pages)

---

## Costs Breakdown

| What | Cost | Why? |
|------|------|------|
| Hosting | $0 | GitHub Pages |
| CI/CD | $0 | GitHub Actions (10k min/mo free) |
| Build tool | $0 | 11ty (open-source) |
| Domain | ~$10–15/yr | Optional; cluenex.com |
| **Total** | **$0** | (or ~$1/month for domain) |

---

## Comparison to Alternatives

| Feature | Cluenex Blog | WordPress | Medium | Substack |
|---------|--------------|-----------|--------|----------|
| Cost | $0 | $10+/mo | $5+/mo | Free |
| Speed | <1s | 3–5s | 2–4s | 2–3s |
| Control | Full | Medium | Low | Low |
| LLM-optimized | ✅ Yes | ⚠️ Maybe | ⚠️ Maybe | ❌ No |
| Markdown | ✅ Yes | ⚠️ Block editor | ❌ Wysiwyg | ⚠️ Limited |
| Version control | ✅ Git | ❌ Database | ❌ Cloud | ❌ Cloud |
| Self-hosted | ✅ Yes | ✅ Yes | ❌ No | ❌ No |

---

## FAQs

### "Can I schedule posts?"
Edit `.github/workflows/build-and-deploy.yml` to add a schedule trigger:
```yaml
on:
  schedule:
    - cron: '0 10 * * 1'  # 10am every Monday
```

### "Can I add comments?"
Not built-in, but you can integrate Disqus, Giscus, or similar. Requires editing `base.njk`.

### "Can I use custom fonts?"
Yes. Update the `<link>` tags in `base.njk` or add CSS `@font-face` rules to `base.css`.

### "Can I add Google Analytics?"
Yes. Add a Google Analytics script tag to `base.njk` before `</body>`.

### "Can I auto-generate a sitemap?"
11ty has plugins for this. See https://www.11ty.dev/docs/plugins/

---

## Roadmap

- [ ] Automated sitemap generation
- [ ] RSS feed
- [ ] Search functionality
- [ ] Dark/light mode toggle
- [ ] Comment system (Giscus)
- [ ] Analytics dashboard
- [ ] Scheduled posts via GitHub workflows

---

## Support

- **11ty docs:** https://www.11ty.dev/
- **Markdown guide:** https://www.markdownguide.org/
- **GitHub Pages:** https://pages.github.com/
- **Schema.org:** https://schema.org/

---

## License

MIT — Use freely for personal and commercial projects.

---

## Acknowledgments

- Template design inspired by modern finance & tech blogs
- 11ty community for excellent documentation
- GitHub for free hosting & CI/CD

---

**Ready to publish?** See [QUICK_START.md](./QUICK_START.md) for step-by-step instructions.
