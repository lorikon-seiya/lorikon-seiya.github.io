<script setup>
import { data as posts } from '../../../posts/posts.data.js'
import { formatDate } from '../utils/date.js'
</script>

<template>
    <div class="post-list">
        <h1>Posts</h1>

        <div v-if="posts.length === 0" class="empty">
            Not have post ...
        </div>


        <a v-for="post in posts" :key="post.url" :href="post.url" class="post-item">
            <div class="post-meta">
                <span v-if="post.frontmatter.date" class="date">
                    {{ formatDate(post.frontmatter.date) }}
                </span>
                <span v-if="post.frontmatter.location" class="location">
                    📍 {{ post.frontmatter.location }}
                </span>
            </div>

            <h2 class="post-title">{{ post.frontmatter.title }}</h2>

            <div class="post-tags" v-if="post.frontmatter.tags?.length">
                <span v-for="tag in post.frontmatter.tags" :key="tag" class="tag">
                    {{ tag }}
                </span>
            </div>
        </a>
    </div>
</template>

<style scoped>
.post-list {
    max-width: 720px;
    margin: 0 auto;
    padding: 56px 24px;
}

.post-list h1 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 40px;
    letter-spacing: -0.5px;
}

.empty {
    color: var(--vp-c-text-2);
    text-align: center;
    padding: 80px 0;
    font-size: 15px;
}

.post-item {
    display: block;
    padding: 24px 28px;
    margin-bottom: 16px;
    border-radius: 12px;
    background: var(--vp-c-bg-soft);
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s, box-shadow 0.2s;
}

.post-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.post-meta {
    display: flex;
    gap: 12px;
    font-size: 12px;
    color: var(--vp-c-text-2);
    margin-bottom: 10px;
}

.post-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 14px;
    border: none;
    padding: 0;
    line-height: 1.4;
    color: var(--vp-c-text-1);
}

.post-item:hover .post-title {
    color: var(--vp-c-brand-1);
    transition: color 0.2s;
}

.post-tags {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
}

.tag {
    padding: 2px 10px;
    border-radius: 20px;
    font-size: 11px;
    background: var(--vp-c-bg);
    color: var(--vp-c-brand-1);
    border: 1px solid var(--vp-c-brand-1);
}
</style>