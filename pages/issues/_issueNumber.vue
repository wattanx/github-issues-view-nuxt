<script setup lang="ts">
import IssueDetail from '@/components/IssueDetail.vue';
import ContentWrapper from '@/components/ContentWrapper.vue';
import { AxiosClient, getIssue } from '@/framework';

const title = ref<string>('');
const body = ref<string>('');
const issueNumber = ref<number>(0);
const pageNumber = useRoute().value.params.issueNumber;

useAsync(async () => {
  const res = await getIssue(new AxiosClient(), pageNumber);
  title.value = res.title;
  body.value = res.body;
  issueNumber.value = res.issueNumber;
});
</script>
<template>
  <ContentWrapper>
    <IssueDetail :body="body" :issue-number="issueNumber" :title="title" />
  </ContentWrapper>
</template>
