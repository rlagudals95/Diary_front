<template>
  <div class="form-container">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Username"
        label-for="input-1"
      >
        <b-form-input
          v-model="form.username"
          type="text"
          placeholder="Enter username"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Email"
        label-for="input-1"
      >
        <b-form-input
          v-model="form.email"
          type="email"
          placeholder="Enter Email"
          required
        ></b-form-input>
      </b-form-group>  

      <b-form-group
        label="Name"
        label-for="input-1"
      >
        <b-form-input
          v-model="form.name"
          type="text"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group> 

      <b-form-group label="Password" label-for="input-2">
        <b-form-input
          type="password"
          v-model="form.password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Password check" label-for="input-2">
        <b-form-input
          type="password"
          v-model="form.passwordChk"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>


      <b-button type="submit" variant="primary">Join</b-button>
      <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
  export default {
    name: "Join",
    data() {
      return {
        form: {
          email: '',
          password: '',
          passwordChk: "",
          username: '',
          name: '',
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        let _form = this.form;
        if(_form.password != _form.passwordChk) {
           alert('비밀번호를 다시 확인해 주세요!')
           return
        }

        console.log(this.form.email, this.form.password)
        axios.post('http://localhost:8000/join',  
            {
               username : _form.username,
               password : _form.password,
               email : _form.email,
               name : _form.name

            }
        ).then((res)=> {
            console.log('회원가입 : ', res);
            this.$router.push('login')
        }).catch((err)=> {
            console.log('회원가입 실패 : ',err);
        })

        //alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
    .form-container {
        width: 80%;
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%,)

    }
    
</style>

