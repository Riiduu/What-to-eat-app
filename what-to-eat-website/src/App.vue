<script setup lang="ts">
  import {closeIcon, searchIcon} from './assets/exports.ts'
  import { ref } from 'vue'
  import router from './router.js'

  const isHome = ref(true)


  if (router.currentRoute._rawValue.fullPath === "/") {
    isHome.value = true;
  } else {
    isHome.value = false;
  }

  const setIsHome = () => {
    isHome.value = !isHome.value;
  }
  // I don't get it... It makes absolutely no fucking sense
  console.log(router.currentRoute._rawValue.fullPath)


</script>

<template>
  <div class="px-5 mx-auto max-w-md justify-center">  
    <div class="flex flex-row w-full justify-between mt-5 items-center h-20">
        <h1 class="text-4xl font-extrabold title-text cursor-pointer" v-if="isHome">What to eat</h1>
        <h1 class="text-4xl font-extrabold title-text cursor-pointer" v-else>Filters</h1>
        <div onClick={props.switchToSearch} class="bg-black cursor-pointer h-12 flex w-12 rounded-xl">
            <img @click="setIsHome" v-if="isHome == true" :src="searchIcon" class="h-6 m-auto" alt="" />
            <img @click="setIsHome" v-else :src="closeIcon" class="h-6 m-auto" alt="" />
        </div>
    </div>
    <router-view />
  </div>
</template>

<style scoped>

</style>
