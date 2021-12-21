<template>
    <div class="main-container">
      <ScrollTop /> 
        <div class="title-container">SHOW YOUR KEYWORD</div> 
        <hr style="opacity:0.1; width: 80%; margin: 0px auto;" />
        <div class="keyword-container">
          {{keyword}}
        </div>
    </div>
</template>

<script>
import axios from "axios";
import {mapState} from 'vuex'
import ScrollTop from '../components/ScrollTop.vue'
import { config } from '../config'

export default {
  name: "Home",
  components: { 
    //Card, InfiniteLoading, 
    ScrollTop 
  },
  data () {
    return {
      cards : this.$store.state.spotStore.spots,
      isLoading: true,
      pageNo: 1,
      Posts : []
    }
  },
  methods: {
    getContent (){
      axios.post(`${config.localUrl}/diary/main`,).then((res)=> {
        console.log("메인 데이터 : ",res.data)
        this.$store.commit('SET_KEYWORD', res);
      }).catch((err)=> {
        console.error(err)
      })
    }    
  },
  computed : {
    ...mapState({
        spots : state => state.spotStore.spots,
        keyword : state => state.diary.keyword
    })     
  },
  mounted() {
    this.getContent();
  },
};
</script>

<style lang='scss' scoped >
  .main-container {
    width: 80%;
    height: 100%;
    margin: 5rem auto 0px auto;
    align-items: center;
  
  }

  .title-container {
    font-size: 5vw;
    margin: 0px auto;
    padding: 50px 0px;
  }

  .keyword-container {
    padding : 20px 0px;
    line-height: 3.5vw;
    font-size: 2vw;
    width: 100%;
    overflow: scroll;
    height: 70vh;
  }

  .keyword-container::-webkit-scrollbar {
    display: none;
  } 

</style>
