<template>
  <Flex
    class="h-[15px] w-[15px] items-center justify-center rounded-full border-[1px] border-[#1A7F37] bg-white"
  >
    <Box class="h-[5px] w-[5px] rounded-full bg-[#1A7F37]"></Box>
  </Flex>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Box from './Box.vue';
import Flex from './Flex.vue';

export default defineComponent({
  components: { Flex, Box },
  setup() {},
});
</script>
