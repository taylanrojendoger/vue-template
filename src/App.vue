<script setup lang="ts">
  // Components
  import Header from '@/components/Header.vue';

  // Stores
  import { storeToRefs } from 'pinia';
  import { useHomeStore } from '@/stores/modules/home-view';

  const homeStore = useHomeStore();
  const { loading } = storeToRefs(homeStore);
</script>

<template>
  <div class="h-screen w-screen overflow-hidden">
    <Header />
    <div v-loading="loading" class="h-[calc(100vh-96px)] w-full">
      <RouterView />
    </div>
  </div>
</template>
