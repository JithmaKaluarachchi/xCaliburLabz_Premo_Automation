# Premo Heritage Automation

Playwright end-to-end tests for the Premo Heritage Villa website at [premoheritage.com](https://www.premoheritage.com/). The suite covers the home, About, Contact, and Destinations pages, including navigation, content, responsive behavior, accessibility, and performance checks.

## Requirements

- Node.js 18 or later
- npm

## Setup

```bash
npm install
npx playwright install chromium
```

## Run tests

```bash
npm test
```

Run with a visible browser or open the latest HTML report:

```bash
npm run test:headed
npm run report
```

The tests exercise the live Premo Heritage website, so results depend on the site and network being available. Playwright reports and test output are generated locally and are excluded from version control.

## Project layout

- `tests/` — Playwright specifications, organized by page or feature
- `playwright.config.js` — test discovery, browser, and report settings

