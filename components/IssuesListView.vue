<template>
  <CStack v-if="issues.length !== 0" :spacing="0">
    <IssuesListCell
      v-for="issue in issues"
      :key="issue.issueNumber"
      :issue="issue"
    />
  </CStack>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';
import { CStack } from '@chakra-ui/vue';
import { IssueType } from 'types/IssueType';
import IssuesListCell from '@/components/IssuesListCell.vue';

export default defineComponent({
  components: { CStack, IssuesListCell },
  props: {
    issues: {
      type: Array as PropType<IssueType[]>,
      default: () => [],
    },
  },
  setup() {},
});
</script>
