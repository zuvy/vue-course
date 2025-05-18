<template>
  <div class="car_brands">
    <h3>Car Brands</h3>
    <!-- This slot renders from the <CarBrands></CarBrands> slot on the App.vue component. -->
    <slot></slot>
  </div>
</template>

<style>
  .car_brands {
    border: 1px solid #2196f3;
    padding: 10px 20px;
  }
</style>
