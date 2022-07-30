<template>
  <ContentWrapper>
    <IssueDetail :body="body" :issue-number="issueNumber" :title="title" />
  </ContentWrapper>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  useAsync,
  useRoute,
} from '@nuxtjs/composition-api';
import IssueDetail from '@/components/IssueDetail.vue';
import ContentWrapper from '@/components/ContentWrapper.vue';
import { AxiosClient, getIssue } from '@/framework';

export default defineComponent({
  components: {
    IssueDetail,
    ContentWrapper,
  },
  setup() {
    const title = ref<string>('');
    const body = ref<string>('');
    const issueNumber = ref<number>(0);
    useAsync(async () => {
      const res = await getIssue(
        new AxiosClient(),
        useRoute().value.params.issueNumber,
      );
      title.value = res.title;
      body.value = res.body;
      issueNumber.value = res.issueNumber;
    });
    return {
      title,
      body,
      issueNumber,
    };
  },
});
</script>
