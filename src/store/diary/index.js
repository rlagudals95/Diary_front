/* eslint-disable no-alert, no-console */
import { actions } from "./actions";
import { mutations } from "./mutations";

const state = {
  diary_list : []
};

export const diary = {
  state,
  actions,
  mutations,
};

/* eslint-enable no-alert */
