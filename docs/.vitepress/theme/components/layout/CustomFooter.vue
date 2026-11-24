<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { page, frontmatter } = useData()

// 在全屏简历演示页面不渲染全局页脚
const isResume = computed(() => {
    return page.value.relativePath === 'resume.md' || frontmatter.value.layout === false
})

// 带有侧边栏的文章页面在桌面端需预留侧边栏边距
const hasSidebar = computed(() => {
    return page.value.relativePath.startsWith('posts/') && page.value.relativePath !== 'posts/index.md'
})
</script>

<template>
    <footer v-if="!isResume" class="custom-footer" :class="{ 'has-sidebar': hasSidebar }">
        <div class="footer-container">
            <!-- 上半部分：品牌简述与快捷导航 -->
            <div class="footer-top">
                <div class="footer-brand">
                    <div class="brand-header">
                        <img src="/IMG_0939.JPG" alt="Avatar" class="brand-avatar" />
                        <h2 class="brand-title">CCC</h2>
                    </div>
                    <p class="brand-tagline">
                        No man is an island. 日本一周（千葉県以外）制覇中。サウナ、温泉、道の駅での車中泊。
                    </p>
                    <div class="location-badge">
                        <span class="pulse-dot"></span>
                        <span>Hamamatsu, Shizuoka 🇯🇵</span>
                    </div>
                </div>

                <!-- 导航链接分组 -->
                <div class="footer-nav-groups">
                    <div class="nav-group">
                        <span class="group-title">Navigation</span>
                        <a href="/" class="nav-link">Home</a>
                        <a href="/posts/" class="nav-link">Posts</a>
                        <a href="/about" class="nav-link">About Me</a>
                        <a href="/resume" class="nav-link">Resume</a>
                    </div>

                    <div class="nav-group">
                        <span class="group-title">Connect</span>
                        <a href="https://www.instagram.com/caicaicaizi2" target="_blank" rel="noopener noreferrer"
                            class="nav-link">Instagram</a>
                        <a href="/feed.rss" target="_blank" class="nav-link">RSS Feed</a>
                        <a href="mailto:luoli6860@gmail.com" class="nav-link">Email</a>
                    </div>
                </div>
            </div>

            <!-- 分割线 -->
            <div class="footer-divider"></div>

            <!-- 下半部分：版权声明 -->
            <div class="footer-bottom">
                <p class="copyright">
                    © 2026 CCC. All rights reserved.
                </p>
                <p class="built-with">
                    Built with <span class="heart">♥</span> using VitePress & Vue
                </p>
            </div>
        </div>
    </footer>
</template>

<style scoped src="./CustomFooter.css"></style>
