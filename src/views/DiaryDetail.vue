<template>
  <div class="diary-detail-container">
      <h1 class="mb-4 detail-score">score : {{this.diary_detail.score}}</h1>
      <h2 class="detail-title mb-3">{{diary_detail.title}}</h2>
      <div class="diary-desc">
        {{this.diary_detail.content}}
        <img class="mt-3 detail-image" :src="diary_detail.image_url" />
      </div>
      <div class="detail-btn-container">
        <b-button variant="light">수정</b-button>
        <b-button variant="dark">삭제</b-button>
      </div>
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
        padding: 0px auto 50px auto;
     
    }
    .diary-desc {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        padding: 0px auto 100px auto;
    }

    .detail-score { 
        font-weight: bold;
    }
    .detail-image {
        width:80%;
        max-width: 700px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }

    .detail-btn-container {
        height: 5%;
        margin-top: 20px;
        margin-bottom: 20px;
        
    }
</style>