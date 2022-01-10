import axios from "axios";
//import { mutations } from "./mutations";
import { mutations } from "../diary/mutations";


export const actions = {
  getDetail({state}, payload) {
    console.log("diary_no : ",payload );
    axios
      .post(`${process.env.VUE_APP_API}/diary/detail/${payload}`)
      .then((res) => {
        console.log("응답값 : ", res);
        mutations.SET_DIARY_DETAIL(state, res)
      })
      .catch((err) => {
        console.log(err);
      });
  },
  editDiary({state}, payload) {
    console.log("diary_no : ",payload );
    axios
      .post(`${process.env.VUE_APP_API}/diary/edit/${payload}`)
      .then((res) => {
        console.log("응답값 : ", res);
        mutations.EDIT_DIARY(state, res)
      })
      .catch((err) => {
        console.log(err);
      });
  },

  deleteDiary({state}, payload) {
    console.log("diary_no : ",payload );
    axios
      .post(`${process.env.VUE_APP_API}/diary/detail/${payload}`)
      .then((res) => {
        console.log("응답값 : ", res);
        mutations.SET_DIARY_DETAIL(state, res)
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
