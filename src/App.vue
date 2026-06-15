<template>
  <div class="app-shell">
    <BackgroundAnimation />
    <Navbar />
    <main class="relative z-10">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import BackgroundAnimation from './components/BackgroundAnimation.vue';
</script>