# GCI India — Website

A fully static website for **GCI India (Global Computer Institute)**, built with HTML5, CSS3, vanilla JavaScript and Bootstrap 5. No backend, database or server-side code — designed to be hosted directly on **GitHub Pages**.

## Structure

```
gciindia/
├── index.html
├── about.html
├── courses.html
├── services.html
├── ecommerce-training.html
├── digital-marketing.html
├── web-development.html
├── business-services.html
├── contact.html
├── privacy-policy.html
├── terms.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── CNAME
├── assets/
│   ├── css/style.css
│   ├── js/script.js
│   ├── images/ (logo, courses, services, general)
│   └── icons/
└── README.md
```

## Before you deploy — replace these placeholders

Search the project for the following and replace with real details:

- `[PHONE NUMBER]` — business phone number (used in `tel:` links)
- `[WHATSAPP NUMBER]` — WhatsApp number in international format, no `+` or spaces (used in `wa.me` links)
- `[EMAIL ADDRESS]` — business email (used in `mailto:` links)
- `[BUSINESS ADDRESS]` — physical address, shown on the Contact page
- `[BUSINESS HOURS]` — operating hours, shown on the Contact page
- `[SOCIAL MEDIA URL]` — links in the footer social icons (Facebook, Instagram, LinkedIn, YouTube)
- `[DATE]` — "last updated" dates on the Privacy Policy and Terms pages

Also:
- Replace the placeholder Google Maps embed on `contact.html` with your exact location.
- Add a real logo/favicon at `assets/images/logo/favicon.png` (a placeholder path is referenced in every page's `<head>`).
- Add a social share image at `assets/images/general/gci-india-og.jpg` (referenced in Open Graph/Twitter meta tags) — recommended size 1200×630px.
- Replace placeholder testimonials on the homepage with real, permission-given student testimonials once available.
- If you have a real, physical business address you want indexed by Google, add a `LocalBusiness` JSON-LD schema block — none is included by default since no address was supplied.

## Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `gciindia`).
2. Upload all files in this folder, preserving the folder structure.
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment**, set the source to the `main` branch (root).
5. Under **Custom domain**, enter `gciindia.com` (the `CNAME` file is already included).
6. Point your domain's DNS to GitHub Pages per [GitHub's custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
7. Wait for DNS/SSL to propagate, then verify the site loads at `https://gciindia.com/`.

## Notes

- All internal links use relative paths, so the site works from any subpath as well as the root domain.
- No JavaScript framework, build step or package manager is required — every file can be edited directly.
- Images are not included; add your own into `assets/images/` and update `src`/`alt` attributes, keeping filenames descriptive for SEO.
- Fonts (Space Grotesk, IBM Plex Sans), Bootstrap 5 and Bootstrap Icons are loaded from public CDNs — no local install needed.
