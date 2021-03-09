<template>
  <section class="bg-white dark:bg-gray-800">
    <div
      class="flex py-2 flex-col mt-8 space-y-3 align-middle sm:align-middle sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-4"
    >
      <div class="w-3/6">
        <textarea
          class="block px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring resize-none w-full"
          placeholder="Message here..."
          v-model="message"
        ></textarea>
      </div>

      <div>
        <button
          class="button"
          @click="clickButton"
        >
          Send
        </button>
      </div>
    </div>

    <div class="py-4 mx-auto w-3/6 px-4 mt-10">
      <p class="my-4 py-3 px-5 bg-green-200 w-3/6 rounded-md">{{ message }} {{ title.title }}</p>
      <p class="my-4 py-3 px-5  bg-red-500 text-white w-3/6 ml-auto rounded-md">{{ message }} {{ title.title }}</p>
    </div>
  </section>
</template>

<script>
  import { reactive, ref, onMounted,  computed } from "vue";
  export default {
    setup(){
      const message = ref("message is working")
      const title = reactive({ title: "by Olumide" })
      const contentCount = ref(0)
      const create = computed(()=>  (contentCount.value))
      const mount = onMounted(() => (console.log(contentCount.value)))
      const clickButton = () => (contentCount.value++)
      return {
        // strings and values (arrays, objects)
        message,
        title,
        // functions and events, methods
        create,
        mount,
        clickButton,
      };
    },
  };
</script>



