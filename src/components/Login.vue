<template >
  <div>
    <h1 class="text-center font-bold text-5xl d block">Login</h1>
    <form class="w-2/5 mx-auto px-5 my-10 py-5 rounded-md shadow">
      <div class="my-4">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          class="input"
          required
        />
      </div>
      <div class="my-4">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          class="input"
          required
        />
      </div>
      <div class="my-4">
        <button type="submit" class="button">
          Sign in
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import * as all from "../firebaseDb";
export default {
  name: "Sign In",
  methods: {
    loginUser() {
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
    },
  },

  created() {},
};
</script>


<style lang="">
</style>