<script setup>
import { useData } from 'vitepress'
import { formatDate } from '../utils/date.js'


const { frontmatter, page } = useData()
</script>

<template>
    <div v-if="frontmatter.title" class="doc-copyright">
        <p>
            🪧 {{ frontmatter.title }}<br>
            📅 {{ formatDate(frontmatter.date) }}<br>
        </p>
    </div>
</template>

<style scoped>
.doc-copyright {
    margin-top: 32px;
    padding: 16px 20px;
    border-left: 4px solid var(--vp-c-brand-1);
    background: var(--vp-c-bg-soft);
    font-size: 13px;
    color: var(--vp-c-text-2);
    border-radius: 0 8px 8px 0;
    line-height: 2;
}
</style>