import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollProgress() {
    const progress = ref(0)

    function onScroll() {
        if (typeof document === 'undefined') return
        const doc = document.documentElement
        const scrolled = doc.scrollTop
        const total = doc.scrollHeight - doc.clientHeight
        progress.value = total > 0 ? (scrolled / total) * 100 : 0
    }

    onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
    onUnmounted(() => window.removeEventListener('scroll', onScroll))

    return { progress }
}

export function useBackToTop(threshold = 300) {
    const visible = ref(false)

    function onScroll() {
        if (typeof window === 'undefined') return
        visible.value = window.scrollY > threshold
    }

    function scrollToTop() {
        if (typeof window === 'undefined') return
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
    onUnmounted(() => window.removeEventListener('scroll', onScroll))

    return { visible, scrollToTop }
}
