<template>
  <div class="diary-upload-container">
    <!-- <Grammar/> -->
    <div class="timer-container">
      <!-- <label>TIME</label> -->
      <div>{{this.time}}</div>
      <div class="time-info">초 후에 제출됩니다 :)</div>
    </div>

    <div>
      <label>Title</label>
      <b-form-input
        id="textarea-rows"
        placeholder="Enter enything you do"
        rows="1"
        v-model="title"
        required
        max-rows="1"
      ></b-form-input>
    </div>

    <div class="mt-3">
      <label>Category</label>
      <!-- {{this.category_list}} -->
      
      <b-form-select v-model="category_no" aria-placeholder="">
        <option class="category-container" value="" selected>카테고리를 선택해 주세요!</option>
        <option class="category-container mt-1" :value="category.category_no" v-for="category in category_list" :key="category.category_no" >
          {{category.name}} / 진행률 : {{category.progress}} / 목표설정일시 : {{category.create_date}}
        </option>
      </b-form-select>
    </div>

    <div class="mt-3">
      <label>Image</label>
      <FileUpload/>
      <!-- {{upload_img}} -->
    </div>

    <div class="mt-3">
      <label>Score</label>
      <b-form-input
        id="textarea-rows"
        placeholder="Enter score for your goal"
        rows="1"
        v-model="score"
        required
        max= "100"
        max-rows="1"
      ></b-form-input>
    </div>


    <div style="margin-top: 10px">
      <label>Desciption</label>
      <b-form-textarea
        id="textarea-rows"
        placeholder="Enter enything you do"
        rows="7"
        v-model="content"
        required
      ></b-form-textarea>
    </div>
    <b-button type="" @click="goGrammar()" class="mt-3" variant="blue">맞춤법 검사하기</b-button>
    <b-button type="" @click="submitDiary()" class="mt-3" variant="dark">POST</b-button>
  </div>
  
</template>

<script>
import axios from 'axios';
import {config} from '../config';
import {mapState} from 'vuex'
import FileUpload from '../components/FileUpload.vue'
//import Grammar from '../components/Grammar.vue'

export default {
    name: 'UploadDiary',
    components : {FileUpload},
    data () {
      return {
        title: "",
        content: "",
        isGrammar: false,
        time: 10000,
        category_no : null,
        score: 0
      }
    },
    methods : {
      submitDiary (){
        // if (!this.isGrammar){
        //   alert('맞춤법 검사하고 붙여 넣어주세요!')
        //   return
        // }
        console.log('이미지 확인 : ',this.upload_img)
        if (!this.title || !this.content){
          alert('내용을 모두 채워넣어 주세요!')
          return
        }

        console.log('param : ',this.title, this.content, '/', this.category_no)
       
        // let _data = {
        //   title: this.title,
        //   content: this.content,
        //   category_no: this.category_no,
        //   keyword: '테스트',
        //   complete_yn : 'N',
        //   score: this.score
        // }
        // console.log(_data)

        const formData = new FormData();
        let data = [
          {title: this.title},
          {content: this.content},
          {category_no: this.category_no},
          {keyword: '테스트'},
          {complete_yn : 'N'},
          {score: this.score},
          {image: this.upload_img}
        ]

        for (let i = 0; i < data.length; i++){
          formData.append(data[i])
        }

        axios.post(`${config.localUrl}/diary/post/test`, formData,{
          headers: { 
            'Content-Type': 'multipart/form-data' 
          }
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
      },
      getCategory (){
        this.$store.dispatch('getCategory')
      }
    },
    computed : {
      ...mapState({
         category_list : state => state.user.category_list,
         upload_img: state => state.diary.upload_img
      })     
    },
    created() { 
      this.$store.dispatch('loginCheck') 
      this.getCategory();
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
    height: 100%;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%);
  }

  .timer-container {
    font-size: 10vw;
    margin-bottom: 3vw;
  }

  .time-info {
    font-size: 2.5vw;
    opacity: 0.8;
  }
</style>