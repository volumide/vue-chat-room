<template >
  <div>
    <h1 class="text-center font-bold text-5xl d block">Sign up</h1>
    <form action="" class="w-2/5 mx-auto px-5 my-10 py-5 rounded-md shadow" @submit="test">
      <div class="my-4">
        <label for="name">Full Name</label>
        <input
          type="text"
          id="name"
          class="py-4 px-4 rounded-md border border-gray-300 w-full focus:outline-none mt-4 focus:border-blue-500"
          v-model="data.name"
          required
        />
      </div>
      <div class="my-4">
        <label for="email">Email</label>
        <input type="email" id="email" class="input" v-model="data.email" required />
      </div>
      <div class="my-4">
        <label for="phone">Phone</label>
        <input type="number" id="phone" class="input" v-model="data.phone" required />
      </div>
      <div class="my-4">
        <label for="password">Password</label>
        <input type="password" id="password" class="input" v-model="data.password" required />
      </div>
      <div class="my-4">
        <label for="cpassword">Confirm password</label>
        <input type="password" id="cpassword" class="input" v-model="data.confirmPassword" required />
      </div>
      <div class="my-4">
        <button type="submit" class="button">Sign up</button>
      </div>
      <p class=" py-4 bg-yellow-600 px-4 text-white font-bold rounded-md" v-if="message">
        {{message}}
      </p>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import * as all from "../firebaseDb";
export default {
  name: "Sign up",
  setup() {
    const data = ref({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: ""
    });
    const message = ref('')
    const test = (e)=>{
      e.preventDefault();
      if (data.value.password !== data.value.confirmPassword) {
        message.value = "Your password and confirm password does not match"
        return
      }
      message.value = `${data.value.name} is registered successsfuly; login to finish your registeration and confirm your email`

      data.value.name = ""
      data.value.email = ""
      data.value.phone = ""
      data.value.password = ""
      data.value.confirmPassword = ""
    }

    const registerUser = () => {
      all.default.auth
        .createUserWithEmailAndPassword(data.value.email, data.value.password)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    };

    return {
      // models
      data,
      message,
      // calbacks
      test,
      registerUser,
    };
  },
};
</script>

<style>
</style>