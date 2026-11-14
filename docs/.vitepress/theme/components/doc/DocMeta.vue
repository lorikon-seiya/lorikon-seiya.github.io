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

<style scoped src="./DocMeta.css"></style>
