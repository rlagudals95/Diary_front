<template>
  <div class="cloud-container">
      <wordcloud
      :data="defaultWords"
      nameKey="name"
      valueKey="value"
      :color="myColors"
      :showTooltip="true"
      :wordClick="wordClickHandler">
      </wordcloud>
      <!-- <div>{{this.word_cloud_list}}</div>  -->
  </div>
</template>

<script>
import wordcloud from 'vue-wordcloud'
import {mapState} from 'vuex'

export default {
  name: 'WordCloud',
  components: {
    wordcloud
  },
  methods: {
    wordClickHandler(name, value, vm) {
      console.log('wordClickHandler', name, value, vm);
    }
  },
  created () {
    this.defaultWords = this.word_cloud_list
  },
  computed : {
    ...mapState({
        category_list : state => state.user.category_list,
        word_cloud_list : state => state.user.word_cloud_list
    })     
  },
  data() {
    return {
      myColors: ['#1f77b4', '#629fc9', '#94bedb', '#c9e0ef'],
      defaultWords: []
    }
  },
  
}
</script>
<style lang="scss" scoped>
  .cloud-container{
  
  }
</style>