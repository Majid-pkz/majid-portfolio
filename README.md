# Majid Pourkazemi — Software Development Portfolio

A personal portfolio built with Next.js, React, TypeScript, and Tailwind CSS. The design presents projects and qualifications in a charcoal museum gallery with picture lights, a curved perspective carousel, identical frame dimensions, square ivory plaques, and expandable project stories.

## Pages

- `/`: Staff Pantry, TravelMate, and Laundry Weather Planner, with live demos and source links.
- `/qualifications/`: completed degree, web development boot camp, and TAFE certificate.
- `/about/`: professional background, internship, relevant experience, skills, and contact links.

## Run locally

Use Node.js 24.

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Checks and production build

```sh
npm test
npm run typecheck
npm run build
```

The build creates static HTML and assets under `out/`. The portfolio needs no database, API keys, or runtime server. JavaScript handles carousel navigation, touch swipes, keyboard arrows, and expandable stories. Motion respects the visitor's reduced-motion setting.

## Update the collection

- Edit profile, project, and qualification details in `src/lib/portfolio.ts`.
- Replace bundled project images under `public/projects/`.
- Adjust visual styling in `src/app/globals.css`.
- Set `NEXT_PUBLIC_SITE_URL` to your public URL when connecting a custom domain. On Vercel, the generated production URL is used automatically otherwise. See `.env.example`.

## GitHub setup from this ZIP

1. Create a GitHub repository named `majid-portfolio`.
2. Upload the contents of the extracted project folder to the repository root, then import it into Vercel.

The ZIP includes the application source, bundled assets, lockfile, tests, and configuration. Generated build output and installed dependencies are excluded. Upload the contents of the `majid-portfolio` folder to the repository root.

## Deploy to Vercel

1. Import this GitHub repository into the intended personal Vercel account.
2. Select the Next.js framework preset and Node.js 24.
3. Use `npm run build` as the build command. The static export directory is `out`.
4. Deploy, then open the production domain in a signed-out browser to confirm public access.
5. Future merges to the production branch trigger Vercel deployments through its Git integration.

This is a personal employer-facing portfolio. Do not add private credentials, employee records, or workplace-only material to the public repository.

## Assets and content

- The Staff Pantry catalogue screenshot comes from `Majid-pkz/employee-order-system/docs/screenshots/catalogue-desktop.png`.
- TravelMate uses `client/src/assets/oceanView.jpg` from the original TravelMate application as its project cover.
- The laundry planner has an original CSS cover; it is artwork, not a screenshot of live weather data.
- Qualification and experience details are based on the September 2026 software-development résumé.

## Verification scope

The unit checks cover carousel wrapping, centre/side placement, and responsive frame geometry. All three tests, the TypeScript check, and the static production build passed during packaging. Full browser inspection is still pending and will be completed when supported browser access is available; these checks do not claim that the linked external applications were retested.
