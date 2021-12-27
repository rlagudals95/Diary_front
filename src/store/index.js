import Vue from "vue";
import Vuex from "vuex";
import { spotStore } from "@/store/spot";
import { user } from "@/store/user";
import { diary } from "@/store/diary"
import { category } from "./category";

Vue.use(Vuex);

const store = new Vuex.Store({
  namespaced: false,
  state: { test: "test" },
  mutations: {},
  actions: {},
  modules: {
    spotStore: spotStore,
    user: user,
    diary: diary,
    category: category
  },
});

export default store;
