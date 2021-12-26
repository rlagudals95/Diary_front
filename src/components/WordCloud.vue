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
      <div>{{this.category_list}}</div>   
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
    this.defaultWords = this.testWord
  },
  computed : {
    ...mapState({
        category_list : state => state.user.category_list
    })     
  },
  data() {
    return {
      testWord :[
        {
          "name": "test1",
          "value": 55
        },
        {
          "name": "test2",
          "value": 10
        },
        {
          "name": "test3",
          "value": 33
        },
        {
          "name": "test4",
          "value": 45
        },

      ],
      myColors: ['#1f77b4', '#629fc9', '#94bedb', '#c9e0ef'],
      defaultWords: ""
      // [
      //   {
      //     "name": "Cat",
      //     "value": 26
      //   },
      //   {
      //     "name": "fish",
      //     "value": 19
      //   },
      //   {
      //     "name": "things",
      //     "value": 18
      //   },
      //   {
      //     "name": "look",
      //     "value": 16
      //   },
      //   {
      //     "name": "two",
      //     "value": 15
      //   },
      //   {
      //     "name": "fun",
      //     "value": 9
      //   },
      //   {
      //     "name": "know",
      //     "value": 9
      //   },
      //   {
      //     "name": "good",
      //     "value": 9
      //   },
      //   {
      //     "name": "play",
      //     "value": 6
      //   },
      //   {
      //     "name": "play",
      //     "value": 1
      //   },
      //   {
      //     "name": "play",
      //     "value": 6
      //   },
      //   {
      //     "name": "play",
      //     "value": 6
      //   }
      // ]
    }
  },
  
}
</script>
<style lang="scss" scoped>
  .cloud-container{
    
  }
</style>