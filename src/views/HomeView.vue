<script setup lang="ts">
import { ref } from 'vue'
import AppTable from '@/components/AppTable.vue'

const characters = ref()
const loading = ref(false)
const error = ref()
const pageSize = ref(20)

async function getCharacters(page = 1, perPage = 20) {
  const response = await fetch(
    `https://api-blue-archive.vercel.app/api/characters?page=${page}&perPage=${perPage}`
  )
  return await response.json()
}
async function processData() {
  loading.value = true
  try {
    const response = await getCharacters()
    characters.value = response.data
  } catch (e) {
    error.value = e
    console.error('wystapil blad')
  } finally {
    loading.value = false
  }
}

await processData()
console.log(characters.value)
</script>

<template>
  <main>
    <div class="wrapper">
      <AppTable :characters="characters" :loading="loading" :error="error" :pagination="true" />
    </div>
  </main>
</template>

<style scoped>
.wrapper {
  position: relative;
  padding: 0 20px 0 20px;
}
</style>
