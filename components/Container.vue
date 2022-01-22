<script setup lang="ts">
import { defineComponent, PropType, toRefs } from '@nuxtjs/composition-api';
import { CBox } from '@chakra-ui/vue';

type ContainerProps = {
  flexDirection?: string | string[];
  width?: string;
  maxWidth?: string;
  py?: string;
  height?: string;
};
const props = defineProps<ContainerProps>();
</script>
<template>
  <CBox
    w="full"
    pb="12"
    pt="3"
    :max-w="{ base: 'xl', md: '7xl' }"
    mx="auto"
    :px="{ base: '6', md: '8' }"
    :v-bind="{ props }"
  >
    <slot></slot>
  </CBox>
</template>
