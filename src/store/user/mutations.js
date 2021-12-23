import { config } from "../../config";

const SET_SPOTS = "SET_SPOTS";
const SET_LOGIN = "SET_LOGIN";
const SET_CATEGORY = "SER_CATEGORY";
const ADD_CATEGORY = "ADD_CATEGORY";

export const mutations = {
  [SET_LOGIN](state, payload) {
    state.isLogin = true;
    state.username = payload;
  },

  [SET_SPOTS](state, payload) {
    console.log("공공 api 데이터 들어옴", payload);
    let data = payload.body.items.item;
    for (let i = 0; i < data.length; i++) {
      if (!data[i].referenceIdentifier) {
        data[i].referenceIdentifier = config.readyImg;
        data[i].readyContent = "이미지 준비중입니다 :)";
      }
      state.spots.push(data[i]);
    }
  },
  [SET_CATEGORY](state, payload) {
    console.log("카테고리 데이터 들어옴", payload);
    let data = payload.data;
    for (let i = 0; i < data.length; i++) {
      state.category_list.push(data[i]);
    }
  },
  [ADD_CATEGORY](state, payload) {
    console.log("카테고리 더하기", payload);
    let data = payload.data;
    state.category_list.unshift(data)
  },
};
