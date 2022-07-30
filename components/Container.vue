<template>
  <Box class="mx-auto w-full pb-12 pt-3"> <slot></slot></Box>
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
