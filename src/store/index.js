import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import merge from 'lodash/merge';
import storeConfig from './storeConfig';

Vue.use(Vuex);

// On this way we persist data inside local storage
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store(merge({}, storeConfig, {
  plugins: [vuexLocal.plugin],
}));
