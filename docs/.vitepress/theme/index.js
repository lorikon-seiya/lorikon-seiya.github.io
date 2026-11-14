import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './style.css'

import HomeLayout from './components/home/HomeLayout.vue'
import AboutLayout from './components/layout/AboutLayout.vue'
import DocMeta from './components/doc/DocMeta.vue'
import DocCopyright from './components/doc/DocCopyright.vue'
import DocSlot from './components/doc/DocSlot.vue'
import PostList from './components/post/PostList.vue'
import ReadingProgress from './components/ui/ReadingProgress.vue'
import BackToTop from './components/ui/BackToTop.vue'
import ImageZoom from './components/widget/ImageZoom.vue'
import ResumeSwiper from './components/layout/ResumeSwiper.vue'
import RevealResume from './components/resume/RevealResume.vue'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
    showSpinner: false,
    minimum: 0.1,        // 起始进度
    easing: 'ease',      // 动画缓动
    speed: 800,          // 动画时间 (ms)
    trickle: true,       // 自动递增
    trickleSpeed: 300,   // 递增间隔 (ms)
})

export default {
    extends: DefaultTheme,
    enhanceApp({ app, router }) {
        app.component('HomeLayout', HomeLayout)
        app.component('AboutLayout', AboutLayout)
        app.component('DocMeta', DocMeta)
        app.component('DocCopyright', DocCopyright)
        app.component('PostList', PostList)
        app.component('ResumeSwiper', ResumeSwiper)
        app.component('RevealResume', RevealResume)

        // 路由进度条
        if (typeof window !== 'undefined') {
            router.onBeforeRouteChange = () => NProgress.start()
            router.onAfterRouteChange = () => NProgress.done()
        }
    },
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'layout-top': () => h(ReadingProgress),
            'layout-bottom': () => h('div', [
                h(BackToTop),
                h(ImageZoom),
            ]),
            'doc-before': () => h(DocMeta),           // 文章顶部：发布日期、阅读时间、标签
            'doc-after': () => h(DocSlot),            // 文章底部：版权、评论
        })
    }
}
