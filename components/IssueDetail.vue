<template>
  <CBox>
    <CBox border-bottom-width="1px" border-bottom-color="#e2e2e2">
      <CStack flex-direction="row" align-items="center">
        <CHeading
          >{{ title }}
          <CBox font-weight="normal" color="#b9b9b9" as="span" margin-left="2">
            #{{ issueNumber }}
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
        v-html="body"
      ></CBox>
    </CBox>
  </CBox>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { CBox, CStack, CHeading } from '@chakra-ui/vue';

export default defineComponent({
  components: { CBox, CStack, CHeading },
  props: {
    title: {
      type: String,
      default: '',
    },
    body: {
      type: String,
      default: '',
    },
    issueNumber: {
      type: Number,
      default: 0,
    },
  },
  setup() {},
});
</script>
