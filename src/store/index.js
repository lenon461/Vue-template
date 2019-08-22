import Vue from 'vue';
import Vuex from 'vuex';
import movie from './movie';
import comment from './comment';

Vue.use(Vuex);

const Store = new Vuex.Store({
    modules: {
      movie,
      comment,
    },
    state: {
      'a' : 'b'
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV,
  });

export default Store;
