import { loadItemsList, fetchItemDetails } from '@/api';
import types from './mutationTypes';

export default {
  loadItemsList({ commit }) {
    loadItemsList()
      .then((items) => {
        commit(types.SET_ITEMS_LIST, items);
      })
      .catch((error) => {
        // We can handle errors here and make it to be a user friendly
        // e.g. commit(types.SET_ITEMS_FAILURE)
        Promise.reject(error);
      });
  },
  setItemDetails({ commit }, id) {
    fetchItemDetails(id)
      .then((itemDetails) => {
        commit(types.SET_ITEM_DETAILS, itemDetails);
      })
      .catch((err) => {
        Promise.reject(err);
      });
  },
};
