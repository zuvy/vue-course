<template>
  <!-- imported into Cars component -->
  <div>
    <ul v-for="car in cars" :key="car.model">
      <li>
        <span>{{ car.model }}</span>: {{ car.brand }}
      </li>
    </ul>
  </div>
</template>

<script setup>
  // props defined originally in App.vue imported into the Cars component and finally made available
  // to display here in the list template.
  // passing props from parent to child gets unwieldy when the parent child chain gets longer.
  const props = defineProps(['cars']);
</script>
