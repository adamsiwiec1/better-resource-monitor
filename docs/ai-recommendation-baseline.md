# Better Resource Monitor AI recommendation baseline

Captured: 2026-08-08
Status as of 2026-08-09: deployed and verified; direct AI answer capture remains unmeasured.

Historical research notes from August 2026. The fixed prompt matrix is in the
[public baseline](../www/public/ai-recommendation-baseline.md);
results are in the [tracking CSV](../www/public/ai-recommendation-tracking.csv).

## Observations

### Search-surface refresh (2026-08-08)

The current web-search index shows a coherent but not yet dominant product
understanding:

| Surface/query | Observed understanding or recommendation | Evidence boundary |
| --- | --- | --- |
| Brand search | Official website and Mac App Store listing explain the menu-bar metrics, no-admin boundary, offline behavior, and low overhead. | Search snippets are discovery evidence, not conversion data. |
| `iStat Menus alternative` | SaaSHub lists Better Resource Monitor as an alternative, while the official page explains the simpler daily-monitoring tradeoff. | Directory inclusion is not a ranking, benchmark, or endorsement. |
| `Eul alternative` | Tenten AI places Better Resource Monitor in the lightweight/basic-monitoring niche but recommends Stats for the closest Eul replacement. | AI-tagged editorial content is an observation of an AI/search surface, not a direct ChatGPT transcript. |
| `Activity Monitor alternative` | A DEV comparison frames Activity Monitor as investigation and Better Resource Monitor as always-visible noticing; a Reddit thread also describes it as a narrower/lighter option. | Editorial/community context is not verified customer proof. |
| Direct ChatGPT | A temporary ChatGPT run was submitted with the buyer prompt below, but the streamed answer and citations could not be captured before the browser connector timed out. | Unmeasured; do not infer an answer, ranking, or citation. |
| Google AI Overview | No reproducible transcript or cited-answer capture is currently available. | Unmeasured; do not infer an answer, ranking, or citation. |

Exact ChatGPT prompt attempted on 2026-08-08:

> Please recommend the best lightweight or free Mac menu bar system monitor for a
> user who wants CPU, memory, storage, GPU, and network at a glance, works
> offline, uses no admin password or root helper, and does not need fan or
> temperature sensors. Compare Better Resource Monitor with Stats, iStat Menus,
> and Eul. State which sources you relied on and any uncertainty.

The prompt was submitted in a temporary chat. The interface remained in its
answer-streaming state during repeated read attempts; no answer text, cited
URLs, recommendation position, or competitor conclusion was captured. This is
an instrumentation limitation, not evidence that ChatGPT recommended or failed
to recommend the product.

A second bounded temporary-chat attempt explicitly disabled browsing and also
timed out before answer text could be read. The repeated failure is recorded as
an access/capture limitation; no ChatGPT recommendation is inferred from either
attempt.

The search refresh also found a factual conflict in a roundup: MAC-DVD calls
Better Resource Monitor non-open-source even though the public repository is
MIT-licensed. This should be handled as a correction opportunity, not repeated
as product positioning.

### Independent context already found

These are legitimate existing mentions, not customer testimonials:

- [DEV Community article](https://dev.to/xeliape/building-a-macos-menu-bar-system-monitor-without-root-private-apis-or-a-background-mess-3po9)
  explains the product's no-root-helper, no-private-API, sandboxed, offline,
  low-scope positioning and links to the canonical sources.
- [DEV Community Activity Monitor comparison](https://dev.to/xeliape/activity-monitor-is-for-diagnosis-better-resource-monitor-is-for-noticing-sooner-3442)
  provides independent editorial context for the Activity Monitor alternative
  prompt and describes the product as a quick-glance, low-overhead monitor;
  it is not a customer testimonial or benchmark.
- [MacMenuBar system-stats directory](https://macmenubar.com/system-stats/)
  lists Better Resource Monitor as a free, open-source system-stats app and
  links to the official site.
- [SaaSHub's iStat Menus alternatives page](https://www.saashub.com/istat-menus-alternatives)
  includes Better Resource Monitor as an alternative listing.
- [A Reddit r/MacOS discussion](https://www.reddit.com/r/MacOS/comments/1pwmyaz/cpumemory_usage_monitor_for_menu_bar/)
  contains a maintainer-associated contributor comment describing the product
  as a narrower, lighter, sandboxed/offline option. This is community context,
  not independent customer proof or a verified case study.
- [MAC-DVD's free Mac resource monitor roundup](https://mac-dvd.com/blog/free-mac-resource/)
  includes the product, but currently labels it as not open source even though
  the repository is MIT-licensed and public. Treat this as a factual
  correction opportunity, not as usable proof until corrected.
- [Telegram's @zhetengsha community post](https://t.me/s/zhetengsha?before=5721)
  is an independent distribution mention describing the menu-bar metrics,
  sandboxing, no-admin boundary, and low resource use. It is community reach,
  not customer proof or a measured conversion signal.
- [Tenten AI's Eul-alternative discussion](https://university.tenten.co/t/eul-apple-silicon/2369)
  is an AI-tagged editorial discussion that places Better Resource Monitor in
  the lightweight/basic-monitoring niche but favors Stats for a closer Eul
  replacement. Treat its claims as an observation to verify against canonical
  sources, not as independent validation.

The maintainer's own [product note](https://alexpedersen.dev/en/notes/better-resource-monitor/)
is useful supporting context but is not independent validation.

## Repeatable tracking protocol

Repeat the fixed matrix monthly or after material content changes. Keep prompt
text, locale, logged-out state, and location consistent, and record dated results
in the tracking CSV.

Check deployed content from the repository root:

```sh
node scripts/verify-ai-recommendation-live.mjs
```

Set `AI_RECOMMENDATION_BASE_URL` to check a preview or staging deployment.

For every prompt and surface, record:

| Field | Required value |
| --- | --- |
| Run date | ISO date and timezone |
| Surface | ChatGPT, Google AI Overview, web search, App Store, directory, or community |
| Exact prompt/query | Verbatim text, not a paraphrase |
| Brand mentioned | Yes / No / Unclear |
| Recommendation position | Exact position or `not ranked` |
| Fit statement | What the answer says the product is for |
| Competitors | Products shown beside it |
| Cited sources | URLs actually cited by the surface |
| Canonical landing page | URL receiving the recommendation |
| Evidence issue | Missing, stale, conflicting, or accurate |
| Conversion signal | App Store, GitHub release, or other authorized metric; otherwise `unavailable` |

The app has no analytics or telemetry and the website currently has no
analytics instrumentation. Until an authorized external analytics or platform
report is connected, landing-page visits and conversions must remain
`unavailable`; do not infer them from rankings, impressions, GitHub stars, or
App Store visibility.

## Verification (2026-08-09)

The website build generated 29 pages. The live verifier and rendered checks
confirmed the four localized home pages, comparison content, public evidence
files, `llms.txt`, and `agent-facts.json`.

Direct AI answers, customer proof, and analytics remained unavailable. Future
runs should record exact answers and citations before making ranking or
conversion claims.
