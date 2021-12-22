<template>
  <div class="mypage-container">
      마이페이지
      <input v-model="name" type="text">
      <button @click="addCate">버튼</button>
  </div>
</template>

<script>
import axios from 'axios'
import {config} from '../config'

export default {
    data () {
        return {
            name: "",
        }
    },
    methods :{
        addCate (){
            if (!this.name){
                alert('카테고리 명을 정확히 입력해주세요')
                return
            }
            console.log('카테고리명 : ',this.name)
            axios.post(`${config.localUrl}/category/add`,{
                name: this.name
            }).then((res)=> {
                console.log('카테고리 추가 res : ', res)
            })
        }
    }
}
</script>

<style>
    .mypage-container {
    display: flex !important;
    flex-direction: column;
    width: 80%;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%);
  }

  /* .timer-container {
    font-size: 5rem;
    margin-bottom: 3rem;
  } */
</style>