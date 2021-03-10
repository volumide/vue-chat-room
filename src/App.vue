<template lang="">
    <div class="flex flex-wrap">
        <div class="w-full fixed">
            <nav class="relative flex flex-wrap items-center justify-between px-2 py-5 navbar-expand-lg bg-yellow-300">
                <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                        <router-link to ='/signin' class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"> Home </router-link>
                    <button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" @click = "toogleNavBar">
                        <span class="block relative w-10 h-px rounded-sm bg-white"></span>
                        <span class="block relative w-7 h-px rounded-sm bg-white mt-1"></span>
                        <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                    </button>
                    </div>
                    <div :class="{'hidden': !menuShow, 'flex': menuShow}" class="flex lg:flex-grow items-center" id="example-navbar-info">
                        <ul class="flex flex-col lg:flex-row list-none ml-auto">
                            <li class="nav-item">
                            <router-link to ='/signin' class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"> Sign in </router-link>
                            </li>
                            <li class="nav-item">
                            <router-link to ='/sign-up' class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"> Sign up </router-link>
                            </li>
                            <li class="nav-item">
                            <router-link to ='/chat-room' class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"> Chat room </router-link>
                            </li>
                            <li class="nav-item">
                            <router-link to ='/profile' class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"> Profile </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <router-view />
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    const menuShow = ref(true);
    const toogleNavBar = () => {
      menuShow.value = !menuShow.value;
    };
    return {
      menuShow,
      toogleNavBar,
    };
  },
};
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
