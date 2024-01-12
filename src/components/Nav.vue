<template>
    <v-navigation-drawer :clipped-width="760"  class="tailwind-style ">
        <v-col class="tailwind-style-col">
            <RouterLink to="/">
                <v-btn 
                    block rounded="xl"  
                    size="regular" 
                    :class="{ 'tailwind-style-btn': true, 'opacity-60': currentRoute !== '/', 'opacity-100': currentRoute === '/' }">
                        <v-list-item  class="tailwind-style-item">DATA</v-list-item>
                </v-btn>
            </RouterLink>
            <RouterLink to="/form">
                <v-btn 
                    block rounded="xl" 
                    size="regular" 
                    :class="{'tailwind-style-btn':true,'opacity-60':currentRoute !== '/form','opacity-100':currentRoute === '/form'}" class="tailwind-style-btn" >
                        <v-list-item  class="tailwind-style-item">FORM</v-list-item>
                </v-btn>
            </RouterLink>
            <RouterLink to="/edit">
                <v-btn 
                    block rounded="xl" 
                    size="regular" 
                    :class="{'tailwind-style-btn':true,'opacity-60':currentRoute !== '/edit','opacity-100':currentRoute === '/edit'}" >
                        <v-list-item  class="tailwind-style-item">EDIT</v-list-item>
                </v-btn>
        </RouterLink>
        </v-col>
    
    </v-navigation-drawer>
    
    
</template>

<script lang="ts">
import { watchEffect,ref} from 'vue';
import type { Ref } from 'vue';
import {useRoute} from 'vue-router'
import type {RouteLocationNormalized} from 'vue-router'
interface ComponentData{
    currentRoute: Ref<string>;
}
export default {
  name: 'PageNav',
  setup() {
    const route:RouteLocationNormalized = useRoute();
    const currentRoute:Ref<string> = ref('');

    watchEffect(() => {
      currentRoute.value = route.fullPath;
    });

    return {
      currentRoute, 
    } as ComponentData ;
  }
};
</script>

<style scoped>

.tailwind-style{
    @apply bg-lightgreymain h-5/6 w-screen relative transform translate-x-0 !important
}
.tailwind-style-col{
    @apply w-4/5 ml-auto mr-auto flex flex-col gap-10
}
.tailwind-style-btn{
    @apply h-20  !important
}
.tailwind-style-item{
    @apply md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white 
}
.opacity-60{
    @apply bg-[#3A8EDB]/60
}
.opacity-100{
    @apply bg-[#3A8EDB]
}
</style>
