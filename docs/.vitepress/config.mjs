import { defineConfig } from 'vitepress'
import viteImagemin from 'vite-plugin-imagemin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [
      viteImagemin({
        gifsicle: { optimizationLevel: 7 },
        pngquant: { quality: [0.8, 0.9] },
        mozjpeg: { quality: 80 },
        svgo: true,
      })
    ]
  },
  head: [
    // ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-JFB80PQ3PC' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-JFB80PQ3PC');`
    ]
  ],
  markdown: {
    image: {
      lazyLoading: true   // 开启图片懒加载
    }
  },
  base: '/',   // 必须和 GitHub 仓库名一致
  title: "ccc",
  description: "blog",
  themeConfig: {
    // logo: '/IMG_0906.JPG',
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
      text: 'lastUpdated',
      formatOptions: {
        dateStyle: 'full'
      }
    },
  }
})
