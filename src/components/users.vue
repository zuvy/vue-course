<template>
  <div class="row">
    <div v-if="data.loading">
      <app-loader/>
    </div>
    <div class="col-auto mb-4"
      v-for="(user) in data.users"
      :key="user.id">
      <div class="card" style="width: 14rem">
        <img 
          class="card-img-top"
          :src="'https://placebeard.it/300/300?'+user.id"
          alt="Card image cap"
        />
        <div class="card-body">
          <div class="card-text">
            <strong>Name:</strong> {{ user.name }}
          </div>
          <div class="card-text">
            <strong>Lastname:</strong> {{ user.lastname }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import axios from 'axios';
  import { onMounted, reactive } from 'vue';
  import { useToast } from 'vue-toast-notification';
    console.log('Users component mounted');

    const data = reactive({
      loading: true,
      users: []
    });

    const toast = useToast();

    const loadUsers = () => {
      axios.get(`http://localhost:3004/users`)
        .then(response => {
          data.users = response.data
          data.loading = false;
      })
        .catch(error => {
          toast.error(
            error.response?.data?.message || error.message || 'Failed to load users. Please try again later.',
          { duration: 5000 }
       );
      })
    }
    onMounted(() => {
      loadUsers();
    });
   

</script>

