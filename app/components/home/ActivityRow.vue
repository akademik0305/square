<script setup lang="ts">
defineProps<{
  title: string
  description: string
  cta: string
  to: string
  images: string[]
  reverse?: boolean
}>()
</script>

<template>
  <div
    class="mx-auto flex w-full max-w-[1530px] flex-col overflow-hidden lg:flex-row"
    :class="reverse ? 'lg:flex-row-reverse' : ''"
  >
    <div
      class="flex w-full shrink-0 flex-col justify-center bg-main px-8 py-12 sm:px-12 lg:w-[55%] lg:min-h-[500px] lg:px-16 lg:py-16 xl:px-24"
      :class="
        reverse
          ? 'bg-[linear-gradient(240deg,rgba(255,255,255,0)_30%,var(--color-main)_10%)]'
          : 'bg-[linear-gradient(60deg,rgba(255,255,255,0)_30%,var(--color-main)_30%)]'
      "
    >
      <div class="max-w-xl">
        <h3
          class="font-second-family text-2xl font-light uppercase leading-tight text-on-main sm:text-3xl lg:text-4xl"
        >
          {{ title }}
        </h3>
        <p class="mt-5 text-base leading-relaxed text-on-main/95 lg:text-lg">
          {{ description }}
        </p>
        <NuxtLink
          :to="to"
          class="mt-8 inline-flex rounded-[10px] bg-main-dark px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-on-main transition-colors hover:bg-fg"
        >
          {{ cta }}
        </NuxtLink>
      </div>
    </div>

    <div class="flex w-full items-center justify-center bg-bg-muted p-6 lg:w-[45%] lg:p-10">
      <HomeImageCarousel :images="images" />
    </div>
  </div>
</template>
