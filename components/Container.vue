<template>
  <Box
    class="mx-auto w-full pb-12 pt-3 sm:max-w-xl sm:px-6 md:max-w-7xl md:px-8"
  >
    <slot></slot
  ></Box>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Box from './Box.vue';

export default defineComponent({
  components: {
    Box,
  },
});
</script>
