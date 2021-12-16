import router from "../../router/index";

export const actions = {
  loginCheck() {
    if (localStorage.getItem("Authorization")) {
      //로그인이 되어있는 상태에서 필요한 로직 구현
      console.log("login user!");
    } else {
      //로그인페이지로 이동
      router.push({ name: "Home" }).catch((err) => {
        console.log(err);
      });
    }
  },
};
