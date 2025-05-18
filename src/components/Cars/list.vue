<template>
  <!-- imported into Cars component -->
  <div>
    <ul v-for="car in cars" :key="car.model">
      <li>
        <span>{{ car.brand}}</span>: {{ car.model  }}
      </li>
    </ul>
    <hr/>
    <!-- updateCar is a function provided from the App.vue component, so this click event will trigger the funcion there -->
    <button @click="updateCar">Update Cars from Child</button>
  </div>
</template>

<script setup>
  // this is all that's needed to provide the cars props from the App.vue component.
  import { inject } from 'vue';
  // provided cars object and the function to update the car fromm the child.
  const { cars, updateCar } = inject('cars');
</script>

