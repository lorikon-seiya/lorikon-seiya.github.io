import { ref, onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

export function useReadingTime() {
    const stats = ref({ total: 0, minutes: 0 })
    const route = useRoute()

    function calculate() {
        if (typeof window === 'undefined') return
        nextTick(() => {
            const el = document.querySelector('.vp-doc')
            if (!el) return
            const content = el.innerText || ''

            // 中文汉字
            const chinese = (content.match(/[\u4e00-\u9fa5]/g) || []).length
            // 平假名
            const hiragana = (content.match(/[\u3040-\u309f]/g) || []).length
            // 片假名
            const katakana = (content.match(/[\u30a0-\u30ff]/g) || []).length
            // 英文单词
            const english = (content.match(/[a-zA-Z]+/g) || []).length

            const total = chinese + hiragana + katakana + english
            // 日文/中文阅读速度约 400-600 字/分钟，取 500
            const minutes = Math.max(1, Math.ceil(total / 500))

            stats.value = { total, minutes }
        })
    }

    onMounted(calculate)
    watch(() => route.path, calculate)

    return { stats }
}
