import { ref, computed, onMounted } from 'vue'

export function useTagFilter(posts) {
    const activeTag = ref('')

    onMounted(() => {
        if (typeof window === 'undefined') return
        const params = new URLSearchParams(window.location.search)
        const tag = params.get('tag')
        if (tag) activeTag.value = tag
    })

    const allTags = computed(() => {
        const tags = new Set()
        posts.forEach(post => {
            post.frontmatter?.tags?.forEach(tag => tags.add(tag))
        })
        return [...tags]
    })

    const filteredPosts = computed(() => {
        if (!activeTag.value) return posts
        return posts.filter(post =>
            post.frontmatter?.tags?.includes(activeTag.value)
        )
    })

    function selectTag(tag) {
        activeTag.value = activeTag.value === tag ? '' : tag
    }

    return {
        allTags,
        filteredPosts,
        activeTag,
        selectTag
    }
}
