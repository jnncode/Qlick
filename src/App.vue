<script setup>
import './assets/main.css';
import Navigation from './components/Navigation.vue';
</script>

<template>
  <header>
    <Navigation />
  </header>
  <main>
    <RouterView></RouterView>
  </main>
</template>