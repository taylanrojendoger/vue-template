<script setup lang="ts">
  // Store
  import { useHomeStore } from '@/stores/modules/home-view';

  // Router
  import { useRouter } from 'vue-router';

  const homeStore = useHomeStore();
  const { redirectOptions, setRedirectOption } = homeStore;

  const router = useRouter();

  const pushRouter = (to: string): void => {
    router.push(to);
  };

  const redirectPage = (to: { [key: string]: string }): void => {
    setRedirectOption(to.label);
    pushRouter(to.href);
  };

  const headerText: string = 'Select an option to proceed';
</script>

<template>
  <div class="h-full w-full bg-[#141414] py-12 text-base font-mono text-white sm:py-16">
    <h2 class="mb-12 text-center font-bold leading-8">
      {{ headerText }}
    </h2>
    <div class="w-2/3 h-[100px] grid grid-cols-1 gap-24 mx-auto sm:grid-cols-3">
      <div
        v-for="redirectOption in redirectOptions"
        :key="redirectOption.name"
        class="relative flex justify-center items-center gap-2 space-x-3 rounded-lg border-2 border-white px-6 py-5 shadow-xl focus-within:ring-2 focus-within:ring-indigo-400 focus-within:ring-offset-2 hover:border-gray-400 hover:bg-[#262626]"
        @click="redirectPage(redirectOption)"
      >
        <div class="flex-shrink-0">
          <i
            v-if="redirectOption.label === 'Some View 1'"
            class="bi bi-diagram-2-fill"
            style="line-height: 32px; font-size: 32px"
          ></i>
          <i
            v-else-if="redirectOption.label === 'Some View 2'"
            class="bi bi-diagram-2"
            style="line-height: 32px; font-size: 32px"
          ></i>
          <i v-else class="bi bi-plus-slash-minus" style="line-height: 32px; font-size: 32px"></i>
        </div>

        <div class="banner min-w-0 flex-1">
          <a href="#" class="focus:outline-none">
            <span class="absolute inset-0" aria-hidden="true" />
            <p class="text-[#ff9b0f] font-semibold">{{ redirectOption.label }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .banner {
    --startColorFirst: rgba(182, 81, 200, 0.35);
    --startColorSecond: rgba(255, 210, 168, 0.35);
    --endColorFirst: rgba(182, 81, 200, 0.35);
    --endColorSecond: rgba(138, 212, 255, 0.35);
  }

  .banner:after,
  .banner:before {
    content: '';
    height: 100%;
    mix-blend-mode: soft-light;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 45%;
  }

  .banner:before {
    background: radial-gradient(58% 296% at 12% 122%, var(--startColorFirst), rgba(184, 82, 201, 0) 100%),
      radial-gradient(54% 296% at 38% 78%, var(--startColorSecond), rgba(255, 211, 170, 0) 100%);
    left: 0;
  }

  .banner:after {
    background: radial-gradient(50% 190% at 90% 100%, var(--endColorFirst), rgba(182, 81, 200, 0) 100%),
      radial-gradient(52% 250% at 60% 70%, var(--endColorSecond), rgba(138, 212, 255, 0) 100%);
    right: 0;
  }
</style>
