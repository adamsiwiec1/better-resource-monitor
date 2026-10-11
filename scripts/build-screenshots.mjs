import { execFileSync } from "node:child_process";
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const run = (command, args) => execFileSync(command, args, { cwd: root, stdio: "inherit" });
const renderArgs = [
  "run", "--manifest-path", "src-tauri/Cargo.toml", "--example", "render_tray_icon", "--",
  "--preset", "macos", "--scale", "0.6666667", "--storage", "19.5 GB",
];

for (const [variant, args] of [
  ["storage", ["--show-storage", "true", "--include-alert-row", "true"]],
  ["alert", ["--storage-available-bytes", "5000000000", "--cpu", "93", "--mem", "96", "--gpu", "91", "--down", "12 MB", "--up", "3.1 MB"]],
]) {
  run("cargo", [...renderArgs, "--out", `www/public/better-resource-monitor-${variant}.png`, ...args]);
}
run("pnpm", ["build:www"]);

const marketingCopy = JSON.parse(readFileSync(join(root, "www/src/lib/marketing-copy.json"), "utf8"));
let count = 0;
for (const { screenshotLang, screenshots } of Object.values(marketingCopy)) {
  const output = join(root, "images/appstore", screenshotLang);
  mkdirSync(output, { recursive: true });
  for (const key of Object.keys(screenshots)) {
    copyFileSync(join(root, "www/dist/images", `${key}-${screenshotLang}.png`), join(output, `${key}.png`));
    count++;
  }
}
console.log(`Saved ${count} App Store screenshots to images/appstore/`);
