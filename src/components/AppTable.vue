<script setup lang="ts">
import { ref } from 'vue'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css'
import { AgGridVue } from 'ag-grid-vue3'

const rowData = ref([
  {
    mission: 'Voyager',
    company: 'NASA',
    location: 'Cape Canaveral',
    date: '1977-09-05',
    rocket: 'Titan-Centaur ',
    price: 86580000,
    successful: true
  },
  {
    mission: 'Apollo 13',
    company: 'NASA',
    location: 'Kennedy Space Center',
    date: '1970-04-11',
    rocket: 'Saturn V',
    price: 3750000,
    successful: false
  },
  {
    mission: 'Falcon 9',
    company: 'SpaceX',
    location: 'Cape Canaveral',
    date: '2015-12-22',
    rocket: 'Falcon 9',
    price: 9750000,
    successful: true
  }
])

const colDefs = ref([
  { field: 'mission' },
  { field: 'company' },
  { field: 'location' },
  { field: 'date' },
  { field: 'price' },
  { field: 'successful' },
  { field: 'rocket' }
])
</script>

<template>
  <ag-grid-vue
    :rowData="rowData"
    :columnDefs="colDefs"
    style="height: 500px; width: 100vw"
    class="ag-theme-quartz table"
  >
  </ag-grid-vue>
</template>

<style>
.table {
  margin: 0 20px 0 20px;
}
</style>
