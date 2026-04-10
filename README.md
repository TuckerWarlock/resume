# Resume — Tucker Parker-Warwick

Personal resume published via GitHub Pages.

🌐 **Live site:** https://tuckerwarlock.github.io/resume/

## Structure

```
index.html          # Resume content
style.css           # Stylesheet
scripts/
  export-pdf.js     # Puppeteer script for PDF generation
.github/workflows/
  pages.yml         # Deploy to GitHub Pages on push to main
  export-pdf.yml    # Export resume as PDF artifact
```

## GitHub Pages

The site deploys automatically on every push to `main` via the `pages.yml` workflow.

## PDF Export

The `export-pdf.yml` workflow runs on every push to `main` and generates `resume.pdf` using headless Chromium via Puppeteer. The PDF is uploaded as a workflow artifact (retained for 90 days) and can be downloaded from the [Actions tab](../../actions/workflows/export-pdf.yml).

To download the latest PDF:
1. Go to **Actions → Export Resume as PDF**
2. Click the most recent run
3. Download the `resume-pdf` artifact

## Local Development

Open `index.html` directly in a browser — no build step required.

To generate the PDF locally:

```bash
npm install puppeteer
node scripts/export-pdf.js
```
