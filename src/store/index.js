import Vue from "vue";
import Vuex from "vuex";
import { spotStore } from "@/store/spot";
import { user } from "@/store/user";
import { diary } from "@/store/diary"

Vue.use(Vuex);

const store = new Vuex.Store({
  namespaced: false,
  state: { test: "test" },
  mutations: {},
  actions: {},
  modules: {
    spotStore: spotStore,
    user: user,
    diary: diary
  },
});

export default store;
