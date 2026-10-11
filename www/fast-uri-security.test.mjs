import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";

// Resolve through the owning packages so this works with pnpm's isolated layout.
let require = createRequire(import.meta.url);
for (const dependency of ["@astrojs/check", "@astrojs/language-server", "volar-service-yaml", "yaml-language-server", "ajv"]) {
  require = createRequire(require.resolve(dependency));
}
const fastUri = require("fast-uri");

test("rejects backslash authority introducers before URL policy can diverge", () => {
  const baseUrl = "https://allowed.com/";
  const relativeUrl = String.fromCharCode(92, 92) + "evil.com/path";

  assert.equal(new URL(relativeUrl, baseUrl).hostname, "evil.com");
  assert.throws(() => fastUri.resolve(baseUrl, relativeUrl));
});
