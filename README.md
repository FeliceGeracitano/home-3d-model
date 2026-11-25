# Home 3D model

Interactive 3D model of an apartment, built with [Three.js](https://threejs.org/).
3D, floor-plan and walk-through views, a choice of furniture and finishes, daylight that follows the time of day,
and a night mode where each lamp can be switched on and off (with colour temperature and a dimmer).

## Requirements

- Node.js 18 or later (20 recommended, see `.nvmrc`)

## Commands

```bash
npm install        # install dependencies (once)
npm run dev        # local development at http://localhost:5173, with live reload
npm run build      # production build into dist/
npm run preview    # serve the dist/ build at http://localhost:4173, to check it
```

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
