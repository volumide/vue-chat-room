<template>
  <section class="bg-white dark:bg-gray-800">
    <div
      class="flex py-2 flex-col mt-8 space-y-3 px-10 align-middle sm:align-middle sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-4 fixed bottom-0 w-full bg-white"
    >
      <div class="sm:w-3/6">
        <textarea
          class="block px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none  resize-none w-full"
          placeholder="Message here..."
          v-model="message"
        ></textarea>
      </div>

      <div>
        <button
          class="button"
          @click="sendChat"
        >
          Send
        </button>
      </div>
    </div>
    <div class="pb-20">
      <div class="py-4 mx-auto sm:w-3/6 px-10 mt-10">
        <p class="text-center font-medium text-xl" v-if="!message">Conversation starts here</p>
        <p class="my-4 py-3 px-5 bg-green-200 w-6/12 sm:w-3/6 rounded-md" v-if="message"> <span class="font-bold block pb-1 text-gray-500"> {{ title.title }}</span> {{ message }} </p>
        <p class="my-4 py-3 px-5  bg-green-300 w-6/12  sm:w-3/6 ml-auto rounded-md" v-if="message"> <span class="font-bold block pb-1 text-gray-500"> {{ title.title }} </span> {{ message }}</p>
        <p class="my-4 py-3 px-5  bg-green-300 w-6/12  sm:w-3/6 ml-auto rounded-md" v-if="message"> <span class="font-bold block pb-1 text-gray-500"> {{ title.title }} </span> {{ message }}</p>
        <p class="my-4 py-3 px-5  bg-green-300 w-6/12  sm:w-3/6 ml-auto rounded-md" v-if="message"> <span class="font-bold block pb-1 text-gray-500"> {{ title.title }} </span> {{ message }}</p>
      </div>
    </div>
  </section>
</template>

<script>
  import { reactive, ref,   computed } from "vue";
  export default {
    setup(){
      const message = ref("")
      const title = reactive({ title: "@Olumide" })
      const contentCount = ref(0)
      const create = computed(()=>  (contentCount.value))
      // const mount = onMounted(() => (console.log(contentCount.value)))
      const sendChat = () => (console.log(message.value))
      return {
        // strings and values (arrays, objects)
        message,
        title,
        // functions and events, methods
        create,
        // mount,
        sendChat,
      };
    },
  };
</script>



