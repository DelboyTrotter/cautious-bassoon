import api from '@/api/index';
import fetchListItems from '@/api/__mocks__/api';
import types from './mutationTypes';

export default {
  loadItemsList({ commit }) {
    api.fetchListItems()
      .then((items) => {
        commit(types.SET_ITEMS_LIST, items.data);
      })
      .catch((error) => {
        Promise.reject(error);
      });
  },
  loadItemsListTest({ commit }) {
    return fetchListItems().then((items) => commit(types.SET_ITEMS_LIST, items));
  },
  setItemDetails({ commit }, id) {
    api.fetchItemDetails(id)
      .then((itemDetails) => {
        commit(types.SET_ITEM_DETAILS, itemDetails);
      })
      .catch((err) => {
        Promise.reject(err);
      });
  },
};
