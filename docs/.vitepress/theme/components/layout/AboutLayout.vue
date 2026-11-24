<template>
  <div class="about-container">
    <!-- 统一页面头部眉标 -->
    <div class="about-header-top">
      <span class="eyebrow">Profile & Journey</span>
      <h1 class="page-title">About Me</h1>
    </div>

    <!-- 个人名片信息区 -->
    <div class="profile-card">
      <img class="avatar" src="/IMG_0939.JPG" alt="Avatar" />
      <div class="meta">
        <h2 class="name">CCC</h2>
        <p class="role">外人整備士 · Service Engineer / App Developer</p>
        <div class="location-pill">
          <span class="dot"></span>
          <span>静岡県浜松市 · Daihatsu Owner</span>
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <!-- 极简正文叙述 -->
    <div class="about-body">
      <p>
        サウナ、温泉、自然。ダイハツ車に乗っています。
      </p>
      <p>
        日本一周を制覇する（千葉県以外）男です。道の駅で車中泊しながら、知らない土地を冒険するのが大好きです。
      </p>
      <p>
        現在は自動車整備士として働きながら、SwiftUI による iOS アプリ開発を勉強中。
      </p>

      <!-- 技能徽章卡片群 -->
      <h3 class="section-title">🛠 Skills & Technologies</h3>
      <div class="skills-section">
        <div class="skill-category">
          <span class="category-name">Development</span>
          <div class="pill-group">
            <span class="tech-pill">SwiftUI</span>
            <span class="tech-pill">PHP</span>
            <span class="tech-pill">Laravel</span>
            <span class="tech-pill">Vue.js</span>
          </div>
        </div>

        <div class="skill-category">
          <span class="category-name">Mechanic</span>
          <div class="pill-group">
            <span class="tech-pill highlight">国家二級ガソリン整備士</span>
            <span class="tech-pill highlight">国家二級ジーゼル整備士</span>
            <span class="tech-pill">12ヶ月点検</span>
            <span class="tech-pill">車検整備</span>
            <span class="tech-pill">オイル交換</span>
          </div>
        </div>
      </div>

      <!-- 简历专属入口卡片 -->
      <h3 class="section-title">📄 Interactive Resume</h3>
      <a href="/resume" class="resume-banner">
        <div class="resume-info">
          <span class="banner-title">整備士レジュメ（スライド形式）</span>
          <span class="banner-desc">来日後の経歴、保有資格、担当業務内容を全画面スライドでご覧いただけます。</span>
        </div>
        <span class="banner-btn">閲覧する →</span>
      </a>

      <!-- 联系入口 -->
      <h3 class="section-title">📬 Get in Touch</h3>
      <div class="contact-links-box">
        <a href="mailto:luoli6860@gmail.com" class="contact-item">
          <span class="item-icon">📧</span>
          <span class="item-text">luoli6860@gmail.com</span>
        </a>
        <a href="https://www.instagram.com/caicaicaizi2" target="_blank" rel="noopener noreferrer" class="contact-item">
          <span class="item-icon">📷</span>
          <span class="item-text">Instagram @caicaicaizi2</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped src="./AboutLayout.css"></style>
