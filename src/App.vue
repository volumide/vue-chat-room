<template lang="">
    <div id='app' class="px-5 py-5">
        <router-link to ='/signin'> Home </router-link>
        <router-link to ='/signin'> Sign in </router-link>
        <router-link to ='/sign-up'> Sign up </router-link>
        <router-link to ='/chat-room'> Chat room </router-link>
    </div>
    <router-view />
</template>

<script>

export default {
    name: 'App',
    data() {
        return {
            code: ''
        }
    },
}
</script>

<style>
/* #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 30px;
} */
</style>
