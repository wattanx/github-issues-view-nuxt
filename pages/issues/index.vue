<template>
  <ContentWrapper>
    <CBox border-width="1px" border-color="#e2e2e2" border-radius="6px">
      <IssuesListView :issues="issues" />
      <Pager
        :current="current"
        :first="1"
        :last="last"
        :next="next"
        :prev="prev"
      />
    </CBox>
  </ContentWrapper>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { CBox } from '@chakra-ui/vue';
import { getIssues } from '@/utils';
import ContentWrapper from '@/components/ContentWrapper.vue';
import IssuesListView from '@/components/IssuesListView.vue';
import Pager from '@/components/Pager/Pager.vue';
import { AxiosClient } from '~/framework';

export default defineComponent({
  name: 'App',
  components: {
    ContentWrapper,
    CBox,
    IssuesListView,
    Pager,
  },
  //   setup() {
  //     const route = useRoute();
  //     const res = useAsync(async () => {
  //       const pageNumber = route.value.query.page ?? '1';
  //       const perPage = route.value.query.per_page ?? '10';
  //       const res = await getIssues(
  //         new AxiosClient(),
  //         pageNumber as string,
  //         perPage as string,
  //       );

  //       return res;
  //     });
  //     return {
  //       issues: res.value?.issues,
  //       prev: res.value?.prevPage,
  //       next: res.value?.nextPage,
  //       current: res.value?.currentPage,
  //       last: res.value?.lastPage,
  //     };
  //   },
  async asyncData({ query }) {
    const pageNumber = query.page ?? '1';
    const perPage = query.per_page ?? '10';
    const res = await getIssues(
      new AxiosClient(),
      pageNumber as string,
      perPage as string,
    );

    console.log('called asyncdata');

    return {
      issues: res.issues,
      prev: res.prevPage,
      next: res.nextPage,
      current: res.currentPage,
      last: res.lastPage,
    };
  },
  watchQuery: ['page'],
  methods: {
    async fetch() {
      const pageNumber = this.$route.query.page ?? '1';
      const perPage = this.$route.query.per_page ?? '10';
      const res = await getIssues(
        new AxiosClient(),
        pageNumber as string,
        perPage as string,
      );

      this.issues = res.issues;
      this.prev = res.prevPage;
      this.next = res.nextPage;
      this.current = res.currentPage;
      this.last = res.lastPage;
    },
  },
});
</script>
