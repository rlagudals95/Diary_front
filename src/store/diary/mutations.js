const SET_DIARY_LIST = "SET_DIARY_LIST";

export const mutations = {
  [SET_DIARY_LIST](state, payload) {
    console.log("다이어리 리스트 들어옴 : ", payload);
    let data = payload.data;

    for (let i = 0; i < payload.length; i++) {      
      state.dairy_list.push(data[i]);
    }
  },
};
