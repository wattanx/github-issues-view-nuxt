<template>
  <CFlex
    justify-content="center"
    align-items="center"
    width="15px"
    height="15px"
    rounded="full"
    border-color="#1A7F37"
    border-width="1px"
    background-color="#fff"
  >
    <CBox
      width="5px"
      height="5px"
      rounded="full"
      background-color="#1A7F37"
    ></CBox>
  </CFlex>
</template>
<script lang="ts">
import { CFlex, CBox } from '@chakra-ui/vue';

export default defineComponent({
  components: { CFlex, CBox },
  setup() {},
});
</script>
