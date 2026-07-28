<script setup>
import { ref, computed, onMounted } from 'vue'
import { data as posts } from '../../../../posts/posts.data.js'
import { formatDate } from '../../utils/date.js'

const activeTag = ref('')

onMounted(() => {
    const params = new URLSearchParams(window.location.search)
    const tag = params.get('tag')
    if (tag) activeTag.value = tag
})

const allTags = computed(() => {
    const tags = new Set()
    posts.forEach(post => {
        post.frontmatter.tags?.forEach(tag => tags.add(tag))
    })
    return [...tags]
})

const filteredPosts = computed(() => {
    if (!activeTag.value) return posts
    return posts.filter(post =>
        post.frontmatter.tags?.includes(activeTag.value)
    )
})

function selectTag(tag) {
    activeTag.value = activeTag.value === tag ? '' : tag
}
</script>

<template>
    <div class="post-list">

        <!-- 标题 + 文章数 -->
        <div class="list-header">
            <h1>Posts</h1>
            <span class="count">{{ filteredPosts.length }}</span>
        </div>

        <!-- Tag 筛选 -->
        <div v-if="allTags.length" class="tag-filter">
            <button class="tag-btn" :class="{ active: activeTag === '' }" @click="activeTag = ''">
                All
            </button>
            <button v-for="tag in allTags" :key="tag" class="tag-btn" :class="{ active: activeTag === tag }"
                @click="selectTag(tag)">
                {{ tag }}
            </button>
        </div>

        <!-- 空状态 -->
        <div v-if="filteredPosts.length === 0" class="empty">
            No posts found.
        </div>

        <!-- 文章列表 -->

        <a v-for="post in filteredPosts" :key="post.url" :href="post.url" class="post-item">
            <span class="post-date">
                {{ post.frontmatter.date ? formatDate(post.frontmatter.date) : '' }}
            </span>
            <span class="post-title">{{ post.frontmatter.title }}</span>
            <span v-if="post.frontmatter.location" class="post-location">
                {{ post.frontmatter.location }}
            </span>
        </a>

    </div>
</template>

<style scoped>
.post-list {
    max-width: 680px;
    margin: 0 auto;
    padding: 80px 24px 120px;
}

/* 标题 */
.list-header {
    display: flex;
    align-items: baseline;
    gap: 12px;
    margin-bottom: 40px;
}

.list-header h1 {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--vp-c-text-3);
    margin: 0;
}

.count {
    font-size: 12px;
    color: var(--vp-c-text-3);
}

/* Tag 筛选 */
.tag-filter {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 48px;
}

.tag-btn {
    padding: 4px 12px;
    border-radius: 2px;
    font-size: 12px;
    border: 1px solid var(--vp-c-divider);
    background: transparent;
    color: var(--vp-c-text-2);
    cursor: pointer;
    transition: all 0.15s;
    letter-spacing: 0.02em;
}

.tag-btn:hover,
.tag-btn.active {
    border-color: var(--vp-c-text-1);
    color: var(--vp-c-text-1);
}

/* 空状态 */
.empty {
    font-size: 14px;
    color: var(--vp-c-text-3);
    padding: 60px 0;
}

/* 文章列表 */
.post-item {
    display: grid;
    grid-template-columns: 140px 1fr auto;
    align-items: baseline;
    gap: 24px;
    padding: 18px 0;
    border-bottom: 1px solid var(--vp-c-divider);
    text-decoration: none;
    color: inherit;
    transition: opacity 0.15s;
}

.post-item:first-of-type {
    border-top: 1px solid var(--vp-c-divider);
}

.post-item:hover {
    opacity: 0.6;
}

.post-date {
    font-size: 12px;
    color: var(--vp-c-text-3);
    white-space: nowrap;
    letter-spacing: 0.02em;
}

.post-title {
    font-size: 15px;
    color: var(--vp-c-text-1);
    line-height: 1.5;
}

.post-location {
    font-size: 12px;
    color: var(--vp-c-text-3);
    white-space: nowrap;
}

@media (max-width: 600px) {
    .post-item {
        grid-template-columns: 1fr;
        gap: 4px;
        padding: 16px 0;
    }

    .post-location {
        display: none;
    }
}
</style>