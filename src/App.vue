<template>
  <div>
    <app-header /><br>
    <div class="container">
      <button @click="activeComp = Mike">Mike</button>
      <button @click="activeComp = Steve">Steve</button>

      <!-- <Mike v-if="activeComp === Mike" />
          <Steve v-if="activeComp === Steve" /> 
      <component :is="activeComp"></component>
      the include in the tag below can be exclude and it wil take a comma delimited list "mike , steve"
      so you can apply keep alive to a specific group of components.
      It is also obviously using the file name prefix not the component name.
      -->
      <keep-alive include="mike,steve">
        <component :is="activeComp"></component>
      </keep-alive>
    </div>
    <div id="dialog_here"></div>
  </div>
</template>

<script setup>
import Mike from './components/Players/mike.vue';
import Steve from './components/Players/steve.vue';
import { shallowRef } from 'vue';

const activeComp = shallowRef(Mike);
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
