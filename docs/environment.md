# Environment

[← Back to README](../README.md)

## Runtime

| Tool | Version | Notes |
| --- | --- | --- |
| Node.js | 26 | Pinned in `.nvmrc` and in `engines` in `package.json` |
| npm | bundled with Node.js | Uses `package-lock.json` |
| [Bun](https://bun.sh/) | optional | Alternative to npm, uses `bun.lock` |

With [nvm](https://github.com/nvm-sh/nvm), switch to the pinned Node.js version from the project folder:

```bash
nvm install
```

```bash
nvm use
```

## Package managers

The repository keeps two lockfiles: `package-lock.json` (npm) and `bun.lock` (Bun).
AWS Amplify builds with npm, so `package-lock.json` is the one that decides what gets deployed.
When you add or upgrade a dependency, update both lockfiles so they do not drift apart.

## Environment variables

None. The app has no `.env` file, no API keys and no backend: everything runs in the browser.

## Browser

- A browser with WebGL 2 for the full experience. Global illumination is switched off when only WebGL 1 is available.
- Walk mode uses the Pointer Lock API on desktop and an on-screen joystick on touch devices.
- Menu choices are stored in `localStorage` (see [Architecture](architecture.md#saved-settings)).

## External services

- Fonts (Archivo, JetBrains Mono) are loaded from Google Fonts at runtime. Everything else ships in the build.
