<template>
  <NuxtLink :to="`/issues?page=${pageNumber}&per_page=10`">
    <CButton v-show="current === pageNumber" bg="vue.200">{{
      pageNumber
    }}</CButton>
    <CButton v-show="current !== pageNumber" bg="none">{{
      pageNumber
    }}</CButton>
  </NuxtLink>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { CButton } from '@chakra-ui/vue';

export default defineComponent({
  components: { CButton },
  props: {
    pageNumber: {
      type: Number,
      default: 1,
    },
    current: {
      type: Number,
      default: 1,
      required: false,
    },
  },
  setup() {},
});
</script>
