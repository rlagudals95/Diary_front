import axios from "axios";
//import { mutations } from "./mutations";
import { config } from "../../config";
import { mutations } from './mutations'

export const actions = {
  getCategoryDetail({ state }, payload) {
    console.log("카테고리_no : ", payload);
    axios
      .post(`${config.localUrl}/category/view/${payload}`)
      .then((res) => {
        console.log("카테고리 상세 응답값 : ", res);
        mutations.SET_CATEGORY_DETAIL(state, res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
