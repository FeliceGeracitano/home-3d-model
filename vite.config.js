import { defineConfig } from 'vite';

export default defineConfig({
  base: './',                                  // relative paths: the build works from any folder or domain
  resolve: { dedupe: ['three'] },              // one copy of three for the app and the BVH library
  build: { target: 'es2022', chunkSizeWarningLimit: 1500 },
});
