# rararulab-site

Official GitHub Pages website for RararuLab.

## Stack

- Pure static site (`index.html`, `styles.css`, `main.js`)
- GitHub Actions Pages deployment

## Local preview

```bash
python3 -m http.server 8788
```

Open [http://127.0.0.1:8788](http://127.0.0.1:8788).

## Deploy

1. Push to `main`
2. GitHub Action `Deploy Pages` publishes site
3. Enable GitHub Pages with `GitHub Actions` as source

## Notes

- This repository is intentionally separated from product repos (like `rara`) to support multi-product lab branding.
