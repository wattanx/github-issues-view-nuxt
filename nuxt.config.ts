import { defineNuxtConfig } from 'nuxt3';
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default defineNuxtConfig({
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  meta: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'github-issues-view-nuxt',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🐱‍👤</text></svg>',
      },
    ],
  },
  css: ['highlight.js/styles/github.css', 'github-markdown-css'],
  // @ts-ignore
  modules: ['@nuxtjs/emotion'],
  chakra: {
    icons: {
      iconPack: 'fa',
      iconSet: {
        faArrowRight,
        faCheck,
        faGithub,
      },
    },
  },
});
