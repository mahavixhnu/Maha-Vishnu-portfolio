# Maha Vishnu — Portfolio

Personal portfolio for Maha Vishnu, a 2026 B.Tech Computer Science and Engineering graduate from Amrita Vishwa Vidyapeetham in Coimbatore, India.

## Profile

The homepage cycles through “A Software Engineer,” “An Agentic Engineer,” and “Full Stack Engineer.”

Open to entry-level SDE roles and relocation across India. Contact: [mahavishnu.cmpg@gmail.com](mailto:mahavishnu.cmpg@gmail.com), +91 8825775782, [LinkedIn](https://www.linkedin.com/in/mahavishnu-dev/), or [GitHub](https://github.com/mahavixhnu).

## Projects

- QGC (QGroundControl) — GenAI and agentic AI layer for plain-English drone mission control.
- CampusCafe — real-time marketplace with payments, analytics, and a GenAI food assistant.
- Virtual Classroom — learning platform for classes 6–12 with five learning games.
- Counterfeit Product Verification System — blockchain and AWS S3 authenticity checks in under three seconds.

The project details, experience, education, certifications, and skills are maintained in [`src/features/portfolio/data/data.json`](src/features/portfolio/data/data.json).

## Local development

This is an Astro and React site using the template's original CSS modules, color palettes, and IBM Plex typography.

```bash
npm ci
npm run dev
npm run lint
npm run check
npm run build
```

Open `http://localhost:4321`. The supplied resume is available at `/Maha_Vishnu_Resume.pdf`, and the `/resume` page remains printable.

## Open items

- `[LINKS]`: add repository and demo URLs for each project in `data.json`. Homepage cards omit links until they are supplied.
- Production URL: [maha-vishnu-dev.vercel.app](https://maha-vishnu-dev.vercel.app/). Update `astro.config.mjs` if a custom domain is added later.
- Theme imagery: replace the labelled placeholder SVGs in `src/assets/hero/` if personal visuals are supplied.

## License

The code retains its original MIT copyright attribution in [`LICENSE`](LICENSE). Portfolio content is specific to Maha Vishnu.
