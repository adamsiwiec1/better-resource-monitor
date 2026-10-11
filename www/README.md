# Better Resource Monitor Website

Marketing and documentation website for [Better Resource Monitor](https://github.com/alexx855/better-resource-monitor), a lightweight menu bar system monitor for macOS.

## Development

Run these commands from the repository root:

```bash
# Install dependencies
pnpm install

# Start dev server (localhost:4321)
pnpm dev:www

# Build for production
pnpm build:www

# Preview production build locally
pnpm preview:www
```

Type-check with `pnpm check:www`. The site build also runs `www/*.test.mjs`.

## Deployment

Cloudflare Pages deploys `main` automatically through its Git integration.
GitHub Actions runs validation.
