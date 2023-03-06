<template>
  <Container height="100vh">
    <Box as="section" class="pt-24 pb-20">
      <Box class="text-center">
        <Hero />
      </Box>
    </Box>
    <CTA />
  </Container>
</template>
<script lang="ts">
import Container from '@/components/Container.vue';
import Box from '~/components/Box.vue';
import Hero from '~/components/Hero.vue';
import CTA from '~/components/CTA.vue';
import { defineComponent } from '#imports';

export default defineComponent({
  components: { Box, Container, Hero, CTA },
  setup() {
    return {};
  },
});
</script>
