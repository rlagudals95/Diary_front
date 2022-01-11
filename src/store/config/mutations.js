const SET_LOADING = "SET_LOADING";

export const mutations = {
  [SET_LOADING](state) {
    state.isLoading = !state.isLoading
  },
};
