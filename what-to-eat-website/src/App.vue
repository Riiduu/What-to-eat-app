<script setup lang="ts">
  import { ref } from 'vue'
  import router from './router.js'
  import {useRoute} from 'vue-router'

  const isHome = ref(true)
  const route = useRoute()

  

  if (route.path === "/") {
    isHome.value = true;
  }
  else if (route.path === "/search") {
    isHome.value = false;
  }
  else {
    isHome.value = false;
  }

  const setIsHome = () => {
    if (isHome.value == true) {
      console.log('yeye')
      router.push('/search')
    } else if (isHome.value == false && route.path === "/search"){
      router.push('/')
    }

    isHome.value = !isHome.value;
  }

  console.log('Current path: ' + route.path)
  console.log(isHome.value)



</script>

<template>
  <div class="px-5 mx-auto max-w-md justify-center" style="height: calc(100vh - 200px);">  
    <div class="flex flex-row w-full justify-between mt-5 items-center h-20">
        <h1 class="text-4xl font-extrabold title-text cursor-pointer" v-if="isHome">What to eat</h1>
        <h1 class="text-4xl font-extrabold title-text cursor-pointer" v-else>Filters</h1>
        <div onClick={props.switchToSearch} class="bg-black cursor-pointer h-12 flex w-12 rounded-xl">
            <img @click="setIsHome" v-if="isHome == true" src="./assets/search.png" class="h-6 m-auto" alt="" />
            <img @click="setIsHome" v-else src="./assets/close.png" class="h-6 m-auto" alt="" />
        </div>
    </div>
    <router-view />
  </div>
</template>

<style scoped>

</style>
