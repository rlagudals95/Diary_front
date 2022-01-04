import axios from "axios";
//import { mutations } from "./mutations";
import { config } from "../../config";
import { mutations } from './mutations'

export const actions = {
  getCategoryDetail({ state }, payload) {
    console.log("카테고리_no : ", payload);
    axios
      .post(`${process.env.VUE_APP_API}/category/view/${payload}`)
      .then((res) => {
        console.log("카테고리 상세 응답값 : ", res);
        mutations.SET_CATEGORY_DETAIL(state, res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getCategory({ state }, payload) {
    console.log('사용여부 페이로드 : ',payload)
    axios
      .post(`${process.env.VUE_APP_API}/category/list`, {
        complete_yn : payload
      })
      .then((res) => {
        console.log("응답값 : ", res);
        mutations.SET_CATEGORY(state, res);
        mutations.SET_WORD_CLOUD(state, res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  completeCategory({state}, payload) {
    axios.post(`${process.env.VUE_APP_API}/category/complete/${payload}`, {   
    }).then((res) => {
      console.log(res)
      mutations.COMPLETE_CATEGORY(state, payload)
    }).catch((err)=> {
      alert('카테고리 삭제에러')
      console.log(err)
    })
  }
};
