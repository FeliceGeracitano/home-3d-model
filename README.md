# Home 3D model

Interactive 3D model of an apartment, built with [Three.js](https://threejs.org/).
3D, floor-plan and walk-through views, a choice of furniture and finishes, daylight that follows the time of day,
and a night mode where each lamp can be switched on and off (with colour temperature and a dimmer).

## Requirements

- Node.js 26 LTS (see `.nvmrc`; run `nvm use` if you use `nvm`) — or [Bun](https://bun.sh/)

## Commands

With **npm** (Node.js):

```bash
npm install        # install dependencies (once)
npm run dev        # local development at http://localhost:5173, with live reload
npm run build      # production build into dist/
npm run preview    # serve the dist/ build at http://localhost:4173, to check it
```

With **Bun**:

```bash
bun install              # install dependencies (once)
bun run dev              # local development (Bun script runner + Node)
bun --bun run dev        # local development running Vite on the Bun runtime
bun --bun run build      # production build into dist/ using the Bun runtime
bun --bun run preview    # serve the dist/ build at http://localhost:4173
```

No separate build step is needed for 3D models or shaders: geometry is generated procedurally in `src/main.js` and GLSL shaders are compiled by WebGL in the browser at runtime.

## Structure

```
index.html            page and menu
src/main.js           the whole scene: plan, walls, furniture, lights, interactions
src/style.css         styles for the menu and panels
src/assets/           textures (parquet, Calacatta Viola porcelain)
vite.config.js        Vite configuration
amplify.yml           build settings for AWS Amplify Hosting
```

`src/main.js` is a single large file (about 4,600 lines): it is the model's code as it grew, not yet split into
modules.

## Deploying to AWS Amplify

`amplify.yml` is ready to use: Amplify runs `npm ci` and `npm run build`, then publishes the `dist/` folder.

1. In Amplify Hosting, create a new app and connect this repository and the branch to publish.
2. Amplify picks up `amplify.yml` on its own: no build settings need changing.
3. Every push to the connected branch starts a new build.

The build uses relative paths (`base: './'` in `vite.config.js`), so it also works from a subfolder.

## Notes

- Choices made in the menu (furniture, colours, quality, lights) are saved in the browser (`localStorage`).
- Fonts are loaded from Google Fonts; everything else is in the build.
- The interface is in Italian.
- The model holds the real measurements of a home: consider keeping the repository private and the site protected.
