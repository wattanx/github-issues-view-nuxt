<template>
  <Flex class="w-[36rem] justify-center">
    <NuxtLink v-show="prev !== 0" :to="`/issues?page=${prev}&per_page=10`">
      <IconButton aria-label="prev page" as="chevron-left" />
    </NuxtLink>
    <PageLink :pageNumber="1" :current="current" />
    <div v-show="current <= 4">
      <PageLink :pageNumber="2" :current="current" />
      <PageLink :pageNumber="3" :current="current" />
      <PageLink :pageNumber="4" :current="current" />
      <PageLink :pageNumber="5" :current="current" />
    </div>
    <div v-show="current > 4">...</div>
    <div v-show="current > 4">
      <PageLink :pageNumber="current - 2" />
      <PageLink :pageNumber="current - 1" />
      <PageLink :pageNumber="current" :current="current" />
      <PageLink v-show="current + 1 <= last" :page-number="current + 1" />
    </div>
    <div v-show="current > 4 && last > current + 1">
      <PageLink :pageNumber="current + 2" />
    </div>
    <div v-show="current + 3 < last">...</div>
    <PageLink v-show="current + 2 < last" :page-number="last" />
    <div v-show="last > current">
      <NuxtLink :to="`/issues?page=${next}&per_page=10`">
        <IconButton area-label="next page" as="chevron-right" />
      </NuxtLink>
    </div>
  </Flex>
</template>
<script lang="ts">
import Flex from '../Flex.vue';
import PageLink from '@/components/Pager/PageLink.vue';
import IconButton from '../icons/IconButton.vue';
import ChevronLeft from '../icons/ChevronLeft.vue';
import ChevronRight from '../icons/ChevronRight.vue';
import { defineComponent, toRefs } from '@nuxtjs/composition-api';
export default defineComponent({
  components: {
    Flex,
    PageLink,
    IconButton,
    ChevronLeft,
    ChevronRight,
  },
  props: {
    first: {
      type: Number,
      required: true,
    },
    prev: {
      type: Number,
      required: true,
    },
    next: {
      type: Number,
      required: true,
    },
    current: {
      type: Number,
      default: 1,
    },
    last: {
      type: Number,
      required: true,
    },
  },
});
</script>
