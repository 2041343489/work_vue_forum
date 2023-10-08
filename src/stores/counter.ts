import { ref } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const isShowLogin = ref<boolean>(false);

  return { isShowLogin };
});
