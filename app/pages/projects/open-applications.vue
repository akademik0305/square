<script setup lang="ts">
import { openApplications } from "~/data/site"

definePageMeta({ layout: "default" })

useSeoMeta({
  title: "Open Applications — eSquare e.V.",
  description:
    "Explore opportunities through EU mobility projects and youth exchanges.",
})
</script>

<template>
  <div>
    <UiPageHero
      eyebrow="Projects"
      title="Open Applications"
      subtitle="Exploring the European landscape through mobility projects. Celebrating the rich tapestry of European cultures, EU Mobility Projects offer an unparalleled journey of discovery and learning through non-formal education."
    />

    <UiPageSection>
      <UiReveal class="mb-10">
        <UiSectionHeading tag="Apply Now" title="Current" accent="Openings" />
      </UiReveal>
      <div class="grid gap-5 sm:grid-cols-2">
        <UiReveal
          v-for="(post, i) in openApplications"
          :key="post.slug"
          :delay="(i as 0 | 1 | 2)"
        >
          <UiPostCard :post="post" base-path="/projects/open-applications" />
        </UiReveal>
      </div>
    </UiPageSection>

    <UiOpenCallsBanner />
    <UiNewsletterSection />
  </div>
</template>
