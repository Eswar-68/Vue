<script setup>
//local import of components
import Header from './components/layout/header.vue';
import homepage from './components/home/homepage.vue'
</script>
<template>
  <Header></Header>
  <homepage></homepage>
  <router-view></router-view>
</template>

<style scoped></style>
