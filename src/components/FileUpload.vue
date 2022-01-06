<template>
  <div>
    <div
      v-bind:class="[upload_img? 'imagePreviewWrapper' :' _imagePreviewWrapper'] "
      :style="{ 'background-image': `url(${previewImage})` }"
      @click="selectImage">
    </div>
    <!-- {{this.uploadFile}} -->
    <!-- {{this.is_preview}} -->
    <input
      ref="fileInput"
      type="file"
      @input="pickFile">
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: ['is_preview'],
  data() {
      return {
        previewImage: 'https://lh3.googleusercontent.com/proxy/82wwiIXbVXHzBVE_Cvkt1rU25sOZvnFikxXeJ6PkD5MwKitJ2a1m2n3LllDw_L2GNoz7qeOdVNZazwDn528MEPXTo3Ll6rv0JfpYFtuX0H3AmvDqWdAblpADjRzNtOM',
        uploadFile: null
      };
    },
  methods: {
      selectImage () {
          this.$refs.fileInput.click()
      },
      pickFile () {
        let input = this.$refs.fileInput
        let file = input.files
        this.$store.commit('SET_UPLOAD_IMG', file)
        this.uploadFile = file;
        if (file && file[0]) {
          let reader = new FileReader
          reader.onload = e => {
            this.previewImage = e.target.result
          }
          reader.readAsDataURL(file[0])
          this.$emit('input', file[0])
        }
      }
  },
  computed : {
    ...mapState({
        upload_img: state => state.diary.upload_img
    })     
  },
}
</script>

<style scoped lang="scss">
.imagePreviewWrapper {
    width: 250px;
    height: 250px;
    display: block;
    cursor: pointer;
    margin: 0 auto 30px;
    background-size: cover;
    background-position: center center;
}
._imagePreviewWrapper {
    width: 0px;
    height: 0px;
}
</style>