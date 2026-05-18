<script setup lang="ts">
defineProps<{
  name: string
  role: string
  bio: string
}>()
</script>

<template>
  <article
    class="activity-card rounded-2xl border border-white/[0.08] bg-zinc-900/60 p-6 lg:p-8"
  >
    <h3 class="font-display text-lg font-bold text-fg">
      {{ name }}
    </h3>
    <p class="mt-1 text-xs font-medium tracking-wide text-main uppercase">
      {{ role }}
    </p>
    <p class="mt-4 text-sm leading-relaxed text-zinc-400">
      {{ bio }}
    </p>
  </article>
</template>
