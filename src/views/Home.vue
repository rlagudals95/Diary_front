<template>
    <div class="main-container">
      <ScrollTop /> 
        <!-- <WordCloud/> -->
        <div class="meta-catainer">
          <div class="meta-title mb-3" @click="openMetaInfo">
            메타인지란?
            <div class="arrow-down"><BIconChevronDown/></div>
            
          </div>
          <!-- <div class="meta-toggle"> </div> -->
          <hr/>
          <div v-bind:class="[ is_open_meta? 'meta-info-open ' :' meta-info'] ">
            <div class="meta-eng">meta-cognition , Self reflection</div>
            <div class="meta-desc ">
              메타인지란, '인지과정에 대한 인지 능력'을 가리키는 말이라고 합니다.<br/>
              인지과정을 인지한다 ?  굉장히 모순적인 말같고, 말장난 같기도하죠. <br/>
              <strong>다시말해 내가 무엇을 알고, 또 무엇을 모르는지에 대해 파악하는 능력이라고 합니다.</strong><br/>
              이 메타인지 능력이 높을 수록 학습의 효율성이 높아진다고 해서 많은 관심을 받고 있습니다.<br/> 
              우리가 어떤 주제에 대해 공부를 할때, 스스로 모르는 것이 무엇인지를 파악하는 것이 굉장히 중요하다고 합니다. <br/>
              모르는 것이 무엇인지를 알고, 또 모르는 것으로 인해 발생하는 일이 어떤 것인지를 파악하면 <strong>부족한 점을 해결할 수 있는 학습 계획을 더욱 효율적으로 세울 수 있기 때문이라고 합니다.</strong> 
            </div>
            <hr>
          </div>
        </div>
        <!-- <div class="title-container">MY WORD</div> 
        <hr style="opacity:0.1; width: 80%; margin: 0px auto;" />
        <div class="keyword-container">
          {{keyword}}
        </div> -->
        <div class="keyword-back-container">
         <p class="keyword-back">{{keyword}}</p>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import {mapState} from 'vuex'
import ScrollTop from '../components/ScrollTop.vue'
//import {BIconArrowDown } from 'bootstrap-vue'
//import WordCloud from '../components/WordCloud.vue'

export default {
  name: "Home",
  components: { 
    //Card, InfiniteLoading, 
    ScrollTop, 
    //WordCloud
  },
  data () {
    return {
      cards : this.$store.state.spotStore.spots,
      isLoading: true,
      is_open_meta: false,
      pageNo: 1,
      Posts : [],
      isLogin: localStorage.getItem('Authorization')
    }
  },
  methods: {
    getContent (){
      axios.post(`${process.env.VUE_APP_API}/diary/main`,).then((res)=> {
        console.log("메인 데이터 : ",res.data)
        this.$store.commit('SET_KEYWORD', res);
      }).catch((err)=> {
        console.error(err)
      })
    },
    openMetaInfo (){
      this.is_open_meta = !this.is_open_meta;
    },
    goLogin (){
      if(!this.isLogin){
        this.$router.push("/login");
      }
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
  created (){
    this.goLogin ()
  }
};
</script>

<style lang='scss' scoped >
  @keyframes blink {
    0% {opacity: 0.3;}
    50% {opacity: 0.7;}
    100% {opacity: 1;}
  }

  .main-container {
    //background-color: red;
    width: 80%;
    height: 100%;
    margin: 6rem auto 0px auto;
    align-items: center;
    z-index: 1;
  }

  .meta-catainer {
    z-index: 50;
  }


  .meta-info {
    height: 0;
    overflow: hidden;
  }

  .meta-info-open {
    height: 100%;
    overflow: hidden;
  }
  .meta-title{
    text-decoration: none;
    font-size: 7vw;
    font-weight: bolder;
    cursor: pointer;
    text-shadow:  0 0 1em rgba(0,0,0,0.1);
  }

  .arrow-down {
    font-size: 25px;
    font-weight: bolder;
    animation: blink 1s infinite;
    /* animation-direction: alternate; */
  }

  .meta-title:hover {
    opacity: 0.8;  
  }

  .meta-toggle{
    font-size: 30px;
    font-weight: bolder;
  }
  .meta-eng {
    font-size: 3.7vw;
    opacity: 0.7;
  }

  .meta-desc{
    padding-bottom: 30px;
  }

  .title-container {
    font-size: 7vw;
    margin: 0px auto;
    padding: 20px 0px;
  }

  .keyword-container {
    padding : 20px 0px;
    font-size: 3.5vw;
    width: 100%;
    overflow: scroll;
    height: 70vh;
  }

  .keyword-container::-webkit-scrollbar {
    display: none;
  } 
  .keyword-back-container {
    width: 100%;
    overflow: hidden;
    align-items: center;
    text-align: center;
    position: relative;
    padding-bottom: 30px;
  }

  .keyword-back {
    // margin: 20px;
    z-index: 49;
    //transform: translate(-50%, -50%);
    margin: 50px auto 0px auto; 
    opacity: 0.6;
    height: 50%;
    font-size: 0.9rem;
    writing-mode:tb-rl;
    line-height: 1.5rem;
    letter-spacing: 0.3rem;
  }

</style>
