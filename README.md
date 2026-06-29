# Breaking Barriers to AI Safety

A static site showcasing the projects from the **Breaking Barriers to AI Safety** hackathon
(London Initiative for Safe AI × BlueDot Impact, 13 June 2026).

Landing page with all projects (click any card for full details), a photo gallery, and an about
section. No build step — plain HTML, CSS and JS.

## Structure

```
index.html        Page markup (hero, projects, gallery, about)
styles.css        All styling
app.js            Renders project cards, modal, gallery lightbox, filters
assets/
  projects.js     Project data (title, subtitle, category, authors, description, links)
  brand/          Logo + shoggoth mascots
  gallery/        Web-optimised photos (full) and thumb/ (thumbnails)
materials/        Original source images/stickers (git-ignored — not deployed)
```

## Editing projects

All project content lives in [`assets/projects.js`](assets/projects.js). Edit that array to add,
remove or change a project — no other file needs touching.

## Deploy (GitHub Pages)

1. Push to GitHub.
2. **Settings → Pages →** Source: *Deploy from a branch*, Branch: `main`, folder: `/ (root)`.
3. The site serves from the repo root (`index.html`). `.nojekyll` is included so all files are
   served as-is.

## Photos

Gallery images are downsized copies (full ≤1600px, thumbs ≤700px) generated from the originals in
`materials/Gallery/` with macOS `sips`. The originals are git-ignored to keep the repo light; keep
a separate backup of them.
