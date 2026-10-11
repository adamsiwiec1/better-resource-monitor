# Website design

Keep the site a compact, dark, monospace document. A centered column, square
panels, and simple tables should make the content easy to read.

## Source of truth

Colors, typography, spacing, and interaction styles live in
[`Layout.astro`](www/src/layouts/Layout.astro). Reuse those variables and shared
classes rather than copying values into page styles.

## Rules

- Use the existing orange brand color for links, focus, and emphasis.
  Derive any state variation from it instead of adding accent colors.
- Keep typography monospace and panels square, with thin borders.
- Give all text links the same brand-filled treatment with white text and
  no underline, including language, footer, and external links.
- Image badge links (`a:has(img)`) remain transparent without shadows.
  Comparison cards keep their panel treatment.
- Reuse `.content-panel` for cards and FAQs. Keep tables horizontally
  scrollable on small screens.
- Keep interactions short and transform-only. Respect reduced motion.
- Avoid extra typefaces, rounded cards, glass effects, and decorative shadows.
