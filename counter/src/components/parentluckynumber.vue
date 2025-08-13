<script setup>
import luckynumber1 from "./luckynumber1.vue";
import luckynumber2 from "./luckynumber2.vue";
import { ref, computed, provide } from "vue";
let maxluckynumber=ref(10);
provide("maxluckynumber", maxluckynumber)
//provide is used to directly give a value from one component to another
let flag=ref(false);
const currentComponent=computed(()=>{
  return flag.value?luckynumber1:luckynumber2;
})
</script>

<template>
<!--Inside template there can be only nested div or a single div-->
<!--We can write 2 div or more but vue will bundle them together-->
<!--so it might behave unpredictable-->
<div class="app-container">
  <button class="toggle-btn" @click="flag=!flag">Toggle component</button>
  <keep-alive include="luckynumber1">
    <component :is="currentComponent" class="component-card"/>
  </keep-alive>
  <!--it prevents the unmounting of the componenet-->
  <!--include is used to keep a specific component alive than keeping all alive-->
  <!--there is also exclude keyword-->
  <br>
  <div class="slot-container">
    <slot></slot>
    <slot name="namedslot"></slot>
  </div>
</div>
</template>

<style scoped>

.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  font-family: sans-serif;
  background: #f9f9f9;
  min-height: 100vh;
}

.slot-container {
  padding: 10px;
  border: 2px dashed #ff7f50;
  background-color: rgba(255, 127, 80, 0.1);
  border-radius: 8px;
  font-family: Arial, sans-serif;
}

.toggle-btn {
  background-color: #4cafef;
  border: none;
  padding: 0.7rem 1.5rem;
  margin-bottom: 1.5rem;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
}

.toggle-btn:hover {
  background-color: #3797db;
}

.component-card {
  width: 350px;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

</style>