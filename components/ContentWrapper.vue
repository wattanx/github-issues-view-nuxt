<template>
  <CBox max-width="1280px" margin="auto" padding="5"><slot></slot></CBox>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { CBox } from '@chakra-ui/vue';

export default defineComponent({
  components: { CBox },
  setup() {},
});
</script>
