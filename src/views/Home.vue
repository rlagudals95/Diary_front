<template>
    <div class="main-container">
      <ScrollTop /> 
      메인페이지
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
    //Card  , InfiniteLoading, 
    ScrollTop },
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
      }).catch((err)=> {
        console.error(err)
      })
    }

    
  },
  computed : {
    ...mapState({
        spots : state => state.spotStore.spots
    })     
  },
  mounted() {
    this.getContent();
  },
};
</script>

<style lang='scss' scoped >
  .main-container {
    //background: url('');
    background-color: black;
    width: 80%;
    height: 100%;
    margin: 5rem auto 0px auto;
  }
</style>
