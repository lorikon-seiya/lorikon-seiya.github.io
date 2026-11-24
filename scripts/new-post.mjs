import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const postsDir = path.resolve(__dirname, '../docs/posts')

// 获取本地当前日期 (YYYY-MM-DD)
const now = new Date()
const year = now.getFullYear()
const month = String(now.getMonth() + 1).padStart(2, '0')
const day = String(now.getDate()).padStart(2, '0')
const today = `${year}-${month}-${day}`

// 解析命令行参数
// 示例 1: pnpm new my-post "文章标题"
// 示例 2: pnpm new my-post
// 示例 3: pnpm new "文章标题"
const args = process.argv.slice(2)
let filename = ''
let title = ''

if (args.length === 0) {
    filename = `${today}-new-post`
    title = '新文章标题'
} else if (args.length === 1) {
    const input = args[0]
    if (/^[a-zA-Z0-9_-]+$/.test(input)) {
        filename = input
        title = input
    } else {
        title = input
        filename = `${today}-${Math.random().toString(36).substring(2, 7)}`
    }
} else {
    filename = args[0]
    title = args.slice(1).join(' ')
}

if (!filename.endsWith('.md')) {
    filename += '.md'
}

const filePath = path.join(postsDir, filename)

if (fs.existsSync(filePath)) {
    console.error(`\n❌ 错误：文件已存在 -> docs/posts/${filename}\n请更换文件名后重试！\n`)
    process.exit(1)
}

const template = `---
title: ${title}
date: ${today}
outline: [2, 3]
lastUpdated: true
sidebar: false
---

# ${title}

这里开始写文章的正文内容……

## 小标题一

一段文字描述。插入旅行照片直接用标准 Markdown 语法：

`

fs.writeFileSync(filePath, template, 'utf-8')

console.log(`\n🎉 新文章创建成功！`)
console.log(`📁 路径: docs/posts/${filename}`)
console.log(`📝 标题: ${title}`)
console.log(`📅 日期: ${today}`)
console.log(`🌐 访问地址: /posts/${filename.replace('.md', '')}\n`)
