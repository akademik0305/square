export function useReveal(threshold = 0.12) {
  const target = ref<HTMLElement | null>(null)
  const visible = ref(false)

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!target.value) return

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          visible.value = true
          observer?.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(target.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { target, visible }
}
