import ItemHeader from '@/components/ItemHeader';
import { mount } from '@vue/test-utils';

describe('ItemHeader', () => {
  test('is component', () => {
    const wrapper = mount(ItemHeader);

    expect(wrapper.is(ItemHeader)).toBe(true);
  });
});