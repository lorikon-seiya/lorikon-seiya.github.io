<script setup>
import { useBackToTop } from '../../composables/useScroll.js'

const { visible, scrollToTop } = useBackToTop(300)
</script>

<template>
    <Transition name="fade">
        <button v-if="visible" class="back-to-top" @click="scrollToTop" aria-label="Back to top">
            ↑
        </button>
    </Transition>
</template>

<style scoped>
.back-to-top {
    position: fixed;
    bottom: 32px;
    right: 32px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid var(--vp-c-divider);
    background: var(--vp-c-bg);
    color: var(--vp-c-text-1);
    font-size: 18px;
    cursor: pointer;
    z-index: 999;
    transition: all 0.2s;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.back-to-top:hover {
    background: var(--vp-c-brand-1);
    color: #fff;
    border-color: var(--vp-c-brand-1);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
