<script lang="ts">

    export default {
        name: 'RandomPickHome'
    }
</script>

<template>
  <div class="flex justify-center h-full my-3 cursor-pointer hover:scale-[1.01] duration-200">
        <!-- Card Container -->
        <div class="relative w-full max-w-md bg-white rounded-3xl shadow-md hover:shadow-2xl overflow-hidden">
            <!-- Image-->
            <img src="https://hungrybynature.com/wp-content/uploads/2017/09/pinch-of-yum-workshop-19.jpg" alt="Random Food" class="w-full h-full object-cover" />

            <!-- Text Content -->
            <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-4 text-white">
            <h2 class="text-lg font-bold title-text">Random pick</h2>
            <p class="text-sm title-text">These pancakes look fucking amazing, holy shit.</p>
            </div>
        </div>
  </div>
</template>

