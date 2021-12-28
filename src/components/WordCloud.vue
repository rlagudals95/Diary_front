<template>
  <div class="cloud-container">
    <wordcloud
      :data="defaultWords"
      nameKey="name"
      valueKey="category_no"
      :color="myColors"
      :showTooltip="true"
      :wordClick="wordClickHandler"
      :fontSize="[10, 100]"
      v-b-modal.modal-1
    >
    </wordcloud>
  </div>
</template>

<script>
import wordcloud from "vue-wordcloud";
import { mapState } from "vuex";
export default {
  name: "WordCloud",
  components: {
    wordcloud,
  
  },
  methods: {
    wordClickHandler(name, value) {
      console.log("wordClickHandler", name, value);
      this.$store.dispatch('getCategoryDetail', value);
      //this.$store.commit("EDIT_CATEGORY", category_info);
    },
  },
  mounted() {
    for (let i = 0; i < this.word_cloud_list.length; i++) {
      this.defaultWords.push(this.word_cloud_list[i]);
    }
  },
  computed: {
    ...mapState({
      category_list: (state) => state.user.category_list,
      word_cloud_list: (state) => state.user.word_cloud_list,
      category_detail: (state) => state.category.category_detail,
    }),
  },
  data() {
    return {
      myColors: ["#1f77b4", "#629fc9", "#94bedb", "#c9e0ef"],
      defaultWords: [],
    };
  },
};
</script>
<style lang="scss" scoped>
.cloud-container {
  cursor: pointer;
}
</style>
