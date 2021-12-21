<template>
  <div id="app">
    <Navigation />
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      
    </div>
    <router-view/>
  </div>
</template>
<script>

import Navigation from './components/Navigation'
import axios from 'axios'
axios.defaults.headers.common['Authorization'] = localStorage.getItem('Authorization');

export default {
    name: "App",
    components: { Navigation },
    methods :{
      
    }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap');

#app {
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  //padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    // &.router-link-exact-active {
    //   color: #42b983;
    // }
  }
}

.hidden {
  display: none;
}
</style>
