<script setup lang="ts">
import { ref } from 'vue'
import AppTable from '@/components/AppTable.vue'

const characters = ref()
const loading = ref(false)
const error = ref()
const pageSize = ref(20)

async function getCharacters(page = 1, perPage = pageSize.value) {
  const response = await fetch(
    `https://api-blue-archive.vercel.app/api/characters?page=${page}&perPage=${perPage}`
  )
  return await response.json()
}
async function loadData() {
  loading.value = true
  try {
    const response = await getCharacters()
    characters.value = response.data
    console.log(response)
  } catch (e) {
    error.value = e
    console.error('wystapil blad')
  } finally {
    loading.value = false
  }
}
const colDefs = ref([
  { field: 'name' },
  { field: 'school' },
  { field: 'birthday' },
  { field: 'photo' }
])
await loadData()
console.log(characters.value)

function handlePaginationChange(event: any) {
  if (!event.newPageSize) return
  pageSize.value = event.api.paginationGetPageSize()
  loadData()
}
</script>

<template>
  <main>
    <div class="wrapper">
      <AppTable
        :headers="colDefs"
        :data="characters"
        :pagination="true"
        :paginationPageSize="pageSize"
        @pagination-changed="handlePaginationChange"
      />
    </div>
  </main>
</template>

<style scoped>
.wrapper {
  position: relative;
  padding: 0 20px 0 20px;
}
</style>
