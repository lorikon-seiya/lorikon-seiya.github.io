<script setup>
import { onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

let overlay = null
let currentImg = null

function createOverlay() {
    overlay = document.createElement('div')
    overlay.style.cssText = `
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.85);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: zoom-out;
    padding: 24px;
    box-sizing: border-box;
  `

    const img = document.createElement('img')
    img.style.cssText = `
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 8px;
    pointer-events: none;
    user-select: none;
  `

    overlay.appendChild(img)
    document.body.appendChild(overlay)

    // 点击关闭
    overlay.addEventListener('click', close)

    // 滑动关闭（移动端）
    let startY = 0
    overlay.addEventListener('touchstart', e => {
        startY = e.touches[0].clientY
    }, { passive: true })

    overlay.addEventListener('touchend', e => {
        const endY = e.changedTouches[0].clientY
        if (Math.abs(endY - startY) > 50) close()
    }, { passive: true })

    return img
}

function open(src) {
    if (!overlay) {
        currentImg = createOverlay()
    }
    currentImg.src = src
    overlay.style.display = 'flex'
    document.body.style.overflow = 'hidden'
}

function close() {
    if (overlay) {
        overlay.style.display = 'none'
        document.body.style.overflow = ''
    }
}

function onKeyDown(e) {
    if (e.key === 'Escape') close()
}

function initZoom() {
    const imgs = document.querySelectorAll('.vp-doc img')
    imgs.forEach(img => {
        img.style.cursor = 'zoom-in'
        img.removeEventListener('click', onImgClick)
        img.addEventListener('click', onImgClick)
    })
}

function onImgClick(e) {
    open(e.currentTarget.src)
}

onMounted(() => {
    initZoom()
    window.addEventListener('keydown', onKeyDown)
})

watch(() => route.path, () => {
    setTimeout(initZoom, 300)
})

onUnmounted(() => {
    window.removeEventListener('keydown', onKeyDown)
    overlay?.remove()
    overlay = null
})
</script>

<template></template>