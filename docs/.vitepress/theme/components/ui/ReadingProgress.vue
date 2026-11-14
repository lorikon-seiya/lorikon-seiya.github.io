<script setup>
import { useScrollProgress } from '../../composables/useScroll.js'

const { progress } = useScrollProgress()
</script>

<template>
    <div class="progress-bar" :style="{ width: progress + '%' }" />
</template>

<style scoped>
.progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: var(--vp-c-brand-1);
    z-index: 999;
    transition: width 0.1s;
}
</style>
