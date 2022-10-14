// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

const root = resolve(__dirname, 'src');

console.log(resolve(root, 'pages', 'about', 'about.html'));

export default defineConfig({
  resolve: {
    alias: {
      '~': root,
      '@': resolve(root, 'pages'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        template: resolve(root, 'pages', 'template', 'template.html'),
        gridIntro: resolve(root, 'pages', 'grid-intro', 'intro.html'),
        challengeLayout: resolve(
          root,
          'pages',
          'challenge-layout',
          'layout.html'
        ),

        advancedGrids: resolve(
          root,
          'pages',
          'advanced-grids',
          'advanced.html'
        ),
      },
    },
  },
});
