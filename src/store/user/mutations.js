import { config } from "../../config";

const SET_SPOTS = "SET_SPOTS";
const SET_LOGIN = "SET_LOGIN";
const SET_CATEGORY = "SER_CATEGORY";
const ADD_CATEGORY = "ADD_CATEGORY";
const SET_WORD_CLOUD = "SET_WORD_CLOUD";
const LOGIN_CHK = "LOGIN_CHK";

export const mutations = {
  [SET_LOGIN](state, payload) {
    console.log('접속유저정보:',payload)
    state.isLogin = true;
    state.username = payload;
  },
  [LOGIN_CHK](state, payload) {
    if (localStorage.getItem('Authorization')){
      state.isLogin = true;
      state.username = payload;
    }
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
    console.log("셋 카테고리 : ", payload);
    let data = payload.data;
    for (let i = 0; i < data.length; i++) {
      state.category_list.push(data[i]);
    }

    state.category_list = state.category_list.reduce((acc, cur) => {
      if (acc.findIndex((a) => a.category_no === cur.category_no) === -1) {
        return [...acc, cur]; //같은 id를 가진 게시물이 없다면 기존 포스트들과 새로받은 포스트 리턴
      } else {
        // 중복되는 id가 있다면? 포스트가 중복되서 출력되는 걸 막아줘야함
        acc[acc.findIndex((a) => a.category_no === cur.category_no)] = cur; //기존 리스트에서 새로받은 리스트와 같은 id가 있다면
        return acc; // 그 게시물은 새로 받은 게시물 => 그러므로 cur은 return 안해준다
      }
    }, []);

    ////

    for (let i = 0; i < data.length; i++) {
      console.log("데이터 넣는중....", data[i].category_no, data[i].name);
      state.word_cloud_list.push({
        name: data[i].name,
        value: data[i].progress,
        category_no: data[i].category_no,
      });
    }
    state.word_cloud_list = state.word_cloud_list.reduce((acc, cur) => {
      if (acc.findIndex((a) => a.category_no === cur.category_no) === -1) {
        return [...acc, cur]; //같은 id를 가진 게시물이 없다면 기존 포스트들과 새로받은 포스트 리턴
      } else {
        // 중복되는 id가 있다면? 포스트가 중복되서 출력되는 걸 막아줘야함
        acc[acc.findIndex((a) => a.category_no === cur.category_no)] = cur; //기존 리스트에서 새로받은 리스트와 같은 id가 있다면
        return acc; // 그 게시물은 새로 받은 게시물 => 그러므로 cur은 return 안해준다
      }
    }, []);
  },
  
  [ADD_CATEGORY](state, payload) {
    console.log("카테고리 더하기", payload);
    let data = payload.data;
    state.category_list.unshift(data);
    state.word_cloud_list.unshift({
      name: data.name,
      value: data.progress,
      category_no: data.category_no,
    });
  },
  [SET_WORD_CLOUD](state, payload) {
    let data = payload.data;
    console.log("워드 클라우드 데이터 : ", data);

    for (let i = 0; i < data.length; i++) {
      console.log("데이터 넣는중....", data[i].category_no, data[i].name);
      state.word_cloud_list.push({
        name: data[i].name,
        value: data[i].progress,
        category_no: data[i].category_no,
      });
    }
    state.word_cloud_list = state.word_cloud_list.reduce((acc, cur) => {
      if (acc.findIndex((a) => a.category_no === cur.category_no) === -1) {
        return [...acc, cur]; //같은 id를 가진 게시물이 없다면 기존 포스트들과 새로받은 포스트 리턴
      } else {
        // 중복되는 id가 있다면? 포스트가 중복되서 출력되는 걸 막아줘야함
        acc[acc.findIndex((a) => a.category_no === cur.category_no)] = cur; //기존 리스트에서 새로받은 리스트와 같은 id가 있다면
        return acc; // 그 게시물은 새로 받은 게시물 => 그러므로 cur은 return 안해준다
      }
    }, []);
  },
};
