# Development

[← Back to README](../README.md)

Set up the tools first: see [Environment](environment.md).

## Commands

With **npm**:

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies (once) |
| `npm run dev` | Local development at <http://localhost:5173>, with live reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the `dist/` build at <http://localhost:4173>, to check it |

With **Bun**:

| Command | What it does |
| --- | --- |
| `bun install` | Install dependencies (once) |
| `bun run dev` | Local development (Bun script runner, Vite on Node.js) |
| `bun --bun run dev` | Local development with Vite on the Bun runtime |
| `bun --bun run build` | Production build into `dist/` on the Bun runtime |
| `bun --bun run preview` | Serve the `dist/` build at <http://localhost:4173> |

## Good to know

- There is no separate build step for 3D models or shaders. Geometry is generated in `src/main.js`, and the
  GLSL shaders are compiled by WebGL in the browser at runtime.
- There are no automated tests or linters. Check a change by running `npm run build` and looking at the result
  with `npm run preview`.
- The interface text is in Italian.
