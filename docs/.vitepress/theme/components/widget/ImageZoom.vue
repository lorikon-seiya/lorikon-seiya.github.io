<script setup>
import mediumZoom from 'medium-zoom'
import { useRoute } from 'vitepress'
import { onMounted, watch, nextTick } from 'vue'

const route = useRoute()

function initZoom() {
    nextTick(() => {
        mediumZoom('.vp-doc img', {
            background: 'rgba(0, 0, 0, 0.8)',
            margin: 24,
        })
    })
}

onMounted(initZoom)
watch(() => route.path, initZoom)
</script>

<template></template>