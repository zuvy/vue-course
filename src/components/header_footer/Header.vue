<template>
  <header>
    <div>
      Header
    </div>
  </header>
</template>
<!-- adding the scoped keyword in the style tag limits it to this component --> 
<!-- It does this by adding a special id to the local element -->
<style scoped>
  header {
    background: #2396F6;
    border-bottom: 4px solid #607d8b;
    box-sizing: border-box;
    padding: 30px;
    color: white;
    font-size: 30px;
  }
</style>

