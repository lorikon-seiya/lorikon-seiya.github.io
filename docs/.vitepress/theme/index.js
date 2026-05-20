import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './style.css'
import DocMeta from './components/DocMeta.vue'
import DocCopyright from './components/DocCopyright.vue'
import HomeLayout from './components/HomeLayout.vue'
import AboutLayout from './components/AboutLayout.vue'
import PostList from './components/PostList.vue'


function DocCopyrightSlot() {
    const { page } = useData()
    // about 页面和 posts 列表页不显示
    if (page.value.relativePath === 'about.md') return null
    if (page.value.relativePath === 'posts/index.md') return null
    return h(DocCopyright)
}

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('HomeLayout', HomeLayout)
        app.component('AboutLayout', AboutLayout)   // 加这行
        app.component('DocMeta', DocMeta)         // 注册全局组件
        app.component('DocCopyright', DocCopyright)
        app.component('PostList', PostList)

    },
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'doc-before': () => h(DocMeta),           // 文章顶部：发布日期
            'doc-after': () => h(DocCopyrightSlot),
        })
    }
}