<template>
  <CFlex
    border-top-color="#e2e2e2"
    border-top-width="1px"
    :_first="{ borderTopColor: 'transparent' }"
  >
    <CBox v-show="issue.state === 'open'" padding-top="3" padding-left="3">
      <OpenStatus />
    </CBox>
    <CBox v-show="issue.state === 'cloesd'" padding-top="3" padding-left="3">
      <ClosedStatus />
    </CBox>
    <CBox padding="2">
      <NuxtLink :to="`/issues/${issue.issueNumber}`">
        <CBox as="a">
          <CText>{{ issue.title }}</CText>
        </CBox>
      </NuxtLink>
      <CText font-size="sm">#{{ issue.issueNumber }}</CText>
    </CBox>
  </CFlex>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';
import { CFlex, CBox, CText } from '@chakra-ui/vue';
import ClosedStatus from '@/components/ClosedStatus.vue';
import OpenStatus from '@/components/OpenStatus.vue';

type IssuesListCellProps = {
  state: 'open' | 'closed';
  title: string;
  issueNumber: number;
};

export default defineComponent({
  components: { CFlex, CBox, CText, ClosedStatus, OpenStatus },
  props: {
    issue: {
      type: Object as PropType<IssuesListCellProps>,
      default: () => ({}),
    },
  },
  setup() {},
});
</script>
