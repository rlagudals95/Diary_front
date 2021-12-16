import axios from "axios";
import { mutations } from "./mutations";

export const actions = {
  getSeachResults({ state }, payload) {
    console.log("1 : ", payload.numOfRows);
    axios
      .get(
        `http://api.kcisa.kr/openapi/service/rest/convergence2019/getConver01?serviceKey=${process.env.VUE_APP_SPOT}&pageNo=${payload.pageNo}&numOfRows=16`
      )
      .then((res) => {
        let data = res.data.response.body.items.item;
        console.log("응답값 : ", data);
        mutations.SET_SPOTS(state, data, payload.test);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

// export const actions = {
//   getSpots({ state }, payload) {
//     console.log("1 : ", payload.numOfRows);
//     axios
//       .get(
//         `http://api.kcisa.kr/openapi/service/rest/convergence2019/getConver01?serviceKey=${process.env.VUE_APP_SPOT}&pageNo=${payload.pageNo}&numOfRows=16`
//       )
//       .then((res) => {
//         let data = res.data.response.body.items.item;
//         console.log("응답값 : ", data);
//         mutations.SET_SPOTS(state, data, payload.test);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   },
// };
