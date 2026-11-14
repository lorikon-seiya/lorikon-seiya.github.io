import path from 'path'
import { writeFileSync } from 'fs'
import { Feed } from 'feed'
import { createContentLoader } from 'vitepress'

const hostname = 'https://lorikon-seiya.github.io'

export async function createRssFile(config) {
    const feed = new Feed({
        title: 'ccc',
        description: 'ccc blog - 日本旅行、写真、生活、技術',
        id: hostname,
        link: hostname,
        language: 'ja',
        image: `${hostname}/IMG_0906.JPG`,
        favicon: `${hostname}/favicon.svg`,
        copyright: 'Copyright © 2026 ccc',
    })

    const posts = await createContentLoader('posts/*.md', {
        excerpt: true,
        render: true,
    }).load()

    posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))

    for (const post of posts) {
        if (post.url.endsWith('/posts/')) continue
        const cleanUrl = post.url.replace(/\.html$/, '')
        feed.addItem({
            title: post.frontmatter.title || 'Untitled',
            id: `${hostname}${cleanUrl}`,
            link: `${hostname}${cleanUrl}`,
            description: post.frontmatter.description || post.excerpt || '',
            content: post.html,
            date: new Date(post.frontmatter.date || Date.now()),
        })
    }

    writeFileSync(path.join(config.outDir, 'feed.rss'), feed.rss2())
    writeFileSync(path.join(config.outDir, 'atom.xml'), feed.atom1())
}
