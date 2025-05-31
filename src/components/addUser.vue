<template>
  <h2>Add User</h2>
  <div v-show="loading">
    <app-loader/>
  </div>
  <div v-show="!loading">
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
  import { reactive, ref } from 'vue';
  import { useToast } from 'vue-toast-notification';
  
  const user = reactive ({
    name: '',
    lastname: '',
  });

  const toast = useToast();
  const loading = ref(false);
  
  const submitForm = () => {
    loading.value = true
    axios({
      method: 'post',
      url: 'http://localhost:3004/users',
      data: user
      })
    .then(response => {
      loading.value = false;
      toast.success('User added successfully!', 
      { duration: 3000 }
    );
    })
    .catch(error => {
      toast.error(
        error.response?.data?.message || error.message || 'Failed to load users. Please try again later.',
      { duration: 5000 }
      )
    })
    .finally(() => {
      loading.value = false;
    });
  }
  
</script>
