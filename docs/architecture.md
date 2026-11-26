# Architecture

[← Back to README](../README.md)

## Project layout

```
index.html            page, menu and loading screen
src/main.js           the whole scene: plan, walls, furniture, lights, interactions
src/style.css         styles for the menu and panels
src/assets/           textures (parquet, Calacatta Viola porcelain)
vite.config.js        Vite configuration
amplify.yml           build settings for AWS Amplify Hosting
```

Dependencies: [`three`](https://threejs.org/) for rendering and
[`three-mesh-bvh`](https://github.com/gkjohnson/three-mesh-bvh) for the ray tracing behind global illumination.

## How `src/main.js` is organised

`src/main.js` is a single large file (about 4,600 lines). It is the model's code as it grew and is not yet split
into modules. Its sections, in order, each marked by a banner comment:

| Section | What it holds |
| --- | --- |
| Loader | Drives the loading screen defined in `index.html` |
| `PLAN` | The flat's geometry as data: rooms, walls, openings, fittings |
| Scene setup | Renderer, scene, cameras |
| Lighting hooks | Shader additions every lit material needs, for daylight and for night lamps |
| Textures and materials | Procedural textures (herringbone parquet, stone, relief) and the material set `M` |
| Builders | Slab, floors, walls, kitchen, wardrobe, bathrooms, doors, ceilings, labels, grid |
| Furniture | Shape helpers and the furniture catalogue (`CATALOG`) |
| Controls | Orbit, floor plan and walk-through modes, including touch |
| Tape measure | Measuring between two points in walk-through mode |
| UI | Wiring for the menu in `index.html` |
| Quality | Ambient occlusion, sun through the windows, sky |
| Global illumination | Light probes traced on the GPU, for daylight in walk-through mode |
| Room reflections | Mirrors and glossy surfaces |
| Night | The flat lit by its lamps |
| Theme, resize, loop | Light and dark theme, window resizing, the render loop |

## Conventions

- **Units.** `PLAN` values are in centimetres, traced from the architect's drawing (sheet E.03, 1:50).
  The origin is the top-left interior corner of Bedroom 1, with +x to the right and +y down the sheet.
  The sheet's y axis becomes z in Three.js.
- **Scene groups.** Built objects go into named groups in `G` (walls, floors, fittings, furniture, doors,
  ceilings and so on), which the menu toggles show and hide.
- **Everything is procedural.** There are no model files. Geometry is generated in code and only the textures
  in `src/assets/` are loaded.

## Adding a piece of furniture

Write a builder function that works in plan centimetres, then add `{ id, name, build }` to the matching slot in
`CATALOG`. The option then appears in the room's menu.

## Saved settings

Menu choices are stored in the browser's `localStorage`:

| Key | What it stores |
| --- | --- |
| `irnerio-arredi` | Furniture and finish choices |
| `irnerio-rooms` | Which room sections are open in the menu |
| `irnerio-quality` | Sun position |
| `irnerio-luci` | Lamp colour temperature and dimmer |
