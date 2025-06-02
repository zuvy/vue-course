<template>
  <div>
    <div class="container">
      <app-header/><br>
      <router-view/>
      <!-- <home-component></home-component> -->
      <!-- <articels-main></articles-main> -->
      <!-- <articels-comp></articles-comp> -->
      <!-- <contact-component></contact-component> -->
      

    </div>
  </div>
</template>

<script setup>
  //import HomeComponent from './components/home.vue'; 
  //import ArticelsMain from './components/articles/article.vue';
  //import ArticleComp from './components/articles/index.vue';
  //import ContactComponent from './components/contact/index.vue';
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


