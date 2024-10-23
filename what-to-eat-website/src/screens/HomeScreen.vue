<script lang="ts">
    import RandomPickHome from "../components/RandomPickHome.vue"
    import BottomNavbar from "../components/BottomNavbar.vue"

    export default {
        components: {
            RandomPickHome,
            BottomNavbar
        }
    }

</script>

<template>
    <div class="h-full">
        <RandomPickHome />
        <BottomNavbar />
    </div>
</template>