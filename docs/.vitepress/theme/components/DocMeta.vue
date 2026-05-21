<script setup>
import { useData } from 'vitepress'
import { formatDate } from '../utils/date.js'
import ReadingTime from './ReadingTime.vue'

const { frontmatter } = useData()


</script>

<template>
    <!-- <hr> -->
    <div v-if="frontmatter.date" class="doc-meta">
        <span>📅 {{ formatDate(frontmatter.date) }}</span>
        <span v-if="frontmatter.location">📍 {{ frontmatter.location }}</span>
        <ReadingTime />
    </div>
</template>

<style scoped>
.doc-meta {
    display: flex;
    gap: 16px;
    margin-bottom: 24px;
    font-size: 14px;
    color: var(--vp-c-text-2);
}
</style>