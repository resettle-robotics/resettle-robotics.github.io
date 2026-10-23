# RESETTLE · Project Website

Research homepage for **RESETTLE: Robotic Recovery through Disagreement-Triggered Retrieval and Efficient Corrective Control**.

- **Website:** https://resettle-robotics.github.io/
- **Paper:** https://arxiv.org/abs/2610.12185
- **Research code:** https://github.com/JIA-Lab-research/RESETTLE

## Local preview

This is a buildless HTML/CSS/JavaScript website. From the repository root:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`. No npm packages or build step are required.

## Files

```text
index.html          # Content, authors, paper results, and citation
assets/css/         # Responsive styles
assets/js/          # Benchmark tabs, citation copying, and section navigation
assets/images/      # Paper figures and the demo poster
assets/videos/      # Original demonstration video
docs/               # Content sources and media provenance
```

## Publishing

GitHub Pages serves the root of the `main` branch. The repository must be named **resettle-robotics.github.io** to use the organization-level URL above. `.nojekyll` keeps the site buildless. Pushing to `main` updates the published page.

Keep asset links relative so local previews and the public site both work. The demo is served as a local MP4 rather than an expiring GitHub attachment URL.

## Content and design

Scientific claims and numerical results come from the RESETTLE paper. See [content sources](docs/CONTENT_SOURCES.md) for metric definitions and asset provenance. The design takes inspiration from [Zero-WAM](https://robbyant-research.github.io/Zero-WAM/) and the static research-page structure of [VisualPrompt-VLA](https://github.com/VisualPrompt-VLA/visualprompt-vla.github.io); this site's HTML, CSS, and JavaScript are written independently. No reference-site images, fonts, or source code are bundled.
