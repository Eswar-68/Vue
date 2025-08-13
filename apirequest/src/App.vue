<script setup>

import axios from 'axios';
import { reactive, onMounted,  } from 'vue';

let loading = reactive({
  status: false
});

const destinationObj = reactive({
  destinations:[]
});

onMounted(() => {
  loadData();
});
const newDestination = reactive({
  id: null,
  name: '',
  country: '',
  days: null
});

function loadData() {
  loading.status = true;
  axios.get('http://localhost:3000/destination').then((response) => {
    new Promise((resolve) => setTimeout(resolve,1000)).then(() => {
        destinationObj.destinations = response.data;
        loading.status = false;
      });
    });
}

function removeDestination() {
  loading.status = true;
  axios.delete(`http://localhost:3000/destination/${newDestination.id}`)
    .then(() => {
      destinationObj.destinations = destinationObj.destinations.filter(dest => dest.id !== newDestination.id);
      newDestination.id = null;
    })
    .catch(error => {
      console.error('Error removing destination:', error);
    })
    .finally(() => {
      setTimeout(() => {
        loading.status = false;
      }, 1000);
    });
}

function addDestination() {
  loading.status = true;
  axios.post('http://localhost:3000/destination', newDestination)
    .then(response => {
      destinationObj.destinations.push(response.data);
      newDestination.id = null;
      newDestination.name = '';
      newDestination.country = '';
      newDestination.days = null;
    })
    .catch(error => {
      console.error('Error adding destination:', error);
    })
    .finally(() => {
    setTimeout(() => {
      loading.status = false;
    }, 1000);
  });
}

</script>

<template>
<div>
  <div class="loader-div" v-if="loading.status">
    <span class="loader"></span>
  </div>
  <div v-else>
    <div class="destination-list">
      <h1>Destination List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Country</th>
            <th>Days</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="destination in destinationObj.destinations" :key="destination.id">
            <td>{{ destination.id }}</td>
            <td>{{ destination.name }}</td>
            <td>{{ destination.country }}</td>
            <td>{{ destination.days }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="add-destination">
      <h1>Add Destination</h1>
      <div class="input-fields"> 
        <p>Add Destination:</p>
        <input type="text" v-model="newDestination.id" placeholder="ID" required>
        <input type="text" v-model="newDestination.name" placeholder="Name" required>
        <input type="text" v-model="newDestination.country" placeholder="Country" required>
        <input type="text" v-model.number="newDestination.days" placeholder="Days" required>
      </div>

      <div class="button-container">
        <button @click="addDestination" type="submit">Add</button>
      </div>
    </div>

    <div class="remove-destination">
      <h1>Remove Destination</h1>
      <div class="input-fields">
        <p>Enter ID to remove:</p>
        <input type="text" v-model="newDestination.id" placeholder="Enter ID to remove" required>
      </div>

      <div class="button-container">
        <button @click="removeDestination">Remove</button>
      </div>
    </div>
  </div>

</div>
</template>

<style scoped>

h1{
  text-align: center;
}

table {
  width: auto;
  border-collapse: collapse;
  margin: 20px auto;
}

th, td {
  padding: 12px 15px;
  border: 1px solid #ddd;
}

th {
  background-color: #f4f4f4;
}

.add-destination {
  margin: 20px;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  padding: 0.7rem;
  background-color: #007bff;
  border: none;
  color: white;
  border-radius: 8px;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.input-fields {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

input {
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #007bff;
  outline: none;
}

.loader-div {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  position: relative;
  width: 100px;
  height: 100px;
}

.loader:before , .loader:after{
  content: '';
  border-radius: 50%;
  position: absolute;
  inset: 0;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3) inset;
}
.loader:after {
  box-shadow: 0 2px 0 #FF3D00 inset;
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  0% {  transform: rotate(0)}
  100% { transform: rotate(360deg)}
}

</style>