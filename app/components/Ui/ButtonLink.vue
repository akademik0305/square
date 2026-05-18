<script setup lang="ts">
defineProps<{
  to?: string
  href?: string
  variant?: "primary" | "outline"
}>()
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all active:scale-95"
    :class="
      variant === 'outline'
        ? 'border border-white/15 text-fg hover:border-main/40 hover:bg-white/[0.03]'
        : 'bg-main text-on-main hover:bg-main-hover'
    "
  >
    <slot />
  </NuxtLink>
  <a
    v-else-if="href"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all active:scale-95"
    :class="
      variant === 'outline'
        ? 'border border-white/15 text-fg hover:border-main/40 hover:bg-white/[0.03]'
        : 'bg-main text-on-main hover:bg-main-hover'
    "
  >
    <slot />
  </a>
</template>
