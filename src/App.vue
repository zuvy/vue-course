<template>
  <div>
    <app-header/><br>
    <div class="container">
      <div>
        <button 
          type="button"
          class="btn btn-primary mb-3"
          @click="activeComp = Users"
          >Users</button>
  
        <button 
          type="button"
          class="btn btn-primary mb-3"
          @click="activeComp = AddUsers"
          >Add Users</button>
      </div>
      <component :is="activeComp" />
    </div>
  </div>
</template>
  
<script setup>
  import Users from './components/users.vue';
  import AddUsers from './components/addUser.vue';
  import { shallowRef } from 'vue';

  const activeComp = shallowRef(Users);
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


