import types from './mutationTypes';

export default {
  [types.SET_ITEMS_LIST](state, items) {
    state.listItems = items;
  },
  [types.SET_ITEM_DETAILS](state, details) {
    state.itemDetails = details;
  },
};
