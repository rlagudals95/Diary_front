import Vue from "vue";
import Vuex from "vuex";
import { spotStore } from "@/store/spot";
import { user } from "@/store/user";
import { diary } from "@/store/diary"
import { category } from "./category";
import { config } from "./config"

Vue.use(Vuex);

const store = new Vuex.Store({
  namespaced: false,
  state: { },
  mutations: {},
  actions: {},
  modules: {
    spotStore: spotStore,
    user: user,
    diary: diary,
    category: category,
    config : config
  },
});

export default store;
