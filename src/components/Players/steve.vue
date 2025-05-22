<template>
  <h3>Steve is on</h3>
</template>

<script setup>
import { onUnmounted, onActivated, onDeactivated } from 'vue';

onUnmounted(() => {
  console.log("Mike unmounted.");
});
onActivated(() => {
  console.log("Steve activated");
});
onDeactivated(() => {
  console.log("Steve deactivated");
});
</script>
