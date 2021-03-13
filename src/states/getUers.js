// this state will take track of our logedIn users proifle
import { ref } from "vue";
import * as all from "../firebaseDb";
export default function currentUser() {
  const user = ref("");
  const profile = () => {
	all.default.auth.onAuthStateChanged((res) => {
		if (res) {
		user.value = res.providerData[0];
		} else {
		user.value = null;
		}
	});
  };
  return { user, profile };
}
