<template>
<div>
    <h1>Product Detail</h1>
    <div v-if="route.params.id">
        <h3>Product {{ route.params.id }}</h3>
    </div>
    <div v-else>
        <h3>No product selected</h3>
    </div>
</div>
</template>
<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
console.log(route.params.id);
</script>