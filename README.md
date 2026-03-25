# Portfolio Website

This is a simple React-based portfolio website.

## 🚀 Getting Started (Run Locally)

1. Install dependencies:

```
npm install
```

2. Start the development server:

```
npm start
```

- The app will run at: http://localhost:3000
- Changes will automatically reload in the browser.

---

## 🛠️ Build for Production

To create an optimized production build:

```
npm run build
```

This generates a `build/` folder with static files.

---

## 🌍 Deployment (GitHub Pages)

This project is deployed using **gh-pages**.

### Manual Deployment

Run:

```
npm run deploy
```

What happens:

- Runs `npm run build`
- Publishes the `build/` folder to the `gh-pages` branch
- GitHub Pages serves the site from that branch

---

## 🔀 Branches

- `main` → source code (development)
- `gh-pages` → production build (auto-generated, do not edit manually)

---

## ⚙️ Notes

- The `homepage` field in `package.json` must match:
  https://ArturSlimak.github.io
