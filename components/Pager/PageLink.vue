<script setup lang="ts">
import { CButton } from '@chakra-ui/vue';
import Button from '../Button.vue';
import { toRefs } from '@nuxtjs/composition-api';
type PropType = {
  pageNumber: number;
  current?: number;
};
const props = defineProps<PropType>();
</script>
<template>
  <NuxtLink :to="`/issues?page=${props.pageNumber}&per_page=10`">
    <Button
      class="h-10 min-w-[2.5rem] bg-green-300"
      v-show="props.current === props.pageNumber"
      bg="vue.200"
      >{{ pageNumber }}</Button
    >
    <Button
      class="h-10 min-w-[2.5rem] bg-none"
      v-show="props.current !== props.pageNumber"
      bg="none"
      >{{ pageNumber }}</Button
    >
  </NuxtLink>
</template>
