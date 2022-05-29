<script setup lang="ts">
import Box from './Box.vue';
import { CBox, CStack, CHeading } from '@chakra-ui/vue';
type PropType = {
  title: string;
  issueNumber: number;
  body: string;
};
const props = defineProps<PropType>();
</script>
<template>
  <Box>
    <Box border-bottom-width="1px" border-bottom-color="#e2e2e2">
      <CStack flex-direction="row" align-items="center">
        <CHeading
          >{{ props.title }}
          <Box font-weight="normal" color="#b9b9b9" as="span" margin-left="2">
            #{{ props.issueNumber }}
          </Box>
        </CHeading>
      </CStack>
    </Box>
    <Box rounded="md" border="1px #e2e2e2 solid" margin-top="3" padding="2">
      <Box border-bottom="1px #e2e2e2 solid" padding="1"></Box>
      <!-- eslint-disable -->
      <Box
        class="markdown-body"
        margin-top="3"
        :width="['100%', '100%', '100%', '70%']"
        v-html="props.body"
      ></Box>
    </Box>
  </Box>
</template>
