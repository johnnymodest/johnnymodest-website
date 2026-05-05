# TASK 15 — SEO and metadata

## Goal

Add metadata exports, robots.txt, and sitemap.xml.

## Dependencies

- All page tasks (04–11) complete
- Read [ARCHITECTURE.md](./ARCHITECTURE.md)

## Per-page metadata

Add `metadata` exports (Next.js App Router) to each page:

| Page           | Title                                            | Description                                                                                                 |
| -------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| Home           | Johnny Modest — Zero-nonsense product consulting | Senior product leadership. I parachute in, fix the thing, and leave before I become furniture. From $80/hr. |
| Zero Nonsense  | Zero Nonsense — Johnny Modest                    | What we believe, in plain language.                                                                         |
| Case Studies   | Case Studies — Johnny Modest                     | Selected work, told plainly.                                                                                |
| About          | About — Johnny Modest                            | Cross-domain pattern recognition.                                                                           |
| Contact        | Let's talk — Johnny Modest                       | Send a brief. No automated responses.                                                                       |

### Dynamic metadata

For `/case-studies/[slug]`, generate metadata from the MDX frontmatter.

### Additional routes

Create `robots.txt` and `sitemap.xml` via Next.js metadata routes (`app/robots.ts`, `app/sitemap.ts`).

## Acceptance criteria

- Each page has a unique `<title>` and `<meta name="description">`
- robots.txt is accessible at `/robots.txt`
- sitemap.xml lists all static routes
