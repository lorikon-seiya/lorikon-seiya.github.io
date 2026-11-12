<!-- .vitepress/theme/components/AboutMe.vue -->
<template>
  <div class="about-simple">
    <!-- 头部头像与基本信息 -->
    <div class="header">
      <img class="avatar" src="/IMG_0939.JPG" alt="Avatar" />
      <div class="meta">
        <h1 class="name">CCC</h1>
        <p class="sub">外人整備士</p>
      </div>
    </div>

    <hr class="divider" />

    <!-- 极简正文 -->
    <div class="body">
      <p>
        サウナ、温泉、自然。ダイハツ車乗っています。
      </p>
      <p>
        日本一周を制覇する（千葉県以外）男です。道の駅で車中泊するのが大好きです。
      </p>
      <p>
        SwiftUIでアプリを開発したいです。現在勉強中。
      </p>

      <h3>🛠 Skill</h3>
      <p class="tech-tags">
        <code>Php</code>
        <code>Laravel</code>
        <code>SwiftUI</code>
        <code>オイル交換</code>
        <code>洗車</code>
      </p>

      <h3>📬 Find Me</h3>
      <ul class="contact-list">
        <!-- <li>GitHub：<a href="https://github.com" target="_blank">@yourname</a></li>
        <li>邮箱：<a href="mailto:alex@example.com">alex@example.com</a></li> -->
        <li>Resume<a href="/resume" class="resume-link"> 👉 Click to Read My Resume</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.about-simple {
  max-width: 680px;
  margin: 30px auto;
  padding: 0 16px;
}

.header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
}

.avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 1px solid var(--vp-c-divider);
}

.name {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  border: none;
  color: var(--vp-c-text-1);
}

.sub {
  margin: 4px 0 0;
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
}

.divider {
  border: none;
  border-top: 1px solid var(--vp-c-divider);
  margin: 20px 0 28px;
}

.body {
  line-height: 1.8;
  color: var(--vp-c-text-1);
}

.body h3 {
  font-size: 1.1rem;
  margin: 24px 0 12px;
  border: none;
}

.tech-tags code {
  margin-right: 8px;
  padding: 3px 6px;
  font-size: 0.85em;
  background-color: var(--vp-c-bg-mute);
  border-radius: 4px;
}

.contact-list {
  padding-left: 20px;
  line-height: 2;
}

.resume-link {
  font-weight: 600;
  color: var(--vp-c-brand-1);
}
</style>