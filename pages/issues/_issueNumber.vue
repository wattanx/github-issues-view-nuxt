<script setup lang="ts">
import {
  defineComponent,
  ref,
  useFetch,
  useRoute,
  computed,
} from '@nuxtjs/composition-api';
import IssueDetail from '@/components/IssueDetail.vue';
import ContentWrapper from '@/components/ContentWrapper.vue';
import { AxiosClient, getIssue } from '@/framework';

const title = ref<string>('');
const body = ref<string>('');
const issueNumber = ref<number>(0);
const route = useRoute();

const pageQueryNumber = computed<number>(() => {
  return Number(route.query.page) || 1;
});

console.log(pageQueryNumber);

useFetch(async () => {
  const res = await getIssue(new AxiosClient(), route.params.issueNumber);
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
