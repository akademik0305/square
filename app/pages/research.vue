<script setup lang="ts">
import { researchPosts } from "~/data/site"

definePageMeta({ layout: "default" })

useSeoMeta({
  title: "Research — eSquare e.V.",
  description:
    "Pioneering research and initiatives in democracy and digital empowerment.",
})
</script>

<template>
  <div>
    <UiPageHero
      eyebrow="Research"
      title="Exploring Frontiers"
      subtitle="Pioneering research and initiatives in democracy and digital empowerment. We focus on various strands of research related to democracy, human rights and accountability of media institutions."
    />

    <UiPageSection>
      <UiReveal class="mb-10">
        <UiSectionHeading tag="Publications" title="Research and" accent="Publications" />
      </UiReveal>
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <UiReveal
          v-for="(post, i) in researchPosts"
          :key="post.slug"
          :delay="(i % 3) as 0 | 1 | 2"
        >
          <UiPostCard :post="post" base-path="/research" />
        </UiReveal>
      </div>
    </UiPageSection>

    <UiOpenCallsBanner />
    <UiNewsletterSection />
  </div>
</template>
