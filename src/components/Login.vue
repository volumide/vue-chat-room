<template>
  <div class="pt-24">
    <h1 class="text-center font-bold text-5xl d block">Sign in</h1>
    <form
      class="w-full sm:w-5/12 mx-auto px-5 my-10 py-5 rounded-md shadow"
      @submit="loginUser"
    >
      <div class="my-4">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          class="input"
          v-model="data.email"
          required
        />
      </div>
      <div class="my-4">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          class="input"
          v-model="data.password"
          required
        />
      </div>
      <div class="my-4">
        <button type="submit" class="button">Sign in</button>
      </div>
      <p
        class=" py-4 bg-yellow-600 px-4 text-white font-bold rounded-md"
        v-if="message"
      >
        {{ message }}
      </p>
    </form>
  </div>
</template>

<script>
import { onBeforeMount, ref } from "vue";
import router from '@/router'
import * as all from "../firebaseDb";
import currentUser from '../states/getUers'

export default {
  name: "Sign In",
  setup() {
    const message = ref('')
    const {user, profile} = currentUser()
    const data = ref({
      email: "",
      password: "",
    });
    const mount = onBeforeMount(()=>{
      profile()
      console.log(user);
      if (!user) router.push("/")
    })
    const loginUser = (e) => {
      e.preventDefault();
      all.default.auth
        .signInWithEmailAndPassword(data.value.email, data.value.password)
        .then(() => {
          router.push("/profile")
        })
        .catch((err) =>{
          message.value = err.message;
        });
    };
    return {data,message,loginUser,mount};
  },
};
</script>

<style lang=""></style>
