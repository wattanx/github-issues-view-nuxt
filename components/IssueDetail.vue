<template>
  <Box>
    <Box class="border-b-[1px] border-b-[#e2e2e2]">
      <Stack class="flex-row items-center">
        <Heading
          >{{ title }}
          <Box class="ml-2 font-normal text-[#b9b9b9]" as="span">
            #{{ issueNumber }}
          </Box>
        </Heading>
      </Stack>
    </Box>
    <Box class="mt-3 rounded-md border-[1px] border-solid border-[#e2e2e2] p-2">
      <Box class="border-b-solid border-b-[1px] border-b-[#e2e2e2] p-1"></Box>
      <!-- eslint-disable -->
      <Box class="markdown-body mt-3" v-html="body"></Box>
    </Box>
  </Box>
</template>
<script lang="ts">
import { defineComponent, toRefs } from '@nuxtjs/composition-api';
import Box from './Box.vue';
import Stack from './Stack.vue';
import Heading from './Heading.vue';
export default defineComponent({
  components: { Box, Stack, Heading },
  props: {
    title: {
      type: String,
      required: true,
    },
    issueNumber: {
      type: Number,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
});
</script>
