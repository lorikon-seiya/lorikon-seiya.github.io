<script setup>
import { useData } from 'vitepress'
import { formatDate } from '../../utils/date.js'

const { frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.title" class="doc-copyright">
    <div class="copyright-header">
      <span class="copyright-icon">©</span>
      <span class="copyright-title">著作権および転載について</span>
    </div>
    
    <div class="copyright-meta">
      <div class="meta-item">
        <span class="meta-label">記事：</span>
        <span class="meta-value">{{ frontmatter.title }}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">著者：</span>
        <span class="meta-value">CCC</span>
      </div>
      <div v-if="frontmatter.date" class="meta-item">
        <span class="meta-label">公開：</span>
        <span class="meta-value">{{ formatDate(frontmatter.date) }}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">許諾：</span>
        <span class="meta-value">
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ja"
            target="_blank"
            rel="noopener noreferrer"
            class="license-link"
          >
            CC BY-NC-SA 4.0（表示 - 非営利 - 継承）
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.doc-copyright {
  margin-top: 48px;
  padding: 20px 24px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-left: 4px solid var(--vp-c-brand-1);
  border-radius: 8px;
  box-sizing: border-box;
}

.copyright-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 12px;
}

.copyright-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.1);
  color: var(--vp-c-brand-1);
  font-size: 11px;
}

.copyright-meta {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 13px;
  line-height: 1.6;
}

.meta-item {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.meta-label {
  color: var(--vp-c-text-3);
  font-weight: 500;
}

.meta-value {
  color: var(--vp-c-text-2);
}

.license-link {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  border-bottom: 1px dashed var(--vp-c-brand-1);
  transition: opacity 0.2s;
}

.license-link:hover {
  opacity: 0.8;
}
</style>
