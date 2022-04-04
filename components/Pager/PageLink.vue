<script setup lang="ts">
import { CButton } from '@chakra-ui/vue';
type PropType = {
  pageNumber: number;
  current?: number;
};
const props = defineProps<PropType>();
</script>
<template>
  <NuxtLink :to="`/issues?page=${props.pageNumber}&per_page=10`">
    <CButton v-show="props.current === props.pageNumber" bg="vue.200">{{
      pageNumber
    }}</CButton>
    <CButton v-show="props.current !== props.pageNumber" bg="none">{{
      pageNumber
    }}</CButton>
  </NuxtLink>
</template>
