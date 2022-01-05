<template>
  <div>
    <!-- {{s_diary_list}} -->
    <ScrollTop/>
    <PostBtn/>
    <div class="diary-container">
        <div v-for="diary_card in s_diary_list" :key="diary_card.diary_no" >
            <DiaryCard @click="goDetail(diary_card.diary_no)" :diaryData="diary_card"/>
        </div>
    </div>
     <infinite-loading @infinite="infiniteHandler" spinner="waveDots">무한스크롤 끄읏 :)</infinite-loading> 
  </div>
</template>

<script>
import axios from 'axios'
import DiaryCard from '../components/DiaryCard.vue'
//import InfiniteLoading from "vue-infinite-loading";
import ScrollTop from '../components/ScrollTop.vue'
import { mapState } from 'vuex'
import PostBtn from '../components/PostBtn.vue'

export default {
    name: 'DiaryView',
    components : { DiaryCard, ScrollTop, PostBtn } ,
    data() {
      return {
        isLoading: false ,
        page: 0,
        size: 12,
        flag: false
      }
    },
    methods : {
        infiniteHandler ($state){
           axios.post(`${process.env.VUE_APP_API}/diary/list`,  {
                  page: this.page,
                  size: this.size
           }).then(res => {
             setTimeout(()=> {
               if(res.data.length){
                  console.log('반응테스트',res.data)
                  this.$store.commit('SET_DIARY_LIST', res);
  
                  this.page += 12;
                  $state.loaded(); 
                  if (this.s_diary_list.length/12 == 0){
                    $state.complete();
                  }
               }else {
                 $state.complete();
               }
             },1000)
           }).catch(err => {
             console.error(err)
           })
        },
        goDetail (diary_no){
          console.log('상세보기 :', diary_no);
          this.$store.dispatch("getDetail", diary_no)
        },
    },

    computed : {
      ...mapState({
          s_diary_list : state => state.diary.diary_list
      })     
    },
}
</script>

<style lang="scss" scoped>
  .diary-container {
    padding:70px 10px 0px 10px ;
    padding-top: 70px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 10px;
    width: 100%;
    @media (min-width: 1440px) {
       grid-gap: 5px;
    }
    @media (max-width: 1440px) {
        /* 1440밑으로 넓이가 내려가면 */
        
    }
      /* @media (max-width: 1280px) {
        grid-template-columns: ${(props) => props.grid};
        grid-gap: 10px;
        margin: auto;
        margin-top: 4vh;
        padding-top: 0px;
      } */
    @media (max-width: 1025px) {       
      grid-gap: 5px;
      margin: auto;     
    }
    @media (max-width: 960px) {   
     grid-template-columns: 1fr 1fr 1fr; 
      grid-gap: 5px;
      margin: auto;
    }
    @media (max-width: 600px) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 2px;
    }
  }
</style>