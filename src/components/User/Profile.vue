<template>
  <div class="user_profile">
    <h3>User Information</h3>
    <ul>
      <li>
        <span>Name: </span> {{ name }}
      </li>
      <li>
        <span>Last Name: </span> {{ userLastname }}
      </li>
      <li>
        <span>Age: </span> {{ userAge }}
      </li>
      <li>
        <span>Alias: </span> {{ alsoKnownAs }}
      </li>
    </ul>
    <h3>Parents</h3>
    <ul>
      <li v-for="(value, key, index) in userParents" :key="index">
        <span>{{ key }}</span> {{ value }}
      </li>
    </ul>
    <hr/>
    <button @click="emit('update-lastname', 'Mozart')">Change from child</button>
    <!-- button triggers function that emits the say-hello event defined in const emit  -->
    <button @click="sayHello">Say Hello</button>
    <!-- set prop using click event (doesn't need to be explicitly emitted)
         In this case the function is on the App.vue component-->
    <button @click="updateAge(40)">Update Age</button>
  </div>
</template>

<script setup>
  const emit = defineEmits(['update-lastname', 'say-hello'])
  // can pass array to prop for multiple data type options (userAge), can also us an object
  // to pass multiple attributes mark them as required.
  const props = defineProps({
    alsoKnownAs:{
      type: String,
      required: true,
      default: 'N/A'
    },
    userLastname:{
      type: String,
      validator(value) {
        if (value === 'Beethoven') {
          return true;
        } else {
          return false;
        }
      }
    },
    userAge:[Number, String],
    userParents:Object,
    updateAge:Function
  });

  const sayHello = () => {
    emit('say-hello');
  }
  // updateLastname triggered by the Change from child button must have an emitted event defined (const emit) with the value to apply
  // but const emit can be triggered directly on the click event
  //const updateLastname = () => {
  //  emit ('update-lastname', 'Mozart')
  //}
  const name = "Steve"
</script>

<style scoped>
  span {
    font-weight: 800;
  }
  .user_profile {
    border: 1px solid #2196F3;
    padding: 10px;
  }
</style>

