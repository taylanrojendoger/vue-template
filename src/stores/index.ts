// Vue
import { ref } from 'vue';

// Pinia
import { defineStore } from 'pinia';

// Types
import { type Ref } from 'vue';

export const useStore = defineStore('index', () => {
  const api: Ref<string> = ref(import.meta.env.VITE_API_URL);

  return {
    api
  };
});
