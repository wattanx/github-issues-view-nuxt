<template>
  <CBox
    w="full"
    pb="12"
    pt="3"
    :max-w="{ base: 'xl', md: '7xl' }"
    mx="auto"
    :px="{ base: '6', md: '8' }"
    :v-bind="{ containerProps }"
  >
    <slot></slot>
  </CBox>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';
import { CBox } from '@chakra-ui/vue';

type ContainerProps = {
  flexDirection: string;
  width: string;
  maxWidth: string;
  py: string;
  height: string;
};

export default defineComponent({
  components: { CBox },
  props: {
    containerProps: {
      type: Object as PropType<ContainerProps>,
      required: false,
      default: () => ({}),
    },
  },
  setup() {},
});
</script>
