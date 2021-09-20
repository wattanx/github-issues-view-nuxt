import { Plugin } from '@nuxt/types';
import { AxiosClient, IHttpClient } from '~/framework';

declare module '@nuxt/types' {
  // nuxtContext.app.$myInjectedFunction inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $client: IHttpClient;
  }
  // nuxtContext.$myInjectedFunction
  interface Context {
    $client: IHttpClient;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $client: IHttpClient;
  }
}

const HttpClientPlugin: Plugin = (_context, inject) => {
  inject('$client', new AxiosClient());
};

export default HttpClientPlugin;
