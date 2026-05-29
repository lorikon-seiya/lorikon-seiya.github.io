<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)

function onScroll() {
    const doc = document.documentElement
    const scrolled = doc.scrollTop
    const total = doc.scrollHeight - doc.clientHeight
    progress.value = total > 0 ? (scrolled / total) * 100 : 0
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
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