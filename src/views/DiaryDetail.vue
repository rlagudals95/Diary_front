<template>
  <div class="diary-detail-container">
      {{this.diary_detail}}
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
    })     
  },
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
</style>