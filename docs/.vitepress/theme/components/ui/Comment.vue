<script setup>
import Giscus from '@giscus/vue'
import { useData } from 'vitepress'

const { isDark } = useData()
</script>

<template>
    <div class="comment">
        <!-- <hr class="divider" /> -->
        <!-- <h3>Comments</h3> -->
        <Giscus repo="lorikon-seiya/lorikon-seiya.github.io" repo-id="R_kgDOSix3Xw" category="Announcements"
            category-id="DIC_kwDOSix3X84C9duu" mapping="pathname" reactions-enabled="1" emit-metadata="0"
            input-position="top" :theme="isDark ? 'dark' : 'light'" lang="en" loading="lazy" />
    </div>
</template>

<style scoped>
.comment {
    margin-top: 48px;
}

.divider {
    border: none;
    border-top: 1px solid var(--vp-c-divider);
    margin-bottom: 32px;
}

h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
}
</style>