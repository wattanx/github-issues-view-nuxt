import { defineNuxtConfig } from '@nuxt/bridge';
const isAnalyzeMode = process.env.ANALYZE === 'true';

export default defineNuxtConfig({
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  bridge: {
    capi: true,
    meta: true,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'github-issues-view-nuxt',
    htmlAttrs: {
      lang: 'en',
    },
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'highlight.js/styles/github.css',
    'github-markdown-css',
    '@/assets/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/httpclient.ts'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxt/postcss8'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      // @ts-ignore
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    analyze: isAnalyzeMode
      ? {
          generateStatsFile: true,
          analyzerMode: 'disabled',
          openAnalyzer: false,
        }
      : false,
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: '_nuxt/[hash].mjs',
        },
      },
    },
  },
});
