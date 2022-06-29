<template>
  <div>
    <Box as="main">
      <SiteHeader />
      <Nuxt />
    </Box>
  </div>
</template>
<script>
import {
  CThemeProvider,
  CColorModeProvider,
  CReset,
  CBox,
} from '@chakra-ui/vue';
import SiteHeader from '@/components/SiteHeader.vue';
import Box from '~/components/Box.vue';

export default {
  name: 'App',
  components: {
    CThemeProvider,
    CColorModeProvider,
    CReset,
    Box,
    SiteHeader,
  },
};
</script>
