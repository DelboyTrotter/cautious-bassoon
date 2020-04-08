import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import Item from '@/components/Item';
import merge from 'lodash/merge';

function createWrapper(overrides) {
  const defaultMountingOptions = {
    stubs: {
      RouterLink: RouterLinkStub,
    },
    propsData: {
      item: {},
    },
  };
  return shallowMount(Item, merge(defaultMountingOptions, overrides));
}

describe('Item.vue', () => {
  test('renders item.email', () => {
    const item = {
      email: 'test@test.com',
    };

    const wrapper = shallowMount(Item, {
      propsData: { item },
    });

    expect(wrapper.text()).toContain(item.email);
  });
  test('renders item.first_name', () => {
    const item = {
      first_name: 'some first name',
    };

    const wrapper = shallowMount(Item, {
      propsData: { item },
    });

    expect(wrapper.text()).toContain(item.first_name);
  });
  test('renders item.last_name', () => {
    const item = {
      email: 'some kind of last name',
    };

    const wrapper = shallowMount(Item, {
      propsData: { item },
    });

    expect(wrapper.text()).toContain(item.last_name);
  });
  test('renders item.id', () => {
    const item = {
      id: 10,
    };

    const wrapper = shallowMount(Item, {
      propsData: { item },
    });

    expect(wrapper.text()).toContain(item.id);
  });
});