<template >
  <div>
    <div id="recaptcha-container"></div>
  </div>
</template>

<script>
import * as all from "../firebaseDb";
export default {
  name: "Sign up",
  methods: {
    updatePhoneNumber() {
      var provider = new all.default.phone.PhoneAuthProvider();
      // provider.verifyPhoneNumber()
      // var provider = new firebase.auth.PhoneAuthProvider();
      // provider.verifyPhoneNumber('+23407068916029', this.recaptcher()).then((id) => {
      //     this.code = window.prompt('enter code')
      //     all.default.phone.PhoneAuthProvider.credential(id, this.code)
      // })
    },

    recaptcher() {
      return (window.recaptcharVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
        }
      ));
    },

    getUser() {
      all.default.auth.onAuthStateChanged((res) => {
        if (res) {
          console.log(res.providerData[0]);
          res.updatePhoneNumber();
        }
      });
    },
  },

  created() {},
};
</script>

<style lang="">
</style>