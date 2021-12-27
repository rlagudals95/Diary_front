/* eslint-disable no-alert, no-console */
import { actions } from "./actions";
import { mutations } from "./mutations";

const state = {
  edit_category : null
};

export const category = {
  state,
  actions,
  mutations,
};

/* eslint-enable no-alert */
