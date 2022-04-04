<template>
  <Container
    :flex-direction="['unset', 'row', 'row', 'row']"
    width="100%"
    max-width="48rem"
    py="3"
  >
    <CStack mt="10" :spacing="4" justify="center" is-inline>
      <CButton
        h="4rem"
        px="40px"
        font-size="1rem"
        size="lg"
        as="nuxt-link"
        to="/issues"
        bg="vue.200"
        right-icon="arrow-right"
        >Get Started</CButton
      >

      <CButton
        as="a"
        size="lg"
        h="4rem"
        px="40px"
        font-size="1rem"
        href="https://github.com/wattanx/github-issues-view-nuxt"
        target="__blank"
        right-icon="github"
      >
        GitHub
      </CButton>
    </CStack>
  </Container>
</template>
<script lang="ts">
import { CButton, CStack } from '@chakra-ui/vue';
import Container from '@/components/Container.vue';

export default defineComponent({
  components: { Container, CButton, CStack },
  setup() {},
});
</script>
