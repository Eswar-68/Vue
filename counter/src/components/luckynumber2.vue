<script setup>
    import { ref } from "vue";
    let maxluckynumber=ref(100);
    let luckynumber=ref(0);
    function generateRandomNumber(){
        luckynumber.value= Math.ceil(Math.random()*maxluckynumber.value);
    }
</script>
<template>
<div class="number-container">
    <label>Maximum range : </label>
    <input type="text" v-model="maxluckynumber">
</div>
<br>
<div class="component-card">
    <label> Random Number : </label>
    <input type="number" v-model.number="luckynumber"/>
</div>
<br>
<button @click="generateRandomNumber">generate</button>
</template>

<style scoped>



label {
  font-weight: bold;
}

input {
  padding: 0.5rem;
  margin-left: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #ff7b5a;
  border: none;
  padding: 0.6rem;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #e6694a;
}
</style>