/* eslint-disable no-alert, no-console */
import { actions } from "./actions";
import { mutations } from "./mutations";

const state = {
  category_detail: null,
};

export const category = {
  state,
  actions,
  mutations,
};

/* eslint-enable no-alert */