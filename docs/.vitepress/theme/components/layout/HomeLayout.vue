<script setup>
import TypeWriter from '../ui/TypeWriter.vue'
const texts = ['No man is an island', 'Entire of itself', 'Every man is a piece of the continent', 'A part of the main', 'If a clod be washed away by the sea', 'Europe is the less', 'As well as if a promontory were.', 'As well as if a manor of thy friend’s or of thine own were', 'Any man’s death diminishes me', 'Because I am involved in mankind', 'And therefore never send to know for whom the bell tolls', 'It tolls for thee',]

const features = [
    {
        image: '/IMG_2635.jpeg',
        title: '摄影',
        details: '用镜头记录生活中的细节'
    },
    {
        image: '/IMG_2718.jpeg',
        title: '音乐',
        details: '听见不同的声音和故事'
    },
    {
        image: '/IMG_3463.jpeg',
        title: '旅行',
        details: '走过的地方都留下了什么'
    },
    {
        image: '/IMG_6353.jpeg',
        title: '旅行',
        details: '走过的地方都留下了什么'
    },
    {
        image: '/IMG_6321.jpeg',
        title: '旅行',
        details: '走过的地方都留下了什么'
    },
    {
        image: '/IMG_4105.jpeg',
        title: '旅行',
        details: '走过的地方都留下了什么'
    },
    {
        image: '/IMG_6356.jpeg',
        title: '旅行',
        details: '走过的地方都留下了什么'
    },
    {
        image: '/IMG_6876.jpeg',
        title: '旅行',
        details: '走过的地方都留下了什么'
    },
    {
        image: '/IMG_6890.jpeg',
        title: '旅行',
        details: '走过的地方都留下了什么'
    },
]
</script>

<template>
    <div class="home">
        <div class="hero">
            <h3>
                <TypeWriter :texts="texts" :type-speed="120" :pause-time="2000" />
            </h3>
            <p>"No Man Is An Island" by John Donne</p>
            <!-- <a href="/posts/" class="btn">开始阅读</a> -->
        </div>

        <div class="features">
            <a v-for="item in features" class="card">
                <img :src="item.image" />
                <!-- <div class="card-body">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.details }}</p>
                </div> -->
            </a>
        </div>
    </div>
</template>

<style scoped>
.vp-doc img {
    margin: 0;
}

.home {
    max-width: 1100px;
    margin: 0 auto;
    padding: 60px 24px;
}

.hero {
    text-align: center;
    padding: 80px 0 60px;
}

.hero h1 {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 16px;
}

.hero p {
    font-size: 18px;
    color: var(--vp-c-text-2);
    margin-bottom: 32px;
}

.btn {
    display: inline-block;
    padding: 10px 28px;
    background: var(--vp-c-brand-1);
    color: #fff;
    border-radius: 24px;
    font-size: 15px;
    text-decoration: none;
    transition: background 0.2s;
}

.btn:hover {
    background: var(--vp-c-brand-2);
}

.features {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.card {
    border-radius: 12px;
    overflow: hidden;
    background: var(--vp-c-bg-soft);
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s;
}

.card:hover {
    transform: translateY(-4px);
}

.card img {
    /* width: 100%; */
    /* height: 200px; */
    object-fit: cover;
}

.card-body {
    padding: 16px;
}

.card-body h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
}

.card-body p {
    font-size: 14px;
    color: var(--vp-c-text-2);
    line-height: 1.6;
}

@media (max-width: 768px) {
    .features {
        grid-template-columns: 1fr;
    }

    .hero h1 {
        font-size: 32px;
    }
}
</style>