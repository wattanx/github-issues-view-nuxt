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
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  components: { Box, Container },
});
</script>
