<script setup lang="ts">
import { CBox, CStack, CHeading } from '@chakra-ui/vue';
type PropType = {
  title: string;
  issueNumber: number;
  body: string;
};
const props = defineProps<PropType>();
</script>
<template>
  <CBox>
    <CBox border-bottom-width="1px" border-bottom-color="#e2e2e2">
      <CStack flex-direction="row" align-items="center">
        <CHeading
          >{{ props.title }}
          <CBox font-weight="normal" color="#b9b9b9" as="span" margin-left="2">
            #{{ props.issueNumber }}
          </CBox>
        </CHeading>
      </CStack>
    </CBox>
    <CBox rounded="md" border="1px #e2e2e2 solid" margin-top="3" padding="2">
      <CBox border-bottom="1px #e2e2e2 solid" padding="1"></CBox>
      <!-- eslint-disable -->
      <CBox
        class="markdown-body"
        margin-top="3"
        :width="['100%', '100%', '100%', '70%']"
        v-html="props.body"
      ></CBox>
    </CBox>
  </CBox>
</template>
