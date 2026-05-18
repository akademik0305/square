<script setup lang="ts">
defineProps<{
  title: string
  description: string
  cta: string
  to: string
  accent?: "main" | "orange" | "yellow"
}>()

const accentClasses = {
  main: "border-main/20 hover:border-main/40 group-hover:text-main",
  orange: "border-orange-dark/30 hover:border-orange-light/50 group-hover:text-orange-light",
  yellow: "border-yellow-dark/30 hover:border-yellow-light/50 group-hover:text-yellow-light",
}
</script>

<template>
  <article
    class="group flex h-full flex-col rounded-2xl border border-main-10 bg-main-10/20 p-6 transition-all hover:bg-main-10/40 lg:p-8"
    :class="accentClasses[accent ?? 'main']"
  >
    <h3
      class="font-second-family text-xl font-extrabold uppercase leading-tight text-white sm:text-2xl"
    >
      {{ title }}
    </h3>
    <p class="mt-4 flex-1 text-sm leading-relaxed text-gray-60">
      {{ description }}
    </p>
    <NuxtLink
      :to="to"
      class="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-main transition-colors group-hover:gap-3"
    >
      {{ cta }}
      <svg
        class="size-4"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </NuxtLink>
  </article>
</template>
