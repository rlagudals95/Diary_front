<template>
  <div class="form-container">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Username" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.username"
          type="text"
          placeholder="Enter username"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password" label-for="input-2">
        <b-form-input
          id="input-2"
          type="password"
          v-model="form.password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">login</b-button>
      <b-button type="button" @click="goJoin()" variant="blue">join</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
        username: "",
        checked: [],
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      console.log(this.form.email, this.form.password);
      axios
        .post(`${process.env.VUE_APP_API}/login`, {
          username: this.form.username,
          password: this.form.password,
        })
        .then((res) => {
          console.log("로그인 정보 :",res);
          if (res.status == 200) {
            console.log("로그인 성공");
            localStorage.setItem("Authorization", res.headers.authorization);
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('Authorization');
            this.$store.commit("SET_LOGIN",res);
            this.$router.push("/");
          }
        }).catch((err)=> {
          console.log('로그인에러 : ', err);
          alert('아이디 혹은 비밀번호를 확인해주세요 :)');
        })
    },
    goJoin() {
      this.$router.push("join");
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form-container {
  width: 80%;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%);
}
</style>
