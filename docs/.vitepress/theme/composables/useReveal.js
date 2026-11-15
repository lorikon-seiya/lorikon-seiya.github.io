import { ref, onMounted, onUnmounted } from 'vue'

export function useReveal() {
    const revealRef = ref(null)
    const currentSlide = ref(1)
    const totalSlides = ref(6)
    let deck = null

    // 手势滑动 / 拖拽坐标记录
    let startX = 0
    let startY = 0
    let isTracking = false

    // 通用滑动结算逻辑（手机触屏与电脑鼠标共用）
    function handleSwipeEnd(endX, endY) {
        if (!isTracking || !deck) return
        isTracking = false

        const diffX = endX - startX
        const diffY = endY - startY
        const absX = Math.abs(diffX)
        const absY = Math.abs(diffY)

        // 滑动有效阈值（至少移动 28px）
        if (Math.max(absX, absY) < 28) return

        if (absX > absY) {
            // 水平滑动：左滑下一页，右滑上一页
            if (diffX < 0) {
                deck.next()
            } else {
                deck.prev()
            }
        } else {
            // 垂直滑动：上滑查看子业务，下滑返回上一层
            if (diffY < 0) {
                deck.down()
            } else {
                deck.up()
            }
        }
    }

    // 1. 移动端触摸事件 (TouchEvents)
    const onTouchStart = (e) => {
        if (e.touches.length > 1) {
            isTracking = false
            return
        }
        if (e.target.closest('a, button, input')) return

        const touch = e.touches[0]
        startX = touch.clientX
        startY = touch.clientY
        isTracking = true
    }

    const onTouchMove = (e) => {
        if (isTracking && e.cancelable) {
            e.preventDefault()
        }
    }

    const onTouchEnd = (e) => {
        if (!isTracking) return
        const touch = e.changedTouches[0]
        handleSwipeEnd(touch.clientX, touch.clientY)
    }

    const onTouchCancel = () => {
        isTracking = false
    }

    // 2. PC 电脑端鼠标拖拽事件 (MouseEvents)
    const onMouseDown = (e) => {
        if (e.button !== 0) return
        if (e.target.closest('a, button, input')) return
        startX = e.clientX
        startY = e.clientY
        isTracking = true
    }

    const onMouseUp = (e) => {
        if (!isTracking) return
        handleSwipeEnd(e.clientX, e.clientY)
    }

    // 屏幕旋转或视口缩放时，动态调整幻灯片宽高比
    const onResize = () => {
        if (!deck || typeof window === 'undefined') return
        const isMobile = window.innerWidth <= 768
        deck.configure({
            width: isMobile ? 380 : 1000,
            height: isMobile ? 660 : 700,
            margin: isMobile ? 0.04 : 0.08,
        })
        deck.layout()
    }

    onMounted(async () => {
        if (typeof window === 'undefined') return
        const { default: Reveal } = await import('reveal.js')
        const { default: RevealHighlight } = await import('reveal.js/plugin/highlight')

        const isMobile = window.innerWidth <= 768

        deck = new Reveal(revealRef.value, {
            // 响应式画布：移动端使用竖版黄金比例，桌面端使用宽屏比例
            width: isMobile ? 380 : 1000,
            height: isMobile ? 660 : 700,
            margin: isMobile ? 0.04 : 0.08,
            minScale: 0.2,
            maxScale: 2.0,
            embedded: false,
            controls: true,
            controlsTutorial: false,
            controlsLayout: 'bottom-right',
            controlsBackArrows: 'faded',
            progress: true,
            center: true,
            hash: true,
            transition: 'convex',
            touch: false, // 禁用内部简易 touch，使用统一的高灵敏度事件
            plugins: [RevealHighlight],
        })

        await deck.initialize()

        // 获取并同步页码状态
        totalSlides.value = deck.getHorizontalSlides().length || 6
        currentSlide.value = (deck.getIndices().h || 0) + 1

        deck.on('slidechanged', (event) => {
            currentSlide.value = (event.indexh || 0) + 1
        })

        const el = revealRef.value
        if (el) {
            // 移动端 Touch
            el.addEventListener('touchstart', onTouchStart, { passive: true })
            el.addEventListener('touchmove', onTouchMove, { passive: false })
            el.addEventListener('touchend', onTouchEnd, { passive: true })
            el.addEventListener('touchcancel', onTouchCancel, { passive: true })

            // 桌面端 Mouse
            el.addEventListener('mousedown', onMouseDown)
            window.addEventListener('mouseup', onMouseUp)
            window.addEventListener('resize', onResize)
        }
    })

    onUnmounted(() => {
        const el = revealRef.value
        if (el) {
            el.removeEventListener('touchstart', onTouchStart)
            el.removeEventListener('touchmove', onTouchMove)
            el.removeEventListener('touchend', onTouchEnd)
            el.removeEventListener('touchcancel', onTouchCancel)
            el.removeEventListener('mousedown', onMouseDown)
        }
        if (typeof window !== 'undefined') {
            window.removeEventListener('mouseup', onMouseUp)
            window.removeEventListener('resize', onResize)
        }
        if (deck) {
            deck.destroy()
            deck = null
        }
    })

    const toggleFullscreen = () => {
        if (typeof document === 'undefined') return
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen()
        } else if (document.exitFullscreen) {
            document.exitFullscreen()
        }
    }

    return {
        revealRef,
        currentSlide,
        totalSlides,
        toggleFullscreen
    }
}
