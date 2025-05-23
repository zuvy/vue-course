import { createApp } from 'vue';
import App from './App.vue'

// this is the global way of importing a component import statement in main.js then component statement
import Header from "./components/header_footer/Header.vue";

const app = createApp(App);

app.directive('awesome', {
  beforeMount(el, binding, vnode) {
    // el.innerHTML = 'Hello guys';
    //if (binding.arg === 'red') {
    //  el.style.color = 'red';
    //} else if (binding.arg === 'blue') {
    //  el.style.color = 'blue';
    //} else {
    //  el.style.color = 'green';
    //}
    el.style.color = binding.modifiers.red ? 'red' : 'blue';
    el.style.fontSize = binding.modifiers.big ? '20px' : '10px';
    el.innerHTML = binding.value;
  }
});
// global component import app-header is the alias for the Header file name imported above
app.component('app-header', Header)

app.mount('#app')
