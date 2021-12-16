<template>
  <div>
     <b-icon-arrow-up class="btn-container" v-on:click="scrollTop()" icon="exclamation-circle-fill"></b-icon-arrow-up>
  </div>
</template>

<script>
export default {
    name: 'scrollTop',
    methods : {
        scrollTop () {
            window.scrollTo({top:0, behavior:'auto'})
        },
        scrollTopBtn () {
            this.intervalId = setInterval(() => {
            if (window.pageYOffset === 0) {
                clearInterval(this.intervalId);
            }
            window.scroll(0, window.pageYOffset - 50);
            }, 20);
        },
    }
}
</script>

<style>
    .btn-container{
        cursor: pointer;
        position: fixed;
        width: 50px;
        height: 50px;
        background-color: white;
        bottom: 50px;
        right: 50px;
        z-index: 100;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
    }
</style>