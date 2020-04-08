import api from '@/api/index';
import types from './mutationTypes';

export default {
  loadItemsList({ commit }) {
    api.fetchListItems()
      .then((items) => {
        commit(types.LOAD_ITEMS_LIST, items.data);
      })
      .catch((error) => {
        Promise.reject(error);
      });
    commit(types.LOAD_ITEMS_LIST);
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
