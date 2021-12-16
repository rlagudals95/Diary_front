/* eslint-disable no-alert, no-console */
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";

const state = {
  spots: [],
  searchData: [],
};

export const spotStore = {
  state,
  getters,
  actions,
  mutations,
};

/* eslint-enable no-alert */
