# Vendored fonts for build-time image generation

These fonts are read by `www/src/lib/renderer.ts` (generated OG/screenshot
images) and `www/generate-badges.mjs` (download badges) so builds do not
depend on network access. The app tray uses a system font instead.

| File | Family | Source | License |
| --- | --- | --- | --- |
| `JetBrainsMono-Regular.ttf` | JetBrains Mono 400 | fonts.gstatic.com (jetbrainsmono v24) | SIL OFL 1.1 |
| `JetBrainsMono-Bold.ttf` | JetBrains Mono 700 | fonts.gstatic.com (jetbrainsmono v24) | SIL OFL 1.1 |
| `NotoSansJP-Bold.ttf` | Noto Sans JP 700 | fonts.gstatic.com (notosansjp v56) | SIL OFL 1.1 |
| `NotoSansSC-Bold.ttf` | Noto Sans SC 700 | fonts.gstatic.com (notosanssc v40) | SIL OFL 1.1 |

All four files declare the SIL Open Font License in their embedded `name`
table (nameID 14: scripts.sil.org/OFL), which permits redistribution.
Copyrights: JetBrains Mono © 2020 The JetBrains Mono Project Authors;
Noto Sans JP/SC © 2014-2021 Adobe, with Reserved Font Name 'Source'.
