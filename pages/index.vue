<script setup lang="ts">
import { CBox } from '@chakra-ui/vue';
import Container from '@/components/Container.vue';
import CTA from '@/components/CTA.vue';
import Hero from '@/components/Hero.vue';
</script>
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
