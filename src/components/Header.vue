<template>
   <v-card color="#3A8EDB" class="tailwind-style-card">
        <v-card-title>
            <h1 class="tailwind-style-title">
                Blue 
                <span class="tailwind-style-archive">Archive</span>
                <br />
                Dashboard
            </h1>
        </v-card-title>
   </v-card>
</template>

<script lang="ts">
export default{
    name: 'PageHeader'
}
</script>
<style scoped>
.tailwind-style-card{
    @apply flex font-luckiestguy h-1/6 items-center justify-center rounded-none
};
.tailwind-style-title{
    @apply md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center
}
.tailwind-style-archive{
    @apply text-[#040404]
}
</style>