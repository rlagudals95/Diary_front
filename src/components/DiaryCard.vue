<template>
  <div class="card-container"  @click="goDetail">
    <div class="card">
        <img class="card-img" src="https://images.pexels.com/photos/2825240/pexels-photo-2825240.jpeg?cs=srgb&dl=pexels-david-bartus-2825240.jpg&fm=jpg"  alt="">  
        <span class="hover">
            <div class="hover-title">{{diaryData.title}}</div>
            <div class="font-wrap">
              <div class="hover-font">
                <span class="hover-content">{{diaryData.content}}</span>
              </div>
            </div>
        </span> 
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name : "DiaryCard",
    props: ['diaryData'],
    data () {
       return {
         isHover : false, 
         searchContent : ""
       } 
    },
    methods : {
        mouseOver (){
          //console.log('마우스');
          this.isHover = !this.isHover
        },
        goUrl (url){
          window.location.href = url;
        },
        search (searchUrl){
          let regex = /[^0-9]/gi;
          console.log('검색어1 : ', searchUrl)
          let replaceSearch = searchUrl.replace(regex,"");
          axios.post(`http://localhost:8000/search/url=${replaceSearch}`).then((res) =>{
            console.log('블로그 검색결과 : ',res)
            this.$store.commit('SET_SEARCH_RESULT', res);
          }).catch((err)=>{
            console.log('에러 : ',err)
          })
        },
        goDetail () {
          this.$router.push('/diaryDetail');
        }
    },
}
</script>

<style lang="scss" scoped>
    .card-container{
        /* width: 400px;
        height: 400px; */
    }

    .card-wrap{
        z-index: 200;
        width: 100%;
    
    }

    .card{
      background-position: center;
      width: 100%;
      aspect-ratio: 1/1; 
      background-size: cover;
      background-repeat: no-repeat;
      cursor: pointer;   
      border: none;
    }

    .card-img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      cursor: pointer;  
    }

    .hover {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      //position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: rgba(0, 0, 0, 0.4);
      width: 100%;
      height: 100%;
      opacity: 1;
    }
    .font-wrap {
      overflow: hidden;
      position: absolute;
      left: 50%;
      top: 60%;
      transform: translate(-50%, -50%);
      width: 130%;
      height: 77%;
      display: flex;
      padding-top: 30px;
      flex-direction: column;
    }
    .hover-title{
      margin-top: 0.8rem;
      font-size: 1rem;
      color: white;
      text-align: center;
    }
    .hover-font{
      font-size: 1rem;
      text-align: center;
    }
    .hover-content {
      font-size: 0.7rem;

    }


</style>