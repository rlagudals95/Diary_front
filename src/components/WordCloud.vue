<template>
  <div class="cloud-container">
      <wordcloud
      :data="defaultWords"
      nameKey="name"
      valueKey="value"
      :color="myColors"
      :showTooltip="true"
      :wordClick="wordClickHandler"
      :fontSize="[85,200]">
      </wordcloud>
      <Modal/>
  </div>
</template>

<script>
import wordcloud from 'vue-wordcloud'
import {mapState} from 'vuex'
import Modal from '../components/Modal.vue'

export default {
  name: 'WordCloud',
  components: {
    wordcloud,
    Modal
  },
  methods: {
    wordClickHandler(name, value, vm) {
      console.log('wordClickHandler', name, value, vm);
      let category_info = {
        name,
        value,
        vm
      }
      this.$store.commit("EDIT_CATEGORY", category_info);
    }
  },
  mounted () {
    for (let i = 0; i < this.word_cloud_list.length; i++ ){
      this.defaultWords.push(this.word_cloud_list[i])
    }
  },
  computed : {
    ...mapState({
        category_list : state => state.user.category_list,
        word_cloud_list : state => state.user.word_cloud_list,
        edit_category : state => state.category.edit_category
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
    cursor: pointer;
  }
</style>