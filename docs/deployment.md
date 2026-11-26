# Deployment

[← Back to README](../README.md)

The site is hosted on [AWS Amplify Hosting](https://aws.amazon.com/amplify/hosting/).

**Live site:** <https://main.d2i49pzpszs17n.amplifyapp.com>

## How it works

Every push to the `main` branch starts a new build and publishes it to the live site.

Amplify reads `amplify.yml` from the repository, so no build settings need changing in the console:

1. `nvm install` and `nvm use` select the Node.js version from `.nvmrc`.
2. `npm ci` installs dependencies from `package-lock.json`.
3. `npm run build` creates the production build.
4. The `dist/` folder is published.

`node_modules` is cached between builds.

## Setting it up from scratch

1. In Amplify Hosting, create a new app and connect this repository.
2. Choose the branch to publish (`main`).
3. Keep the detected build settings: Amplify picks up `amplify.yml` on its own.

## Notes

- The build uses relative paths (`base: './'` in `vite.config.js`), so it also works from a subfolder or a
  custom domain.
- To check a build before pushing, run `npm run build` and `npm run preview` locally
  (see [Development](development.md)).
- The model holds the real measurements of a home. Consider keeping the repository private and protecting the
  site, for example with Amplify's access control (username and password).
