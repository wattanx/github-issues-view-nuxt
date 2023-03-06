import { defineNuxtConfig } from '@nuxt/bridge';
const isAnalyzeMode = process.env.ANALYZE === 'true';

export default defineNuxtConfig({
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode

  ssr: false,
  bridge: {
    capi: true,
    meta: true,
    nitro: false,
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
  buildModules: ['@nuxtjs/device', '@nuxtjs/style-resources', '@nuxtjs/svg'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-user-agent',
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // @ts-ignore
    transpile: ['unhead', 'iron-webcrypto'],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
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
    // @ts-ignore
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: '_nuxt/[hash].mjs',
        },
      },
    },
  },
});
