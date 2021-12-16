<template>
    <div class="diary-container ">
        <div v-for="diary_card in diary_list" :key="diary_card.diary_no" >
            <DiaryCard/>
        </div>
        <infinite-loading @infinite="getDiary" spinner="waveDots">무한스크롤 끄읏 :)</infinite-loading>
    </div>
</template>

<script>
import axios from 'axios'
import { config } from '../config'
import DiaryCard from '../components/DiaryCard.vue'
import InfiniteLoading from "vue-infinite-loading";
//import ScrollTop from '../components/ScrollTop.vue'

export default {
    name: 'DiaryView',
    components : { DiaryCard, InfiniteLoading } ,
    data() {
      return {
        diary_list : []
      }
    },
    methods : {
        getDiary ($state){
            axios.get(`${config.localUrl}/diary/list`).then((res)=> {
                console.log('다이어리 리스트 : ',res);
                this.diary_list.push(res)
                $state.loaded();
            }).catch((err)=> {
                console.log('diary_list_err',err)
            })
        }
    },
    created (){
        this.getDiary();
    }

}
</script>

<style>
    .diary-container {
    padding-top: 50px;
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