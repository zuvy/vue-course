<template>
  <!-- imported into Cars component -->
  <div>
    <ul v-for="car in cars" :key="car.model">
      <li>
        <span>{{ car.brand}}</span>: {{ car.model  }}
      </li>
    </ul>
    <hr/>
  </div>
</template>

<script setup>
  import { inject } from 'vue';
  const cars = inject('cars');
</script>

