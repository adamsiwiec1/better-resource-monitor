# macOS Start at login

[`macos_autostart.rs`](../src-tauri/src/macos_autostart.rs) registers the bundled
app with `SMAppService.mainAppService()`. The menu reflects the live macOS
registration status. Raw development binaries do not register a login item.

App bundles must not contain `Contents/Library/LaunchAgents`.
[CI](../.github/workflows/ci.yml) checks this packaging requirement.

To verify a change, install the exact TestFlight build, enable **Start at login**,
log out and back in, and confirm the app starts and its menu agrees with macOS
Login Items. Use the [TestFlight workflow](../.github/workflows/testflight.yml)
to upload the build.
