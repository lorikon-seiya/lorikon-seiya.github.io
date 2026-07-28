<script setup>
import TypeWriter from '../ui/TypeWriter.vue'

const texts = [
    'No man is an island',
    'Entire of itself',
    'Every man is a piece of the continent',
    'A part of the main',
    'Any man\'s death diminishes me',
    'Because I am involved in mankind',
    'And therefore never send to know for whom the bell tolls',
    'It tolls for thee',
]

const photos = [
    '/IMG_2635.jpeg',
    '/IMG_2718.jpeg',
    '/IMG_3463.jpeg',
    '/IMG_6353.jpeg',
    '/IMG_6321.jpeg',
    '/IMG_4105.jpeg',
    '/IMG_6356.jpeg',
    '/IMG_6876.jpeg',
    '/IMG_6890.jpeg',
]
</script>

<template>
    <div class="home">

        <!-- Hero -->
        <div class="hero">
            <p class="typewriter">
                <TypeWriter :texts="texts" :type-speed="80" :pause-time="2000" />
            </p>
            <p class="attribution">— John Donne, No Man Is An Island</p>
        </div>

        <!-- 九宫格 -->
        <div class="grid">
            <div v-for="(src, i) in photos" :key="i" class="cell">
                <img :src="src" alt="" />
            </div>
        </div>

    </div>
</template>

<style scoped>
.home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px 120px;
}

/* Hero */
.hero {
    padding: 120px 0 80px;
    max-width: 640px;
}

.typewriter {
    font-size: clamp(18px, 2.5vw, 26px);
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: -0.01em;
    color: var(--vp-c-text-1);
    margin: 0 0 14px;
    min-height: 1.6em;
}

.attribution {
    font-size: 12px;
    color: var(--vp-c-text-3);
    margin: 0;
    letter-spacing: 0.03em;
}

/* 九宫格 */
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3px;
}

.cell {
    aspect-ratio: 1 / 1;
    overflow: hidden;
}

.cell img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    margin: 0;
    border-radius: 0;
    transition: transform 0.5s ease, opacity 0.3s;
}

.cell:hover img {
    transform: scale(1.05);
    opacity: 0.85;
}

/* 手机端 */
@media (max-width: 600px) {
    .hero {
        padding: 80px 0 60px;
    }

    .grid {
        gap: 2px;
    }
}
</style>