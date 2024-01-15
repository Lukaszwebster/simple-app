<script setup lang="ts">
import { ref } from 'vue'
import AppTable from '@/components/AppTable.vue'

async function getCharacters(page = 1, perPage = 20) {
  const response = await fetch(
    `https://api-blue-archive.vercel.app/api/characters?page=${page}&perPage=${perPage}`
  )
  return await response.json()
}
const characters = ref()
const loading = ref(true)
const error = ref()
const pageSize = ref(20)

console.log(await getCharacters())
</script>

<template>
  <main>
    <div class="wrapper">
      <AppTable :pagination="true" />
    </div>
  </main>
</template>

<style scoped>
.wrapper {
  position: relative;
  padding: 0 20px 0 20px;
}
</style>
