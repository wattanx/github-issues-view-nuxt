<template>
  <Stack class="flex-col space-y-0" v-if="issues.length !== 0">
    <IssuesListCell
      v-for="issue in issues"
      :key="issue.issueNumber"
      :issueNumber="issue.issueNumber"
      :title="issue.title"
    />
  </Stack>
</template>
<script lang="ts">
import Stack from './Stack.vue';
import { IssueType } from 'types/IssueType';
import IssuesListCell from '@/components/IssuesListCell.vue';
import { defineComponent, toRefs, PropType } from '@nuxtjs/composition-api';

export default defineComponent({
  components: {
    Stack,
    IssuesListCell,
  },
  props: {
    issues: {
      type: Array as PropType<IssueType[]>,
      required: true,
    },
  },
});
</script>
