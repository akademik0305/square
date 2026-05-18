<script setup lang="ts">
const props = defineProps<{
  images: string[]
}>()

const index = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

function next() {
  index.value = (index.value + 1) % props.images.length
}

function prev() {
  index.value = (index.value - 1 + props.images.length) % props.images.length
}

onMounted(() => {
  timer = setInterval(next, 3000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div class="relative h-[350px] w-full lg:h-[400px]">
    <div
      v-for="(src, i) in images"
      :key="src"
      class="absolute inset-0 border-8 border-white bg-cover bg-center transition-opacity duration-500"
      :class="i === index ? 'opacity-100' : 'opacity-0'"
      :style="{ backgroundImage: `url(${src})` }"
      role="img"
      :aria-label="`Slide ${i + 1}`"
    />

    <div class="absolute inset-y-0 left-0 flex items-center pl-4">
      <button
        type="button"
        class="flex size-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
        aria-label="Previous slide"
        @click="prev"
      >
        <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
    <div class="absolute inset-y-0 right-0 flex items-center pr-4">
      <button
        type="button"
        class="flex size-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
        aria-label="Next slide"
        @click="next"
      >
        <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
  </div>
</template>
