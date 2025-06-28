<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <v-app>
    <NavBar/>
    <v-main>
        <RouterView/>
    </v-main>
    <Footer/>
</v-app>
 
</template>
<style scoped>
.main-content {
  min-height: calc(100vh - 64px - 120px); /* adjust for header + footer height */
}
</style>
