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

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { CBox, CFlex } from '@chakra-ui/vue';
import { getIssues } from '@/framework';
import ContentWrapper from '@/components/ContentWrapper.vue';
import IssuesListView from '@/components/IssuesListView.vue';
import Pager from '@/components/Pager/Pager.vue';
import { AxiosClient } from '~/framework';

export default defineComponent({
  name: 'App',
  components: {
    ContentWrapper,
    CBox,
    CFlex,
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
