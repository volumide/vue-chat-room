<template lang="">
  <div class="flex flex-wrap  z-10">
    <div class="w-full fixed">
      <nav
        class="relative flex flex-wrap items-center justify-between px-2 py-5 navbar-expand-lg bg-yellow-300"
      >
        <div
          class="container px-4 mx-auto flex flex-wrap items-center justify-between"
        >
          <div
            class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"
          >
            <router-link
              to="/"
              class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
            >
              Home
            </router-link>
            <button
              class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              @click="toogleNavBar"
            >
              <span class="block relative w-10 h-px rounded-sm bg-white"></span>
              <span
                class="block relative w-7 h-px rounded-sm bg-white mt-1"
              ></span>
              <span
                class="block relative w-6 h-px rounded-sm bg-white mt-1"
              ></span>
            </button>
          </div>
          <div
            :class="!menuShow ? 'hidden lg:flex' : 'flex'"
            class="flex lg:flex-grow items-center"
            id="example-navbar-info"
          >
            <ul class="flex flex-col lg:flex-row list-none ml-auto">
              <li class="nav-item" v-if="!user">
                <router-link
                  to="/signin"
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  Sign in
                </router-link>
              </li>

              <li class="nav-item" v-if="!user">
                <router-link
                  to="/sign-up"
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  Sign up
                </router-link>
              </li>

              <li class="nav-item" v-if="user">
                <router-link
                  to="/chat-room"
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  Chat room
                </router-link>
              </li>

              <li class="nav-item" v-if="user">
                <router-link
                  to="/profile"
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  Profile
                </router-link>
              </li>

              <li class="nav-item" v-if="user">
                <button @click = "logout"
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  logout
                </button>
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
import { onMounted, ref } from "vue"
import currentUser from "./states/getUers"
import router from '@/router'
import all from './firebaseDb'
export default {
  name: "App",
  setup() {
    const { user, profile } = currentUser();
    const menuShow = ref(false);
    const toogleNavBar = () => (menuShow.value = !menuShow.value);
    const mount = onMounted(() => {
      profile();
    });
    const logout = () =>{
      all.auth.signOut().then(()=> (router.push('/'))).catch((err) => console.log(err))
    }
    return { menuShow, toogleNavBar, user, mount, logout };
  },
};
</script>

<style></style>
