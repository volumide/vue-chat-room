<template >
  <div>
    <h1 class="text-center font-bold text-5xl d block">Login</h1>
    <form action="" class="w-2/5 mx-auto px-5 my-10 py-5 rounded-md shadow">
      <div class="my-4">
        <label for="name">Full Name</label>
        <input
          type="text"
          id="name"
          class="py-4 px-4 rounded-md border border-gray-300 w-full focus:outline-none mt-4 focus:border-blue-500"
          required
        />
      </div>
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
        <label for="phone">Phone</label>
        <input
          type="text"
          id="phone"
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
        <label for="cpassword">Confirm password</label>
        <input
          type="password"
          id="cpassword"
          class="input"
          required
        />
      </div>
      <div class="my-4">
        <button type="submit" class="button">
          Sign up
        </button>
      </div>
    </form>
  </div>
</template>

<script>
    import * as all from '../firebaseDb'
    export default {
        name: 'Sign up',
        methods: {
            registerUser(){
                all.default.auth.createUserWithEmailAndPassword('volumide42@gmail.com', "123456")
                .then(res => console.log(res))
                .catch(err => console.log(err))
            },
        },
        created() {
            
        },
    }
</script>

<style>
    
</style>