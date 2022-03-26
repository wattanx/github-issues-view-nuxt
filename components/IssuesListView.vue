<script setup lang="ts">
import { toRefs } from '@nuxtjs/composition-api';
import { CStack, CBox } from '@chakra-ui/vue';
import { IssueType } from 'types/IssueType';
import IssuesListCell from '@/components/IssuesListCell.vue';
type PropType = {
  issues: IssueType[];
};
const props = defineProps<PropType>();
</script>
<template>
  <CStack v-if="props.issues.length !== 0" :spacing="0">
    <IssuesListCell
      v-for="issue in props.issues"
      :key="issue.issueNumber"
      :issueNumber="issue.issueNumber"
      :title="issue.title"
    />
  </CStack>
</template>
