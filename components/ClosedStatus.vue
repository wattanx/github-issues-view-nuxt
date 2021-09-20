<template>
  <CFlex
    justify-content="center"
    align-items="center"
    width="15px"
    height="15px"
    rounded="full"
    border-color="#cf222e"
    border-width="1px"
    background-color="#fff"
  >
    <CIcon name="check" width="8px" height="8px" color="#cf222e"></CIcon>
  </CFlex>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { CIcon, CFlex } from '@chakra-ui/vue';

export default defineComponent({
  components: { CIcon, CFlex },
  setup() {},
});
</script>
