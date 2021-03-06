const SET_DIARY_LIST = "SET_DIARY_LIST";
const SET_KEYWORD = "SET_KEYWORD";
const SET_DIARY_DETAIL = "SET_DIARY_DETAIL";
const SET_UPLOAD_IMG = "SET_UPLOAD_IMG";
const RESET_DIARY_DETAIL = "RESET_DIARY_DETAIL";
const RESET_UPLOAD = "RESET_UPLOAD";
const ADD_DIARY = "ADD_DIARY";
const EDIT_DIARY = "EDIT_DIARY";

export const mutations = {
  [SET_DIARY_LIST](state, payload) {
    console.log("다이어리 리스트 들어옴 : ", payload);
    let data = payload.data;
    console.log(data, "/", payload.length);

    for (let i = 0; i < data.length; i++) {
      if (!data[i].image_url) {
        data[i].image_url =
          "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80";
      }
      state.diary_list.push(data[i]);
    }

    state.diary_list = state.diary_list.reduce((acc, cur) => {
      if (acc.findIndex((a) => a.diary_no === cur.diary_no) === -1) {
        return [...acc, cur]; //같은 id를 가진 게시물이 없다면 기존 포스트들과 새로받은 포스트 리턴
      } else {
        // 중복되는 id가 있다면? 포스트가 중복되서 출력되는 걸 막아줘야함
        acc[acc.findIndex((a) => a.diary_no === cur.diary_no)] = cur; //기존 리스트에서 새로받은 리스트와 같은 id가 있다면
        return acc; // 그 게시물은 새로 받은 게시물 => 그러므로 cur은 return 안해준다
      }
    }, []);
  },
  [ADD_DIARY](state, payload) {
    console.log("게시물추가 res : ", payload.data);
    state.diary_list.unshift(payload.data);
  },

  [SET_KEYWORD](state, payload) {
    state.keyword = payload.data;
  },
  [SET_DIARY_DETAIL](state, payload) {
    console.log("다이어리 디테일 : ", payload);
    state.diary_detail = payload.data;
  },
  [SET_UPLOAD_IMG](state, payload) {
    state.upload_img = payload;
  },
  [RESET_DIARY_DETAIL](state) {
    state.diary_detail = null;
  },
  [RESET_UPLOAD](state) {
    state.upload_img = null;
    console.log("upload_img : ", state.upload_img);
  },
  [EDIT_DIARY](state, payload) {
    console.log("수정된 데이터 ",state,payload)
    let diary_list =  state.diary_list;
    // 이분탐색 알고리즘으로 추후 변경예정
    for (let i = 0; i < diary_list.length; i++){
      if(diary_list[i].diary_no == payload.diary_no){
        diary_list[i] = payload;
      }
    }
  }
};
