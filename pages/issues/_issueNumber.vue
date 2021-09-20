<template>
  <ContentWrapper>
    <IssueDetail :body="body" :issue-number="issueNumber" :title="title" />
  </ContentWrapper>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import IssueDetail from '@/components/IssueDetail.vue';
import ContentWrapper from '@/components/ContentWrapper.vue';
import { AxiosClient, getIssue } from '@/framework';

export default defineComponent({
  components: { IssueDetail, ContentWrapper },
  async asyncData({ params }) {
    const pageNumber = params.issueNumber;
    const res = await getIssue(new AxiosClient(), pageNumber);
    return {
      title: res.title,
      body: res.body,
      issueNumber: res.issueNumber,
    };
  },
});
</script>
