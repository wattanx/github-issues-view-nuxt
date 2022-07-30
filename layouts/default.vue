<template>
  <div>
    <Box as="main">
      <SiteHeader />
      <Nuxt />
    </Box>
  </div>
</template>
<script>
import SiteHeader from '@/components/SiteHeader.vue';
import Box from '~/components/Box.vue';

export default {
  name: 'App',
  components: {
    Box,
    SiteHeader,
  },
};
</script>
