<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import Comment from '../ui/Comment.vue'
import DocCopyright from './DocCopyright.vue'

const { page } = useData()

const isPost = computed(() =>
    page.value.relativePath.startsWith('posts/') &&
    page.value.relativePath !== 'posts/index.md'
)
</script>

<template>
    <template v-if="isPost">
        <DocCopyright />
        <Comment />
    </template>
</template>