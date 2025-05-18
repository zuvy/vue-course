<template>
  <div>
    <app-header/><br>
    <div class="container">
      <Cars :cars="cars"/>
    </div>
  </div>
</template>

<script setup>
  // using reactive since we are working with objects (ref has more overhead)
  import { reactive } from 'vue';
  import Cars from './components/Cars/index.vue';
  // creating the content to inject into the children (Cars --> list) see the reactive bind variable :cars="cars" in the container div
  const cars = reactive([
    { model: 'Dino', brand: 'Ferrari'},
    { model: '911', brand: 'Posrche'},
    { model: 'Tipo', brand: 'Fiat'}
  ])
</script>

<!-- style tags are global no matter what component you put it in unless you scope it --> 
<style>
  body {
    padding: 0;
    margin: 0;
    font-family: 'Robot', sans-serif;
  }

  .container {
    min-height: 84vh;
    box-sizing: border-box;
    padding: 20px;
  }
</style>


