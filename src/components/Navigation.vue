<template>
<div class="nav-wrap">
    <b-nav >
        <router-link to="/"><b-nav-text class="logo">DIARY&nbsp;&nbsp;</b-nav-text></router-link>
        <b-nav-item @click="goUpload()">Post</b-nav-item>
        <b-nav-item @click="goDiary()">Diary</b-nav-item>

        <b-nav-item v-if="isLogin" @click="goLogOut()">LogOut</b-nav-item>
        <b-nav-item v-else @click="goLogin()">Login</b-nav-item>
    </b-nav>
</div>
</template>
<script>
export default {
    name: "Navigation",
    data () {
        return {
            isLogin : localStorage.getItem("Authorization")
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
        }
    },
    created (){
        console.log('로그인 데이터 : ',this.isLogin);
    }
  
}
</script>

<style>
.nav-wrap{
    position: fixed;
    z-index: 5000;
    font-weight: bold;
}
</style>