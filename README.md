# Luthfi Yusuf, portfolio

Astro + Tailwind CSS v4. Static output, deployed on Vercel.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
```

## Where to edit

| What | Where |
| --- | --- |
| Text, projects, experience, skills | `src/data/site.ts` |
| Colors and fonts | `src/styles/global.css` (the `@theme` block) |
| Section layout | `src/components/*.astro` |
| Your photo | `src/assets/photo.jpg` (also `.png` or `.webp`) |
| MTSMUHBMS screenshots | `src/assets/projects/mtsmuhbms-1.png`, `mtsmuhbms-2.png`, ... |
| CV file | `public/Luthfi-Yusuf-CV.pdf` (replace to update) |

Photo and screenshots are picked up automatically. Until you add them, the page shows a placeholder.

Before taking screenshots: fix any visible bugs (for example the "Invalid Date" column on the school list) and blur real student or teacher data.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel: Add New, Project, import the repository.
3. Framework preset is detected as Astro. Keep the defaults and deploy.

Every push to `main` redeploys automatically.

## Later: Neon database

The page is static today. When you want a contact form or an admin panel for projects, add a Vercel adapter (`@astrojs/vercel`), a few server endpoints, and connect Neon with `@neondatabase/serverless`. Nothing here needs to be rewritten for that.

## TODO before going public

- [ ] Add your photo
- [ ] Add 3 to 5 MTSMUHBMS screenshots
- [ ] Confirm the GitHub username in `src/data/site.ts`
- [ ] Add `live` and `repo` links for MTSMUHBMS if they can be public
- [ ] Add repo links for the other projects if their repos are public
- [ ] Refresh the CV PDF if anything changes
