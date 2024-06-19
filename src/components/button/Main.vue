<template>
  <button :class="buttonClass" :disabled="disabled" @click="callback($event)">
    <i :class="iconClass"></i>
  </button>
</template>

<script setup lang="ts">
  defineProps({
    disabled: {
      type: Boolean,
      required: true
    },
    buttonClass: {
      type: String,
      required: true
    },
    iconClass: {
      type: String,
      required: true
    }
  });

  // block w-[50px] rounded-full bg-[#cbcaca] hover:bg-[#9b9a9a]

  const emit = defineEmits(['click']);

  const callback = (event: MouseEvent): void => {
    emit('click', event);
  };
</script>
