import axios from "axios";
//import { mutations } from "./mutations";
import { config } from "../../config";
import { mutations } from "../diary/mutations";
import { storage } from "../../share/firebase"

export const actions = {
  getDetail({state}, payload) {
    console.log("diary_no : ",payload );
    axios
      .post(`${config.localUrl}/diary/detail/${payload}`)
      .then((res) => {
        console.log("응답값 : ", res);
        mutations.SET_DIARY_DETAIL(state, res)
        
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getImgUrl({state}, payload) {

        const _upload = storage //파이어 베이스 스토리지 이용해서 img_url 뽑아내는 방법
          .ref(`image/diary_${new Date().getTime()}`)
          .putString(_image, "data_url");

        _upload.then((snapshot) => {
          snapshot.ref
            .getDownloadURL()
            .then((url) => {
              console.log(url);
              axios({
                
              })
            .catch((error) => {
              console.log(error);
              window.alert("게시물 저장이 정상적으로 되지 않았습니다.");
            });
        });


    console.log(storage)
    console.log("diary_no : ",payload );
    axios
      .post(`${config.localUrl}/diary/detail/${payload}`)
      .then((res) => {
        console.log("응답값 : ", res);
        mutations.SET_DIARY_DETAIL(state, res)
        
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
