<template>
  <h3>Mike is on</h3>
</template>

<script setup>
import { onUnmounted, onActivated, onDeactivated } from 'vue';

onUnmounted(() => {
  console.log("Steve unmounted.");
});
onActivated(() => {
  console.log("Mike activated");
});
onDeactivated(() => {
  console.log("Mike deactivated");
});
</script>
