import { createApp } from 'vue';
import App from './App.vue'

// this is the global way of importing a component import statement in main.js then component statement
import Header from "./components/header_footer/Header.vue";
import custom_directives from "./components/Directives/custom_directives.js";
const app = createApp(App);

Object.entries(custom_directives).forEach(([name, directive]) => {
  app.directive(name, directive);
});
// global component import app-header is the alias for the Header file name imported above
app.component('app-header', Header)

app.mount('#app')
