<template>
  <div>
    <app-header/><br>
    <div class="container">
      Container
    </div>
  </div>
</template>

<script setup>

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


