# Deploy Cluenex to Cloudflare Pages
## → learn.cluenex.com

**Why Cloudflare Pages over Netlify / GitHub Pages:**
- Zero deploy limits (Netlify caps you at 500/month on free)
- No workflow config to break (unlike GitHub Actions)
- Fastest CDN globally (250+ edge locations)
- Custom subdomain setup is 2 minutes
- 100% free, forever

---

## Step 1 — Push your code to GitHub

You need a GitHub repo with your Cluenex Content files. If you don't have one yet:

1. Go to https://github.com → **New repository**
2. Name it `cluenex-blog` (or anything you like)
3. Set it to **Public** (required for free Pages)
4. **Do NOT** initialize with README (you already have files)

Then open **Terminal** (Windows: press Win+R → type `cmd` → Enter) and run:

```bash
cd "C:\Users\user\Documents\Claude\Projects\Cluenex Content"
git init
git add .
git commit -m "Initial commit: Cluenex blog"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cluenex-blog.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

---

## Step 2 — Create Cloudflare Pages project

1. Go to https://dash.cloudflare.com
2. Create a free account if you don't have one
3. In the left sidebar → **Workers & Pages**
4. Click **Create application** → **Pages** tab → **Connect to Git**
5. Click **Connect GitHub** → authorize Cloudflare
6. Select your `cluenex-blog` repository → **Begin setup**

---

## Step 3 — Configure the build settings

On the "Set up builds and deployments" page, enter exactly:

| Setting | Value |
|---|---|
| Project name | `cluenex-blog` |
| Production branch | `main` |
| Framework preset | `None` |
| Build command | `npm run build` |
| Build output directory | `docs` |

Then expand **Environment variables** and add:

| Variable | Value |
|---|---|
| `NODE_VERSION` | `18` |

Click **Save and Deploy**.

Cloudflare will now check out your repo, install dependencies, run the build, and deploy. This takes about 2–3 minutes the first time.

Your site will be live at: `https://cluenex-blog.pages.dev`

---

## Step 4 — Add custom domain: learn.cluenex.com

Once the first deployment succeeds:

1. In your Cloudflare Pages project → **Custom domains** tab
2. Click **Set up a custom domain**
3. Enter: `learn.cluenex.com`
4. Click **Continue**

**If cluenex.com is managed by Cloudflare DNS already:**
Cloudflare will automatically add the CNAME record. Done.

**If cluenex.com uses a different DNS provider (GoDaddy, Namecheap, etc.):**
You'll need to add this DNS record manually at your domain registrar:

```
Type:   CNAME
Name:   learn
Value:  cluenex-blog.pages.dev
TTL:    Auto
```

After adding it, click **Activate domain** in Cloudflare. SSL/HTTPS is automatic — no setup needed.

DNS propagation takes 5–30 minutes. After that, `learn.cluenex.com` is live.

---

## Step 5 — Publishing new articles (every time)

Every time you add a new article:

```bash
cd "C:\Users\user\Documents\Claude\Projects\Cluenex Content"
git add src/content/your-new-article.md
git commit -m "Add: Article title here"
git push
```

Cloudflare Pages auto-detects the push and deploys in ~2 minutes. No other steps.

---

## Step 6 — (Optional) Delete the old docs/ folder before pushing

Since `docs/` is now in `.gitignore`, Git won't track it. But if you have old files committed, run once:

```bash
git rm -r --cached docs/
git commit -m "Remove built docs from tracking"
git push
```

This cleans up your repo. Not required, but keeps it tidy.

---

## Build settings reference (for future use)

```
Build command:       npm run build
Build output dir:    docs
Node version:        18
Framework:           Eleventy (11ty)
```

---

## Troubleshooting

**Build fails on Cloudflare:**
→ Check the build log in Cloudflare Pages → Deployments → click the failed deployment
→ Most common cause: `NODE_VERSION` env variable not set. Make sure it's `18`.

**Site shows but no CSS/styling:**
→ The build output dir is wrong. Confirm it's set to `docs` (not `dist`, not `_site`).

**Custom domain not working:**
→ Check that the CNAME record is correct at your DNS provider. Use https://dnschecker.org to verify `learn.cluenex.com` resolves.

**Old content still showing after push:**
→ Wait 2–3 minutes. Check Cloudflare Pages → Deployments to see if the build is running.
