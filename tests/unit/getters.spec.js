import getters from '@/store/getters';

describe('getters', () => {
  test('listItems returns items from state.listItems', () => {
    const items = new Array(21).fill().map((v, i) => i);
    const state = {
      listItems: items,
    };
    const result = getters.listItems(state);
    expect(result).toEqual(items);
  });
});