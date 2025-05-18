<template>
  <div>
    <app-header/><br>
    <div class="container">
      Container
      <Cars/>
      <hr/>
      <CarBrands>
      <!-- Vue's version of page fragments
           Using opening and closing tags for a component makes a "Slot", content in the slot will be rendered on the child components
           Called on the child component with the <slot></slot> tag

           The only way to update this is to pass a prop to the child that triggers a function here on the parent component that will update the state of the brands const.

           Best for static content you want to pass from the parent component to children.
      -->
        <ul>
          <li v-for="(brand, index) in brands" :key="index">
            {{ brand }}
          </li>
        </ul>
      </CarBrands>
    </div>
  </div>
</template>

<script setup>
  import { reactive, provide } from 'vue';
  import Cars from './components/Cars/index.vue';
  import CarBrands from './components/Cars/brands.vue';

  const brands = reactive(['Mazda', 'Honda', 'Renault'])

  const cars = reactive([
    { model: 'Dino', brand: 'Ferrari'},
    { model: '911', brand: 'Posrche'},
    { model: 'Tipo', brand: 'Fiat'}
  ])

  provide('cars', cars);
</script>

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


