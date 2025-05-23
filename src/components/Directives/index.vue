<template>
  <div v-awesome.red.big="textToRender"></div>
  <button @click="textToRender = 'Updated Text'">Trigger Update</button>
</template>

<script setup>
  import { ref } from 'vue';
  const textToRender = ref('Some text');
</script>
