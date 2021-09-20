<template>
  <CBox
    as="header"
    position="sticky"
    p="1rem 0"
    top="0"
    z-index="99"
    box-shadow="sm"
    bg="white"
  >
    <CBox max-width="1280px" margin="auto">
      <CBox padding-inline-end="1.5rem" padding-inline-start="1.5rem">
        <NuxtLink to="/">
          <CBox as="a" align-items="center" text-decration="none">
            GitHub Issues View
          </CBox>
        </NuxtLink>
      </CBox>
    </CBox>
  </CBox>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { CBox } from '@chakra-ui/vue';

export default defineComponent({
  components: { CBox },
  setup() {},
});
</script>
