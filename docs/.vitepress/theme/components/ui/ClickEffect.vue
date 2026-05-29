<script setup>
import { onMounted, onUnmounted } from 'vue'

const words = ['✨', '⭐', '🌟', '💫', '🎉']

function onClick(e) {
    const el = document.createElement('span')
    el.textContent = words[Math.floor(Math.random() * words.length)]
    el.style.cssText = `
    position: fixed;
    left: ${e.clientX}px;
    top: ${e.clientY}px;
    font-size: 20px;
    pointer-events: none;
    z-index: 9999;
    animation: float-up 0.8s ease forwards;
  `
    document.body.appendChild(el)
    setTimeout(() => el.remove(), 1800)
}

onMounted(() => document.addEventListener('click', onClick))
onUnmounted(() => document.removeEventListener('click', onClick))
</script>

<template></template>

<style>
@keyframes float-up {
    0% {
        opacity: 1;
        transform: translateY(0);
    }

    100% {
        opacity: 0;
        transform: translateY(-220px);
    }
}
</style>