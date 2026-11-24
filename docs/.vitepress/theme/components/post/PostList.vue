<script setup>
import { data as posts } from '../../data/posts.data.js'
import { useTagFilter } from '../../composables/useTagFilter.js'
import { formatDate } from '../../utils/date.js'

const { activeTag, allTags, filteredPosts, selectTag } = useTagFilter(posts)
</script>

<template>
    <div class="post-list">
        <!-- 页面眉标 + 标题 + 文章数 -->
        <div class="list-header">
            <div class="header-main">
                <span class="eyebrow">Writings & Notes</span>
                <h1 class="page-title">Posts</h1>
            </div>
            <span class="count-badge">{{ filteredPosts.length }} 篇</span>
        </div>

        <!-- Tag 筛选 -->
        <div v-if="allTags.length" class="tag-filter">
            <button class="tag-btn" :class="{ active: activeTag === '' }" @click="activeTag = ''">
                全部
            </button>
            <button v-for="tag in allTags" :key="tag" class="tag-btn" :class="{ active: activeTag === tag }"
                @click="selectTag(tag)">
                #{{ tag }}
            </button>
        </div>

        <!-- 空状态 -->
        <div v-if="filteredPosts.length === 0" class="empty">
            没有找到相关文章。
        </div>

        <!-- 文章列表 -->
        <div class="post-items">
            <a v-for="post in filteredPosts" :key="post.url" :href="post.url" class="post-item">
                <div class="post-main">
                    <span class="post-title">{{ post.frontmatter.title }}</span>
                    <div class="post-meta-sub">
                        <span class="post-date">{{ post.frontmatter.date ? formatDate(post.frontmatter.date) : '' }}</span>
                        <span v-if="post.frontmatter.location" class="dot">·</span>
                        <span v-if="post.frontmatter.location" class="post-location">📍 {{ post.frontmatter.location }}</span>
                    </div>
                </div>
                <span class="arrow">→</span>
            </a>
        </div>
    </div>
</template>

<style scoped src="./PostList.css"></style>
