<script setup>
import { useData } from 'vitepress'
import { formatDate } from '../../utils/date.js'
import ReadingTime from '../post/ReadingTime.vue'

const { frontmatter } = useData()
</script>

<template>
    <div v-if="frontmatter.date" class="doc-meta">
        <div class="meta-row">
            <span>📅 {{ formatDate(frontmatter.date) }}</span>
            <span v-if="frontmatter.location">📍 {{ frontmatter.location }}</span>
            <ReadingTime />
        </div>

        <div v-if="frontmatter.tags?.length" class="tags">

            <a v-for="tag in frontmatter.tags" :key="tag" class="tag">
                {{ tag }}
            </a>
        </div>
    </div>
</template>

<style scoped>
.doc-meta {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 24px;
}

.meta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    font-size: 14px;
    color: var(--vp-c-text-2);
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.tag {
    padding: 2px 12px;
    border-radius: 20px;
    font-size: 12px;
    background: var(--vp-c-bg-soft);
    color: var(--vp-c-brand-1);
    border: 1px solid var(--vp-c-brand-1);
    text-decoration: none;
    transition: all 0.2s;
}

.tag:hover {
    background: var(--vp-c-brand-1);
    color: #fff;
}
</style>