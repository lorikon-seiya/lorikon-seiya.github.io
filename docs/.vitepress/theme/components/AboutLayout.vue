<script setup>
const links = [
    { icon: '🐙', text: 'GitHub', url: 'https://github.com/你的用户名' },
    { icon: '🐦', text: 'X', url: 'https://twitter.com/你的用户名' },
]

const skills = ['エッチ', 'Laravel', '洗車', '掃除機', 'オイル交換']
</script>

<template>
    <div class="about">

        <!-- Hero：左右布局 -->
        <div class="hero">

            <!-- 左侧：头像 + 信息 -->
            <div class="hero-left">
                <div class="avatar-wrap">
                    <img src="/IMG_0939.JPG" alt="头像" class="avatar" />
                </div>
                <h1>CCC</h1>
                <p class="tagline">日本で働いているチャイニーズ</p>
                <div class="links">

                    <a v-for="link in links" :key="link.text" :href="link.url" class="link" target="_blank">
                        {{ link.icon }} {{ link.text }}
                    </a>
                </div>
            </div>

            <!-- 右侧：竖图 -->
            <div class="hero-right">
                <img src="/IMG_6821.JPG" alt="photo" class="side-img" />
            </div>

        </div>

        <!-- 内容区 -->
        <div class="content">

            <div class="section">
                <h2><span class="section-icon">👤</span> About Me</h2>
                <p>
                    My name is Chin.
                    Chin to moushimasu.
                    よろしくお願いします。
                </p>
            </div>

            <div class="section">
                <h2><span class="section-icon">🛠️</span> Skill</h2>
                <div class="tags">
                    <span v-for="skill in skills" :key="skill" class="tag">
                        {{ skill }}
                    </span>
                </div>
            </div>

            <div class="section">
                <h2><span class="section-icon">🚀</span> Now Doing ...</h2>
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
    padding-bottom: 80px;
}

/* Hero 左右布局 */
.hero {
    display: flex;
    align-items: center;
    gap: 48px;
    max-width: 900px;
    margin: 0 auto;
    padding: 60px 24px 48px;
}

/* 左侧 */
.hero-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
}

.avatar-wrap {
    width: 80px;
    /* height: 80px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 20px;
    border: 3px solid var(--vp-c-divider); */
}

.avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.hero-left h1 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 8px;
    letter-spacing: -0.5px;
}

.tagline {
    font-size: 15px;
    color: var(--vp-c-text-2);
    margin-bottom: 24px;
    line-height: 1.6;
}

.links {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 13px;
    text-decoration: none;
    color: var(--vp-c-brand-1);
    border: 1px solid var(--vp-c-brand-1);
    transition: all 0.2s;
}

.link:hover {
    background: var(--vp-c-brand-1);
    color: #fff;
}

/* 右侧：竖图 */
.hero-right {
    flex-shrink: 0;
    width: 260px;
}

.side-img {
    width: 100%;
    height: 360px;
    object-fit: cover;
    object-position: center;
    border-radius: 16px;
    display: block;
    margin: 0;
}

/* 内容区 */
.content {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 24px;
}

/* Section */
.section {
    margin-bottom: 48px;
}

.section h2 {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--vp-c-divider);
}

.section-icon {
    font-size: 18px;
}

.section p {
    font-size: 15px;
    line-height: 1.9;
    color: var(--vp-c-text-1);
}

.section ul {
    padding-left: 20px;
    line-height: 2.2;
    color: var(--vp-c-text-1);
    font-size: 15px;
}

.section ul li::marker {
    color: var(--vp-c-brand-1);
}

/* Tags */
.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.tag {
    padding: 4px 16px;
    border-radius: 20px;
    font-size: 13px;
    background: var(--vp-c-bg-soft);
    color: var(--vp-c-brand-1);
    border: 1px solid var(--vp-c-brand-1);
    transition: all 0.2s;
}

.tag:hover {
    background: var(--vp-c-brand-1);
    color: #fff;
}

/* 手机端：改回上下布局 */
@media (max-width: 768px) {
    .hero {
        flex-direction: column-reverse;
        align-items: center;
        text-align: center;
        padding: 40px 24px 32px;
    }

    .hero-left {
        align-items: center;
    }

    .hero-right {
        width: 100%;
    }

    .side-img {
        height: 240px;
    }

    .links {
        justify-content: center;
    }
}
</style>