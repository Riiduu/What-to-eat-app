<script lang="ts">
    import { ref } from 'vue';

    import bookmarkIcon from '../assets/bookmark.png'
</script>

<template>
    <div class="h-20 w-full mx-auto flex flex-row justify-between items-center px-5">
        <div class="border-b py-2 border-black cursor-pointer">
            <img class="h-8 hover:scale-105" src="../assets/discover.png" alt="" />
        </div>
        <div class="py-2 border-black cursor-pointer">
            <img class="h-8 hover:scale-105" src="../assets/bookmark.png" alt="" />
        </div>
        <div class="py-2 border-black cursor-pointer">
            <img class="h-8 hover:scale-105" src="../assets/bookmarks.png" alt="" />
        </div>
        <div class="py-2 border-black cursor-pointer">
            <img class="h-8 hover:scale-105" src="../assets/settings.png" alt="" />
        </div>
    </div>   
</template>