// this state will take track of our logedIn users proifle
import { ref } from "vue";
import * as all from "../firebaseDb";
export default function currentUser() {
  const user = ref("");
  const id = ref("")
  const profile = () => {
    all.default.auth.onAuthStateChanged((res) => {
      let value = res
      if (!value) {
        user.value = null
      } else {
        user.value = value.providerData[0]
      }
    })
    let v = all.default.auth.currentUser
    if (v) id.value = v.uid
  };
  return { user, profile, id};
}
