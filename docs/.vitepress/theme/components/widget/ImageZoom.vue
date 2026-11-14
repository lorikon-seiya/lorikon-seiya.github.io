<script setup>
import { onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

const route = useRoute()
let FancyboxInstance = null

async function initFancybox() {
    if (typeof window === 'undefined') return

    if (!FancyboxInstance) {
        const module = await import('@fancyapps/ui')
        FancyboxInstance = module.Fancybox
    }

    nextTick(() => {
        try {
            FancyboxInstance.unbind('.vp-doc img')
            FancyboxInstance.unbind('[data-fancybox="home-gallery"]')
        } catch (e) {
            // ignore
        }

        // 1. 为文章正文 (.vp-doc) 中所有非特殊图片自动赋加画廊属性
        const docImgs = document.querySelectorAll('.vp-doc img')
        docImgs.forEach((img) => {
            img.style.cursor = 'zoom-in'
            if (!img.getAttribute('data-fancybox')) {
                img.setAttribute('data-fancybox', 'post-gallery')
            }
            if (!img.getAttribute('data-src')) {
                img.setAttribute('data-src', img.currentSrc || img.src)
            }
            if (!img.getAttribute('data-caption') && img.alt) {
                img.setAttribute('data-caption', img.alt)
            }
        })

        // 2. 绑定文章正文画廊
        FancyboxInstance.bind('.vp-doc img[data-fancybox="post-gallery"]', {
            groupAll: true,
            Thumbs: {
                autoStart: true,
            },
            Toolbar: {
                display: {
                    left: ['infobar'],
                    middle: ['zoomIn', 'zoomOut', 'toggle1to1', 'rotateCW'],
                    right: ['slideshow', 'thumbs', 'fullscreen', 'close'],
                },
            },
        })

        // 3. 绑定首页九宫格画廊
        FancyboxInstance.bind('[data-fancybox="home-gallery"]', {
            groupAll: true,
            Thumbs: {
                autoStart: true,
            },
            Toolbar: {
                display: {
                    left: ['infobar'],
                    middle: ['zoomIn', 'zoomOut', 'toggle1to1'],
                    right: ['thumbs', 'fullscreen', 'close'],
                },
            },
        })
    })
}

onMounted(() => {
    initFancybox()
})

watch(() => route.path, () => {
    setTimeout(initFancybox, 300)
})

onUnmounted(() => {
    try {
        FancyboxInstance?.destroy()
    } catch (e) {
        // ignore
    }
})
</script>

<template></template>

<style>
/* Fancybox 视觉微调，完美契合暗黑与极简风 */
.fancybox__backdrop {
    background: rgba(10, 10, 12, 0.92) !important;
    backdrop-filter: blur(12px);
}

.fancybox__toolbar {
    --f-button-color: #cbd5e1;
    --f-button-hover-color: #ffffff;
    --f-button-bg: rgba(255, 255, 255, 0.08);
    --f-button-hover-bg: rgba(255, 255, 255, 0.16);
    padding: 12px 16px;
}

.fancybox__caption {
    font-size: 13px;
    color: #e2e8f0;
    letter-spacing: 0.02em;
    padding: 12px 20px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 6px;
    margin-bottom: 12px;
}
</style>
