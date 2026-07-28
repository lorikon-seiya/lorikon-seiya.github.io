<script setup>
import { useData } from 'vitepress'
import { formatDate } from '../../utils/date.js'
import ReadingTime from '../post/ReadingTime.vue'

const { frontmatter } = useData()
</script>

<template>
    <div v-if="frontmatter.date" class="doc-meta">

        <!-- 日期、地点、阅读时间 -->
        <div class="meta-row">
            <span>{{ formatDate(frontmatter.date) }}</span>
            <span v-if="frontmatter.location" class="dot">·</span>
            <span v-if="frontmatter.location">{{ frontmatter.location }}</span>
            <span class="dot">·</span>
            <ReadingTime />
        </div>

        <!-- Tags -->
        <div v-if="frontmatter.tags?.length" class="tags">

            <a v-for="tag in frontmatter.tags" :key="tag" :href="`/posts/?tag=${tag}`" class="tag">
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
    margin-bottom: 40px;
    padding-bottom: 32px;
    border-bottom: 1px solid var(--vp-c-divider);
}

.meta-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
    font-size: 12px;
    color: var(--vp-c-text-3);
    letter-spacing: 0.02em;
}

.dot {
    color: var(--vp-c-divider);
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.tag {
    font-size: 11px;
    color: var(--vp-c-text-3);
    text-decoration: none;
    padding: 2px 8px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 2px;
    letter-spacing: 0.04em;
    transition: all 0.15s;
}

.tag:hover {
    color: var(--vp-c-text-1);
    border-color: var(--vp-c-text-1);
}
</style>