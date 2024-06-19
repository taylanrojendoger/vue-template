<script setup lang="ts">
  defineProps({
    placeholder: {
      type: String,
      required: true
    },
    textInputClass: {
      type: String,
      required: true
    }
  });

  const model = defineModel<string>({ required: true });
</script>

<template>
  <input v-model="model" type="text" :placeholder="placeholder" :class="textInputClass" />
</template>
