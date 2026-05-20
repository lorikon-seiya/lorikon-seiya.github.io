<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
    texts: {
        type: Array,
        default: () => ['Hello ... ccc']
    },
    typeSpeed: {
        type: Number,
        default: 120
    },
    eraseSpeed: {
        type: Number,
        default: 60
    },
    pauseTime: {
        type: Number,
        default: 2000
    }
})

const displayText = ref('')
let textIndex = 0
let i = 0
let timer = null

onMounted(() => {
    type()
})

onUnmounted(() => {
    clearTimeout(timer)
})

function type() {
    const current = props.texts[textIndex]
    if (i < current.length) {
        displayText.value += current[i]
        i++
        timer = setTimeout(type, props.typeSpeed)
    } else {
        timer = setTimeout(erase, props.pauseTime)
    }
}

function erase() {
    if (displayText.value.length > 0) {
        displayText.value = displayText.value.slice(0, -1)
        timer = setTimeout(erase, props.eraseSpeed)
    } else {
        textIndex = (textIndex + 1) % props.texts.length
        i = 0
        timer = setTimeout(type, 500)
    }
}
</script>

<template>
    <span class="typewriter">
        {{ displayText }}<span class="cursor">|</span>
    </span>
</template>

<style scoped>
.typewriter {
    display: inline-block;
}

.cursor {
    display: inline-block;
    color: var(--vp-c-brand-1);
    font-weight: 300;
    margin-left: 2px;
    animation: blink 0.8s step-end infinite;
}

@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
}
</style>