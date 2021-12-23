import axios from "axios";
//import { mutations } from "./mutations";
import { config } from "../../config";

export const actions = {
  getDetail(diary_no) {
    console.log("diary_no : ", diary_no);
    axios
      .get(`${config.localUrl}/diary/detail`)
      .then((res) => {
        console.log("응답값 : ", res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
