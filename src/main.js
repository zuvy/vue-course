import { createApp } from 'vue';
import App from './App.vue'

// this is the global way of importing a component import statement in main.js then component statement
import Header from "./components/header_footer/Header.vue";

const app = createApp(App);


// global component import app-header is the alias for the Header file name imported above
app.component('app-header', Header)

app.mount('#app')
