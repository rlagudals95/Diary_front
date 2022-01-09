<template>
<div class="nav-wrap" :class="{'nav-down' : navDown}" >
    <b-nav class="nav-up nav-container" >
        <span class="nav-left">
            <router-link to="/"><b-nav-text class="logo" >META &nbsp;&nbsp;</b-nav-text></router-link>
        <!-- <b-nav-item @click="goUpload()" :class="{'nav-down' : navDown}">Post</b-nav-item> -->     
            <b-nav-item @click="goDiary()">Diary</b-nav-item>
            <b-nav-item v-if="isLogin" @click="goMypage()">MyPage</b-nav-item>
            <b-nav-item v-else @click="goLogin()">Login</b-nav-item>
        </span>
        <span class="nav-right">
            <b-nav-item v-show="isLogin" @click="goLogOut()">Logout</b-nav-item>
        </span>
    </b-nav>
</div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    name: "Navigation",
    data () {
        return {
            // isLogin : localStorage.getItem("Authorization"),
            navDown: false,
            lastScrollPosition: 0
        }
    },
    methods : {
        goUpload () {
            this.$router.push('uploadDiary')
        },
        goLogin () {
            this.$router.push('login')
        },
        goDiary () {
            this.$router.push('diaryView')
        },
        goLogOut (){
            this.$router.push('login')
            localStorage.removeItem('Authorization')
        },
        goMypage (){
            this.$router.push('mypage')
            
        },
        onScroll (){
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop   
            // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
            if (this.lastScrollPosition < currentScrollPosition){
                this.navDown = true;
            } else {
                this.navDown = false;
            }
            //this.showNavbar = currentScrollPosition < this.lastScrollPosition
            this.lastScrollPosition = currentScrollPosition
        }
    },
    mounted (){
        window.addEventListener('scroll', this.onScroll)
        this.$store.commit('LOGIN_CHK')
        //console.log('로그인 데이터 : ',this.isLogin);
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.onScroll)
    },
    computed : {
        ...mapState({
        isLogin : state => state.user.isLogin,
    })     
  },
  
}
</script>

<style>
.nav-wrap{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    margin: 0px auto;
    padding: 8px 20px;
    width: 100%;
    z-index: 50;
    font-weight: bold;
    transform: translate3d(0, 0, 0);
    transition: 0.1s all ease-out;
    background-color: white;
    width: 100%;
    opacity: 0.85;
  
}
.nav-container {
    justify-content: space-between;
    opacity: 1 !important;
}
.logo {
    font-weight: bolder;
}

.nav-left {
    display: flex;
    justify-content: space-between;
}

.nav-right {
    display: flex;
    color: black;
}
/* .nav-wrap-down{
    position: fixed;
    z-index: 5000;
    font-weight: bold;
    transform: translate3d(0, 0, 0);
    transition: 0.1s all ease-out;
    color: white !important;
} */
.nav-up {
    color: white !important;
}
.nav-down {
    color: black !important;
    display: none;
}

</style>