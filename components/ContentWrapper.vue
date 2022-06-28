<template>
  <Box class="max-w-[1280px] m-auto p-5"><slot></slot></Box>
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
