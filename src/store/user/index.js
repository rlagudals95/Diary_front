/* eslint-disable no-alert, no-console */
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";

const state = {
  isLogin: false,
  username: "",
  category_list: [],
  word_cloud_list: []
};

export const user = {
  state,
  getters,
  actions,
  mutations,
};

/* eslint-enable no-alert */
