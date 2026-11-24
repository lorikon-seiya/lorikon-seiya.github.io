<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { playlist } from '../../data/music-data.js'

const currentIndex = ref(0)
const isPlaying = ref(false)
const isExpanded = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const isMuted = ref(false)
const volume = ref(0.7)

let audio = null

const currentTrack = computed(() => {
    if (!playlist.length) {
        return { title: '暂无曲目', artist: '未知', cover: '', src: '' }
    }
    return playlist[currentIndex.value]
})

const progressPercent = computed(() => {
    if (!duration.value || duration.value === 0) return 0
    return Math.min(100, Math.max(0, (currentTime.value / duration.value) * 100))
})

function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return '00:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

function togglePlay() {
    if (!audio) return
    if (isPlaying.value) {
        audio.pause()
    } else {
        audio.play().catch(err => {
            console.warn('Audio play was prevented:', err)
        })
    }
}

function next() {
    if (!playlist.length) return
    currentIndex.value = (currentIndex.value + 1) % playlist.length
    loadTrack(true)
}

function prev() {
    if (!playlist.length) return
    currentIndex.value = (currentIndex.value - 1 + playlist.length) % playlist.length
    loadTrack(true)
}

function loadTrack(autoPlay = false) {
    if (!audio) return
    audio.src = currentTrack.value.src
    audio.load()
    if (autoPlay) {
        audio.play().catch(() => {
            isPlaying.value = false
        })
    }
}

function seek(e) {
    if (!audio || !duration.value) return
    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const percent = Math.max(0, Math.min(1, clickX / rect.width))
    audio.currentTime = percent * duration.value
}

function toggleMute() {
    if (!audio) return
    isMuted.value = !isMuted.value
    audio.muted = isMuted.value
}

onMounted(() => {
    if (typeof window === 'undefined' || !playlist.length) return

    audio = new Audio()
    audio.src = currentTrack.value.src
    audio.volume = volume.value

    audio.addEventListener('play', () => { isPlaying.value = true })
    audio.addEventListener('pause', () => { isPlaying.value = false })
    audio.addEventListener('timeupdate', () => { currentTime.value = audio.currentTime })
    audio.addEventListener('loadedmetadata', () => { duration.value = audio.duration })
    audio.addEventListener('ended', () => { next() })
})

onUnmounted(() => {
    if (audio) {
        audio.pause()
        audio = null
    }
})
</script>

<template>
    <div class="music-player-container">
        <!-- 展开状态的精致毛玻璃播放卡片 -->
        <Transition name="slide-up">
            <div v-if="isExpanded" class="music-player-card">
                <!-- 顶部标题与折叠按钮 -->
                <div class="card-header">
                    <span class="playlist-count">{{ currentIndex + 1 }}/{{ playlist.length }}</span>
                    <button class="close-btn" @click="isExpanded = false" title="收起">✕</button>
                </div>

                <!-- 歌曲主信息 -->
                <div class="track-info-row">
                    <img :src="currentTrack.cover" alt="Cover" class="album-art" />
                    <div class="track-meta">
                        <span class="track-title" :title="currentTrack.title">{{ currentTrack.title }}</span>
                        <span class="track-artist">{{ currentTrack.artist }}</span>
                    </div>
                </div>

                <!-- 进度条与播放时间 -->
                <div class="progress-container">
                    <div class="progress-bar-bg" @click="seek" title="点击跳转进度">
                        <div class="progress-bar-fill" :style="{ width: progressPercent + '%' }"></div>
                    </div>
                    <div class="time-row">
                        <span>{{ formatTime(currentTime) }}</span>
                        <span>{{ formatTime(duration) }}</span>
                    </div>
                </div>

                <!-- 控制操作栏 -->
                <div class="controls-row">
                    <div class="main-btns">
                        <button class="ctrl-btn" @click="prev" title="上一首">⏮</button>
                        <button class="play-toggle-btn" @click="togglePlay" :title="isPlaying ? '暂停' : '播放'">
                            <span v-if="isPlaying">⏸</span>
                            <span v-else style="margin-left: 2px;">▶</span>
                        </button>
                        <button class="ctrl-btn" @click="next" title="下一首">⏭</button>
                    </div>

                    <!-- 静音 / 音量切换 -->
                    <button class="ctrl-btn volume-btn" @click="toggleMute" :title="isMuted ? '取消静音' : '静音'">
                        <span v-if="isMuted">🔇</span>
                        <span v-else>🔉</span>
                    </button>
                </div>
            </div>
        </Transition>

        <!-- 默认收起的硬币大小迷你黑胶胶囊 -->
        <div class="music-disc-trigger" :class="{ 'is-playing': isPlaying, 'is-paused': !isPlaying }"
            @click="isExpanded = !isExpanded"
            :title="isPlaying ? '正在播放：' + currentTrack.title + '（点击展开）' : '博客背景音乐（点击展开）'">
            <div class="vinyl-grooves">
                <img :src="currentTrack.cover" alt="Disc" class="vinyl-cover" />
            </div>

            <!-- 播放中的动效微标 -->
            <div v-if="isPlaying" class="music-wave-badge">
                <span class="wave-dot"></span>
            </div>
        </div>
    </div>
</template>

<style scoped src="./MusicPlayer.css"></style>
