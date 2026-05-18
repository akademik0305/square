<script setup lang="ts">
const props = defineProps<{
  delay?: 0 | 1 | 2 | 3
}>()

const { target, visible } = useReveal()

const delayClass = computed(() => {
  if (!props.delay) return ""
  return `reveal-delay-${props.delay}`
})
</script>

<template>
  <div
    ref="target"
    class="reveal"
    :class="[delayClass, { visible: visible }]"
  >
    <slot />
  </div>
</template>
