// import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './style.css'

import HomeLayout from './components/layout/HomeLayout.vue'
import AboutLayout from './components/layout/AboutLayout.vue'
import DocMeta from './components/doc/DocMeta.vue'
import DocCopyright from './components/doc/DocCopyright.vue'
import DocSlot from './components/doc/DocSlot.vue'
import PostList from './components/post/PostList.vue'
import Comment from './components/ui/Comment.vue'
import ReadingProgress from './components/ui/ReadingProgress.vue'
import BackToTop from './components/ui/BackToTop.vue'
import ClickEffect from './components/ui/ClickEffect.vue'
import ImageZoom from './components/widget/ImageZoom.vue'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
    showSpinner: false,
    minimum: 0.1,        // 起始进度，0.1 = 10%
    easing: 'ease',      // 动画缓动
    speed: 800,          // 每次增量动画时间，单位 ms，越大越慢
    trickle: true,       // 开启自动递增
    trickleSpeed: 300,   // 自动递增间隔，单位 ms，越大越慢
})

// function DocCopyrightSlot() {
//     const { page } = useData()
//     // about 页面和 posts 列表页不显示
//     if (page.value.relativePath === 'about.md') return null
//     if (page.value.relativePath === 'posts/index.md') return null
//     return h(DocCopyright)
// }

// function DocSlot() {
//     const { page } = useData()
//     const isPost = page.value.relativePath.startsWith('posts/') &&
//         page.value.relativePath !== 'posts/index.md'

//     if (!isPost) return null

//     return h('div', [
//         h(DocCopyright),
//         h(Comment),
//     ])
// }


export default {
    extends: DefaultTheme,
    enhanceApp({ app, router }) {
        app.component('HomeLayout', HomeLayout)
        app.component('AboutLayout', AboutLayout)
        app.component('DocMeta', DocMeta)
        app.component('DocCopyright', DocCopyright)
        app.component('PostList', PostList)

        // router：路由钩子
        if (typeof window !== 'undefined') {
            router.onBeforeRouteChange = () => NProgress.start()
            router.onAfterRouteChange = () => NProgress.done()
        }
    },
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'layout-top': () => h(ReadingProgress),
            // 'layout-bottom': () => h(BackToTop),
            'layout-bottom': () => h('div', [
                h(BackToTop),
                h(ImageZoom),
                // h(ImageZoom),
                // h(CopyCode),
                // h(ClickEffect),
            ]),
            'doc-before': () => h(DocMeta),           // 文章顶部：发布日期
            // 'doc-after': () => h(DocCopyrightSlot),
            'doc-after': () => h(DocSlot),
        })
    }
}