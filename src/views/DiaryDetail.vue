<template>
  <div class="diary-detail-container">
      <h1 class="mb-4 detail-score">score : {{this.diary_detail.score}}</h1>
      <h2 class="detail-title mb-3">{{diary_detail.title}}</h2>
      {{this.diary_detail.content}}
      <b-img class="mt-3 detail-image" :src="diary_detail.image_url" fluid-grow alt="Fluid-grow image"></b-img>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name:'DiaryDetail',
    date () {
        return {

        }
    },
    computed : {
        ...mapState({
            diary_detail : state => state.diary.diary_detail
        }),    
    },
    beforeDestroy () {
        this.$store.commit("RESET_DIARY_DETAIL");
    } 
}
</script>
<style lang='scss' scoped>
    .diary-detail-container {
        //background-color: red;
        width: 80%;
        height: 100%;
        margin: 5rem auto 0px auto;
        align-items: center;
        z-index: 1;
    }
    .detail-score { 
        font-weight: bold;
    }
    .detail-image {
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
</style>