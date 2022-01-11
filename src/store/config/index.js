/* eslint-disable no-alert, no-console */
import { actions } from "./actions";
import { mutations } from "./mutations";

const state = {
  Loading: false,
};

export const config = {
  state,
  actions,
  mutations,
};

/* eslint-enable no-alert */
