<template>
  <Box as="header" class="sticky top-0 z-50 bg-white px-0 py-4 shadow-sm">
    <Box class="m-auto max-w-[1280px]">
      <Box class="px-6">
        <NuxtLink to="/">
          <Box as="a" class="items-center no-underline">
            GitHub Issues View
          </Box>
        </NuxtLink>
      </Box>
    </Box>
  </Box>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Box from './Box.vue';

export default defineComponent({
  components: { Box },
  setup() {},
});
</script>
