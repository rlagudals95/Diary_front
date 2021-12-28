<template>
  <div class="post-container">
    <b-button @click="goPost()" pill class="post-btn" variant="primary">POST</b-button>
  </div>
</template>

<script>
export default {
    name: 'PostBtn',
    methods : {
        goPost() {
            this.$router.push('uploadDiary')
        }
    }
}

</script>

<style lang="scss" scoped>
    .post-container{
        z-index: 10;
        position:fixed;
        top: 90%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .post-btn{
        padding: 10px 30px;
        font-weight: bold;
    }
</style>