<template>
  <component :is="as"><slot /></component>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'Box',
  props: {
    as: {
      type: String,
      default: 'div',
    },
  },
});
</script>
