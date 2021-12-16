import { config } from "../../config";

const SET_SEARCH_RESULT = "SET_SEARCH_RESULT";
const SET_SPOTS = "SET_SPOTS";

export const mutations = {
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
  [SET_SEARCH_RESULT](state, payload) {
    console.log("들어오는 변수2", payload);
    let data = payload.data.result.items;
    let thumbs = payload.data.thumb_list;
    console.log("thumbs :", thumbs);
    for (let i = 0; i < data.length; i++) {
      data[i].thumb = thumbs[i];
      state.searchData.push(data[i]);
    }
    console.log(" state.searchData : ", state.searchData);
  },
};
