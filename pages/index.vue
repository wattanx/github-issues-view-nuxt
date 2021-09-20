<template>
  <Container height="100vh">
    <CBox as="section" pt="6rem" :pb="{ base: '0', md: '5rem' }">
      <CBox text-align="center">
        <Hero />
      </CBox>
    </CBox>
    <CTA />
  </Container>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { CBox } from '@chakra-ui/vue';
import Container from '@/components/Container.vue';
import CTA from '@/components/CTA.vue';
import Hero from '@/components/Hero.vue';

export default defineComponent({
  name: 'App',
  components: {
    Container,
    Hero,
    CBox,
    CTA,
  },
  data() {
    return {
      showModal: false,
      mainStyles: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900',
        },
        light: {
          bg: 'white',
          color: 'gray.900',
        },
      },
    };
  },
});
</script>
