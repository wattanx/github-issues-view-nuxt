<template>
  <Container class="w-full max-w-[48rem] py-3">
    <Stack class="mt-10 justify-center space-x-4">
      <Button
        class="inline-flex h-16 min-w-[4rem] items-center justify-center rounded-md bg-green-200 px-10 text-base font-bold"
        as="nuxt-link"
        to="/issues"
        >Get Started <ArrowForward class="ml-1"
      /></Button>

      <Button
        class="inline-flex h-16 min-w-[4rem] items-center justify-center rounded-md bg-gray-200 px-10 text-base font-bold"
        as="a"
        href="https://github.com/wattanx/github-issues-view-nuxt"
        target="__blank"
      >
        GitHub<GitHubIcon class="ml-1" />
      </Button>
    </Stack>
  </Container>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Container from '@/components/Container.vue';
import Stack from './Stack.vue';
import Button from './Button.vue';
import ArrowForward from './icons/ArrowForward.vue';
import GitHubIcon from './icons/GitHubIcon.vue';

export default defineComponent({
  components: { Container, Stack, Button, ArrowForward, GitHubIcon },
  setup() {},
});
</script>
