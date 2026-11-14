<template>
  <div class="resume-wrapper">
    <!-- 悬浮操作栏：返回主站 & 全屏切换 -->
    <div class="resume-actions">
      <a href="/" class="action-btn" title="ホームに戻る">🏠 ホーム</a>
      <button @click="toggleFullscreen" class="action-btn" title="全画面表示">⛶ 全画面</button>
    </div>

    <!-- Reveal.js 挂载容器 -->
    <div class="reveal" ref="revealRef">
      <div class="slides">

        <!-- Slide 1: 表紙 (Cover) -->
        <section data-background-gradient="linear-gradient(to bottom, #1a1c24, #101114)">
          <h1 class="gradient-text">SON. I</h1>
          <h3 class="subtitle">外人整備士 /Foreigner Service Engineer</h3>
          <p class="desc">在日5年以上（From China）| 静岡県浜松市在住</p>
          <p class="footprint">岐阜（坂祝）➔ 北海道（恵庭）➔ 愛知（新城）➔ 静岡（浜松）</p>
          <div class="tip-box">
            <span><kbd>SPACE</kbd> · <kbd>→</kbd> · <kbd>スワイプ / ドラッグ</kbd> で進む</span>
          </div>
        </section>

        <!-- Slide 2: 基本プロフィール (Profile) -->
        <section>
          <h2>🍊 Profile</h2>
          <div class="metrics">
            <div class="metric-item fragment fade-up">
              <span class="num">33歳</span>
              <span class="label">男性（平成5年生まれ）</span>
            </div>
            <div class="metric-item fragment fade-up">
              <span class="num">5年以上</span>
              <span class="label">日本での生活</span>
            </div>
            <div class="metric-item fragment fade-up">
              <span class="num">静岡県</span>
              <span class="label">現在住んでいる場所</span>
            </div>
          </div>

          <div class="skills-grid" style="margin-top: 25px;">
            <div class="skill-card fragment fade-up">
              <h3>🌱 性格</h3>
              <p>おとなしい性格です。人畜無害</p>
            </div>
            <div class="skill-card fragment fade-up">
              <h3>🍊 趣味</h3>
              <p>料理する。家近くの知らないところを探検する。</p>
            </div>
            <div class="skill-card fragment fade-up">
              <h3>🎯 希望職種</h3>
              <p>自動車整備スタッフ（点検・車検・一般整備業務）</p>
            </div>
          </div>
        </section>

        <!-- Slide 3: 保有資格 (Certifications - 核心武器) -->
        <section>
          <h2>📜 保有資格</h2>
          <p class="highlight-text">来日後に取得した国家資格および技能認定</p>

          <div class="skills-grid" style="margin-top: 30px;">
            <div class="skill-card fragment fade-up">
              <h3>🔧 国家整備士資格</h3>
              <ul class="clean-list">
                <li>二級ガソリン自動車整備士</li>
                <li>二級ジーゼル自動車整備士</li>
              </ul>
            </div>
            <div class="skill-card fragment fade-up">
              <h3>🗣 語学力</h3>
              <ul class="clean-list">
                <li>日本語検定１級（JLPT）</li>
              </ul>
            </div>
            <div class="skill-card fragment fade-up">
              <h3>🚗 運転免許</h3>
              <ul class="clean-list">
                <li>普通自動車第一種運転免許（MT可）</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Slide 4: 職務経歴 & 業務内容 (上下二维展开) -->
        <section>
          <!-- 4.0 职历概览 -->
          <section>
            <h2>⏳ 主な職務経歴</h2>
            <div class="timeline">
              <div class="timeline-item fragment">
                <span class="time">2025.4 - 現在</span>
                <span class="company">静岡ダイハツ販売（初生店）</span>
                <span class="role">サービススタッフ</span>
              </div>
              <div class="timeline-item fragment">
                <span class="time">2023.4 - 2025.3</span>
                <span class="company">トヨタカローラ愛知（新城店）</span>
                <span class="role">サービススタッフ</span>
              </div>
              <div class="timeline-item fragment">
                <span class="time">2022.4 - 2023.4</span>
                <span class="company">株式会社レソリューション</span>
                <span class="role">派遣先：ホンダカーズ札幌中央（恵庭店）</span>
              </div>
            </div>
            <div class="down-indicator">
              <span>▼ 方向キー「下 ⬇」で具体的な担当業務を見る ▼</span>
            </div>
          </section>

          <!-- 4.1 纵向深入：具体业务 -->
          <section>
            <h3>🛠 普段の担当業務</h3>
            <p>ディーラー店舗にて、主に以下の実務を担当してきました：</p>
            <div class="architecture-diagram fragment">
              <div class="layer">法定12ヶ月定期点検 / 車検整備</div>
              <div class="layer-arrow">↓</div>
              <div class="layer">消耗品交換（エンジンオイル、バッテリー、ブレーキパッド等）</div>
              <div class="layer-arrow">↓</div>
              <div class="layer">一般整備、タイヤ交換、納車前点検および洗車業務</div>
            </div>
          </section>
        </section>

        <!-- Slide 5: 学歴・来日の歩み (Education & Story) -->
        <section>
          <h2>🎓 学歴と来日の歩み</h2>
          <div class="timeline" style="margin-top: 20px;">
            <div class="timeline-item fragment">
              <span class="time">2019.10 - 2020.3</span>
              <span class="company">中日本自動車短期大学（岐阜県坂祝町）</span>
              <span class="role">日本語別科（日本語勉強）</span>
            </div>
            <div class="timeline-item fragment">
              <span class="time">2020.4 - 2022.3</span>
              <span class="company">中日本自動車短期大学</span>
              <span class="role">自動車工学科（専門課程修了）</span>
            </div>
          </div>

          <div class="skill-card fragment fade-up" style="max-width: 720px; margin: 24px auto 0;">
            <p style="font-size: 0.65em; line-height: 1.8; color: #cbd5e1; margin: 0;">
              留学生として来日後、学業とアルバイトを両立しながら約2年半を過ごしました。<br>
              自動車構造の基礎と専門用語を徹底して学び、国家二級整備士資格を取得。この経験が現在の実務への適応力と責任感の礎となっています。
            </p>
          </div>
        </section>

        <!-- Slide 6: 結び・コンタクト (Contact) -->
        <section>
          <h2>🤝 お問い合わせ</h2>
          <p class="subtitle" style="margin-bottom: 20px;">最後までご覧いただき、Thank You Very Much。</p>

          <div class="contact-links">
            <p>📧 Email: <a href="mailto:luoli6860@gmail.com" class="email-link">luoli6860@gmail.com</a></p>
          </div>

          <div class="fragment" style="margin-top: 40px;">
            <a href="/" class="home-btn">🏠 Back Home</a>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script setup>
// Reveal.js 样式导入
import 'reveal.js/reveal.css'
import 'reveal.js/theme/black.css'
import 'reveal.js/plugin/highlight/monokai.css'

import { useReveal } from '../../composables/useReveal.js'

const { revealRef, toggleFullscreen } = useReveal()
</script>

<style scoped src="./RevealResume.css"></style>
