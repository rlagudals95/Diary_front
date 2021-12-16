<template>
  <div>
      <textarea v-model="content" name="" id="" cols="30" rows="10"></textarea>
      <button @click="submitDiary()"></button>
  </div>
</template>

<script>
export default {
    name: 'Editor',
    data () {
       return {
           content :"",
       } 
    },
    methods : {
        submitDiary () {
            console.log(this.content)
        }
    }

}
</script>

<style>

</style>