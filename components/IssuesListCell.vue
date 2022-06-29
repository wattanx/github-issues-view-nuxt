<script setup lang="ts">
import Box from './Box.vue';
import Flex from './Flex.vue';
import Text from './Text.vue';
import ClosedStatus from '@/components/ClosedStatus.vue';
import OpenStatus from '@/components/OpenStatus.vue';
type PropType = {
  state?: 'open' | 'closed';
  title: string;
  issueNumber: number;
};

const props = defineProps<PropType>();
</script>
<template>
  <Flex
    class="border-[1px] border-t-[#e2e2e2] first:border-t-transparent"
    border-top-color="#e2e2e2"
    border-top-width="1px"
    :_first="{ borderTopColor: 'transparent' }"
  >
    <Box v-show="props.state === 'open'" class="pt-3 pl-3">
      <OpenStatus />
    </Box>
    <Box v-show="props.state === 'closed'" class="pt-3 pl-3">
      <ClosedStatus />
    </Box>
    <Box class="p-2">
      <NuxtLink :to="`/issues/${props.issueNumber}`">
        <Box as="a">
          <Text>{{ props.title }}</Text>
        </Box>
      </NuxtLink>
      <Text class="text-sm">#{{ props.issueNumber }}</Text>
    </Box>
  </Flex>
</template>
