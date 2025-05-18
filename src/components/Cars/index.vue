<template>
  <h1>Welcome to Cars</h1>
  <CarList/>
  <!-- :cars="cars" from App.vue -->
</template>

<script setup>
  // this import makes the props available to populate the carlist.
  import CarList from './list.vue';
</script>

