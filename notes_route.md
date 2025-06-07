Initial setup
  import into main.js

  createRouter is the main method to import, must used after that is createWebHistory.

  Routes have to be defined in the `routes` directory on the root level (same level as src), they can be nested. The route file should export a function that takes a `router` object as an argument.

  In this case from routes/index.vue

  createRouter method uses an object as it's argument, which contains the `history` and `routes` properties.

    routes is an array of objects, ```[{path: '', component:}].```

  when using router the top level component in App.vue will be <router-view/>

  vite (veet) is a dev server 
when using vite with vue-router, import.meta.env.BASE_URL must be used as the argument for the cerateWebHistory method.

Linking
 In the component router-link takes he place of a for links. The to attlibute replaces href and is used to specify the path.

For setting up links to external sites we import into the component where we want to use (for now anyway) useRouter and useRoute from 'vue-router' 





