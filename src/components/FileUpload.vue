<template>
  <div>
    <div
      class="imagePreviewWrapper"
      :style="{ 'background-image': `url(${previewImage})` }"
      @click="selectImage">
    </div>
    <!-- {{this.uploadFile}} -->
    <input
      ref="fileInput"
      type="file"
      @input="pickFile">
  </div>
</template>

<script>
export default {
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
  }
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
</style>