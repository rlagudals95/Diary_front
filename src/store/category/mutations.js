//const EDIT_CATEGORY = "EDIT_CATEGORY";
const SET_CATEGORY_DETAIL = "SET_CATEGORY_DETAIL";
const SET_CATEGORY = "SET_CATEGORY";
const ADD_CATEGORY = "ADD_CATEGORY";
const COMPLETE_CATEGORY = "COMPLETE_CATEGORY";
const DELETE_CATEGORY = "DELETE_CATEGORY";
const SET_CATEGORY_CHART = "SET_CATEGORY_CHART";

export const mutations = {
  [SET_CATEGORY_DETAIL](state, payload) {
    console.log("카테고리 인포 : ", state, payload);
    state.category_detail = payload.data;
  },
  [SET_CATEGORY](state, payload) {
    console.log("셋 카테고리 : ", payload);

    let data = payload.data;
    state.category_list = data;
    state.category_list = state.category_list.reduce((acc, cur) => {
      if (acc.findIndex((a) => a.category_no === cur.category_no) === -1) {
        return [...acc, cur]; 
      } else {
        // 중복되는 id가 있다면? 포스트가 중복되서 출력되는 걸 막아줘야함
        acc[acc.findIndex((a) => a.category_no === cur.category_no)] = cur; 
        return acc; 
      }
    }, []);

    //// wordCloud 사용보류

    // for (let i = 0; i < data.length; i++) {
    //   console.log("데이터 넣는중....", data[i].category_no, data[i].name);
    //   state.word_cloud_list.push({
    //     name: data[i].name,
    //     value: data[i].progress,
    //     category_no: data[i].category_no,
    //   });
    // }
    // state.word_cloud_list = state.word_cloud_list.reduce((acc, cur) => {
    //   if (acc.findIndex((a) => a.category_no === cur.category_no) === -1) {
    //     return [...acc, cur]; //같은 id를 가진 게시물이 없다면 기존 포스트들과 새로받은 포스트 리턴
    //   } else {
    //     // 중복되는 id가 있다면? 포스트가 중복되서 출력되는 걸 막아줘야함
    //     acc[acc.findIndex((a) => a.category_no === cur.category_no)] = cur; //기존 리스트에서 새로받은 리스트와 같은 id가 있다면
    //     return acc; // 그 게시물은 새로 받은 게시물 => 그러므로 cur은 return 안해준다
    //   }
    // }, []);
  },

  [ADD_CATEGORY](state, payload) {
    console.log("카테고리 더하기", payload);
    let data = payload.data;
    state.category_list.unshift(data);
    //state.word_cloud_list.unshift({
    //  name: data.name,
    //  value: data.progress,
    //  category_no: data.category_no,
    //});
  },
  [COMPLETE_CATEGORY](state, payload) {
    console.log("카테고리 더하기", payload);
    let category_list = state.category_list;

    for (let i = 0; i < category_list.length; i++) {
      if (category_list[i].category_no == payload)
        category_list[i].complete_yn = "Y";
      category_list.splice(i, 1);
    }
  },
  [DELETE_CATEGORY](state, payload) {
    console.log("카테고리 빼기", payload);
    let category_list = state.category_list;

    for (let i = 0; i < category_list.length; i++) {
      if (category_list[i].category_no == payload) {
        category_list[i].use_yn = "N";
        category_list.splice(i, 1);
      }
    }
  },
  [SET_CATEGORY_CHART](state, payload) {
    let labels = [];
    let progresses = [];
    console.log("그래프 카테고리 ", state, payload);
    let loopCnt = payload.data.length;
    if (payload.data.length >= 10) loopCnt = 10;
    for (let i = 0; i < loopCnt; i++) {
      labels.push(payload.data[i].name);
      progresses.push(payload.data[i].progress);
    }
    // 
    
    state.category_chart.labels = labels;
    state.category_chart.progress = progresses;
  },
};
