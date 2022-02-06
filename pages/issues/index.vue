<script setup lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  useAsync,
  useContext,
  useRoute,
} from '@nuxtjs/composition-api';
import { CBox, CFlex } from '@chakra-ui/vue';
import { getIssues } from '@/framework';
import ContentWrapper from '@/components/ContentWrapper.vue';
import IssuesListView from '@/components/IssuesListView.vue';
import Pager from '@/components/Pager/Pager.vue';
import { AxiosClient } from '~/framework';
import { IssueType } from '~/types';

const { query } = useContext();

const pageNumber = query.value.page ?? '1';
const perPage = query.value.per_page ?? '10';
console.log(pageNumber);

const issues = ref<IssueType[]>([]);
const prev = ref<number>(0);
const next = ref<number>(0);
const current = ref<number>(0);
const last = ref<number>(0);
useAsync(async () => {
  const res = await getIssues(
    new AxiosClient(),
    pageNumber as string,
    perPage as string,
  );
  issues.value = res.issues;
  prev.value = res.prevPage;
  next.value = res.nextPage;
  current.value = res.currentPage;
  last.value = res.lastPage;
}, pageNumber as string);
</script>
<template>
  <ContentWrapper>
    <CBox border-width="1px" border-color="#e2e2e2" border-radius="6px">
      <IssuesListView :issues="issues" />
    </CBox>
    <CFlex align-items="center" justify-content="center" mt="3">
      <Pager
        :current="current"
        :first="1"
        :last="last"
        :next="next"
        :prev="prev"
      />
    </CFlex>
  </ContentWrapper>
</template>
