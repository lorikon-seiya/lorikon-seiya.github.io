import { defineConfig } from 'vitepress'
import { readdirSync, readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import matter from 'gray-matter'
import { createRssFile } from './rss.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))

function getSidebar() {
  const postsDir = resolve(__dirname, '../posts')

  const files = readdirSync(postsDir)
    .filter(f => f.endsWith('.md') && f !== 'index.md')

  const posts = files
    .map(f => {
      const content = readFileSync(resolve(postsDir, f), 'utf-8')
      const { data } = matter(content)
      return {
        text: data.title || f.replace('.md', ''),
        link: `/posts/${f.replace('.md', '')}`,
        date: data.date,
      }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  return {
    '/posts/': [
      {
        text: 'Posts',
        items: posts
      }
    ]
  }
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  sitemap: {
    hostname: 'https://lorikon-seiya.github.io'
  },
  async buildEnd(config) {
    await createRssFile(config)
  },
  vite: {
    plugins: [
    ]
  },
  markdown: {
    image: {
      lazyLoading: true   // 开启图片懒加载
    },
    config(md) {
      // 把连续的图片包成 gallery 容器
      md.core.ruler.push('gallery', state => {
        const tokens = state.tokens
        for (let i = 0; i < tokens.length; i++) {
          if (
            tokens[i].type === 'inline' &&
            tokens[i].children?.every(t =>
              t.type === 'image' ||
              t.type === 'softbreak' ||
              t.content === ''
            )
          ) {
            const images = tokens[i].children.filter(t => t.type === 'image')
            if (images.length >= 2) {
              tokens[i - 1].attrSet('class', 'photo-gallery')
            }
          }
        }
      })
    }
  },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'alternate', type: 'application/rss+xml', title: 'RSS Feed', href: '/feed.rss' }],
    ['meta', { name: 'keywords', content: 'ccc, blog, 旅, 写真, 整備士, 北海道, 静岡, 日本一周' }],
    ['meta', { name: 'author', content: 'ccc' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'ja_JP' }],
    ['meta', { property: 'og:site_name', content: 'ccc' }],
    ['meta', { property: 'og:image', content: 'https://lorikon-seiya.github.io/IMG_6041.JPG' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],
  base: '/',   // 必须和 GitHub 仓库名一致
  title: "ccc",
  description: "blog",
  themeConfig: {
    // logo: '/IMG_0906.JPG',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts/' },
      { text: 'About', link: '/about' },
      { text: 'RSS', link: '/feed.rss', target: '_blank' },
      // { text: 'Resume', link: '/resume' },
    ],

    sidebar: await getSidebar(),

    socialLinks: [
      { icon: 'instagram', link: 'https://www.instagram.com/' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27zm0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93z"/></svg>'
        },
        link: '/feed.rss',
        ariaLabel: 'RSS Feed'
      }
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
