<script setup>
import signup from '../home/signup.vue';
import { inject } from 'vue';
</script>
<template>
    <div>
        <nav>
            <button  @click="$router.go(-1)">←</button>
            <button @click="$router.go(+1)">→</button>
            <router-link to="/">Home</router-link>
            <router-link  to="/productlist" >Product List</router-link>
            <!--for named route / is not needed-->
            <router-link :to="{name: 'contact'}">Contact Us</router-link>
            <router-link to="/signup">Sign Up</router-link>
        </nav>
    </div>
</template>
<style scoped>
    nav {
        background-color: #007bff;
        padding: 10px;
        border-bottom: 1px solid #eee;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 2px 10px;
        color: #ffffff;
        font-size: 20px;
    }

    nav a {
        color: #ffffff;
        margin: 5px;
        text-decoration: none;
    }

    nav a:hover {
        text-shadow: 2px 2px 5px #ffffff;
    }
    .active-link {
        color: black;
        font-style: italic;
    }
</style>