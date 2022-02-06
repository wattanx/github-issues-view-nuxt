<script setup lang="ts">
import { CFlex, CIconButton } from '@chakra-ui/vue';
import PageLink from '@/components/Pager/PageLink.vue';
type PropType = {
  first: number;
  prev: number;
  next: number;
  current: number;
  last: number;
};
const props = defineProps<PropType>();
</script>
<template>
  <CFlex width="xl" justify-content="center">
    <NuxtLink
      v-show="props.prev !== 0"
      :to="`/issues?page=${props.prev}&per_page=10`"
    >
      <CIconButton aria-label="prev page" icon="chevron-left" />
    </NuxtLink>
    <PageLink :pageNumber="1" :current="props.current" />
    <div v-show="current <= 4">
      <PageLink :pageNumber="2" :current="props.current" />
      <PageLink :pageNumber="3" :current="props.current" />
      <PageLink :pageNumber="4" :current="props.current" />
      <PageLink :pageNumber="5" :current="props.current" />
    </div>
    <div v-show="props.current > 4">...</div>
    <div v-show="props.current > 4">
      <PageLink :pageNumber="props.current - 2" />
      <PageLink :pageNumber="props.current - 1" />
      <PageLink :pageNumber="props.current" :current="props.current" />
      <PageLink
        v-show="props.current + 1 <= props.last"
        :page-number="props.current + 1"
      />
    </div>
    <div v-show="props.current > 4 && props.last > props.current + 1">
      <PageLink :pageNumber="props.current + 2" />
    </div>
    <div v-show="props.current + 3 < props.last">...</div>
    <PageLink
      v-show="props.current + 2 < props.last"
      :page-number="props.last"
    />
    <div v-show="props.last > props.current">
      <NuxtLink :to="`/issues?page=${props.next}&per_page=10`">
        <CIconButton area-label="next page" icon="chevron-right" />
      </NuxtLink>
    </div>
  </CFlex>
</template>
