import { shallowMount } from '@vue/test-utils';
import IndexVue from './index.vue';

test('vue2.7 test', () => {
  const wrapper = shallowMount(IndexVue);
  console.log(wrapper.html());
});
