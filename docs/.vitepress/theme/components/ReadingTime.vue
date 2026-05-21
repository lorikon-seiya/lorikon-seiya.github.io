<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'

const { page } = useData()

const stats = computed(() => {
    const content = page.value.content || ''

    // 中文汉字
    const chinese = (content.match(/[\u4e00-\u9fa5]/g) || []).length
    // 平假名
    const hiragana = (content.match(/[\u3040-\u309f]/g) || []).length
    // 片假名
    const katakana = (content.match(/[\u30a0-\u30ff]/g) || []).length
    // 英文单词
    const english = (content.match(/[a-zA-Z]+/g) || []).length

    const total = chinese + hiragana + katakana + english

    // 日文阅读速度约 400-600 字/分钟，取 500
    const minutes = Math.ceil(total / 500)

    return { total, minutes }
})
</script>

<template>
    <span class="reading-time">
        📖 {{ stats.total }} 字 · 約 {{ stats.minutes }} 分で読める
    </span>
</template>

<style scoped>
.reading-time {
    font-size: 13px;
    color: var(--vp-c-text-2);
}
</style>