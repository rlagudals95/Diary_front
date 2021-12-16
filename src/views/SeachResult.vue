<template>
  <div>
    <div class="container"> 
      <div v-for="data in searchData" :key="data.bloggerlink" >
          <!-- <a :href="data.bloggerlink">dd</a> -->
          <BlogCard v-bind:cardData="data"/>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from '../components/BlogCard.vue'
import { mapState } from 'vuex'

export default {
    name: "SearchResult",
    components: { BlogCard } ,
    data  () {
      return {
       
      }
    },
    computed : {
      ...mapState({
         searchData: state => state.spotStore.searchData
      })     
    },

}
</script>

<style>
  .container {
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