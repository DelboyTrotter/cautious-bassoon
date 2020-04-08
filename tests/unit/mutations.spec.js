import mutations from '@/store/mutations';

describe('mutations', () => {
  test('setItemsList sets state listItems to items', () => {
    const items = [{id: 1}, {id: 2}];
    const state = {
      listItems: [],
    };
    mutations.SET_ITEMS_LIST(state, items);
    expect(state.listItems).toBe(items);
  });
  test('setItemDetails sets state itemDetails to details', () => {
    const details = {id: 1};
    const state = {
      itemDetails: {},
    };
    mutations.SET_ITEM_DETAILS(state, details);
    expect(state.itemDetails).toBe(details);
  });
});