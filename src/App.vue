<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Nav from './components/Nav.vue';
</script>

<template>
  <v-app>
  <div class="tailwind-style-div">
  <section class="tailwind-style-section">
    <Header />
    <Nav />
  </section>

  <RouterView />
</div>
</v-app>
</template>


<style scoped>
.tailwind-style-div{
 @apply flex flex-wrap w-screen h-screen font-luckiestguy
}
.tailwind-style-section{
  @apply h-screen w-1/5
}
</style>


