<template>
  <NuxtLink :to="`/issues?page=${pageNumber}&per_page=10`">
    <Button
      class="h-10 min-w-[2.5rem] bg-green-300"
      v-show="current === pageNumber"
      bg="vue.200"
      >{{ pageNumber }}</Button
    >
    <Button
      class="h-10 min-w-[2.5rem] bg-none"
      v-show="current !== pageNumber"
      bg="none"
      >{{ pageNumber }}</Button
    >
  </NuxtLink>
</template>
<script lang="ts">
import { defineComponent, toRefs } from '@nuxtjs/composition-api';
import Button from '../Button.vue';
export default defineComponent({
  components: {
    Button,
  },
  props: {
    pageNumber: {
      type: Number,
      required: true,
    },
    current: {
      type: Number,
      default: 1,
    },
  },
});
</script>
