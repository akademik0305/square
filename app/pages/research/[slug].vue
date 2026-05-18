<script setup lang="ts">
import { researchPosts } from "~/data/site"

definePageMeta({ layout: "default" })

const route = useRoute()
const slug = route.params.slug as string
const post = computed(() => researchPosts.find((p) => p.slug === slug))

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: "Publication not found" })
}

useSeoMeta({
  title: () => `${post.value!.title} — eSquare e.V.`,
  description: () => post.value!.excerpt,
})
</script>

<template>
  <div>
    <UiPageHero eyebrow="Research" :title="post!.title" />
    <UiArticleContent>
      <time class="block text-xs text-zinc-500" :datetime="post!.date">
        {{
          new Date(post!.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })
        }}
      </time>
      <p class="mt-6 text-base leading-relaxed text-zinc-400">{{ post!.excerpt }}</p>
      <NuxtLink to="/research" class="border-animate mt-10 inline-flex items-center gap-2 pb-0.5 text-sm font-semibold text-green-400">
        ← Back to Research
      </NuxtLink>
    </UiArticleContent>
    <UiOpenCallsBanner />
    <UiNewsletterSection />
  </div>
</template>
