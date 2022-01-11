<template>
  <div class="spinner-wrap" v-show="Loading" >
    <div class="spinner">
      <b-spinner label="Loading..."  variant="light"></b-spinner>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: 'Spinner',
    computed : {
      ...mapState({
        Loading: state => state.config.Loading
      })
    }
}
</script>

<style>
    .spinner-wrap{
      position: fixed;
      background-color: rgba(0, 0, 0, 0.5);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: 5000;
    }

    .spinner {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .display-none {

    }
    
</style>