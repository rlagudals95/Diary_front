<template>
<div class="nav-wrap">
    <b-nav >
        <router-link to="/"><b-nav-text>HOT SPOT&nbsp;&nbsp;</b-nav-text></router-link>
        <b-nav-item @click="goUpload()">Post</b-nav-item>
        <b-nav-item @click="goLogin()">Login</b-nav-item>
    </b-nav>
</div>
</template>

<script>
export default {
    name: "Navigation",
    methods : {
        goUpload () {
            this.$router.push('uploadDiary')
        },
        goLogin () {
            this.$router.push('login')
        },
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