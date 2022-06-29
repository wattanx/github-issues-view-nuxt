<script setup lang="ts">
import Stack from './Stack.vue';
import { IssueType } from 'types/IssueType';
import IssuesListCell from '@/components/IssuesListCell.vue';
type PropType = {
  issues: IssueType[];
};
const props = defineProps<PropType>();
</script>
<template>
  <Stack class="space-y-0" v-if="props.issues.length !== 0">
    <IssuesListCell
      v-for="issue in props.issues"
      :key="issue.issueNumber"
      :issueNumber="issue.issueNumber"
      :title="issue.title"
    />
  </Stack>
</template>
