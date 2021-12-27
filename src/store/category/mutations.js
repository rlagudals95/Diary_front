const EDIT_CATEGORY = "EDIT_CATEGORY";

export const mutations = {
  [EDIT_CATEGORY](state, payload) {
    console.log('카테고리 인포 : ',state,payload)
    state.edit_category =  payload;
  },

};
