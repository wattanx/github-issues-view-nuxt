<template>
  <Box
    class="w-full pb-12 pt-3 sm:px-6 md:px-8 mx-auto sm:max-w-xl md:max-w-7xl"
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
