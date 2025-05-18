<template>
  <div>
    <app-header/><br>
    <div class="container">
      Container
      <Cars/>
      <hr/>
      <button @click="updateCar">Update Car Model</button>
  <!-- still able to access the const cars object -->
      <!-- {{ cars[0].model }} -->
    </div>
  </div>
</template>

<script setup>
  // using reactive since we are working with objects (ref has more overhead)
  import { reactive, provide } from 'vue';
  import Cars from './components/Cars/index.vue';

 // using the const lets the object remain available h
  const cars = reactive([
    { model: 'Dino', brand: 'Ferrari'},
    { model: '911', brand: 'Posrche'},
    { model: 'Tipo', brand: 'Fiat'}
  ])
  // can stil update reactive content dynamically.
  // if we "provide" it, we can update from the child component
  const updateCar = () => {
    cars[1].model = 'Carerra';
  }

  provide('cars', {
    cars,
    updateCar
  });
 
 // can "provide" direct access to the cars object with the following syntax istead of using a const.
 // but this makes it unavaiable on the App component.
 // provide ('cars',[
 //   { model: 'Dino', brand: 'Ferrari'},
 //   { model: '911', brand: 'Posrche'},
 //   { model: 'Tipo', brand: 'Fiat'}
 //libx32 ])
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


