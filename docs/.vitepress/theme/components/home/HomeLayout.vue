<script setup>
import HomeHero from './HomeHero.vue'
import PhotoGrid from './PhotoGrid.vue'
import { homeTexts, homePhotos } from '../../data/home-data.js'
</script>

<template>
    <div class="home">
        <!-- Hero -->
        <HomeHero :texts="homeTexts" />

        <!-- 九宫格 -->
        <PhotoGrid :photos="homePhotos" />
    </div>
</template>

<style scoped src="./HomeLayout.css"></style>
