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

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { getIssues } from '@/framework';
import ContentWrapper from '@/components/ContentWrapper.vue';
import IssuesListView from '@/components/IssuesListView.vue';
import Box from '~/components/Box.vue';
import Flex from '~/components/Flex.vue';
import Pager from '@/components/Pager/Pager.vue';
import { AxiosClient } from '~/framework';

export default defineComponent({
  name: 'App',
  components: {
    ContentWrapper,
    Box,
    Flex,
    IssuesListView,
    Pager,
  },
  async asyncData({ query }) {
    const pageNumber = query.page ?? '1';
    const perPage = query.per_page ?? '10';
    const res = await getIssues(
      new AxiosClient(),
      pageNumber as string,
      perPage as string,
    );
    return {
      issues: res.issues,
      prev: res.prevPage,
      next: res.nextPage,
      current: res.currentPage,
      last: res.lastPage,
    };
  },
  watchQuery: ['page'],
});
</script>
