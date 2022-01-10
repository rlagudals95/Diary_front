<template>
  <div class="mypage-container">
        <!-- <WordCloud/> -->
        <div class="mypage-title">MY KEYWORD</div>
        <br>
        <div class="meta-desc">
          자신이 이루고자 하는 목표나 배우고 싶은 것을 카테고리로 설정해 보세요 :)<br>
          모르는 것도 괜찮고 기억하고 싶은 것도 다 좋아요<br>
          진행률이 100 이상이 되면 완료됩니다.
        </div>
        <br>
        <hr/>
      <br>
      <div class="mt-3 mb-3">
        <label class="mb-3 category-img-container"><strong>Category Image</strong>
        <br/>(카테고리 별로 이미지를 등록할 수도 있어요!)</label>
        <FileUpload is_preview=""/>
        <!-- {{upload_img}}  -->
      </div>

      <b-form-input class="mt-3" v-model="name" placeholder="Enter your keyword"></b-form-input>
      <b-button @keyup.enter="addCate"  @click="addCate" class="mt-3" variant="dark">add keyword</b-button>
      <br />
      <div class="mt-2">   
        <div class="com-yn-btn mt-3"></div>
        <b-button @click="getCategory('N')" variant="light">진행중인 목표</b-button>
        <b-button @click="getCategory('Y')" variant="dark">완료된 목표</b-button>
        <div class="category-container mt-3" v-for="category in category_list" :key="category.category_no" >
            <hr/>
            <div class="category_wrap" v-show="category.use_yn == 'Y' ">
              {{category.name}} / 진행률 : {{category.progress}} / 목표설정일시 : {{category.create_date}}
              <b-progress class="mt-3" height="7px" :value="category.progress"></b-progress>
              <b-button v-show =" category.complete_yn == 'N' " class="mt-3 complete_btn" @click="completeCategory(category.category_no)" variant="light">완료처리</b-button>
              <b-button v-show =" category.use_yn == 'Y' " class="mt-3 complete_btn" @click="useCategory(category.category_no)" variant="dark">삭제</b-button>
            </div>
        </div>
      </div>
  </div>
</template>
<script>
import axios from 'axios'
import {mapState} from 'vuex'
//import WordCloud from '../components/WordCloud.vue'
import FileUpload from '../components/FileUpload.vue'

export default {
    components: { FileUpload },
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
            let data = {
              name : this.name
            }

            let formData = new FormData();
           
            formData.append('key', new Blob([JSON.stringify(data)] , {type: "application/json"}));
            if(this.upload_img) {
               Object.values(this.upload_img).forEach((file) => formData.append("file", file));
            }
           
            axios.post(`${process.env.VUE_APP_API}/category/add`, formData ,{
                headers: { 
                  'Content-Type': 'multipart/form-data' 
                }
                //name: this.name
            }).then((res)=> {
                console.log('카테고리 추가 111 : ', res)
                this.$store.commit('ADD_CATEGORY', res);
                this.name = '';
                this.$store.commit('RESET_UPLOAD')            
            })
        },
        getCategory (yn){
            if (!yn) yn = 'N';
            this.$store.dispatch('getCategory', yn)
        },
        completeCategory (category_no) {
          this.$store.dispatch('completeCategory', category_no)
        },
        useCategory (category_no) {
          this.$store.dispatch('useCategory', category_no)
        }
    },
    created (){
        this.getCategory();
    },
    computed : {
      ...mapState({
         category_list : state => state.category.category_list,
         category_detail : state => state.category.category_detail,
         upload_img: state => state.diary.upload_img
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
    font-size: 2vw
  }

  .complete_btn {

  }

  .category-img-container {
   
  }
  /* .timer-container {
    font-size: 5rem;
    margin-bottom: 3rem;
  } */
</style>