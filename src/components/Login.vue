<template >
  <div class="mt-9">
    <h1 class="text-center font-bold text-5xl d block">Sign in</h1>
    <form class="w-full sm:w-5/12 mx-auto px-5 my-10 py-5 rounded-md shadow">
      <div class="my-4">
        <label for="email">Email</label>
        <input type="email" id="email" class="input" v-model="data.email" required />
      </div>
      <div class="my-4">
        <label for="password">Password</label>
        <input type="password" id="password" class="input" v-model="data.password" required />
      </div>
      <div class="my-4">
        <button type="submit" class="button">Sign in</button>
      </div>
    </form>
  </div>
</template>

<script>
import {ref} from "vue";
import * as all from "../firebaseDb";
export default {
  name: "Sign In",
  setup() {
    const data = ref({
      email: "",
      password: ""
    })
    const loginUser = () => {
      all.default.auth.onAuthStateChanged((user) => {
        if (user) {
          if (this.code) {
            user
              .updatePhoneNumber(this.updatePhoneNumber())
              .then(() => {
                console.log(user.providerData);
              })
              .catch((err) => console.log(err));
          }
        }
      });
    };
    // const created = onBeforeMount(() => console.log("created"));
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


<style lang="">
</style>