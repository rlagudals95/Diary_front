<template>
  <div class="diary-upload-container">
    <Grammar/>
    <div class="timer-container">
      <label>TIME</label>
      <div>{{this.time}}</div>
    </div>

    <div>
      <label>Title</label>
      <b-form-textarea
        id="textarea-rows"
        placeholder="Enter enything you do"
        rows="1"
        v-model="title"
        required
        max-rows="1"
      ></b-form-textarea>
    </div>

    <div style="margin-top: 10px">
      <label>Desciption</label>
      <b-form-textarea
        id="textarea-rows"
        placeholder="Enter enything you do"
        rows="10"
        v-model="content"
        required
      ></b-form-textarea>
    </div>
    <b-button type="" @click="goGrammar()" class="mt-3" variant="blue">맞춤법 검사하기</b-button>
    <b-button type="" @click="submitDiary()" class="mt-3" variant="primary">POST</b-button>
  </div>
  
</template>

<script>
import axios from 'axios';
import {config} from '../config';
import Grammar from '../components/Grammar.vue'

export default {
    name: 'UploadDiary',
    components : {Grammar},
    data () {
      return {
        title: "",
        content: "",
        isGrammar: false,
        time: 60
      }
    },
    methods : {
      submitDiary (){
        if (!this.isGrammar){
          alert('맞춤법 검사하고 붙여 넣어주세요!')
          return
        }

        if (!this.title || !this.content){
          alert('내용을 모두 채워넣어 주세요!')
          return
        }

        console.log('param : ',this.title, this.content)
        axios.post(`${config.localUrl}/diary/post`,{
          title: this.title,
          content: this.content,
          // headers : {
          //   "Authorization": localStorage.getItem("Authorization")
          // }
        }).then((res)=> {
          console.log('게시물 작성 반응값 : ', res)
          this.$router.push('diaryView')
        })
      },
      goGrammar (){
        window.open('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EB%84%A4%EC%9D%B4%EB%B2%84+%EB%A7%9E%EC%B6%A4%EB%B2%95+%EA%B2%80%EC%82%AC%EA%B8%B0')
        this.isGrammar = true;
      },
      postTimer (){
        if(this.time <= 0){
          if (this.isGrammar && this.title && this.content){
            this.submitDiary();
          }
          this.$router.push('diaryView')
        }
        this.time--
      }
    },
    created() { 
      this.$store.dispatch('loginCheck') 
      setInterval(()=> {
        this.postTimer();
      },1000)
    },

}
</script>

<style lang="scss" scoped>
  .diary-upload-container {
    display: flex !important;
    flex-direction: column;
    width: 80%;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%);
  }

  .timer-container {
    font-size: 5rem;
    margin-bottom: 3rem;
  }
</style>