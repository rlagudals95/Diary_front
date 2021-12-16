/* eslint-disable no-alert, no-console */
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";

const state = {};

export const user = {
  state,
  getters,
  actions,
  mutations,
};

/* eslint-enable no-alert */
