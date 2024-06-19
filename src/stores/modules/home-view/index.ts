// Vue
import { ref, watch } from 'vue';

// Pinia
import { defineStore } from 'pinia';

// Router
import { useRoute } from 'vue-router';

// Types
import { type Ref } from 'vue';

export const useHomeStore = defineStore('home', () => {
  // State
  const loading: Ref<boolean> = ref(false);

  const redirectOptions: Array<{ [key: string]: string }> = [
    {
      name: 'SomeViewOne',
      label: 'Some View 1',
      href: '/some-view-one'
    },
    {
      name: 'SomeViewTwo',
      label: 'Some View 2',
      href: '/some-view-two'
    },
    {
      name: 'SomeViewThree',
      label: 'Some View 3',
      href: '/some-view-three'
    }
  ];

  const selectedRedirectOption: Ref<string> = ref('');

  const route = useRoute();

  // Computed, watch
  watch(
    () => route.name,
    () => {
      setRedirectOption((route.name! as string).replace(/([a-z](?=[A-Z]))/g, '$1 '));
    }
  );

  // Methods
  const setRedirectOption = (redirectOption: string) => {
    selectedRedirectOption.value = redirectOption.charAt(0).toUpperCase() + redirectOption.slice(1);
  };

  return {
    loading,
    redirectOptions,
    selectedRedirectOption,
    setRedirectOption
  };
});
