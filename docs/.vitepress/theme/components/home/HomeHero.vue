<script setup>
import TypeWriter from '../ui/TypeWriter.vue'

defineProps({
    texts: {
        type: Array,
        default: () => []
    },
    attribution: {
        type: String,
        default: '— John Donne, No Man Is An Island'
    }
})
</script>

<template>
    <div class="hero">
        <p class="typewriter">
            <TypeWriter :texts="texts" :type-speed="80" :pause-time="2000" />
        </p>
        <p v-if="attribution" class="attribution">{{ attribution }}</p>
    </div>
</template>

<style scoped src="./HomeHero.css"></style>
