<script setup lang="ts">
  // Router
  import { useRouter } from 'vue-router';

  // Store
  import { storeToRefs } from 'pinia';
  import { useHomeStore } from '@/stores/modules/home-view';

  const homeStore = useHomeStore();
  const { selectedRedirectOption } = storeToRefs(homeStore);

  const router = useRouter();

  const pushRouter = (to: string): void => {
    router.push(to);
  };
</script>

<template>
  <header class="bg-gray-900 h-24 w-full inset-x-0 top-0 z-50">
    <nav class="h-full flex items-center justify-between p-6 lg:px-8">
      <div class="flex lg:flex-1">
        <div class="-m-1.5 p-1.5 hover:cursor-pointer" @click="pushRouter('/')">
          <span class="sr-only">Logo Name</span>
          <img class="h-8 w-auto" src="@/assets/logo.svg" alt="Logo" />
        </div>
      </div>

      <div class="hidden lg:flex lg:gap-x-12">
        <div class="text-lg font-mono font-semibold leading-6 text-white hover:cursor-pointer">
          {{ selectedRedirectOption }}
        </div>
      </div>

      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <div class="-m-1.5 p-1.5 hover:cursor-pointer" @click="pushRouter('/')">
          <span class="sr-only">Logo Name</span>
          <img class="h-8 w-auto" src="@/assets/logo.svg" alt="Logo" />
        </div>
      </div>
    </nav>
  </header>
</template>
