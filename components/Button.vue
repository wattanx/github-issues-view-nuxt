<template>
  <conponent :is="as" v-bind="$attrs">
    <slot />
  </conponent>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'Button',
  props: {
    as: {
      type: String,
      default: 'button',
    },
  },
});
</script>
