<script setup lang="ts">
import { useLazyAsyncData } from '#imports';
import {
  defineComponent,
  useRoute,
  useFetch,
  ref,
  watch,
  computed,
} from '@nuxtjs/composition-api';
import { getIssues } from '@/framework';
import ContentWrapper from '@/components/ContentWrapper.vue';
import IssuesListView from '@/components/IssuesListView.vue';
import Box from '~/components/Box.vue';
import Flex from '~/components/Flex.vue';
import Pager from '@/components/Pager/Pager.vue';
import { AxiosClient } from '~/framework';
import { IssueType } from '~/types';

const route = useRoute();

const pageQueryNumber = computed<number>(() => {
  return Number(route.query.page) || 1;
});

const issues = ref<IssueType[]>([]);
const current = ref(0);
const last = ref(0);
const next = ref(0);
const prev = ref(0);

const { refresh } = useLazyAsyncData('', async () => {
  const pageNumber = route.query.page ?? '1';
  const perPage = route.query.per_page ?? '10';
  const res = await getIssues(
    new AxiosClient(),
    pageNumber as string,
    perPage as string,
  );
  issues.value = res.issues;
  last.value = res.lastPage;
  current.value = res.currentPage;
  next.value = res.nextPage;
  prev.value = res.prevPage;
});

watch(pageQueryNumber, () => {
  refresh();
});
</script>
<template>
  <ContentWrapper>
    <Box class="rounded-lg border-[1px] border-[#e2e2e2]" border-radius="6px">
      <IssuesListView :issues="issues" />
    </Box>
    <Flex class="mt-3 items-center justify-center">
      <Pager
        :current="current"
        :first="1"
        :last="last"
        :next="next"
        :prev="prev"
      />
    </Flex>
  </ContentWrapper>
</template>
