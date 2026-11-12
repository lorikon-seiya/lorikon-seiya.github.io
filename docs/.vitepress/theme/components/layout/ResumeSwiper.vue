<!-- .vitepress/theme/components/RevealResume.vue -->
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
            <span><kbd>SPACE</kbd> または <kbd>方向キー →</kbd> で進む</span>
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
                <!-- <li>現場での業務指示や報告も問題なく行えます</li> -->
              </ul>
            </div>
            <div class="skill-card fragment fade-up">
              <h3>🚗 運転免許</h3>
              <ul class="clean-list">
                <li>普通自動車第一種運転免許（MT可）</li>
                <!-- <li><strong>マニュアル（MT）運転可能</strong></li> -->
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
import { ref, onMounted, onUnmounted } from 'vue'

// 1. 核心基础样式
import 'reveal.js/reveal.css'
// 2. 主题样式
import 'reveal.js/theme/black.css'
// 3. 代码高亮主题
import 'reveal.js/plugin/highlight/monokai.css'

const revealRef = ref(null)
let deck = null

onMounted(async () => {
  const { default: Reveal } = await import('reveal.js')
  const { default: RevealHighlight } = await import('reveal.js/plugin/highlight')

  deck = new Reveal(revealRef.value, {
    embedded: false,
    controls: true,
    progress: true,
    center: true,
    hash: true,
    transition: 'convex',
    plugins: [RevealHighlight],
  })

  await deck.initialize()
})

onUnmounted(() => {
  if (deck) {
    deck.destroy()
    deck = null
  }
})

const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else if (document.exitFullscreen) {
    document.exitFullscreen()
  }
}
</script>

<style scoped>
.resume-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-color: #111;
  overflow: hidden;
}

.reveal {
  width: 100%;
  height: 100%;
}

/* 顶部操作按钮 */
.resume-actions {
  position: absolute;
  top: 18px;
  right: 20px;
  z-index: 10000;
  display: flex;
  gap: 10px;
}

.action-btn {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  text-decoration: none;
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition: all 0.2s ease;
}

.action-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-1px);
}

/* 视觉排版 */
.gradient-text {
  background: linear-gradient(135deg, #60a5fa, #a855f7, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
}

.subtitle {
  color: #94a3b8;
  font-size: 0.85em;
  font-weight: 400;
}

.desc {
  color: #cbd5e1;
  font-size: 0.65em;
  margin-top: 8px;
}

.footprint {
  color: #64748b;
  font-size: 0.55em;
  margin-top: 4px;
}

.tip-box {
  margin-top: 45px;
  font-size: 0.5em;
  color: #64748b;
}

kbd {
  background: #334155;
  color: #fff;
  padding: 3px 6px;
  border-radius: 4px;
}

.highlight-text {
  color: #38bdf8;
  font-size: 0.65em;
}

/* 卡片栅格 */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  max-width: 900px;
  margin: 0 auto;
}

.skill-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 16px 20px;
  border-radius: 12px;
  text-align: left;
}

.skill-card h3 {
  font-size: 0.75em;
  margin-bottom: 8px;
  color: #38bdf8;
}

.skill-card p {
  font-size: 0.55em;
  line-height: 1.6;
  color: #94a3b8;
  margin: 0;
}

.clean-list {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.55em;
  line-height: 1.8;
  color: #cbd5e1;
}

.clean-list li strong {
  color: #38bdf8;
}

.down-indicator {
  margin-top: 24px;
  font-size: 0.5em;
  color: #38bdf8;
  animation: bounce 2s infinite;
}

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-6px);
  }

  60% {
    transform: translateY(-3px);
  }
}

/* 业务流程图 */
.architecture-diagram {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.layer {
  background: #1e293b;
  border: 1px solid #3b82f6;
  padding: 12px 28px;
  border-radius: 8px;
  font-size: 0.6em;
  color: #e2e8f0;
  width: 60%;
  text-align: center;
}

.layer-arrow {
  color: #3b82f6;
  font-size: 0.6em;
}

/* 核心指标统计 */
.metrics {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 20px;
}

.metric-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.metric-item .num {
  font-size: 1.8em;
  font-weight: bold;
  color: #10b981;
}

.metric-item .label {
  font-size: 0.5em;
  color: #94a3b8;
  margin-top: 4px;
}

/* 时间线列表 */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
  align-items: center;
}

.timeline-item {
  display: flex;
  gap: 20px;
  background: rgba(255, 255, 255, 0.04);
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 0.55em;
  width: 75%;
  justify-content: space-between;
  text-align: left;
}

.timeline-item .time {
  color: #38bdf8;
  font-weight: bold;
}

.timeline-item .company {
  color: #fff;
}

.timeline-item .role {
  color: #94a3b8;
}

/* 尾页链接 */
.email-link {
  color: #38bdf8 !important;
  text-decoration: underline;
  font-size: 0.8em;
}

.home-btn {
  display: inline-block;
  background: #2563eb;
  color: #fff !important;
  padding: 10px 24px;
  border-radius: 25px;
  font-size: 0.55em;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.2s;
}

.home-btn:hover {
  background: #1d4ed8;
}
</style>