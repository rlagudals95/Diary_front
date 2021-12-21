const SET_DIARY_LIST = "SET_DIARY_LIST";
const SET_KEYWORD = "SET_KEYWORD"

export const mutations = {
  [SET_DIARY_LIST](state, payload) {
    console.log("다이어리 리스트 들어옴 : ", payload);
    let data = payload.data;
    console.log(data,'/', payload.length)
    for (let i = 0; i < data.length; i++) {      
      state.diary_list.push(data[i]);
    }
  },
  [SET_KEYWORD](state, payload) {   
    state.keyword = payload.data
  },

};
