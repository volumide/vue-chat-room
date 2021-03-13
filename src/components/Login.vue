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
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import router from '@/router'
import * as all from "../firebaseDb";
export default {
  name: "Sign In",
  setup() {
    const data = ref({
      email: "",
      password: "",
    });
    const loginUser = (e) => {
      e.preventDefault();
      all.default.auth
        .signInWithEmailAndPassword(data.value.email, data.value.password)
        .then((cred) => {
          console.log(cred.user.uid);
          router.push("/profile")
        })
        .catch((err) => console.log(err));
    };
    return {
      // model
      data,
      // callbacks
      loginUser,
      // created,
    };
  },
};
</script>

<style lang=""></style>
