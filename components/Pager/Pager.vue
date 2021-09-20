<template>
  <CFlex width="xl" justify-content="center">
    <NuxtLink v-show="prev !== 0" :to="`/issues?page=${prev}&per_page=10`">
      <CIconButton aria-label="prev page" icon="chevron-left" />
    </NuxtLink>
    <PageLink :page-number="1" :current="current" />
    <div v-show="current <= 4">
      <PageLink :page-number="2" :current="current" />
      <PageLink :page-number="3" :current="current" />
      <PageLink :page-number="4" :current="current" />
      <PageLink :page-number="5" :current="current" />
    </div>
    <div v-show="current > 4">...</div>
    <div v-show="current > 4">
      <PageLink :page-number="current - 2" />
      <PageLink :page-number="current - 1" />
      <PageLink :page-number="current" :current="current" />
      <PageLink v-show="current + 1 <= last" :page-number="current + 1" />
    </div>
    <div v-show="current > 4 && last > current + 1">
      <PageLink :page-number="current + 2" />
    </div>
    <div v-show="current + 3 < last">...</div>
    <PageLink v-show="current + 2 < last" :page-number="last" />
    <div v-show="last > current">
      <NuxtLink :to="`/issues?page=${next}&per_page=10`">
        <CIconButton area-label="next page" icon="chevron-right" />
      </NuxtLink>
    </div>
  </CFlex>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { CFlex, CIconButton } from '@chakra-ui/vue';
import PageLink from '@/components/Pager/PageLink.vue';

export type PagerProps = {
  first: number;
  prev: number;
  current: number;
  next: number;
  last: number;
};

export default defineComponent({
  components: { CFlex, CIconButton, PageLink },
  props: {
    first: {
      type: Number,
      default: 1,
    },
    prev: {
      type: Number,
      default: 0,
    },
    current: {
      type: Number,
      default: 1,
    },
    next: {
      type: Number,
      default: 2,
    },
    last: {
      type: Number,
      default: 2,
    },
  },
  setup() {},
});
</script>
