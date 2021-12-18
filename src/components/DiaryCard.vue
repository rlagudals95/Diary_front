<template>
  <div class="card-container" >
    <div class="card">
        <img class="card-img" src="https://images.pexels.com/photos/2825240/pexels-photo-2825240.jpeg?cs=srgb&dl=pexels-david-bartus-2825240.jpg&fm=jpg"  alt="">  
        <span class="hover">
            <div class="hover-font">{{diaryData.title}}<br><br>
              <span class="hover-content">{{diaryData.content}}</span>
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
        overflow: hidden;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.4);
        width: 100%;
        height: 100%;
        opacity: 1;
        color: white;
    }

    .hover-font{
        font-size: 1rem;
        color: white;
        text-align: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .hover-content {
        font-size: 0.8rem;
    }

</style>