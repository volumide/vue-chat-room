<template>
  <section class="bg-white pt-24">
    <div
      class="flex py-2 px-10 align-middle sm:align-middle sm:space-y-0 sm:flex-row sm:justify-center space-x-4 fixed bottom-0 w-full bg-white"
    >
      <div class=" w-4/5 sm:w-3/6">
        <textarea
          class="block px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none  resize-none w-full"
          placeholder="Message here..."
          v-model="message"
        ></textarea>
      </div>

      <div>
        <button class="button" @click="sendChat">
          Send
        </button>
      </div>
    </div>
    <div class="pb-20">
      <div class="py-4 mx-auto sm:w-3/6 px-10 mt-10">
        <p class="text-center font-medium text-xl" v-if="!message">
          Conversation starts here
        </p>
        <p
          class="my-4 py-3 px-5 bg-green-200 w-6/12 sm:w-3/6 rounded-md"
          v-if="message"
        >
          <span class="font-bold block pb-1 text-gray-500">
            {{ title.title }}</span
          >
          {{ message }}
        </p>
        <p
          class="my-4 py-3 px-5  bg-green-300 w-6/12  sm:w-3/6 ml-auto rounded-md"
          v-if="message"
        >
          <span class="font-bold block pb-1 text-gray-500">
            {{ title.title }}
          </span>
          {{ message }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import currentUser from "../states/getUers";
import chatRoom from "../firebaseDb";
export default {
  setup() {
    const message = ref("");
    const { id, profile } = currentUser();
    const title = reactive({ title: "@Olumide" });
    const date = ref(new Date());
    onMounted(() => {
      profile();
      getChat();
    });

    // query the database in the chat room database
    const getAllTable = () =>{
      chatRoom.chatRoom.get().then((snapShot) => {
        snapShot.forEach((doc) => {
          console.log(doc.id);
        });
      });
    }
    
    // create a chat room
    const createChatRoom = (e) => {
      e.preventDefault();
      chatRoom.chatRoom.doc("nigeria").set({
        admin: id.value,
        description: message.value,
        time: `${date.value
          .getFullYear()
          .toString()}-${date.value
          .getFullMonth()
          .toString()}-${date.value.getDate()}`,
      });
    };

    // room chats
    const sendChat = (e) => {
      e.preventDefault();
      chatRoom.chats.add({
        id: id.value,
        message: message.value,
      });
      getChat()
    };

    // get chat from chat room
    const getChat = () =>{
      chatRoom.chatRoom
        .doc("nigeria")
        .get()
        .then((doc) => {
          if (doc.exists) console.log(doc.data());
          else console.log("no such document");
        })
        .catch((err) => console.log(err));
    }

    return { message, title, sendChat, getChat, getAllTable, createChatRoom };
  },
};
</script>
