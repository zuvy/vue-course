<template>
  <div>
    <app-header/><br>
    <div class="container">
      <UserProfile
        
        :userLastname = "data.lastname"
        :userAge = "data.age"
        :userParents = "data.parents"
        @update-lastname="data.lastname = $event"
        @say-hello="alertHello"
        :updateAge="updateAge"
      />
      <!-- the @say-hello listens for the results of the alertHello function
           but is triggered by the say-hello emitted event from App.vue-->
      <button @click="updateName">Update name</button>
    </div>
  </div>
</template>

<script setup>
  import {ref} from 'vue';
  // this is the local way of importing a component -- uses the name of the emported file.
  // see main.js for global
  //import Footer from './components/header_footer/Footer.vue';

  import UserProfile from './components/User/Profile.vue';
  import { reactive } from 'vue';
  const data = reactive({
    lastname: 'Beethoven',
    name: 'Rocket',
    age: '34',
    parents: {
      father: 'Mario',
      mother: 'Gretchen'
    }
  })

  const updateName = () => {
    data.name = "Golden child"
  }

  const alertHello = () => {
    alert("Hello");
  }

  const updateAge = (value) => {
    data.age = value;
  }

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


