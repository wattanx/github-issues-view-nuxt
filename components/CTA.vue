<template>
  <Container class="w-full max-w-[48rem] py-3">
    <Stack class="mt-10 justify-center space-x-4">
      <Button
        class="inline-flex h-16 min-w-[4rem] items-center justify-center rounded-md bg-green-200 px-10 text-base"
        as="nuxt-link"
        to="/issues"
        >Get Started</Button
      >

      <Button
        class="inline-flex h-16 min-w-[4rem] items-center justify-center rounded-md bg-gray-200 px-10 text-base"
        as="a"
        href="https://github.com/wattanx/github-issues-view-nuxt"
        target="__blank"
        right-icon="github"
      >
        GitHub
      </Button>
    </Stack>
  </Container>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Container from '@/components/Container.vue';
import Stack from './Stack.vue';
import Button from './Button.vue';

export default defineComponent({
  components: { Container, Stack, Button },
  setup() {},
});
</script>
