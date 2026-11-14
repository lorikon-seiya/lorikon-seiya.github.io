<script setup>
defineProps({
    photos: {
        type: Array,
        default: () => []
    }
})
</script>

<template>
    <div class="grid">
        <a
            v-for="(src, i) in photos"
            :key="i"
            :href="src"
            data-fancybox="home-gallery"
            :data-caption="`Photo ${i + 1}`"
            class="cell"
        >
            <img :src="src" :alt="`Gallery Photo ${i + 1}`" loading="lazy" />
        </a>
    </div>
</template>

<style scoped src="./PhotoGrid.css"></style>
