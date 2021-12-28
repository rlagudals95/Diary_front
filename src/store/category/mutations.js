//const EDIT_CATEGORY = "EDIT_CATEGORY";
const SET_CATEGORY_DETAIL = "SET_CATEGORY_DETAIL";

export const mutations = {
  [SET_CATEGORY_DETAIL](state, payload) {
    console.log("카테고리 인포 : ", state, payload);
    state.category_detail = payload.data;
  },
};
