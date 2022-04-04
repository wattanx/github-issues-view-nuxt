<script setup lang="ts">
import { CFlex, CBox, CText } from '@chakra-ui/vue';
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
  <CFlex
    border-top-color="#e2e2e2"
    border-top-width="1px"
    :_first="{ borderTopColor: 'transparent' }"
  >
    <CBox v-show="props.state === 'open'" padding-top="3" padding-left="3">
      <OpenStatus />
    </CBox>
    <CBox v-show="props.state === 'closed'" padding-top="3" padding-left="3">
      <ClosedStatus />
    </CBox>
    <CBox padding="2">
      <NuxtLink :to="`/issues/${props.issueNumber}`">
        <CBox as="a">
          <CText>{{ props.title }}</CText>
        </CBox>
      </NuxtLink>
      <CText font-size="sm">#{{ props.issueNumber }}</CText>
    </CBox>
  </CFlex>
</template>
