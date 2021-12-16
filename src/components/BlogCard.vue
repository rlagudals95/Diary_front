<template>
<!-- search(cardData.title) -->
<div class="card-container"  @mouseenter="mouseOver" @mouseleave ="mouseOver">  
      <router-link to="/searchResult">
        <div class="card" >
            <img class="card-img" :src="cardData.thumb" alt=""> 
          
            <span class="hover" v-if="isHover">
              <div class="hover-font" >{{cardData.title}}<br><br>{{cardData.readyContent}}</div>
            </span> 
        </div>
      </router-link>
</div>
</template>

<script>
import axios from 'axios'
//import cheerio from 'cheerio'
import $ from 'jquery'


export default {
    name:'Card',
    props: {
      cardData: Object
    },
    data () {
       return {
         isHover : false,
         searchContent : "",
         jquery: $ 
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
            console.log('타이틀 검색:',res)
            this.$store.commit('SET_SEARCH_RESULT', res);
          }).catch((err)=>{
            console.log('에러 : ',err)
          })
        },
        getThumbnail(){
          var metaTags = document.querySelectorAll('meta');
          console.log('metaTags : ',metaTags)
        },
        _getHostname(url) {
          let start = url.indexOf('://') + 3
          let end = url.indexOf('/', start)
          return url.slice(start, end)
        },
        _getProtocol(url) {
          let end = url.indexOf('://') + 3
          return url.slice(0, end)
        },
        _bodyScrap(url) {
          return ($) => {
            // 글제목
            let title = $('meta[property=\'og:title\']').attr('content')
            if(!title){
              title = $('head title').text()
              if(!title){
                throw Error('This link has no title')
              }
            }
            // 글이미지
            let image = $('meta[property=\'og:image\']').attr('content')
            if(!image){
              image = $('img').attr('src')
              //이미지 세팅
              if(image && image.indexOf('http') === 0){
                // http 로 시작하면 그냥 사용
              }else if(image && image[0] === '/'){
                // image 경로가 / 로 시작한다면
                //let urlObj = new URL(url);
                image = this._getProtocol(url) + this._getHostname(url) + image
              }else{
                image = ''
              }
            }

            // 글요약본
            let desc = $('meta[property=\'og:description\']').attr('content')
            if(!desc){
              desc = ''
            }
            return {
              title,
              image,
              desc,
            }
          }
        },
        // async getUrlMeta(url){
         
        //   // eslint-disable-next-line no-debugger
        //   const meta = await fetch(url ,{
        //     method: "POST",
        //     headers :{
        //       "Content-Type": "text/plain",
        //       'Access-Control-Allow-Origin': '*'
        //     }
        //   })
        //     .then((res) => res.text())
        //     .then(cheerio.load)
        //     .then(this._bodyScrap(url))
        //     .catch(rejected => {
        //         console.log(rejected);
        //     });
        //   return meta
        // },
      
    },

}
</script>

<style>
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
  font-size: 0.5rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  opacity: 1;
  color: white;
}

.hover-font{
  font-size: 0.5rem;
  color: white;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

</style>