<template>
  <Flex class="border-[1px] border-t-[#e2e2e2] first:border-t-transparent">
    <Box v-show="state === 'open'" class="pt-3 pl-3">
      <OpenStatus />
    </Box>
    <Box v-show="state === 'closed'" class="pt-3 pl-3">
      <ClosedStatus />
    </Box>
    <Box class="p-2">
      <NuxtLink :to="`/issues/${issueNumber}`">
        <Box as="a">
          <TextVue>{{ title }}</TextVue>
        </Box>
      </NuxtLink>
      <TextVue class="text-sm">#{{ issueNumber }}</TextVue>
    </Box>
  </Flex>
</template>
<script lang="ts">
import Box from './Box.vue';
import Flex from './Flex.vue';
import TextVue from './Text.vue';
import ClosedStatus from '@/components/ClosedStatus.vue';
import OpenStatus from '@/components/OpenStatus.vue';
import { defineComponent, toRefs } from '@nuxtjs/composition-api';
export default defineComponent({
  components: {
    Box,
    Flex,
    TextVue,
    ClosedStatus,
    OpenStatus,
  },
  props: {
    state: {
      type: String,
      default: 'open',
    },
    title: {
      type: String,
      required: true,
    },
    issueNumber: {
      type: Number,
      required: true,
    },
  },
});
</script>
