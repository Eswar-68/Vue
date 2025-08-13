<script setup>
    import { ref, inject } from "vue";
    let maxluckynumber=ref(100);
    let luckynumber=inject("maxluckynumber");
    function generateRandomNumber(){
        luckynumber.value= Math.ceil(Math.random()*maxluckynumber.value);
    }
</script>
<template>
<div class="number-container">
    <label> Random Number : </label>
    <input type="text" v-model="luckynumber" readonly/>
</div>
<br>
<button @click="generateRandomNumber">generate</button>
</template>

<style scoped>

.number-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  font-weight: bold;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
    padding-top:5px;
  background-color: #4cafef;
  border: none;
  padding: 0.6rem;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #3797db;
}
</style>