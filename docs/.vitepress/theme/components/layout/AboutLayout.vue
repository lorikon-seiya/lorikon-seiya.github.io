<script setup>
const links = [
    { text: 'GitHub', url: 'https://github.com/你的用户名' },
    { text: 'X', url: 'https://twitter.com/你的用户名' },
]

const skills = ['エッチ', 'Laravel', '洗車', '掃除機', 'オイル交換']
</script>

<template>
    <div class="about">

        <!-- Hero -->
        <div class="hero">
            <div class="hero-left">
                <img src="/IMG_0939.JPG" alt="avatar" class="avatar" />
                <div class="info">
                    <h1>CCC</h1>
                    <p>日本で働いているチャイニーズ</p>
                    <div class="links">

                        <a v-for="link in links" :key="link.text" :href="link.url" class="link" target="_blank">
                            {{ link.text }} ↗
                        </a>
                    </div>
                </div>
            </div>

            <div class="hero-right">
                <div class="img-wrap">
                    <img src="/IMG_6821.JPG" alt="" class="side-img" />
                    <div class="fade-bottom" />
                    <div class="fade-left" />
                </div>
            </div>
        </div>

        <!-- 内容 -->
        <div class="content">

            <div class="section">
                <h2>About</h2>
                <p>
                    My name is Chin.
                    Chin to moushimasu.
                    よろしくお願いします。
                </p>
            </div>

            <div class="section">
                <h2>Skill</h2>
                <div class="chips">
                    <span v-for="skill in skills" :key="skill" class="chip">
                        {{ skill }}
                    </span>
                </div>
            </div>

            <div class="section">
                <h2>Now</h2>
                <ul>
                    <li>日本一周</li>
                    <li>世界一周</li>
                    <li>SwiftUI</li>
                </ul>
            </div>

        </div>
    </div>
</template>

<style scoped>
.about {
    padding-bottom: 120px;
}

/* Hero */
.hero {
    display: flex;
    align-items: flex-start;
    gap: 48px;
    max-width: 900px;
    margin: 0 auto;
    padding: 80px 24px 60px;
}

.hero-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.avatar {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
    display: block;
    margin: 0;
}

.info h1 {
    font-size: 24px;
    font-weight: 600;
    margin: 0 0 6px;
    letter-spacing: -0.02em;
}

.info p {
    font-size: 14px;
    color: var(--vp-c-text-2);
    margin: 0 0 20px;
}

.links {
    display: flex;
    gap: 20px;
}

.link {
    font-size: 13px;
    color: var(--vp-c-text-2);
    text-decoration: none;
    transition: color 0.15s;
}

.link:hover {
    color: var(--vp-c-text-1);
}

/* 右侧图片 */
.hero-right {
    flex-shrink: 0;
    width: 240px;
}

.img-wrap {
    position: relative;
    width: 100%;
    height: 340px;
    overflow: hidden;
    border-radius: 2px;
}

.side-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    margin: 0;
    border-radius: 0;
    filter: saturate(0.85) brightness(0.95);
    transition: filter 0.3s;
}

.img-wrap:hover .side-img {
    filter: saturate(1) brightness(1);
}

.fade-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to bottom, transparent, var(--vp-c-bg));
    pointer-events: none;
}

.fade-left {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 60px;
    background: linear-gradient(to right, var(--vp-c-bg), transparent);
    pointer-events: none;
}

/* 内容区 */
.content {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 24px;
}

.section {
    margin-bottom: 56px;
}

.section h2 {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--vp-c-text-3);
    margin: 0 0 20px;
    padding: 0;
    border: none;
}

.section p {
    font-size: 15px;
    line-height: 1.8;
    color: var(--vp-c-text-1);
    margin: 0;
}

.section ul {
    padding: 0;
    list-style: none;
    margin: 0;
}

.section ul li {
    font-size: 15px;
    line-height: 2;
    color: var(--vp-c-text-1);
}

.section ul li::before {
    content: '—  ';
    color: var(--vp-c-text-3);
}

/* Chips */
.chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.chip {
    font-size: 12px;
    color: var(--vp-c-text-2);
    padding: 3px 10px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 2px;
    letter-spacing: 0.02em;
}

/* 手机端 */
@media (max-width: 768px) {
    .hero {
        flex-direction: column-reverse;
        padding: 60px 24px 40px;
        gap: 32px;
    }

    .hero-right {
        width: 100%;
    }

    .img-wrap {
        height: 220px;
    }
}
</style>