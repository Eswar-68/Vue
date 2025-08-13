<template>
<div>
    <h1> Product List </h1>
    <div v-for="product in products" :key="product.id">
        <div>
            <!--  <router-link style="text-decoration: none; color: blue;" :to="`/productdetail/${product.id}`">{{ product.id }}. {{ product.name }}</router-link> -->
            <router-link :to="{ name: 'productdetail', params: { id: product.id } }" style="text-decoration: none; color: blue;" >{{ product.id }}. {{ product.name }}</router-link>
        </div>
    </div>
</div>
</template>
<script setup>
    import { reactive } from 'vue';
    const products = reactive([
        { id: 1, name: 'Product 1'},
        { id: 2, name: 'Product 2'},
        { id: 3, name: 'Product 3'},

    ]);
</script>