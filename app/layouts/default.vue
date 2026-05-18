<template>
  <div class="flex min-h-screen flex-col bg-bg text-fg antialiased">
    <LayoutAppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <LayoutAppFooter />
  </div>
</template>
