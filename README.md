# Свадьба — Мариша & Иля

Wedding invitation landing page built from the [Figma design](https://www.figma.com/design/e4Ptrf9JwguvVhk7Z3yp8c/%D0%A1%D0%B2%D0%B0%D0%B4%D1%8C%D0%B1%D0%B0).

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Static assets (images, fonts, SVGs) live in `public/` and are served as-is. Running `npm run build` creates a `dist/` folder with the compiled site — that folder is generated output (already in `.gitignore`), not a second copy you maintain by hand. You can delete `dist/` anytime; it is recreated on the next build.

## Features

- Full-page layout matching Figma (hero, date, location, program, dress code, wishes)
- Button component with Primary / Secondary / Tertiary variants and hover states from the design system
- Sticky header: when you scroll past the top, the header pins and shows the «Я приду» CTA
