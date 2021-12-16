import Vue from "vue";
import Vuex from "vuex";
import { spotStore } from "@/store/spot";
import { user } from "@/store/user";

Vue.use(Vuex);

const store = new Vuex.Store({
  namespaced: false,
  state: { test: "test" },
  mutations: {},
  actions: {},
  modules: {
    spotStore: spotStore,
    user: user,
  },
});

export default store;
