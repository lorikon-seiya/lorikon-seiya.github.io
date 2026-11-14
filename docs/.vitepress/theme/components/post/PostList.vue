<script setup>
import { data as posts } from '../../data/posts.data.js'
import { useTagFilter } from '../../composables/useTagFilter.js'
import { formatDate } from '../../utils/date.js'

const { activeTag, allTags, filteredPosts, selectTag } = useTagFilter(posts)
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

<style scoped src="./PostList.css"></style>
