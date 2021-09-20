<template>
  <CHeading
    max-w="16ch"
    mx="auto"
    :font-size="{ base: '2.25rem', sm: '3rem', lg: '4rem' }"
    font-family="heading"
    font-weight="extrabold"
    mb="16px"
    line-height="1.2"
    >GitHub Issues View</CHeading
  >
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { CHeading } from '@chakra-ui/vue';

export default defineComponent({
  components: { CHeading },
  setup() {},
});
</script>
