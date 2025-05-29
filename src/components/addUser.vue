<template>
  <h2>Add User</h2>
  <div>
    <div class="form-group mb-3">
      <label>Name</label>
      <input type="text" class="form-control" v-model="user.name" />
    </div>

    <div class="form-group mb-3">
      <label>Lastname</label>
      <input type="text" class="form-control" v-model="user.lastname" />
    </div>

    <button 
      class="btn btn-primary"
      @click="submitForm"
    >Submit</button>
  </div>
</template>

<script setup>
  import axios from 'axios';
  import { reactive } from 'vue';
  import { useToast } from 'vue-toast-notification';

  const user = reactive ({
    name: '',
    lastname: ''
  });

  const toast = useToast();

  const submitForm = () => {
    console.log(user);
    axios({
      method: 'post',
      url: 'http://localhost:3004/users',
      data: user
      })
    .then(response => {
      toast.success('User added successfully!', 
      { duration: 3000 }
    );
    })
    .catch(error => {
      toast.error(
        error.response?.data?.message || error.message || 'Failed to load users. Please try again later.',
      { duration: 5000 }
      )
    });
  }
  
</script>
