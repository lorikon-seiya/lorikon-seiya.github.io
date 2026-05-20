import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',   // 必须和 GitHub 仓库名一致
  logo: '/logo.png',
  title: "ccc",
  description: "blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts/' },
      { text: 'About', link: '/about' }
    ],
    outline: false,

    sidebar: {
      '/posts/': [
        {
          text: 'Posts',
          items: [
            { text: 'hello-world', link: '/posts/hello-world' },
            { text: '北海道旅', link: '/posts/hkd-travel' },
            { text: '外国人の言語学習について', link: '/posts/nihonngo-study' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'instagram', link: 'https://www.instagram.com/' }
    ],

    footer: {
      message: 'Use VitePress Build',
      copyright: 'Copyright © 2026 ccc'
    },

    search: {
      provider: 'local'
    },

    docFooter: {
      prev: 'Prev',
      next: 'Next'
    },

    // 大纲标题
    outlineTitle: 'On this page',

    // 大纲显示层级（默认只显示 h2）
    outline: {
      // level: [2, 3],       // 同时显示 h2 和 h3
      label: 'On this page'
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short'
      }
    },
  }
})
