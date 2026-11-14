<script setup>
import { useReadingTime } from '../../composables/useReadingTime.js'

const { stats } = useReadingTime()
</script>

<template>
    <span v-if="stats.total > 0" class="reading-time">
        📖 {{ stats.total }} 字 · 約 {{ stats.minutes }} 分で読める
    </span>
</template>

<style scoped>
.reading-time {
    font-size: 12px;
    color: var(--vp-c-text-2);
}
</style>
