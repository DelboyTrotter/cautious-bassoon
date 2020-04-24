import ItemFooter from '@/components/ItemFooter';
import { shallowMount } from '@vue/test-utils';

describe('Testing component prop', () => {
  const wrapper = shallowMount(ItemFooter, {
    propsData: {
      id: 10,
    },
  });

  test('checks the id prop', () => {
    expect(wrapper.props().id).toBe(10);
  });
});