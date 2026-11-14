import { ref, onMounted, onUnmounted } from 'vue'

export function useReveal() {
    const revealRef = ref(null)
    let deck = null

    // 手势滑动 / 拖拽坐标记录
    let startX = 0
    let startY = 0
    let isTracking = false

    const onPointerDown = (e) => {
        // 避免点击返回主站、全屏等按钮链接时触发滑动判定
        if (e.target.closest('a, button, input')) return
        startX = e.clientX
        startY = e.clientY
        isTracking = true
    }

    const onPointerUp = (e) => {
        if (!isTracking || !deck) return
        isTracking = false

        const diffX = e.clientX - startX
        const diffY = e.clientY - startY
        const absX = Math.abs(diffX)
        const absY = Math.abs(diffY)

        // 滑动有效阈值（至少移动 35px）
        if (Math.max(absX, absY) < 35) return

        if (absX > absY) {
            // 水平滑动：左滑下一页/下一个动效，右滑上一页
            if (diffX < 0) {
                deck.next()
            } else {
                deck.prev()
            }
        } else {
            // 垂直滑动：上滑看下一层内容，下滑返回上一层
            if (diffY < 0) {
                deck.down()
            } else {
                deck.up()
            }
        }
    }

    const onPointerCancel = () => {
        isTracking = false
    }

    onMounted(async () => {
        if (typeof window === 'undefined') return
        const { default: Reveal } = await import('reveal.js')
        const { default: RevealHighlight } = await import('reveal.js/plugin/highlight')

        deck = new Reveal(revealRef.value, {
            embedded: false,
            controls: true,
            progress: true,
            center: true,
            hash: true,
            transition: 'convex',
            touch: true,
            touchThreshold: 20,
            plugins: [RevealHighlight],
        })

        await deck.initialize()

        // 挂载手势滑动事件（PointerEvent 原生兼容触屏 touch 与桌面鼠标 drag）
        const el = revealRef.value
        if (el) {
            el.addEventListener('pointerdown', onPointerDown)
            window.addEventListener('pointerup', onPointerUp)
            window.addEventListener('pointercancel', onPointerCancel)
        }
    })

    onUnmounted(() => {
        const el = revealRef.value
        if (el) {
            el.removeEventListener('pointerdown', onPointerDown)
        }
        if (typeof window !== 'undefined') {
            window.removeEventListener('pointerup', onPointerUp)
            window.removeEventListener('pointercancel', onPointerCancel)
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
        toggleFullscreen
    }
}
