<script setup lang="ts">
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css'
import { AgGridVue } from 'ag-grid-vue3'

defineProps<{
  data: any
  headers: any
}>()
</script>

<template>
  <ag-grid-vue :rowData="data" :columnDefs="headers" class="ag-theme-quartz table" />
</template>

<style>
.table {
  height: 500px;
  max-width: 100%;
  width: 100%;
}
</style>
