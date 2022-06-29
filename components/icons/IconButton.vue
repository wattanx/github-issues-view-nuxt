<template>
  <div>
    <ChevronLeft class="h-10 min-w-[2.5rem]" v-show="isChevronLeft" />
    <ChevronRight class="h-10 min-w-[2.5rem]" v-show="isChevronRight" />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api';
import ChevronRight from './ChevronRight.vue';
import ChevronLeft from './ChevronLeft.vue';

export default defineComponent({
  components: { ChevronLeft, ChevronRight },
  props: {
    as: {
      type: String,
      default: 'chevron-left',
    },
  },
  setup(props) {
    const isChevronLeft = computed(() => props.as === 'chevron-left');
    const isChevronRight = computed(() => props.as === 'chevron-right');

    return {
      isChevronLeft,
      isChevronRight,
    };
  },
});
</script>
