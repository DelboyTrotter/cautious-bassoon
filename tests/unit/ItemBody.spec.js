import { shallowMount } from '@vue/test-utils';
import ItemBody from '@/components/ItemBody';

describe('Testing Component props', () => {
  const wrapper = shallowMount(ItemBody, {
    propsData: {
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg',
      name: 'Josip Kristo',
      email: 'josipkristo@gmail.com',
    },
  });

  test('checks the avatar prop', () => {
    expect(wrapper.props().avatar).toBe('https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg');
  });
  test('checks the name prop', () => {
    expect(wrapper.props().name).toBe('Josip Kristo');
  });
  test('checks the email prop', () => {
    expect(wrapper.props().email).toBe('josipkristo@gmail.com');
  });
  test('emit goToItemDetails', async () => {
    wrapper.vm.$emit('goToItemDetails');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().goToItemDetails).toBeTruthy();
  });
});
