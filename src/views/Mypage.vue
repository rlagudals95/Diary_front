<template>
  <div class="mypage-container">
        <WordCloud/>
        <div class="mypage-title">MY KEYWORD</div>
        <br>
        <div class="meta-desc">
         자신이 이루고자 하는 목표나 배우고 싶은 것을 카테고리로 설정해 보세요 :)<br>
         모르는 것도 괜찮고 기억하고 싶은 것도 다 좋아요
      </div>
      <br>
      <b-form-input v-model="name" placeholder="Enter your keyword"></b-form-input>
      <b-button @keyup.enter="addCate"  @click="addCate" class="mt-3" variant="dark">add keyword</b-button>
      <div class="mt-2">   
        <div class="category-container mt-3" v-for="category in category_list" :key="category.category_no" >
             <hr/>
             {{category.name}} / 진행률 : {{category.progress}} / 목표설정일시 : {{category.create_date}}
        </div>
      </div>
  </div>
</template>
<script>
import axios from 'axios'
import {config} from '../config'
import {mapState} from 'vuex'
import WordCloud from '../components/WordCloud.vue'

export default {
    components: {WordCloud},
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
                this.$store.commit('ADD_CATEGORY', res);
                console.log('카테고리 추가 res : ', res)
                this.name = "";
            })
        },
        getCategory (){
            this.$store.dispatch('getCategory')
        },
    },
    created (){
        this.getCategory();
    },
    computed : {
      ...mapState({
         category_list : state => state.user.category_list,
         edit_category : state => state.category.edit_category,
      })     
    },

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
    padding-bottom: 5vw;
  }

  .mypage-title{
    font-size: 7vw;
    font-weight: bolder;
  }

  .category-container{
    font-size: 3vw
  }

  /* .timer-container {
    font-size: 5rem;
    margin-bottom: 3rem;
  } */
</style>